import { getPrefs, setPref } from './prefs.js';
import { SUP, SHARP, ROLE } from './assets.js';
import { say, getCompanionState } from './manager.js';
import { line } from './dialogue.js';
import { snapshotDeadlines } from '../lib/deadlines.js';

// Deadline reminders. They use only the real due dates from the Due dates page, are checked when the
// app opens (there is no hidden background watching), and never ask for browser notifications.
// Each reminder level is shown once per item; a snooze or tick silences it.

const HOUR = 3_600_000;

function levelFor(ms) {
  if (ms < 0) return 'overdue';
  if (ms <= 30 * HOUR) return 'd1';
  if (ms <= 72 * HOUR) return 'd3';
  if (ms <= 7 * 24 * HOUR) return 'd7';
  return null;
}

// The same wording in Italian, for Cosmic when his language is set to Italian.
function whenTextIt(ms, now) {
  if (ms < 0) {
    const d = Math.floor(-ms / (24 * HOUR));
    return d >= 1 ? (d === 1 ? 'ieri' : `${d} giorni fa`) : 'oggi';
  }
  const dayStart = (t) => new Date(new Date(t).setHours(0, 0, 0, 0)).getTime();
  const days = Math.round((dayStart(now + ms) - dayStart(now)) / (24 * HOUR));
  if (days === 0) {
    const h = Math.max(1, Math.round(ms / HOUR));
    return h <= 1 ? "entro un'ora" : `tra ${h} ore`;
  }
  if (days === 1) return 'domani';
  return `tra ${days} giorni`;
}

export function whenText(ms, now = Date.now(), lang = 'en') {
  if (lang === 'it') return whenTextIt(ms, now);
  if (ms < 0) {
    const d = Math.floor(-ms / (24 * HOUR));
    return d >= 1 ? `${d} ${d === 1 ? 'day' : 'days'} ago` : 'earlier today';
  }
  const dayStart = (t) => new Date(new Date(t).setHours(0, 0, 0, 0)).getTime();
  const days = Math.round((dayStart(now + ms) - dayStart(now)) / (24 * HOUR));
  if (days === 0) {
    const h = Math.max(1, Math.round(ms / HOUR));
    return h <= 1 ? 'within the hour' : `in ${h} hours`;
  }
  if (days === 1) return 'tomorrow';
  return `in ${days} days`;
}

// Returns true if a reminder was shown.
export function checkDeadlines() {
  const p = getPrefs();
  // Sharp characters (Demon, Hexie) remind when their deadline switch is on; supportive ones (Seraph, Cosmic) follow Study suggestions.
  const sharp = SHARP.filter((w) => p[w] && p.demonDeadlines);
  const kind = SUP.filter((w) => p[w] && p.suggestions);
  if ((!sharp.length && !kind.length) || p.quiet) return false;
  const hour = new Date().getHours();
  if (hour < 8 || hour >= 22) return false; // no late-night nagging
  if (getCompanionState().panel) return false; // never replace something already on screen
  if (!p.introSeen) return false; // a first visit gets the welcome only
  const now = Date.now();
  const { active } = snapshotDeadlines();

  for (const d of active) {
    if (d.dueMs == null || (p.snoozed[d.id] || 0) > now) continue;
    const ms = d.dueMs - now;
    const level = levelFor(ms);
    if (!level) continue;
    const key = `${d.id}:${level}`;
    const seen = p.deadlineSeen[key];
    if (seen) {
      if (level === 'd7' && now - seen < 48 * HOUR) continue;
      if (level === 'overdue' && now - seen < 24 * HOUR) continue;
      if (level === 'd1' || level === 'd3') continue;
    }
    const pool = sharp.length ? sharp : kind;
    const who = pool[Math.floor(Math.random() * pool.length)];
    const vars = { title: d.title, when: whenText(ms, now, who === 'cosmic' && p.cosmicLang === 'it' ? 'it' : 'en') };
    const text = who === 'seraph' ? line('seraph', 'deadline', p.sarcasm, vars) : line(who, level === 'd7' ? 'deadline7' : level === 'd3' ? 'deadline3' : level === 'd1' ? 'deadline1' : 'overdue', p.sarcasm, vars);
    const actions = [{ label: 'Open due dates', to: '/deadlines', primary: true }];
    if (d.courseId) actions.push({ label: 'Revise this course', to: `/course/${d.courseId}` });
    actions.push({
      label: 'Snooze a day',
      keep: false,
      fn: () => {
        const snoozed = { ...getPrefs().snoozed, [d.id]: Date.now() + 24 * HOUR };
        setPref('snoozed', snoozed);
      },
    });
    actions.push({ label: 'Dismiss', run: 'close' });
    const shown = say(who, { text, actions }, { priority: 4, auto: true, reaction: ROLE[who] === 'sharp' ? 'deadline' : 'point' });
    if (shown) {
      const old = getPrefs().deadlineSeen;
      const fresh = Object.fromEntries(Object.entries(old).filter(([, t]) => now - t < 30 * 24 * HOUR));
      setPref('deadlineSeen', { ...fresh, [key]: now });
      return true;
    }
    return false;
  }
  return false;
}
