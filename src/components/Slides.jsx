import { useEffect, useRef, useState } from 'react';
import Blocks from './Blocks.jsx';
import Icon from './Icon.jsx';

// An interactive slide deck: arrows, dots, swipe and keyboard arrows.
// Each slide is { kicker?, title, blocks: [...] } and is written to fit
// on one screen without scrolling.
export default function Slides({ slides, start = 0, label, onFinish, finishLabel }) {
  const [i, setI] = useState(Math.min(Math.max(start, 0), slides.length - 1));
  const [dir, setDir] = useState('fwd');
  const touch = useRef(null);
  const wrapRef = useRef(null);

  const last = slides.length - 1;
  const go = (n) => {
    const next = Math.min(Math.max(n, 0), last);
    if (next === i) return;
    setDir(next > i ? 'fwd' : 'back');
    setI(next);
  };

  // Arrow keys move through the deck while focus is inside it.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === 'ArrowRight') go(i + 1);
      if (e.key === 'ArrowLeft') go(i - 1);
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  });

  const slide = slides[i];

  return (
    <div className="slides" ref={wrapRef} role="group" aria-roledescription="carousel" aria-label={label}>
      <div
        className="stage glass"
        data-glow
        onPointerDown={(e) => {
          if (e.pointerType === 'touch') touch.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (touch.current === null) return;
          const dx = e.clientX - touch.current;
          touch.current = null;
          if (Math.abs(dx) > 55) go(i + (dx < 0 ? 1 : -1));
        }}
      >
        <div key={i} className={`slide ${dir === 'back' ? 'back' : ''}`} aria-live="polite">
          {slide.kicker && <span className="slide-kicker">{slide.kicker}</span>}
          <h3 className="slide-title">{slide.title}</h3>
          <Blocks blocks={slide.blocks} />
        </div>
      </div>

      <div className="slide-controls">
        <button type="button" className="arrow-btn irid" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous slide">
          <Icon name="left" />
        </button>

        <div className="stack-sm" style={{ textAlign: 'center' }}>
          <div className="dots">
            {slides.map((s, n) => (
              <button
                key={n}
                type="button"
                className="dot"
                onClick={() => go(n)}
                aria-label={`Slide ${n + 1}: ${s.title}`}
                aria-current={n === i}
              >
                <span />
              </button>
            ))}
          </div>
          <p className="slide-count">{i + 1} of {slides.length}</p>
        </div>

        {i === last && onFinish ? (
          <button type="button" className="button small" onClick={onFinish}>
            {finishLabel}
          </button>
        ) : (
          <button type="button" className="arrow-btn primary irid" onClick={() => go(i + 1)} disabled={i === last} aria-label="Next slide">
            <Icon name="right" />
          </button>
        )}
      </div>
    </div>
  );
}
