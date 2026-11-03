import { useSyncExternalStore } from 'react';

// "Clarification bookmarks": a student flags a topic or a slide they did not understand,
// optionally adds a note, and finds everything again on the Bookmarks page.
// Stored only in this browser (localStorage), like progress. Newest first.
const KEY = 'sbsg:bookmarks:v1';

const isValid = (b) => b && typeof b.id === 'string' && typeof b.topicId === 'string' && typeof b.courseId === 'string';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(isValid) : [];
  } catch {
    return [];
  }
}

let state = load();
const listeners = new Set();

function commit(next) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be blocked (private mode). Bookmarks still work for this visit.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useBookmarks() {
  return useSyncExternalStore(subscribe, () => state);
}

// One id per place: the topic itself, or one slide inside one section of a topic.
export const topicBookmarkId = (topicId) => `${topicId}`;
export const slideBookmarkId = (topicId, section, slide) => `${topicId}:${section}:${slide}`;

// item: { id, topicId, courseId, topicTitle, scope: 'topic' | 'slide', section?, slide?, slideTitle? }
export function toggleBookmark(item) {
  if (state.some((b) => b.id === item.id)) {
    commit(state.filter((b) => b.id !== item.id));
  } else {
    commit([{ ...item, note: '', createdAt: Date.now() }, ...state]);
  }
}

export function setBookmarkNote(id, note) {
  commit(state.map((b) => (b.id === id ? { ...b, note } : b)));
}

export function removeBookmark(id) {
  commit(state.filter((b) => b.id !== id));
}
