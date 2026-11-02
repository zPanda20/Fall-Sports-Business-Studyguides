import Rich from '../lib/Rich.jsx';
import BreakEvenChart from './BreakEvenChart.jsx';

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
              {row.map((cell, j) => (
                j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ExampleBlocks({ blocks }) {
  return (
    <div className="stack">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return <p key={i}><Rich text={block.text} /></p>;
          case 'table':
            return <Table key={i} block={block} />;
          case 'steps':
            return (
              <div key={i} className="stack-sm">
                {block.title && <h3 className="h3">{block.title}</h3>}
                <ol className="steps">
                  {block.items.map((item, j) => (
                    <li key={j}><Rich text={item} /></li>
                  ))}
                </ol>
              </div>
            );
          case 'chart':
            return <BreakEvenChart key={i} model={block.model} />;
          case 'callout':
            return (
              <aside key={i} className="callout">
                <strong>{block.title}</strong>
                <p><Rich text={block.text} /></p>
              </aside>
            );
          case 'forces':
            return (
              <ul key={i} className="forces" role="list">
                {block.items.map((f) => (
                  <li key={f.name} className="force">
                    <div className="force-head">
                      <span className="force-name">{f.name}</span>
                      <span className={`rating ${f.rating.toLowerCase()}`}>{f.rating}</span>
                    </div>
                    <p>{f.why}</p>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
