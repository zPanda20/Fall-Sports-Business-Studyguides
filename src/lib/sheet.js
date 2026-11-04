// A small spreadsheet engine for the Excel lessons. It understands the formulas students
// meet in accounting: + - * / ^ %, comparisons, & (join), cell and range references with $,
// and SUM, AVERAGE, MIN, MAX, COUNT, ROUND, ABS, IF, SUMIF, COUNTIF, AND, OR, NOT, IFERROR, VLOOKUP, XLOOKUP.
// It is a teaching tool, not a full Excel: errors show up as #NAME?, #DIV/0!, #REF!, #VALUE!, #CIRC!, #N/A.

export class SheetError extends Error {}
const err = (code) => {
  throw new SheetError(code);
};

// ---- addresses ----
export function colToNum(col) {
  let n = 0;
  for (const ch of col) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n;
}
export function numToCol(n) {
  let s = '';
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}
const REF = /^\$?([A-Z]{1,2})\$?(\d+)$/;
export function parseRef(text) {
  const m = REF.exec(text);
  return m ? { col: colToNum(m[1]), row: Number(m[2]) } : null;
}

// ---- tokenizer ----
function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) {
      i++;
    } else if (ch === '"') {
      let j = i + 1;
      let s = '';
      while (j < src.length && src[j] !== '"') s += src[j++];
      if (j >= src.length) err('#VALUE!');
      out.push({ t: 'str', v: s });
      i = j + 1;
    } else if (/[0-9.]/.test(ch)) {
      const m = /^\d*\.?\d+(?:[eE][+-]?\d+)?|^\d+\.?/.exec(src.slice(i));
      if (!m) err('#VALUE!');
      out.push({ t: 'num', v: parseFloat(m[0]) });
      i += m[0].length;
    } else if (/[A-Za-z$_]/.test(ch)) {
      const m = /^[$A-Za-z_][$A-Za-z0-9_.]*/.exec(src.slice(i));
      out.push({ t: 'id', v: m[0] });
      i += m[0].length;
    } else if ('<>='.includes(ch)) {
      const two = src.slice(i, i + 2);
      if (two === '<=' || two === '>=' || two === '<>') {
        out.push({ t: 'op', v: two });
        i += 2;
      } else {
        out.push({ t: 'op', v: ch });
        i++;
      }
    } else if ('+-*/^&%(),:'.includes(ch)) {
      out.push({ t: 'op', v: ch });
      i++;
    } else {
      err('#NAME?');
    }
  }
  return out;
}

// ---- parser: builds a small tree ----
function parse(src) {
  const toks = tokenize(src);
  let p = 0;
  const peek = () => toks[p];
  const take = (v) => {
    const t = toks[p];
    if (!t || (v !== undefined && t.v !== v)) err('#VALUE!');
    p++;
    return t;
  };
  const isOp = (v) => peek() && peek().t === 'op' && peek().v === v;

  function comparison() {
    let l = concat();
    while (peek() && peek().t === 'op' && ['=', '<>', '<', '>', '<=', '>='].includes(peek().v)) {
      const op = take().v;
      l = { k: 'cmp', op, l, r: concat() };
    }
    return l;
  }
  function concat() {
    let l = additive();
    while (isOp('&')) {
      take();
      l = { k: 'cat', l, r: additive() };
    }
    return l;
  }
  function additive() {
    let l = term();
    while (isOp('+') || isOp('-')) {
      const op = take().v;
      l = { k: 'bin', op, l, r: term() };
    }
    return l;
  }
  function term() {
    let l = power();
    while (isOp('*') || isOp('/')) {
      const op = take().v;
      l = { k: 'bin', op, l, r: power() };
    }
    return l;
  }
  function power() {
    let l = unary();
    while (isOp('^')) {
      take();
      l = { k: 'bin', op: '^', l, r: unary() };
    }
    return l;
  }
  function unary() {
    if (isOp('-')) {
      take();
      return { k: 'neg', e: unary() };
    }
    if (isOp('+')) {
      take();
      return unary();
    }
    return postfix();
  }
  function postfix() {
    let e = primary();
    while (isOp('%')) {
      take();
      e = { k: 'bin', op: '/', l: e, r: { k: 'num', v: 100 } };
    }
    return e;
  }
  function primary() {
    const t = peek();
    if (!t) err('#VALUE!');
    if (t.t === 'num') {
      take();
      return { k: 'num', v: t.v };
    }
    if (t.t === 'str') {
      take();
      return { k: 'str', v: t.v };
    }
    if (isOp('(')) {
      take();
      const e = comparison();
      take(')');
      return e;
    }
    if (t.t === 'id') {
      take();
      const name = t.v.toUpperCase();
      if (isOp('(')) {
        take();
        const args = [];
        if (!isOp(')')) {
          args.push(comparison());
          while (isOp(',')) {
            take();
            args.push(comparison());
          }
        }
        take(')');
        return { k: 'fn', name, args };
      }
      if (name === 'TRUE') return { k: 'bool', v: true };
      if (name === 'FALSE') return { k: 'bool', v: false };
      if (REF.test(name)) {
        if (isOp(':')) {
          take();
          const t2 = take();
          if (t2.t !== 'id' || !REF.test(t2.v.toUpperCase())) err('#REF!');
          return { k: 'range', a: name, b: t2.v.toUpperCase() };
        }
        return { k: 'ref', a: name };
      }
      err('#NAME?');
    }
    return err('#VALUE!');
  }

  const tree = comparison();
  if (p < toks.length) err('#VALUE!');
  return tree;
}

