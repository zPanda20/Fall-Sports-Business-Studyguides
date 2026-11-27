// A quiz question can be bookmarked right after answering, right or wrong, and found again on the Bookmarks page.
import { readFileSync } from 'node:fs';
import { toggleBookmark, getBookmarks, removeBookmark } from '../../src/lib/bookmarks.js';

const read = (p) => readFileSync(new URL(`../../${p}`, import.meta.url), 'utf8');

export default function ({ eq, ok_ }) {
  const item = { id: 'q:cost-volume-profit:q4', scope: 'question', topicId: 'cost-volume-profit', courseId: 'accounting', topicTitle: 'CVP', questionText: 'Q?', pickedText: 'a', correctText: 'b', explanation: 'because', section: 'sports', slide: 4 };
  const before = getBookmarks().length;
  toggleBookmark(item);
  eq(getBookmarks().length, before + 1, 'question bookmarks: tapping saves the question');
  eq(getBookmarks()[0].questionText, 'Q?', 'question bookmarks: the question text is kept');
  toggleBookmark(item);
  eq(getBookmarks().length, before, 'question bookmarks: tapping again removes it');
  removeBookmark(item.id);

  // Every quiz that shows feedback offers the button for any answer (not only wrong ones).
  for (const f of ['src/pages/DailyPage.jsx', 'src/components/Quiz.jsx', 'src/pages/QuickTestPage.jsx', 'src/pages/ExamPracticePage.jsx']) {
    ok_(read(f).includes('<QuestionBookmark'), `question bookmarks: ${f} offers the bookmark button`);
  }
  ok_(/\{done && \(\s*<div className="q-actions">/.test(read('src/pages/DailyPage.jsx')), 'question bookmarks: the daily quiz shows it after every answer');
  ok_(read('src/pages/BookmarksPage.jsx').includes("b.scope === 'question'"), 'question bookmarks: the Bookmarks page lists them');
}
