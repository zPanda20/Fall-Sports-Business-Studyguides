import { useBookmarks, toggleBookmark } from '../lib/bookmarks.js';
import Icon from './Icon.jsx';

const plain = (s) => String(s ?? '').replace(/\*\*/g, '');

// Shown straight after a quiz question is answered, right or wrong: "I want to find this one again".
// The question, the right answer and the reason are saved with the bookmark, so the Bookmarks page can show
// them without the quiz, and anyone can send them to an AI from there.
export default function QuestionBookmark({ qKey, topicId, courseId, topicTitle, question, picked, correct, explanation, review }) {
  const id = `q:${qKey}`;
  const on = useBookmarks().some((b) => b.id === id);
  return (
    <button
      type="button"
      className="bm bm-question"
      aria-pressed={on}
      aria-label={on ? 'Remove this question from your bookmarks' : 'Bookmark this question'}
      title={on ? 'Saved on your Bookmarks page. Tap to remove.' : 'Save this question on your Bookmarks page to come back to it.'}
      onClick={() =>
        toggleBookmark({
          id,
          scope: 'question',
          topicId,
          courseId,
          topicTitle,
          questionText: plain(question),
          pickedText: plain(picked),
          correctText: plain(correct),
          explanation: plain(explanation),
          section: review?.section || 'plain',
          slide: review?.slide ?? 0,
        })
      }
    >
      <Icon name="bookmark" size={17} />
      <span className="bm-label">{on ? 'Question bookmarked' : 'Bookmark this question'}</span>
    </button>
  );
}
