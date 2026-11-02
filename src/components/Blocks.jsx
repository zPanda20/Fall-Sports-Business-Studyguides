import Rich from '../lib/Rich.jsx';
import BreakEvenChart from './BreakEvenChart.jsx';

// One vocabulary of content blocks, used by every slide in every section.
// Block types: p, big, bullets, formulas, columns, kpis, table, steps,
// chart, callout, forces, sources.

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

          default:
            return null;
        }
      })}
    </>
  );
}