// ---- values ----
const isNum = (v) => typeof v === 'number';
function toNum(v) {
  if (v === null || v === undefined || v === '') return 0;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (isNum(v)) return v;
  const n = Number(String(v).trim());
  if (Number.isNaN(n)) err('#VALUE!');
  return n;
}
const toStr = (v) => (v === null || v === undefined ? '' : typeof v === 'boolean' ? (v ? 'TRUE' : 'FALSE') : String(v));
const truthy = (v) => (typeof v === 'string' ? err('#VALUE!') : Boolean(toNum(v)));

function compare(a, b, op) {
  let x = a;
  let y = b;
  if (x === null || x === '') x = typeof y === 'string' ? '' : 0;
  if (y === null || y === '') y = typeof x === 'string' ? '' : 0;
  if (typeof x === 'string' && typeof y === 'string') {
    x = x.toLowerCase();
    y = y.toLowerCase();
  } else if (typeof x !== typeof y) {
    // Excel: text is always greater than numbers
    const rank = (v) => (typeof v === 'string' ? 2 : typeof v === 'boolean' ? 3 : 1);
    const d = rank(x) - rank(y);
    return op === '=' ? false : op === '<>' ? true : op === '<' || op === '<=' ? d < 0 : d > 0;
  }
  switch (op) {
    case '=': return x === y;
    case '<>': return x !== y;
    case '<': return x < y;
    case '>': return x > y;
    case '<=': return x <= y;
    default: return x >= y;
  }
}

// criteria used by SUMIF / COUNTIF: 5, "apples", ">100", "<>0"
function matcher(crit) {
  if (typeof crit === 'string') {
    const m = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(crit);
    const op = m[1] || '=';
    const rest = m[2];
    const n = rest !== '' && !Number.isNaN(Number(rest)) ? Number(rest) : null;
    return (v) => (n !== null && isNum(v) ? compare(v, n, op) : compare(typeof v === 'string' ? v : toStr(v), rest, op));
  }
  return (v) => compare(v, crit, '=');
}

