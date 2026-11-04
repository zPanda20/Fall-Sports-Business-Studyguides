import { getTopic, topicsForCourse, courses } from '../data/index.js';
import { mcqPool } from '../pages/QuickTestPage.jsx';
import { getProgress } from '../lib/progress.js';
import { getBookmarks } from '../lib/bookmarks.js';
import { snapshotDeadlines } from '../lib/deadlines.js';
import { getPrefs, isPreview } from './prefs.js';
import { line } from './dialogue.js';
import { session } from './rules.js';
import { whenText } from './deadlineWatch.js';

// What the help menu offers. Every button goes to a page that really exists, and every suggestion
// comes from what is actually saved on this device (progress, bookmarks, due dates). Nothing is made up.

export function courseFromPath(pathname) {
  const c = pathname.match(/^\/course\/([^/]+)/);
  if (c) return c[1];
  const t = pathname.match(/^\/topic\/([^/]+)/);
  return t ? getTopic(decodeURIComponent(t[1]))?.course : undefined;
}

const examCount = (courseId) => topicsForCourse(courseId).reduce((n, t) => n + (t.exam?.length || 0), 0);
const short = (s, n = 34) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

// Suggestions based on saved state. Only used while the unreleased parts are on.
function smart(who, pathname) {
  const out = [];
  let text = null;
  const p = getPrefs();
  const progress = getProgress();
  const demon = who === 'demon';

  // flashcards just studied -> suggest a quick test of the same course
  const course = courseFromPath(pathname) || courses.find((c) => topicsForCourse(c.id).length)?.id;
  if (session.flash.n >= 5 && Date.now() - session.flash.at < 30 * 60_000 && course && mcqPool(course).length >= 5) {
    out.push({ label: demon ? 'Test yourself now' : 'Try a quick test after those cards', to: `/course/${course}/test`, primary: true });
  }

  // an unfinished topic you were reading
  const last = p.last && getTopic(p.last);
  if (last && !progress.done[last.id] && pathname !== `/topic/${last.id}`) {
    out.push({ label: `${demon ? 'Finish' : 'Resume'}: ${short(last.title)}`, to: `/topic/${last.id}` });
    if (!demon) text = line('seraph', 'resume', 'playful', { title: last.title });
  }

  // a topic where the last quiz went badly
  const weak = Object.entries(progress.quiz)
    .map(([id, q]) => ({ id, ratio: q.total ? q.last / q.total : 1, t: getTopic(id) }))
    .filter((x) => x.t && x.ratio < 0.6)
    .sort((a, b) => a.ratio - b.ratio)[0];
  if (weak && !(last && weak.id === last.id)) out.push({ label: `Review: ${short(weak.t.title)}`, to: `/topic/${weak.id}` });

  // the nearest real deadline in the next week
  const now = Date.now();
  const next = snapshotDeadlines().active.find((d) => d.dueMs != null && d.dueMs > now && d.dueMs - now < 7 * 86_400_000);
  if (next) out.push({ label: `Next due: ${short(next.title, 26)} ${whenText(next.dueMs, now)}`, to: '/deadlines' });
  return { out: out.slice(0, 3), text };
}

export function helpActions(who, pathname) {
  const demon = who === 'demon';
  const out = [];
  const course = courseFromPath(pathname);
  if (course) {
    out.push({ label: demon ? 'Flashcards (try remembering)' : 'Study flashcards', to: `/course/${course}/flashcards` });
    if (mcqPool(course).length >= 5) out.push({ label: demon ? 'Quick test (if you dare)' : 'Take a quick test', to: `/course/${course}/test` });
    if (examCount(course) >= 3) out.push({ label: demon ? 'Exam questions (good luck)' : 'Practice exam questions', to: `/course/${course}/exam` });
  }
  out.push({ label: demon ? 'My deadlines (brace yourself)' : 'See my due dates', to: '/deadlines' });
  const marks = getBookmarks().length;
  out.push({ label: demon ? `Bookmarks${marks ? ` (${marks} IOUs)` : ''}` : `Review my bookmarks${marks ? ` (${marks})` : ''}`, to: '/bookmarks' });
  out.push({ label: demon ? 'Search, since you are lost' : 'Search the guides', to: '/search' });
  return out;
}

// The whole help message: a greeting plus buttons.
export function helpMessage(who, pathname) {
  const level = getPrefs().sarcasm;
  let text = line(who, 'help', level);
  let actions = helpActions(who, pathname);
  if (isPreview() && getPrefs().suggestions) {
    const s = smart(who, pathname);
    if (s.text) text = s.text;
    const seen = new Set(s.out.map((a) => a.to));
    actions = [...s.out, ...actions.filter((a) => !seen.has(a.to))];
  }
  // The tour can always be started on request, once it is released.
  if (isPreview() && getPrefs().tutorial && who === 'seraph') actions = [...actions.slice(0, 4), { label: 'Show me around', run: 'tour' }];
  return { text, actions: actions.slice(0, 5) };
}
