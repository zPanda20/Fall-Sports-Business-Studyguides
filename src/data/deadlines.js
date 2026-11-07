// Assignment deadlines. Times are as shown on the course platform (Monaco time, UTC+1 in November).
// dueAt is an exact moment with its offset, so the countdown is right in any time zone.
// dueAt: null means no date has been added yet. Each student can add or change a date on their own device.
// courseId links to a course in this app when there is one.
// files: [{ label, file }] adds download links (files live in public/files/).
// brief: { objective, intro, points: [{ label, text }] } shows the task details under the title.
// unconfirmed: true shows a big "Unconfirmed due date" badge until the date is confirmed.
// videos: [{ label, url }] adds red "Watch video" buttons that open in a new tab.
// group: true marks a group project. approx is shown when only a rough time is known (no exact date yet).
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
    group: true,
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
    id: 'leadership-final-assignment',
    title: 'Final assignment (individual)',
    course: 'Leadership',
    dueAt: '2026-11-15T23:59:00+01:00',
    note: 'Only the day (15 November) was given, so this is set to the end of that day. Use "Change date" if you know the time.',
  },
  {
    id: 'strategy-final-group-assignment',
    title: 'Final Group Assignment: business analysis',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-11-27T23:59:00+01:00',
    group: true,
    note: 'PESTEL, Five Forces, SWOT, VRIO and a strategic proposal.',
  },
  {
    id: 'strategy-final-presentation',
    title: 'Final presentation',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-11-30T23:59:00+01:00',
    group: true,
    note: 'Only the day (30 November) was given, so this is set to the end of that day. Use "Change date" if you know the time.',
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
    dueAt: '2026-11-09T10:00:00+01:00',
    brief: {
      objective:
        'Deepen critical analysis skills by evaluating real-world public speakers, helping students identify how body language and grounding techniques dictate a speaker\'s presence before applying these insights to their own performance.',
      intro:
        'Please watch the three pre-selected speeches featuring distinctly different styles of speakers. Write notes on the areas below and bring these to our first class for a class discussion.',
      points: [
        {
          label: 'Body Language & Physical Delivery',
          text: 'Evaluate each speaker\'s posture, movement across the stage, facial expressions, and hand gestures. Identify which physical behaviours build trust and project presence, and which might distract from the messaging.',
        },
        {
          label: 'Calm & Control',
          text: 'Assess each speaker\'s level of physical grounding and composure. Look for signs of how they manage their nervous system, their use of stillness versus frantic movement, and how they project an air of calm and control under the spotlight.',
        },
        {
          label: 'Personal Preference',
          text: 'Which speaker did you connect best to and why? Describe how their specific style resonated with you and reflect on which of their style choices you can use in your own work.',
        },
      ],
    },
    videos: [
      { label: 'Watch video 1', url: 'https://www.youtube.com/watch?v=eVFzbxmKNUw' },
      { label: 'Watch video 2', url: 'https://www.youtube.com/watch?v=zy2Zj8yIe6c' },
      { label: 'Watch video 3', url: 'https://www.youtube.com/watch?v=v1ojZKWfShQ' },
    ],
  },
  {
    id: 'governance-super-league',
    title: 'Group assignment: governance case analysis',
    course: 'International Sports Governance',
    courseId: 'sport-governance',
    dueAt: '2026-12-09T23:59:00+01:00',
    group: true,
    note: 'Only the day (9 December) was given, so this is set to the end of that day. Observation (what we know about the event), integration (connect it to the theory and ideas from the course) and critique (analyze and criticize the situation).',
  },
  {
    id: 'accounting-company-analysis',
    title: 'Financial analysis of a company',
    course: 'Accounting and Forecasting',
    courseId: 'accounting',
    dueAt: null,
    approx: 'Around 19 December (date to be confirmed)',
    group: true,
    note: 'Carry out a financial analysis of a company and present it.',
  },
  {
    id: 'market-research-project',
    title: 'Quantitative or qualitative research project',
    course: 'Market Research',
    courseId: 'market-research',
    dueAt: '2026-12-14T23:59:00+01:00',
    group: true,
    note: 'Only the day (14 December) was given, so this is set to the end of that day. One student uploads for the group on Boostcamp. Quantitative: report, jamovi file and Qualtrics file. Qualitative: report, instrument, synthetic data, Taguette export and AI documentation. Check the exact time on Boostcamp.',
  },
];
