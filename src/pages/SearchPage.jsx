import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchIndex } from '../data/index.js';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const index = useMemo(() => searchIndex(), []);

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .map((item) => {
        // every word must appear somewhere; title matches rank higher
        const title = item.title.toLowerCase();
        let score = 0;
        for (const w of words) {
          if (!item.text.includes(w)) return null;
          score += title.includes(w) ? 3 : 1;
          if (item.termNames.some((t) => t.toLowerCase().includes(w))) score += 2;
        }
        return { item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || Number(b.item.available) - Number(a.item.available))
      .map((r) => r.item);
  }, [q, index]);

  return (
    <div className="stack-lg">
      <header className="stack">
        <h1>Search</h1>
        <label className="search" htmlFor="q">
          <span className="sr-only">Search topics, terms and formulas</span>
          <input
            id="q"
            type="search"
            value={q}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
            placeholder="Try “break-even”, “supplier power”, “contribution”"
            autoFocus
            autoComplete="off"
          />
        </label>
      </header>

      {q && results.length === 0 && (
        <p>No matches for “{q}”. Try a shorter word, or browse a course from the home page.</p>
      )}

      <ul className="results">
        {results.map((r) => (
          <li key={r.id}>
            {r.available ? (
              <Link to={`/topic/${r.id}`} className="result">
                <span className="result-top">
                  <span className="unit-title">{r.title}</span>
                  <span className="pill ready">{r.courseShort}</span>
                </span>
                <span className="unit-meta">{r.summary}</span>
                {r.termNames.length > 0 && (
                  <span className="unit-meta">Terms: {r.termNames.slice(0, 5).join(', ')}</span>
                )}
              </Link>
            ) : (
              <div className="result soon">
                <span className="result-top">
                  <span className="unit-title">{r.title}</span>
                  <span className="pill">Coming soon</span>
                </span>
                <span className="unit-meta">
                  {r.courseShort} · {r.sessions}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
