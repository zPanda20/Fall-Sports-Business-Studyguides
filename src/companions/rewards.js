import { getPrefs, setPref } from './prefs.js';

// Snacks, hammers and head pats you have earned. The counts live with the companion settings.
export const REWARD_KINDS = {
  snacks: { who: 'seraph', single: 'snack', plural: 'snacks', use: 'Feed Seraph', icon: 'snack' },
  hammers: { who: 'demon', single: 'hammer', plural: 'hammers', use: 'Bonk Demon', icon: 'mallet' },
  pats: { who: null, single: 'head pat', plural: 'head pats', use: 'Give a head pat', icon: 'hand' },
};

export function addReward(kind, n = 1) {
  if (!REWARD_KINDS[kind] || n < 1) return;
  const r = { ...getPrefs().rewards };
  r[kind] = (r[kind] || 0) + n;
  setPref('rewards', r);
}
// Uses one. Returns false (and changes nothing) if there is none left.
export function spendReward(kind) {
  const r = { ...getPrefs().rewards };
  if (!REWARD_KINDS[kind] || (r[kind] || 0) < 1) return false;
  r[kind] -= 1;
  setPref('rewards', r);
  return true;
}
