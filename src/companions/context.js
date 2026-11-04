import { getTopic, topicsForCourse } from '../data/index.js';
import { mcqPool } from '../pages/QuickTestPage.jsx';

// Buttons for the help menu. Every one goes to a page that really exists, and only courses with
// enough material get the quick-test and exam buttons (the same rule the course page uses).

export function courseFromPath(pathname) {
  const c = pathname.match(/^\/course\/([^/]+)/);
  if (c) return c[1];
  const t = pathname.match(/^\/topic\/([^/]+)/);
  return t ? getTopic(decodeURIComponent(t[1]))?.course : undefined;
}

const examCount = (courseId) => topicsForCourse(courseId).reduce((n, t) => n + (t.exam?.length || 0), 0);

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
  out.push({ label: demon ? 'Bookmarks (your IOUs)' : 'Review my bookmarks', to: '/bookmarks' });
  out.push({ label: demon ? 'Search, since you are lost' : 'Search the guides', to: '/search' });
  return out.slice(0, 5);
}
