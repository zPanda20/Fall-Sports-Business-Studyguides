// Business Strategy, Session 4 (second part): SWOT analysis.
// Built from the Session 4 lecture slides, which treat SWOT as the step that pulls the internal and
// external analyzes together. The "pairing" slide is a widely used extension of the framework.
// Real-example figures: FC Barcelona 2024-25 as reported by Inside World Football (see sources slide).

export const swotTopic = {
  id: 'swot',
  course: 'strategy',
  title: 'SWOT analysis',
  sessions: 'Session 4',
  reading: 'Session 4 slides',
  minutes: 20,
  summary:
    'Bringing the inside view and the outside view together into one picture of strengths, weaknesses, opportunities and threats.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'One page that joins inside and outside',
      blocks: [
        { type: 'big', text: '**SWOT** combines what you found **inside** the firm with what you found **outside** it.' },
        {
          type: 'table',
          head: ['', 'Helpful', 'Harmful'],
          rows: [
            ['Inside the firm', 'Strengths', 'Weaknesses'],
            ['Outside the firm', 'Opportunities', 'Threats'],
          ],
        },
      ],
    },
    {
      kicker: 'Where the content comes from',
      title: 'Each box has a tool behind it',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Strengths and weaknesses',
              text: 'Found with the **internal analysis**. **VRIO** shows which resources are valuable, rare, costly to imitate and well organized.',
            },
            {
              title: 'Opportunities and threats',
              text: 'Found with the **external analysis**. **PESTEL** and **Five Forces** show what the environment and the industry offer or threaten.',
            },
          ],
        },
        {
          type: 'p',
          text: 'SWOT is a summary, not a separate piece of research. A weak SWOT usually comes from skipping the analysis behind it.',
        },
      ],
    },
    {
      kicker: 'Doing it well',
      title: 'Specific, evidence-based, prioritized',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Sort carefully.** Strengths and weaknesses are things **inside** the firm. Opportunities and threats are things **outside** it.',
            '**Be specific.** “Strong brand” is vague. A number or a fact is better.',
            '**Compare with rivals.** A strength is only a strength relative to competitors.',
            '**Prioritize.** Keep the few items that matter most.',
          ],
        },
      ],
    },
    {
      kicker: 'From picture to action',
      title: 'Pair the boxes',
      blocks: [
        {
          type: 'p',
          text: 'A common way to turn a SWOT into strategy is to combine its boxes.',
        },
        {
          type: 'table',
          head: ['Pair', 'The question'],
          rows: [
            ['Strength + Opportunity', 'How can we use our strengths to seize this opportunity?'],
            ['Strength + Threat', 'How can our strengths blunt this threat?'],
            ['Weakness + Opportunity', 'How can this opportunity help us fix a weakness?'],
            ['Weakness + Threat', 'Where are we most exposed? How do we avoid or reduce it?'],
          ],
        },
      ],
    },
    {
      kicker: 'Watch out',
      title: 'Common traps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Putting an **outside** factor under strengths or weaknesses, or an inside one under threats.',
            'Writing long lists of vague points with no evidence.',
            'Listing items but never saying **what to do** about them.',
            'Calling something a strength without comparing it to **competitors**.',
            'Treating the SWOT as finished. The environment changes, so it must be reviewed.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'SWOT', def: 'A framework that combines internal strengths and weaknesses with external opportunities and threats.' },
    { term: 'Strength', def: 'An internal factor that helps the firm compete, ideally a resource that passes the VRIO test.' },
    { term: 'Weakness', def: 'An internal factor that holds the firm back relative to competitors.' },
    { term: 'Opportunity', def: 'An external factor the firm can use to its advantage, found through PESTEL and Five Forces.' },
    { term: 'Threat', def: 'An external factor that could harm the firm, found through PESTEL and Five Forces.' },
  ],
  cards: [
    { front: 'Which tool feeds S and W?', back: 'Internal analysis, especially VRIO.' },
    { front: 'Which tools feed O and T?', back: 'External analysis: PESTEL and Five Forces.' },
    { front: 'Inside or outside?', back: 'Strengths and weaknesses are internal. Opportunities and threats are external.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'FC Barcelona: a SWOT drawn from one year’s results',
    note: 'A real club’s 2024–25 figures sorted into a SWOT. The figures are as reported in October 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The raw facts',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Sponsorship income', value: '€259M', note: 'an all-time high' },
              { label: 'Merchandising', value: '€170M', note: 'up 55%' },
              { label: 'Debt', value: '€469M', note: '€90M below a year earlier' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'Revenue reached €994M, up €100M. The club still lost €17M after tax.',
              'Wages took 54% of revenue.',
              'The club was not yet playing at its rebuilt stadium. Once it is fully open, it is expected to add about €50M to next season’s accounts.',
              'Sales of personal seat licenses were reported at more than €70M, and a €15M fine for breaching UEFA’s financial rules was settled.',
            ],
          },
        ],
      },
      {
        kicker: 'SWOT',
        title: 'Sorting the facts',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Strengths (inside)',
                text: 'Record sponsorship, linked in the report to a new Nike deal. Strong merchandising growth, up 55%. Revenue near €1bn.',
              },
              {
                title: 'Weaknesses (inside)',
                text: 'Still loss-making. Debt of €469M. Wages at 54% of revenue leave little room.',
              },
              {
                title: 'Opportunities (outside)',
                text: 'The rebuilt stadium coming fully online, expected to add about €50M. Seat-license sales above €70M show there is demand for premium seating.',
              },
              {
                title: 'Threats (outside)',
                text: 'Financial rules from the sport’s regulator, as the settled €15M UEFA fine shows.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'Judgment calls',
            text: 'Some items could sit in either box. The stadium is an opportunity as a future revenue source, and a weakness while it limits the club’s income today. A good SWOT states which view it takes and why.',
          },
        ],
      },
      {
        kicker: 'From picture to action',
        title: 'Pairing the boxes',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Strength + Opportunity:** use the record sponsorship and brand pull to sell premium seating in the finished stadium.',
              '**Weakness + Threat:** with debt high and rules strict, the club must keep wages in check so a bad year does not trigger another fine.',
            ],
          },
          {
            type: 'p',
            text: 'These pairings are our own reading of the published figures, offered as a model of how to reason.',
          },
        ],
      },
      {
        kicker: 'Sources',
        title: 'Where these figures come from',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'Barça post losses again, but talk of financial crisis looks over as revenues near €1bn',
                url: 'https://www.insideworldfootball.com/2025/10/08/barca-post-losses-talk-financial-crisis-looks-revenues-near-e1bn/',
                note: 'Inside World Football, 8 October 2025. Revenue, loss, debt, wage ratio, sponsorship, merchandising, seat-license sales, the expected stadium effect and the settled UEFA fine. The SWOT sorting is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'A SWOT for Kestrel Racing',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'The inputs',
        title: 'What the earlier analysis found',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**VRIO:** the data and analyst culture is valuable, rare, costly to imitate and well organized. A wind tunnel only gives parity.',
              '**PESTEL:** younger fans prefer short clips, and cheaper sensors make real-time content possible. A host country may tax foreign-owned events.',
              '**Five Forces:** supplier power is high (two engine makers, one tyre supplier) and rivalry is high.',
            ],
          },
        ],
      },
      {
        kicker: 'The SWOT',
        title: 'Kestrel’s four boxes',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'Strengths', text: 'A data and analyst culture rivals cannot copy. A growing online fan community.' },
              { title: 'Weaknesses', text: 'A mid-sized budget. A large share of income from one title sponsor.' },
              { title: 'Opportunities', text: 'Short-clip content for younger fans. Real-time data features for sponsors.' },
              { title: 'Threats', text: 'Engine suppliers raising prices. A rich new team joining the Series. A possible host-country tax.' },
            ],
          },
        ],
      },
      {
        kicker: 'Action',
        title: 'Turning it into strategy',
        blocks: [
          {
            type: 'table',
            head: ['Pair', 'Kestrel’s move'],
            rows: [
              ['Strength + Opportunity', 'Use the data culture to launch real-time race stats that younger fans and sponsors want'],
              ['Strength + Threat', 'Use data insight to cut engine usage costs and soften the supplier-price threat'],
              ['Weakness + Opportunity', 'Sell digital sponsorship packages to widen the sponsor base'],
              ['Weakness + Threat', 'Lock in the title sponsor on a long contract before a rich rival can bid'],
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ practice
  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'Which tool is mainly used to identify strengths and weaknesses?',
      options: ['VRIO', 'PESTEL', 'Five Forces', 'Strategic groups'],
      answer: 0,
      explanation: 'VRIO evaluates the firm’s own resources. PESTEL and Five Forces look outside and feed opportunities and threats.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A rival team with a big budget plans to join the Series. In a SWOT for Kestrel, this is a…',
      options: ['Threat', 'Weakness', 'Strength', 'Opportunity'],
      answer: 0,
      explanation: 'It is outside the firm and harmful, so it is a threat. Five Forces would call it the threat of new entrants.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Kestrel earns 60% of its income from one title sponsor. In a SWOT this belongs under…',
      options: ['Weaknesses', 'Threats', 'Opportunities', 'Strengths'],
      answer: 0,
      explanation: 'It is a feature of Kestrel itself (inside the firm) and it is harmful, so it is a weakness.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which move pairs a strength with an opportunity?',
      options: [
        'Using a unique data culture to launch real-time stats for younger fans',
        'Signing the title sponsor to a long contract to block a rich rival',
        'Selling digital sponsorship packages to widen the sponsor base',
        'Trimming costs to survive a tax',
      ],
      answer: 0,
      explanation: 'The data culture is a strength. Younger fans wanting live stats is an opportunity. The move uses one to capture the other.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which is the most common weakness in a student SWOT?',
      options: [
        'Mixing inside and outside factors, and listing items without evidence or action',
        'Using too many tools',
        'Comparing the firm with competitors',
        'Prioritizing the list',
      ],
      answer: 0,
      explanation: 'Sort carefully between inside and outside, be specific, compare with rivals, and prioritize. A vague, unsorted list with no action is the usual failure.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Put each into a SWOT box for Kestrel and name the tool that would produce it: (a) high supplier power, (b) five seasons of unique car data, (c) younger fans shifting to short clips, (d) a mid-sized budget.',
      answer: [
        '**(a)** **Threat.** Five Forces (supplier power).',
        '**(b)** **Strength.** VRIO (valuable, rare, costly to imitate, organized).',
        '**(c)** **Opportunity.** PESTEL (sociocultural trend).',
        '**(d)** **Weakness.** Internal analysis comparing Kestrel’s resources with those of rivals.',
      ],
      review: { section: 'plain', slide: 1 },
    },
  ],

  videos: [],
};
