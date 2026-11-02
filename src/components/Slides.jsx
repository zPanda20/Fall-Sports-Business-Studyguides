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

  // After pressing Next/Back, keep the slide in view. Every slide takes the same space on
  // desktop, so nothing moves; this only steps in when the deck has drifted out of sight.
  // On phones the controls float above the tab bar, so we just make sure the top of the
  // new slide is visible.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = wrapRef.current;
    const stage = el && el.querySelector('.stage');
    if (!stage) return;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    const tabbar = document.querySelector('.tabbar');
    const phone = tabbar && getComputedStyle(tabbar).display !== 'none';
    const vh = window.innerHeight;
    if (phone) {
      const top = stage.getBoundingClientRect().top;
      if (top < 8 || top > vh * 0.5) window.scrollTo({ top: window.scrollY + top - 16, behavior: calm });
    } else {
      const rect = el.getBoundingClientRect();
      const controls = el.querySelector('.slide-controls').getBoundingClientRect();
      if (stage.getBoundingClientRect().top < 12 || controls.bottom > vh - 4) {
        el.scrollIntoView({ behavior: calm, block: rect.height < vh - 40 ? 'center' : 'start' });
      }
    }
  }, [i]);

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
        <div className="slides-track" aria-live="polite">
          {slides.map((slide, n) => {
            const on = n === i;
            return (
              <div
                key={n}
                className={`slide ${on ? 'is-on' : 'is-off'} ${on && dir === 'back' ? 'back' : ''}`}
                aria-hidden={on ? undefined : 'true'}
                inert={on ? undefined : ''}
              >
                {slide.kicker && <span className="slide-kicker">{slide.kicker}</span>}
                <h3 className="slide-title">{slide.title}</h3>
                <Blocks blocks={slide.blocks} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="slide-controls glass">
        <button type="button" className="arrow-btn irid" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous slide">
          <Icon name="left" />
        </button>

        <div className="stack-sm" style={{ textAlign: 'center' }}>
          {slides.length <= 8 ? (
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
          ) : (
            <div
              className="slide-progress"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={slides.length}
              aria-valuenow={i + 1}
              aria-label="Slide progress"
            >
              <span style={{ width: `${((i + 1) / slides.length) * 100}%` }} />
            </div>
          )}
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
