import { useId } from 'react';

// The four exam gemstones. Each has its own color and its own cut, so they can be told apart without relying on color alone.
//   ruby (oval cut), sapphire (classic diamond cut), emerald (emerald cut), amethyst (hexagon cut)
// tones: hi = catches the light, mid, base, deep = in shadow.
export const GEMS = {
  ruby: { name: 'Ruby', tones: { hi: '#ffa3b9', mid: '#ee3560', base: '#b8133f', deep: '#6d0a25' } },
  sapphire: { name: 'Sapphire', tones: { hi: '#a6c8ff', mid: '#4382f2', base: '#2150c4', deep: '#112f7c' } },
  emerald: { name: 'Emerald', tones: { hi: '#b4fadc', mid: '#32d49a', base: '#0b9c6a', deep: '#04563a' } },
  amethyst: { name: 'Amethyst', tones: { hi: '#e0bfff', mid: '#aa63f2', base: '#7b39c6', deep: '#47217d' } },
};
export const GEM_IDS = Object.keys(GEMS);

// Facets as [points, tone]. viewBox is 24 by 24.
const CUTS = {
  sapphire: {
    outline: '6,3 18,3 22,9 12,22 2,9',
    facets: [
      ['8.5,3 15.5,3 14,9 10,9', 'hi'],
      ['6,3 8.5,3 10,9 2,9', 'mid'],
      ['15.5,3 18,3 22,9 14,9', 'base'],
      ['2,9 10,9 12,22', 'base'],
      ['10,9 14,9 12,22', 'mid'],
      ['14,9 22,9 12,22', 'deep'],
    ],
  },
  amethyst: {
    outline: '12,2 21,7 21,17 12,22 3,17 3,7',
    facets: [
      ['3,7 12,2 12,12', 'mid'],
      ['12,2 21,7 12,12', 'hi'],
      ['21,7 21,17 12,12', 'base'],
      ['21,17 12,22 12,12', 'deep'],
      ['12,22 3,17 12,12', 'base'],
      ['3,17 3,7 12,12', 'mid'],
    ],
  },
  emerald: {
    outline: '7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7',
    facets: [
      ['7,2 17,2 15,7 9,7', 'hi'],
      ['17,2 22,7 17,9 15,7', 'mid'],
      ['22,7 22,17 17,15 17,9', 'base'],
      ['22,17 17,22 15,17 17,15', 'deep'],
      ['17,22 7,22 9,17 15,17', 'deep'],
      ['7,22 2,17 7,15 9,17', 'base'],
      ['2,17 2,7 7,9 7,15', 'mid'],
      ['2,7 7,2 9,7 7,9', 'hi'],
      ['9,7 15,7 17,9 17,15 15,17 9,17 7,15 7,9', 'mid'],
    ],
  },
};

export default function GemIcon({ gem, size = 20, className = '' }) {
  const id = useId();
  const g = GEMS[gem];
  if (!g) return null;
  const t = g.tones;
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: 'false', className: `gem-icon ${className}`.trim() };

  if (gem === 'ruby') {
    const clip = `gem-clip-${id.replace(/:/g, '')}`;
    return (
      <svg {...common}>
        <defs>
          <clipPath id={clip}><ellipse cx="12" cy="12" rx="10.5" ry="8.2" /></clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          <polygon points="12,12 12,0 26,4" fill={t.hi} />
          <polygon points="12,12 26,4 26,20" fill={t.base} />
          <polygon points="12,12 26,20 12,24" fill={t.deep} />
          <polygon points="12,12 12,24 -2,20" fill={t.base} />
          <polygon points="12,12 -2,20 -2,4" fill={t.mid} />
          <polygon points="12,12 -2,4 12,0" fill={t.hi} />
        </g>
        <ellipse cx="12" cy="12" rx="5.2" ry="3.8" fill={t.mid} stroke={t.hi} strokeWidth="0.7" />
        <ellipse cx="12" cy="12" rx="10.5" ry="8.2" fill="none" stroke={t.deep} strokeWidth="0.8" />
      </svg>
    );
  }
  const cut = CUTS[gem];
  return (
    <svg {...common}>
      {cut.facets.map(([pts, tone], i) => (
        <polygon key={i} points={pts} fill={t[tone]} stroke={t.deep} strokeWidth="0.35" strokeLinejoin="round" />
      ))}
      <polygon points={cut.outline} fill="none" stroke={t.deep} strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  );
}
