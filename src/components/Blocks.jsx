import Rich from '../lib/Rich.jsx';
import { useEffect, useRef, useState } from 'react';
import BreakEvenChart from './BreakEvenChart.jsx';
import BalanceLab from './BalanceLab.jsx';
import SheetLab from './SheetLab.jsx';

// One vocabulary of content blocks, used by every slide in every section.
// Block types: p, big, bullets, formulas, columns, kpis, table, steps,
// chart, callout, forces, sources, plus the visual blocks:
//   flow   { items:[{title,text?}] }                     a chain of boxes joined by arrows
//   cycle  { items:[{title,text?}], center? }            3-6 steps joined in a loop
//   bars   { title?, unit?, items:[{label,value}] }      horizontal bars that grow in
//   balance { unit, lines:{assets,liabilities,equity}, steps:[{event,effects,note?}] }  animated balance sheet you step through
//   sheet   { title?, cells, editable?, formats?, tasks? }                        a working mini spreadsheet
//   figure { src?, alt, caption?, need }                 an image. Shows a labeled placeholder until the file exists
//                                                        (src is a file name inside public/assets/)

function Table({ block }) {
  return (
    <div className="table-wrap">
      <table>
        {block.caption && <caption>{block.caption}</caption>}
        <thead>
          <tr>
            {block.head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) =>
                j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// True once the element has scrolled into view (so animations play when you reach them).
function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

function Flow({ block }) {
  const [ref, seen] = useInView();
  return (
    <ol ref={ref} className={`flow ${seen ? 'in' : ''}`}>
      {block.items.map((it, i) => (
        <li key={i} style={{ '--i': i }}>
          <span className="flow-box nm-inset">
            <strong><Rich text={it.title} /></strong>
            {it.text && <span><Rich text={it.text} /></span>}
          </span>
          {i < block.items.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

function Cycle({ block }) {
  const [ref, seen] = useInView();
  const n = block.items.length;
  return (
    <div ref={ref} className={`cycle ${seen ? 'in' : ''}`} role="group" aria-label="Steps in a loop">
      <svg className="cycle-ring" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
        <ellipse cx="50" cy="50" rx="34" ry="33" />
      </svg>
      {block.center && <span className="cycle-center"><Rich text={block.center} /></span>}
      {block.items.map((it, i) => {
        const a = (-90 + (360 / n) * i) * (Math.PI / 180);
        const left = 50 + 38 * Math.cos(a);
        const top = 50 + 40 * Math.sin(a);
        return (
          <span key={i} className="cycle-node nm-inset" style={{ left: `${left}%`, top: `${top}%`, '--i': i }}>
            <b>{i + 1}</b>
            <strong><Rich text={it.title} /></strong>
            {it.text && <span><Rich text={it.text} /></span>}
          </span>
        );
      })}
    </div>
  );
}

function Bars({ block }) {
  const [ref, seen] = useInView();
  const max = Math.max(...block.items.map((b) => b.value), 1);
  return (
    <figure ref={ref} className={`bars ${seen ? 'in' : ''}`}>
      {block.title && <figcaption>{block.title}</figcaption>}
      {block.items.map((b, i) => (
        <div key={b.label} className="bar-row" style={{ '--i': i }}>
          <span className="bar-label">{b.label}</span>
          <span className="bar-track">
            <span className="bar-fill" style={{ '--w': `${(b.value / max) * 100}%` }} />
          </span>
          <span className="bar-val">{b.value.toLocaleString('en-US')}{block.unit ? ` ${block.unit}` : ''}</span>
        </div>
      ))}
    </figure>
  );
}

function Figure({ block }) {
  const [failed, setFailed] = useState(!block.src);
  const base = import.meta.env.BASE_URL || '/';
  return (
    <figure className="figure">
      {!failed ? (
        <img src={`${base}assets/${block.src}`} alt={block.alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="figure-missing" role="img" aria-label={`Image to be added: ${block.alt}`}>
          <strong>Image coming</strong>
          <span>{block.need || block.alt}</span>
        </div>
      )}
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  );
}

export default function Blocks({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return <p key={i}><Rich text={block.text} /></p>;

          case 'big':
            return <p key={i} className="big"><Rich text={block.text} /></p>;

          case 'bullets':
            return (
              <ul key={i} className="bullets">
                {block.items.map((item, j) => (
                  <li key={j}><Rich text={item} /></li>
                ))}
              </ul>
            );

          case 'formulas':
            return (
              <div key={i} className="formula-grid">
                {block.items.map((f) => (
                  <div key={f.name} className="formula-card nm-inset">
                    <span className="meta">{f.name}</span>
                    <strong>{f.formula}</strong>
                  </div>
                ))}
              </div>
            );

          case 'columns':
            return (
              <div key={i} className="cols">
                {block.items.map((c) => (
                  <div key={c.title} className="col-card nm-inset">
                    <h3>{c.title}</h3>
                    <p><Rich text={c.text} /></p>
                    {c.examples && (
                      <ul>
                        {c.examples.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            );

          case 'kpis':
            return (
              <div key={i} className={`kpis ${block.items.length === 3 ? 'three' : ''}`}>
                {block.items.map((k) => (
                  <div key={k.label} className="kpi nm-inset">
                    <span className="label">{k.label}</span>
                    <span className="value">{k.value}</span>
                    {k.note && <span className="note">{k.note}</span>}
                  </div>
                ))}
              </div>
            );

          case 'table':
            return <Table key={i} block={block} />;

          case 'steps':
            return (
              <ol key={i} className="steps">
                {block.items.map((item, j) => (
                  <li key={j}><Rich text={item} /></li>
                ))}
              </ol>
            );

          case 'chart':
            return <BreakEvenChart key={i} model={block.model} />;

          case 'callout':
            return (
              <aside key={i} className={`callout ${block.tone || ''}`}>
                <strong>{block.title}</strong>
                {block.text && <p><Rich text={block.text} /></p>}
                {block.items && (
                  <ul>
                    {block.items.map((item, j) => (
                      <li key={j}><Rich text={item} /></li>
                    ))}
                  </ul>
                )}
              </aside>
            );

          case 'forces':
            return (
              <ul key={i} className="forces" role="list">
                {block.items.map((f) => (
                  <li key={f.name} className="force nm-sm">
                    <div className="force-head">
                      <span className="force-name">{f.name}</span>
                      <span className={`rating ${f.rating.toLowerCase()}`}>{f.rating}</span>
                    </div>
                    <p>{f.why}</p>
                  </li>
                ))}
              </ul>
            );

          case 'sources':
            return (
              <ul key={i} className="sources">
                {block.items.map((s) => (
                  <li key={s.url}>
                    <a className="source glass irid" data-glow href={s.url} target="_blank" rel="noopener noreferrer">
                      <span className="t">{s.title} ↗</span>
                      <span className="n">{s.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            );

          case 'flow':
            return <Flow key={i} block={block} />;
          case 'cycle':
            return <Cycle key={i} block={block} />;
          case 'bars':
            return <Bars key={i} block={block} />;
          case 'sheet':
            return <SheetLab key={i} block={block} />;
          case 'balance':
            return <BalanceLab key={i} block={block} />;
          case 'figure':
            return <Figure key={i} block={block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
