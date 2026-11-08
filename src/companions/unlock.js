import { getPrefs, setPrefs } from './prefs.js';

// The secret codes for the two hidden companions. Nothing about them shows anywhere in the app until
// the right code is typed into the box at the bottom of the Companions page.
//
// The codes are not stored as plain text, only as a scrambled fingerprint. That keeps them out of casual
// view, but it is not real security (anyone with browser developer tools can get around a purely
// client-side check), and it is not meant to be. It is a door, not a vault.
//
// Typing is forgiving: capitals, spaces and dashes do not matter.

// cyrb53, a small fast text fingerprint. Two seeds give a longer one.
function fingerprint(text) {
  let out = '';
  for (const seed of [11, 29]) {
    let h1 = 0xdeadbeef ^ seed;
    let h2 = 0x41c6ce57 ^ seed;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    out += (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, '0');
  }
  return out;
}

export const normalizeCode = (s) => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
export const fingerprintOf = (code) => fingerprint(`sbsg:${normalizeCode(code)}`);

export const CODES = {
  hexie: '0a62a45e3e168e11839c94beeb34',
  cosmic: '0f2a026db83d3f136f7cd43d7335',
};

// Which hidden companion this code opens, or null.
export function whichCode(input) {
  const f = fingerprintOf(input);
  if (!normalizeCode(input)) return null;
  return Object.keys(CODES).find((who) => CODES[who] === f) || null;
}

// Try a code. On a match the character is unlocked and switched on. Returns the character id or null.
export function tryUnlock(input) {
  const who = whichCode(input);
  if (!who) return null;
  const p = getPrefs();
  setPrefs({ unlocked: { ...p.unlocked, [who]: true }, [who]: true });
  return who;
}

// Hide a character again (they can be unlocked again with the same code).
export function relock(who) {
  const p = getPrefs();
  setPrefs({ unlocked: { ...p.unlocked, [who]: false }, [who]: false });
}
