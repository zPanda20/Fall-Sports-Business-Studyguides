import { useBookmarks, toggleBookmark } from '../lib/bookmarks.js';
import Icon from './Icon.jsx';

// A small toggle: "this confused me, let me find it again later".
// variant "slide" sits in the corner of a slide; "topic" sits with the topic title.
export default function BookmarkButton({ item, variant = 'slide' }) {
  const on = useBookmarks().some((b) => b.id === item.id);
  const what = item.scope === 'topic' ? 'this topic' : 'this slide';
  const label = variant === 'topic' ? (on ? 'Bookmarked' : 'Confused? Bookmark topic') : on ? 'Saved' : 'Ask later';

  return (
    <button
      type="button"
      className={`bm bm-${variant}`}
      aria-pressed={on}
      aria-label={on ? `Remove the clarification bookmark from ${what}` : `Bookmark ${what} to ask about later`}
      title={on ? 'Saved on your Bookmarks page. Tap to remove.' : `Confused? Bookmark ${what} to ask about later.`}
      onClick={() => toggleBookmark(item)}
    >
      <Icon name="bookmark" size={variant === 'slide' ? 18 : 17} />
      <span className="bm-label">{label}</span>
    </button>
  );
}