export function evaluate(src, ctx) {
  const tree = parse(src);

  const flat = (v) => (v && v.range ? v.range : [v]);
  const nums = (args) => {
    const out = [];
    for (const a of args) {
      if (a && a.range) {
        for (const x of a.range) if (isNum(x)) out.push(x);
      } else out.push(toNum(a));
    }
    return out;
  };
  const scalar = (v) => {
    if (v && v.range) return err('#VALUE!');
    return v;
  };

  const fns = {
    SUM: (a) => nums(a).reduce((s, x) => s + x, 0),
    AVERAGE: (a) => {
      const n = nums(a);
      if (!n.length) err('#DIV/0!');
      return n.reduce((s, x) => s + x, 0) / n.length;
    },
    MIN: (a) => (nums(a).length ? Math.min(...nums(a)) : 0),
    MAX: (a) => (nums(a).length ? Math.max(...nums(a)) : 0),
    COUNT: (a) => nums(a).length,
    ROUND: (a) => {
      const d = a[1] === undefined ? 0 : toNum(scalar(a[1]));
      const f = 10 ** d;
      const x = toNum(scalar(a[0])) * f;
      return (Math.sign(x) * Math.round(Math.abs(x) + 1e-9)) / f;
    },
    ABS: (a) => Math.abs(toNum(scalar(a[0]))),
    AND: (a) => a.flatMap(flat).every(truthy),
    OR: (a) => a.flatMap(flat).some(truthy),
    NOT: (a) => !truthy(scalar(a[0])),
    SUMIF: (a) => {
      const test = matcher(scalar(a[1]));
      const range = flat(a[0]);
      const sums = a[2] ? flat(a[2]) : range;
      return range.reduce((s, v, i) => (test(v) && isNum(sums[i]) ? s + sums[i] : s), 0);
    },
    COUNTIF: (a) => {
      const test = matcher(scalar(a[1]));
      return flat(a[0]).filter((v) => v !== null && test(v)).length;
    },
    VLOOKUP: (a) => {
      const key = scalar(a[0]);
      const t = a[1];
      if (!t || !t.range) err('#VALUE!');
      const col = toNum(scalar(a[2]));
      const exact = a[3] === undefined ? false : !truthy(scalar(a[3]));
      void exact;
      for (let r = 0; r < t.rows; r++) {
        if (compare(t.range[r * t.cols], key, '=')) {
          if (col < 1 || col > t.cols) err('#REF!');
          return t.range[r * t.cols + col - 1];
        }
      }
      return err('#N/A');
    },
    XLOOKUP: (a) => {
      const key = scalar(a[0]);
      const look = flat(a[1]);
      const ret = flat(a[2]);
      const i = look.findIndex((v) => compare(v, key, '='));
      if (i < 0) {
        if (a[3] !== undefined) return scalar(a[3]);
        return err('#N/A');
      }
      return ret[i];
    },
  };

  function ev(n) {
    switch (n.k) {
      case 'num':
      case 'str':
      case 'bool':
        return n.v;
      case 'ref':
        return ctx.cell(n.a);
      case 'range': {
        const a = parseRef(n.a);
        const b = parseRef(n.b);
        if (!a || !b) return err('#REF!');
        const r1 = Math.min(a.row, b.row);
        const r2 = Math.max(a.row, b.row);
        const c1 = Math.min(a.col, b.col);
        const c2 = Math.max(a.col, b.col);
        const range = [];
        for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) range.push(ctx.cell(`${numToCol(c)}${r}`));
        return { range, rows: r2 - r1 + 1, cols: c2 - c1 + 1 };
      }
      case 'neg':
        return -toNum(scalar(ev(n.e)));
      case 'bin': {
        const l = toNum(scalar(ev(n.l)));
        const r = toNum(scalar(ev(n.r)));
        switch (n.op) {
          case '+': return l + r;
          case '-': return l - r;
          case '*': return l * r;
          case '/': return r === 0 ? err('#DIV/0!') : l / r;
          default: return l ** r;
        }
      }
      case 'cat':
        return toStr(scalar(ev(n.l))) + toStr(scalar(ev(n.r)));
      case 'cmp':
        return compare(scalar(ev(n.l)), scalar(ev(n.r)), n.op);
      case 'fn': {
        if (n.name === 'IF') {
          if (n.args.length < 2) err('#VALUE!');
          const c = truthy(scalar(ev(n.args[0])));
          if (c) return scalar(ev(n.args[1]));
          return n.args[2] ? scalar(ev(n.args[2])) : false;
        }
        if (n.name === 'IFERROR') {
          try {
            return scalar(ev(n.args[0]));
          } catch (e) {
            if (e instanceof SheetError) return scalar(ev(n.args[1]));
            throw e;
          }
        }
        const f = fns[n.name];
        if (!f) return err('#NAME?');
        return f(n.args.map(ev));
      }
      default:
        return err('#VALUE!');
    }
  }

  const v = ev(tree);
  return v && v.range ? err('#VALUE!') : v;
}

// ---- a whole sheet ----
// raw: { A1: '=B1+B2', B1: 10, ... } (numbers, text, or formulas starting with "=")
export function computeSheet(raw) {
  const cache = new Map();
  const stack = new Set();

  function value(a) {
    const addr = a.replace(/\$/g, '');
    if (!parseRef(addr)) throw new SheetError('#REF!');
    if (cache.has(addr)) {
      const c = cache.get(addr);
      if (c instanceof SheetError) throw c;
      return c;
    }
    if (stack.has(addr)) throw new SheetError('#CIRC!');
    stack.add(addr);
    let out;
    try {
      const r = raw[addr];
      if (r === undefined || r === null || r === '') out = null;
      else if (typeof r === 'number') out = r;
      else if (typeof r === 'string' && r.startsWith('=')) out = evaluate(r.slice(1), { cell: value });
      else if (typeof r === 'string' && r.trim() !== '' && !Number.isNaN(Number(r.replace(/[$,]/g, '')))) out = Number(r.replace(/[$,]/g, ''));
      else out = r;
    } catch (e) {
      if (!(e instanceof SheetError)) throw e;
      cache.set(addr, e);
      stack.delete(addr);
      throw e;
    }
    stack.delete(addr);
    cache.set(addr, out);
    return out;
  }

  const result = {};
  for (const addr of Object.keys(raw)) {
    try {
      result[addr] = { v: value(addr) };
    } catch (e) {
      if (!(e instanceof SheetError)) throw e;
      result[addr] = { e: e.message };
    }
  }
  return { get: (addr) => { try { return { v: value(addr) }; } catch (e) { if (!(e instanceof SheetError)) throw e; return { e: e.message }; } }, all: result };
}

// How a value is shown in a cell.
export function formatValue(v, fmt) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
  if (typeof v === 'string') return v;
  const abs = Math.abs(v);
  const group = (n, d) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  switch (fmt) {
    case 'money': return v < 0 ? `($${group(abs, 0)})` : `$${group(v, 0)}`;
    case 'money2': return v < 0 ? `($${group(abs, 2)})` : `$${group(v, 2)}`;
    case 'int': return group(v, 0);
    case 'dec1': return group(v, 1);
    case 'dec2': return group(v, 2);
    case 'pct': return `${group(v * 100, 1)}%`;
    case 'pct0': return `${group(v * 100, 0)}%`;
    default:
      return Number.isInteger(v) ? String(v) : String(Math.round(v * 1e8) / 1e8);
  }
}
