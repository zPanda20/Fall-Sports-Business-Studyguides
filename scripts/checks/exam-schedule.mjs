// The December exam timetable (read from the school timetable, week of 14 to 19 December 2026, Monaco time UTC+1).
// Every exam on the due-dates list is a final exam card with its own gemstone.
import { readFileSync } from 'node:fs';
import { DEADLINES } from '../../src/data/deadlines.js';
import { courses } from '../../src/data/index.js';

const css = readFileSync(new URL('../../src/styles.css', import.meta.url), 'utf8');
const icon = readFileSync(new URL('../../src/components/GemIcon.jsx', import.meta.url), 'utf8');
const row = readFileSync(new URL('../../src/components/DueRow.jsx', import.meta.url), 'utf8');

const EXPECTED = {
  'accounting-final-exam': { course: 'accounting', start: '2026-12-14T09:30:00+01:00', end: '2026-12-14T12:30:00+01:00' },
  'strategy-final-exam': { course: 'strategy', start: '2026-12-15T09:30:00+01:00', end: '2026-12-15T11:30:00+01:00' },
  'sport-management-final-exam': { course: 'sport-management', start: '2026-12-16T09:30:00+01:00', end: '2026-12-16T11:30:00+01:00' },
  'time-management-exam': { course: undefined, start: '2026-12-15T16:00:00+01:00', end: '2026-12-15T17:00:00+01:00' },
  'market-research-final-exam': { course: 'market-research', start: '2026-12-16T13:00:00+01:00', end: '2026-12-16T15:00:00+01:00' },
};

export default function ({ eq, ok_ }) {
  const exams = DEADLINES.filter((d) => d.gem);
  eq(exams.length, 5, 'exam schedule: five exams carry a gem');
  eq(new Set(exams.map((d) => d.gem)).size, 5, 'exam schedule: every exam has a different gemstone');
  for (const [id, want] of Object.entries(EXPECTED)) {
    const d = DEADLINES.find((x) => x.id === id);
    ok_(d, `exam schedule: ${id} exists`);
    if (!d) continue;
    eq(d.courseId, want.course, `${id}: linked to its course`);
    if (want.course) ok_(courses.some((c) => c.id === d.courseId), `${id}: course exists in the app`);
    eq(Date.parse(d.dueAt), Date.parse(want.start), `${id}: starts at the timetable time`);
    eq(Date.parse(d.endAt), Date.parse(want.end), `${id}: ends at the timetable time`);
    ok_(!d.timeTbc, `${id}: the start time is known`);
    ok_(Date.parse(d.endAt) > Date.parse(d.dueAt), `${id}: ends after it starts`);
    ok_(/^(Final )?exam/i.test(d.title), `${id}: title says exam`);
    if (want.course) ok_(d.brief?.points?.length >= 1, `${id}: has details`);
    ok_(css.includes(`.due-item.gem-${d.gem} {`), `${id}: the ${d.gem} colors exist in the styles`);
    ok_(icon.includes(`${d.gem}:`), `${id}: the ${d.gem} icon exists`);
  }
  // The gem names (ruby, emerald and so on) are never printed on the cards.
  ok_(!row.includes('gem-name') && !row.includes('GEMS'), 'exam cards do not show the gem name');
  ok_(!css.includes('.gem-name'), 'no gem name styling left');
  // No two exams overlap in time.
  const sorted = [...exams].sort((a, b) => Date.parse(a.dueAt) - Date.parse(b.dueAt));
  for (let i = 1; i < sorted.length; i++) ok_(Date.parse(sorted[i].dueAt) >= Date.parse(sorted[i - 1].endAt), `exam schedule: ${sorted[i].id} does not overlap the exam before it`);
  eq(courses.find((c) => c.id === 'strategy').examFormat.date, 'Tuesday 15 December 2026', 'strategy: exam date shown on the exam practice page');
  eq(courses.find((c) => c.id === 'sport-management').examFormat.date, 'Wednesday 16 December 2026', 'foundations: exam date shown on the exam practice page');
}
