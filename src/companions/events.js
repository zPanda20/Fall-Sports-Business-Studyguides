// A tiny event bus. The study pages announce what the student just did ("answered a question",
// "saved a bookmark"). The companions listen. Pages never wait for or depend on the companions,
// so a companion bug can never affect scoring, progress or navigation.

const handlers = new Map();

export function on(name, fn) {
  if (!handlers.has(name)) handlers.set(name, new Set());
  handlers.get(name).add(fn);
  return () => handlers.get(name)?.delete(fn);
}

// Payloads carry only what a reaction needs (ids, whether an answer was right), never profiles or content.
export function emit(name, payload = {}) {
  const set = handlers.get(name);
  if (!set) return;
  for (const fn of [...set]) {
    try {
      fn(payload);
    } catch (e) {
      console.warn('companion handler failed', name, e);
    }
  }
}
