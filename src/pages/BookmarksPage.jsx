import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { courses, getCourse, getTopic, slideText } from '../data/index.js';
import { useBookmarks, setBookmarkNote, removeBookmark } from '../lib/bookmarks.js';
import { bookmarkPrompt } from '../lib/ai.js';
import AskAI from '../components/AskAI.jsx';
import Icon from '../components/Icon.jsx';

const SECTION_LABEL = { plain: 'In plain words', real: 'Real example', sports: 'Sports example' };

function slidesFor(topic, section) {
  if (!topic) return null;
  if (section === 'plain') return topic.plain;
  if (section === 'real') return topic.real?.slides;
  if (section === 'sports') return topic.sports?.slides;
  return null;
}

const clip = (text, max) => {
  const t = text.replace(/\s+/g, ' ').trim();
  return t.length > max ? `${t.slice(0, max).trim()}…` : t;
};

// Adds what a reader needs to see: where it is, the link back, and the slide's own words
// (so an AI that cannot see the guide still knows what the student was looking at).
function describe(b, cap) {
  const topic = getTopic(b.topicId);
  const course = getCourse(b.courseId);
  let where = 'Whole topic';
  let excerpt = topic ? clip(topic.summary || '', cap) : '';
  let to = `/topic/${b.topicId}`;
  if (b.scope === 'slide') {
    where = `${SECTION_LABEL[b.section] || 'Slide'}, slide ${b.slide + 1}: “${b.slideTitle}”`;
    const slide = slidesFor(topic, b.section)?.[b.slide];
    excerpt = slide ? clip(`${slide.title}. ${slideText(slide.blocks)}`, cap) : '';
    to = `/topic/${b.topicId}?s=${b.section}&slide=${b.slide}`;
  }
  return {
    to,
    where,
    available: Boolean(topic),
    prompt: {
      course: course?.title ?? b.courseId,
      topic: b.topicTitle,
      where,
      excerpt,
      note: (b.note || '').trim(),
    },
  };
}

export default function BookmarksPage() {
  const all = useBookmarks();
  const [filter, setFilter] = useState('all');
  const [off, setOff] = useState(() => new Set()); // ids left out of the combined message

  const shown = useMemo(() => all.filter((b) => filter === 'all' || b.courseId === filter), [all, filter]);
  const chosen = shown.filter((b) => !off.has(b.id));
  const bundle = useMemo(
    () => bookmarkPrompt({ items: chosen.map((b) => describe(b, chosen.length > 3 ? 220 : 350).prompt) }),
    [chosen],
  );
  const usedCourses = courses.filter((c) => all.some((b) => b.courseId === c.id));

  const toggle = (id) =>
    setOff((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="stack-lg">
      <header className="stack">
        <h1>Bookmarks</h1>
        <p className="lead">
          Everything you flagged as confusing, in one place. Add a note about what is unclear, then send
          it to an AI, or take the list to your instructor.
        </p>
      </header>

      {all.length === 0 ? (
        <section className="glass empty-bm">
          <span className="ico"><Icon name="bookmark" size={26} /></span>
          <h2 className="serif" style={{ fontSize: '1.3rem' }}>Nothing bookmarked yet</h2>
          <p>
            On any topic, tap <strong>Confused? Bookmark topic</strong>. On any slide, tap{' '}
            <strong>Ask later</strong> in the top corner. It will show up here, saved on this device.
          </p>
          <Link to="/" className="button fit">Browse courses</Link>
        </section>
      ) : (
        <>
          {usedCourses.length > 1 && (
            <div className="chips" role="group" aria-label="Filter by course">
              {[{ id: 'all', short: 'All' }, ...usedCourses].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="chip"
                  aria-pressed={filter === c.id}
                  onClick={() => setFilter(c.id)}
                >
                  {c.short}
                </button>
              ))}
            </div>
          )}

          <section className="glass send-bm stack" aria-labelledby="send-title">
            <h2 id="send-title" className="serif" style={{ fontSize: '1.3rem' }}>Ask an AI about your bookmarks</h2>
            <p className="meta">
              {chosen.length === 0
                ? 'Tick at least one bookmark below to build the message.'
                : `${chosen.length} of ${shown.length} ticked. The message includes each slide's text and your notes, so the AI knows what you were reading.`}
            </p>
            {chosen.length > 0 && (
              <AskAI
                prompt={bundle}
                label={`Ask about ${chosen.length} bookmark${chosen.length === 1 ? '' : 's'}`}
              />
            )}
            <div className="ask-row">
              <button type="button" className="button small secondary" onClick={() => setOff(new Set())}>Tick all</button>
              <button type="button" className="button small secondary" onClick={() => setOff(new Set(shown.map((b) => b.id)))}>Untick all</button>
            </div>
          </section>

          {courses
            .filter((c) => shown.some((b) => b.courseId === c.id))
            .map((course) => (
              <section key={course.id} className="stack" data-course={course.id}>
                <h2 className="block-title serif" style={{ fontSize: '1.3rem' }}>{course.title}</h2>
                <ul className="bm-list" role="list">
                  {shown
                    .filter((b) => b.courseId === course.id)
                    .map((b) => {
                      const d = describe(b, 700);
                      return (
                        <li key={b.id} className="bm-item nm">
                          <div className="bm-top">
                            <label className="bm-pick">
                              <input type="checkbox" checked={!off.has(b.id)} onChange={() => toggle(b.id)} />
                              <span className="sr-only">Include in the message</span>
                            </label>
                            <div className="bm-what">
                              <span className="bm-topic">{b.topicTitle}</span>
                              <span className="meta">{d.where}</span>
                            </div>
                            <span className="pill">{b.scope === 'topic' ? 'Topic' : 'Slide'}</span>
                          </div>

                          <label className="bm-note">
                            <span>What is confusing? (optional)</span>
                            <textarea
                              rows={2}
                              value={b.note || ''}
                              placeholder="For example: I don't see why the second step comes before the first."
                              onChange={(e) => setBookmarkNote(b.id, e.target.value)}
                            />
                          </label>

                          <div className="bm-actions">
                            {d.available ? (
                              <Link to={d.to} className="button small secondary">Open it</Link>
                            ) : (
                              <span className="meta">This part has been changed or removed.</span>
                            )}
                            <button type="button" className="button small secondary" onClick={() => removeBookmark(b.id)}>
                              Got it, remove
                            </button>
                          </div>

                          <details className="bm-ask">
                            <summary>Ask an AI about just this one</summary>
                            <AskAI
                              prompt={bookmarkPrompt({ items: [d.prompt] })}
                              label="Ask an AI"
                            />
                          </details>
                        </li>
                      );
                    })}
                </ul>
              </section>
            ))}
        </>
      )}

      <p className="meta">Bookmarks are saved on this device only, like your progress.</p>
    </div>
  );
}
