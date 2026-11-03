import { Routes, Route, Link, NavLink, Outlet, useLocation, matchPath } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { getTopic } from './data/index.js';
import { useBookmarks } from './lib/bookmarks.js';
import Icon from './components/Icon.jsx';
import makerMark from './assets/panda-mark.png';
import { useTheme } from './lib/theme.js';
import Home from './pages/Home.jsx';
import CoursePage from './pages/CoursePage.jsx';
import TopicPage from './pages/TopicPage.jsx';
import FlashcardsPage from './pages/FlashcardsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import BookmarksPage from './pages/BookmarksPage.jsx';

// Courses with their own look (see styles.css, "skins"). The page background and glow follow
// the course you are reading, so the whole screen changes, not just the accent.
const SKINNED = new Set(['market-research']);

function courseForPath(pathname) {
  const c = matchPath('/course/:courseId/*', pathname)?.params.courseId;
  if (c) return c;
  const t = matchPath('/topic/:topicId', pathname)?.params.topicId;
  return t ? getTopic(t)?.course : undefined;
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
        </svg>
      )}
    </button>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const marks = useBookmarks();

  useLayoutEffect(() => {
    const course = courseForPath(pathname);
    const root = document.documentElement;
    if (SKINNED.has(course)) root.setAttribute('data-skin', course);
    else root.removeAttribute('data-skin');
  }, [pathname]);

  // Start each page at the top, like a normal website.
  // (Topic sections handle their own scrolling, so only react to path changes.)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Soft light that follows the pointer over any element marked data-glow.
  useEffect(() => {
    function onMove(e) {
      const el = e.target.closest?.('[data-glow]');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="app">
      <div className="aurora" aria-hidden="true">
        <span className="orb a" />
        <span className="orb b" />
        <span className="orb c" />
      </div>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header glass">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span>Study Guides</span>
          </Link>
          <nav className="header-nav" aria-label="Main">
            <NavLink to="/search" className="nav-link">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4.5 4.5" />
              </svg>
              <span className="nav-label-wide">Search</span>
            </NavLink>
            <NavLink to="/bookmarks" className="nav-link" aria-label={`Bookmarks, ${marks.length} saved`}>
              <Icon name="bookmark" size={18} />
              <span className="nav-label-wide">Bookmarks</span>
              {marks.length > 0 && <span className="nav-count" aria-hidden="true">{marks.length}</span>}
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main id="main" className="wrap main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-note glass">
            An unofficial, student-made study aid. It supplements your lectures and course
            materials and does not replace them. If something here differs from what your
            instructor taught, go with your instructor. Sports examples use fictional teams and
            made-up numbers. Real examples link to their sources.
          </p>
          <p className="maker">
            <img src={makerMark} alt="" width="27" height="18" />
            <span>private build. Program by Panda</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="stack">
      <h1>Page not found</h1>
      <p>That page does not exist. <Link to="/">Go back home</Link>.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="course/:courseId" element={<CoursePage />} />
        <Route path="course/:courseId/flashcards" element={<FlashcardsPage />} />
        <Route path="topic/:topicId" element={<TopicPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
