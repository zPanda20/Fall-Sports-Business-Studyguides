import { useMemo, useState } from 'react';
import Rich from '../lib/Rich.jsx';
import { computeSheet, formatValue, numToCol, parseRef } from '../lib/sheet.js';

// A tiny working spreadsheet inside a slide.
// block: { title?, cells:{A1:...}, rows?, cols?, formats?:{B:'money'}, locked?:[...]|'all-but-editable', editable?:[...],
//          tasks?:[{prompt, cell, expect, hint?}] }
// Tap a cell, type in the formula bar, press Enter. Cells you may edit have a dashed outline.
export default function SheetLab({ block }) {
  const baseCells = block.cells;
  const addrs = Object.keys(baseCells);
  const maxCol = block.cols || Math.max(...addrs.map((a) => parseRef(a).col));
  const maxRow = block.rows || Math.max(...addrs.map((a) => parseRef(a).row));
  const editable = useMemo(() => new Set(block.editable || addrs), [block.editable]); // eslint-disable-line react-hooks/exhaustive-deps
  const [edits, setEdits] = useState({});
  const [sel, setSel] = useState(block.editable?.[0] || block.tasks?.[0]?.cell || addrs[0]);
  const [draft, setDraft] = useState(null);
  const [showFormulas, setShowFormulas] = useState(false);

  const raw = { ...baseCells, ...edits };
  const sheet = useMemo(() => computeSheet(raw), [edits]); // eslint-disable-line react-hooks/exhaustive-deps
  const fmtFor = (addr) => block.cellFormats?.[addr] || block.formats?.[addr.replace(/\d+/g, '')];

  function commit() {
    if (draft === null) return;
    if (editable.has(sel)) {
      const next = { ...edits };
      if (draft === (baseCells[sel] ?? '')) delete next[sel];
      else next[sel] = draft;
      setEdits(next);
    }
    setDraft(null);
  }
  function select(addr) {
    commit();
    setSel(addr);
    setDraft(null);
  }

  const cols = Array.from({ length: maxCol }, (_, i) => numToCol(i + 1));
  const rows = Array.from({ length: maxRow }, (_, i) => i + 1);
  const rawSel = raw[sel] ?? '';
  const canEdit = editable.has(sel);

  return (
    <div className="sheet-lab nm-inset">
      {block.title && <p className="sheet-title"><Rich text={block.title} /></p>}
      <div className="sheet-bar">
        <span className="sheet-addr" aria-label="Selected cell">{sel}</span>
        <span className="sheet-fx" aria-hidden="true">fx</span>
        <input
          className="sheet-input"
          aria-label={`Contents of cell ${sel}`}
          value={draft ?? String(rawSel)}
          readOnly={!canEdit}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit();
            if (e.key === 'Escape') setDraft(null);
          }}
          onBlur={commit}
          placeholder={canEdit ? 'Type a number or a formula such as =B2*B3' : 'This cell is locked'}
        />
      </div>

      <div className="sheet-scroll">
        <table className="sheet">
          <thead>
            <tr>
              <th aria-hidden="true" />
              {cols.map((c) => (
                <th key={c} scope="col">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r}>
                <th scope="row">{r}</th>
                {cols.map((c) => {
                  const addr = `${c}${r}`;
                  const rv = raw[addr];
                  const res = rv === undefined ? null : sheet.all[addr];
                  const isFormula = typeof rv === 'string' && rv.startsWith('=');
                  const shown = res?.e ? res.e : showFormulas && isFormula ? rv : formatValue(res?.v, fmtFor(addr));
                  const isNum = typeof res?.v === 'number' && !(showFormulas && isFormula);
                  return (
                    <td
                      key={c}
                      className={[
                        addr === sel ? 'sel' : '',
                        editable.has(addr) ? 'edit' : '',
                        res?.e ? 'err' : '',
                        isNum ? 'num' : '',
                        block.heads?.includes(addr) ? 'head' : '',
                      ].join(' ')}
                      onClick={() => select(addr)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && select(addr)}
                      aria-label={`${addr}: ${shown || 'empty'}`}
                    >
                      {shown}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sheet-controls">
        <label className="check">
          <input type="checkbox" checked={showFormulas} onChange={(e) => setShowFormulas(e.target.checked)} />
          <span>Show formulas</span>
        </label>
        {Object.keys(edits).length > 0 && (
          <button type="button" className="button small secondary" onClick={() => { setEdits({}); setDraft(null); }}>Reset sheet</button>
        )}
      </div>

      {block.tasks && (
        <ol className="sheet-tasks">
          {block.tasks.map((t, i) => {
            const got = sheet.get(t.cell);
            const rv = raw[t.cell];
            const usesFormula = typeof rv === 'string' && rv.startsWith('=');
            const match = typeof t.expect === 'string' ? got.v === t.expect : typeof got.v === 'number' && Math.abs(got.v - t.expect) < (t.tol ?? 1e-6);
            const ok = match && (t.formulaRequired === false || usesFormula);
            return (
              <li key={i} className={ok ? 'ok' : ''}>
                <span className="task-mark" aria-hidden="true">{ok ? '✓' : i + 1}</span>
                <span>
                  <Rich text={t.prompt} />
                  {ok && <b className="sr-only"> (done)</b>}
                  {!ok && t.hint && <small> Hint: <Rich text={t.hint} /></small>}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
