// Assignment deadlines. Times are as shown on the course platform (Monaco time, UTC+1 in November).
// dueAt is an exact moment with its offset, so the countdown is right in any time zone.
// dueAt: null means no date has been added yet. Each student can add or change a date on their own device.
// courseId links to a course in this app when there is one.
export const DEADLINES = [
  {
    id: 'leadership-workshop-reflection',
    title: 'Workshop reflection',
    course: 'Leadership',
    dueAt: '2026-11-06T23:59:00+01:00',
  },
  {
    id: 'strategy-async-assignment-1',
    title: 'Asynchronous Assignment 1',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-11-08T23:59:00+01:00',
  },
  {
    id: 'sport-management-async-group-assignment',
    title: 'Asynchronous Group Assignment',
    course: 'Foundations of Sport Management',
    courseId: 'sport-management',
    dueAt: '2026-11-13T17:00:00+01:00',
    note: '4,000 to 5,000 word report: an evidence-based forecast of the global sports industry in 2035.',
  },
  {
    id: 'careers-submit-cv',
    title: 'Submit your CV',
    course: 'Careers Team',
    dueAt: '2026-11-15T00:00:00+01:00',
    note: 'The platform shows 12:00 AM on 15 November, which is the very start of that day. In practice, submit by the end of the 14th.',
  },
  {
    id: 'strategy-final-group-assignment',
    title: 'Final Group Assignment',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-11-27T23:59:00+01:00',
  },
  {
    id: 'governance-fifa-reforms',
    title: 'Governance reforms @FIFA post-FIFAGate: actual reforms or PR exercise?',
    course: 'International Sports Governance',
    courseId: 'sport-governance',
    dueAt: null,
    note: 'Read the articles and answer the questions on the forum. No due date was shown yet.',
  },
  {
    id: 'presentation-skills-speaker-analysis',
    title: 'Asynchronous work: Speaker Analysis',
    course: 'Presentation Skills',
    dueAt: null,
    note: 'No due date was shown yet.',
  },
];
