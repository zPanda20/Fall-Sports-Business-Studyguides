import { usePrefs, isPreview } from './prefs.js';
import { POSE_SIZE, poseUrl, WHO } from './assets.js';

// Seraph and Demon resting on the top edge of a real card (the Coming up panel on the home page).
// It is a positioned picture, so the card keeps its own size. Not shown in Quiet Study Mode.
export default function Perch({ children }) {
  const p = usePrefs();
  const calm = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const off = !p.animations || p.motion === 'reduced' || (p.motion === 'auto' && calm);
  const show = isPreview() && !p.quiet;
  return (
    <div className="cmp-perch-host" data-perch={show ? '1' : undefined}>
      {children}
      {show &&
        WHO.filter((w) => p[w]).map((w) => (
          <span key={w} className="cmp-perch" data-who={w} data-motion={off ? 'off' : undefined} aria-hidden="true">
            <img src={poseUrl(w, 'perch')} alt="" width={POSE_SIZE[w][0]} height={POSE_SIZE[w][1]} loading="lazy" draggable="false" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </span>
        ))}
    </div>
  );
}
