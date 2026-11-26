// Assignment deadlines. Times are as shown on the course platform (Monaco time, UTC+1 in November).
// dueAt is an exact moment with its offset, so the countdown is right in any time zone.
// dueAt: null means no date has been added yet. Each student can add or change a date on their own device.
// courseId links to a course in this app when there is one.
// files: [{ label, file }] adds download links (files live in public/files/).
// brief: { objective, intro, points: [{ label, text }] } shows the task details under the title.
// unconfirmed: true shows a big "Unconfirmed due date" badge until the date is confirmed.
// videos: [{ label, url }] adds red "Watch video" buttons that open in a new tab.
// gem: 'ruby' | 'sapphire' | 'emerald' | 'amethyst' | 'topaz' makes the card an exam with a gemstone of that color (the name is never shown). flag overrides the "Final exam" label. endAt is when the exam ends.
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
    id: 'strategy-async-assignment-2',
    title: 'Asynchronous Assignment 2',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-12-13T23:59:00+01:00',
    note: 'Sunday 13 December, 11:59 PM. The platform status is "To do: Make a submission". The file attached to it is the Harvard Business School case "On (A)" (35 pages). Open "More details" for the questions the case ends with. The platform page did not say how long the answer should be or what format to submit, so check it for that.',
    brief: {
      intro: 'The case ends on page 13 with the decision On faces, under the heading "How to stay Switched On?". Questions 1 to 3 are those closing questions. These are the only questions in the case; pages 14 to 35 are exhibits, appendices and references.',
      points: [
        { label: 'Question 1', text: 'Should On leave the formula that has worked so far, and break new ground in the running shoe industry with a new business model?' },
        { label: 'Question 2', text: 'If yes, which pricing model should On choose for the Cyclon subscription? Cyclon A costs $30 a month. Cyclon B costs $15 a month plus $90 for each shoe replacement.' },
        { label: 'Question 3', text: 'Or would it be better to drop the subscription idea and launch the Cloudneo, its recyclable running shoe, with a different business model?' },
        { label: 'Also asked on page 1', text: 'The case opens with four more questions about the same decision. Which pricing approach was best? Could a circular business model (one that takes shoes back and recycles them) for a performance running shoe succeed in this fast-paced, brand-driven industry? Would customers favor a subscription over buying shoes the usual way? Could Cyclon meet the expectations of investors who saw On as a proven growth story?' },
        { label: 'Where the numbers are', text: 'Exhibit 16 (page 25) compares what a customer spends in a year on conventional purchases, Cyclon A and Cyclon B at different weekly mileages.' },
      ],
    },
  },
  {
    id: 'sport-management-async-group-assignment',
    title: 'Asynchronous Group Assignment',
    course: 'Foundations of Sport Management',
    courseId: 'sport-management',
    dueAt: '2026-11-13T17:00:00+01:00',
    group: true,
    note: '4,000 to 6,000 word report (the limit was raised in Lecture 8): an evidence-based forecast of the global sports industry in 2035.',
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
    brief: {
      intro:
        'Present a considered rationale as to why the continuing development of leaders and managers is essential to working practices and organizational success of modern organizations in the Sports Industry.',
    },
    note: 'Only the day (15 November) was given, so this is set to the end of that day. Use "Change date" if you know the time.',
  },
  {
    id: 'presentation-skills-final-exam-video',
    title: 'Final exam video',
    course: 'Presentation Skills',
    dueAt: '2026-11-20T01:00:00+01:00',
    brief: {
      intro: 'Submit a 3 minute video of the speech you delivered in Thursday\'s class.',
    },
    note: 'The platform shows 1:00 AM on Friday 20 November, so in practice submit before you go to bed on Thursday the 19th. It opened on 12 November at 6:13 PM.',
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
    id: 'sport-management-final-exam',
    title: 'Final exam: Foundations of Sport Management',
    course: 'Foundations of Sport Management',
    courseId: 'sport-management',
    dueAt: '2026-12-16T09:30:00+01:00',
    endAt: '2026-12-16T11:30:00+01:00',
    gem: 'emerald',
    note: 'Wednesday 16 December, 09:30 to 11:30, in Salle 100 and 101. 2 hours, on a computer, closed book. Practice questions in the Foundations exam practice match this format.',
    brief: {
      objective: 'Assess your understanding of fan engagement, sports marketing and its concepts, and media consumption and distribution, together with your critical thinking.',
      points: [
        { label: 'Multiple choice', text: 'Questions on the concepts from the lectures.' },
        { label: 'Short answers', text: '4 to 5 questions (for example: what are data analytics and how are they used in sport?). Each is worth 5 to 6 points, so answer with an equal number of points. Some can be written as bullet points.' },
        { label: 'Essays', text: '2 questions. One essay everyone answers, and one you choose from two options.' },
        { label: 'Setup', text: 'Two hours, on a computer, not on paper.' },
      ],
    },
  },
  {
    id: 'accounting-final-exam',
    title: 'Final exam: Accounting and Forecasting',
    course: 'Accounting and Forecasting',
    courseId: 'accounting',
    dueAt: '2026-12-14T09:30:00+01:00',
    endAt: '2026-12-14T12:30:00+01:00',
    gem: 'ruby',
    note: 'Monday 14 December, 09:30 to 12:30, in Classroom 207 and 208. The timetable slot is three hours; the syllabus describes the exam itself as 2 hours.',
    brief: {
      points: [
        { label: 'Content', text: 'Exercises covering both financial and managerial accounting.' },
        { label: 'Setup', text: 'Individual. Closed book: no notes, no internet and no AI.' },
      ],
    },
  },
  {
    id: 'strategy-final-exam',
    title: 'Final exam: Business Strategy',
    course: 'Business Strategy',
    courseId: 'strategy',
    dueAt: '2026-12-15T09:30:00+01:00',
    endAt: '2026-12-15T11:30:00+01:00',
    gem: 'sapphire',
    note: 'Tuesday 15 December, 09:30 to 11:30, in Salle 100, Salle 101 and Classroom 105. 2 hours, all multiple choice. Practice questions in the Strategy exam practice match this format.',
    brief: {
      points: [
        { label: 'Multiple choice', text: 'Every question is multiple choice. Some have more than one correct answer and ask you to choose ALL correct answers.' },
        { label: 'Case studies', text: 'Questions may link to the F1 case studies.' },
        { label: 'Setup', text: 'Individual, 2 hours. Closed book: no notes, no internet and no AI.' },
      ],
    },
  },
  {
    id: 'time-management-exam',
    title: 'Exam: Time Management & Collaborative Work',
    course: 'Time Management & Collaborative Work',
    dueAt: '2026-12-15T16:00:00+01:00',
    endAt: '2026-12-15T17:00:00+01:00',
    gem: 'topaz',
    flag: 'Exam',
    note: 'Tuesday 15 December, 16:00 to 17:00, in Classroom 200, 201 and 202. The timetable lists it as an evaluation (class meeting 1 of 1). The format has not been shared yet.',
  },
  {
    id: 'market-research-final-exam',
    title: 'Final exam: Market Research',
    course: 'Market Research',
    courseId: 'market-research',
    dueAt: '2026-12-16T13:00:00+01:00',
    endAt: '2026-12-16T15:00:00+01:00',
    gem: 'amethyst',
    note: 'Wednesday 16 December, 13:00 to 15:00, in Classroom 207 and 208. It is the same day as the Foundations exam, in the afternoon.',
    brief: {
      points: [
        { label: 'Question types', text: 'Multiple-choice and open-ended questions.' },
        { label: 'Setup', text: 'Individual. Closed book, no AI.' },
      ],
    },
  },
  {
    id: 'governance-super-league',
    title: 'Group assignment: governance case analysis',
    course: 'International Sports Governance',
    courseId: 'sport-governance',
    dueAt: '2026-12-16T23:59:00+01:00',
    group: true,
    note: 'Only the day (16 December) was given, so this is set to the end of that day. Observation (what we know about the event), integration (connect it to the theory and ideas from the course) and critique (analyze and criticize the situation).',
  },
  {
    id: 'accounting-company-analysis',
    title: 'Financial analysis of a company',
    course: 'Accounting and Forecasting',
    courseId: 'accounting',
    dueAt: '2026-12-21T23:59:00+01:00',
    group: true,
    note: 'Only the day (21 December) was given, so this is set to the end of that day. Carry out a financial analysis of a company and present it.',
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
