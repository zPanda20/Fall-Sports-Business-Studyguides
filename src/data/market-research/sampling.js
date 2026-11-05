// Market Research, Session 7: Sampling fundamentals and participant recruitment.
// Built from the Lesson 7 lecture slides (six sampling decisions, population / target population / sample / census,
// sampling frame and coverage, probability and non-probability techniques, sample size, recruitment channels,
// motivation and incentives, evaluating and interpreting the final sample, and the class activities).
// Real example: the 1936 Literary Digest presidential poll (Emory University math course page, "Famous Statistical
// Blunders in History"; Jeremy Norman's History of Information entry on the Literary Digest poll).

export const samplingTopic = {
  id: 'sampling',
  course: 'market-research',
  title: 'Sampling: techniques, criteria, size and recruitment',
  sessions: 'Session 7',
  reading: 'Session 7 slides (Lesson 7)',
  minutes: 35,
  summary:
    'How to decide who to study and how to reach them: define the target population, find a sampling frame, pick a selection technique, justify the sample size, recruit ethically and judge what the final sample can support.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Six decisions before you collect any data',
      blocks: [
        {
          type: 'big',
          text: 'Most research aims to learn about a **whole group** by studying **some of its members**. Sampling is how you choose those members, and it decides what you are allowed to conclude.',
        },
        {
          type: 'flow',
          items: [
            { title: '1. Define', text: 'the target population: who do we want to study?' },
            { title: '2. Identify', text: 'the sampling frame: where can we find eligible people?' },
            { title: '3. Choose', text: 'the technique: how will people be selected?' },
            { title: '4. Justify', text: 'the sample size: how many do we need?' },
            { title: '5. Recruit', text: 'how will we reach the selected people?' },
            { title: '6. Evaluate', text: 'who actually took part, and what limits remain?' },
          ],
        },
        {
          type: 'callout',
          title: 'Sampling quality starts before the questionnaire',
          text: 'A beautiful survey sent to the wrong people still gives the wrong answer.',
        },
      ],
    },
    {
      kicker: 'Step 1: Define',
      title: 'Population, target population, sample and census',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Population', text: 'All the units (people, households, organizations) that are relevant to a broad research area.' },
            { title: 'Target population', text: 'The precise group your findings are meant to describe.' },
            { title: 'Sample', text: 'The subset of the target population that actually takes part.' },
            { title: 'Census', text: 'Data from every member of the defined population. Accurate, but often slow, costly or impractical.' },
          ],
        },
        {
          type: 'p',
          text: 'A sample gives **estimates**. A census tries to give complete coverage. The lecture’s football example: the broad population is football supporters, the target is supporters who attend home games, and a census would reach every eligible match attendee.',
        },
      ],
    },
    {
      kicker: 'Step 1: Define',
      title: 'Turn a vague group into a research-ready one',
      blocks: [
        {
          type: 'table',
          head: ['Too broad', 'Research-ready'],
          rows: [
            ['“Formula 1 fans.”', '“Adults aged 18+ who attended at least one Formula 1 Grand Prix in Europe during the 2026 season.”'],
            ['“Sports consumers.”', '“Residents of Monaco aged 18–35 who bought a ticket to a live sports event in the last 12 months.”'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Geography.** Which country, city or venue?',
            '**Sport or product.** Which sport, league, event or service exactly?',
            '**Eligibility.** Who is in, and who is out (age, behavior, role)?',
            '**Time period.** When must they have done it?',
          ],
        },
        {
          type: 'p',
          text: 'The second example is our own illustration of the same four questions. Define eligibility **before** you recruit, so you can tell afterwards whether someone belonged in the study.',
        },
      ],
    },
    {
      kicker: 'Step 2: Identify',
      title: 'The sampling frame',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Target population', text: 'everyone the findings should describe' },
            { title: 'Sampling frame', text: 'the practical list or source people can be picked from' },
            { title: 'Sample', text: 'the people chosen from the frame' },
          ],
        },
        {
          type: 'columns',
          items: [
            { title: 'A good match', text: 'Target: all season-ticket holders. Frame: the club’s current ticketing database.' },
            { title: 'Coverage risk', text: 'A fan survey shared only on Instagram misses supporters who do not use Instagram.' },
          ],
        },
        {
          type: 'callout',
          title: 'The rule',
          text: 'The frame should match the target population **as closely as possible**. Anyone missing from the frame has no chance of being selected.',
        },
      ],
    },
    {
      kicker: 'Step 3: Choose',
      title: 'Probability versus non-probability sampling',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Probability sampling',
              text: 'Selection uses a **random procedure**. Every member has a known, non-zero chance of inclusion. This supports design-based inference when conditions are met.',
            },
            {
              title: 'Non-probability sampling',
              text: 'Selection is **not** based on known random probabilities. Useful when access is limited, but generalizing to the whole population is more restricted.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Two things students mix up',
          text: 'The difference is the **selection procedure**, not the number of responses. And “probability” does not have to mean “equal probability”: chances can differ as long as they are known and above zero.',
        },
      ],
    },
    {
      kicker: 'Step 3: Probability techniques',
      title: 'Four ways to build random selection into the design',
      blocks: [
        {
          type: 'table',
          head: ['Technique', 'How it works', 'Sport example'],
          rows: [
            ['Simple random', 'Draw names at random from a complete list.', 'Select 200 season-ticket holders.'],
            ['Systematic', 'Pick a random start, then take every kth name.', 'Every 10th entry in a fan list.'],
            ['Stratified', 'Divide the population into strata, then sample randomly within each.', 'Ticket categories, all represented.'],
            ['Cluster', 'Randomly select whole groups, then study all or some of their members.', 'Select sports clubs.'],
          ],
        },
        {
          type: 'p',
          text: 'In every one of these, random selection is built into the design. That is what makes the inclusion chances known.',
        },
      ],
    },
    {
      kicker: 'Step 3: Do not confuse them',
      title: 'Stratified versus cluster',
      blocks: [
        {
          type: 'table',
          head: ['', 'Stratified', 'Cluster'],
          rows: [
            ['How the population is divided', 'Into groups that differ on something important (strata)', 'Into natural groups (clusters), such as clubs or venues'],
            ['Who is selected', 'A random sample **from every** stratum', '**Some** clusters, chosen at random'],
            ['What gets included', 'All strata are included', 'Only the selected clusters are included'],
            ['Typical reason', 'Make sure each important group is represented', 'Save travel and cost when people are grouped'],
          ],
        },
        {
          type: 'callout',
          title: 'Quick test',
          text: 'Does every group appear in the final sample? Then it was **stratified**. Are whole groups missing because they were not picked? Then it was **cluster**.',
        },
      ],
    },
    {
      kicker: 'Step 3: Non-probability techniques',
      title: 'Four ways to select by access, criteria, quotas or referrals',
      blocks: [
        {
          type: 'table',
          head: ['Technique', 'How it works', 'Sport example'],
          rows: [
            ['Convenience', 'Recruit whoever is accessible.', 'Fans passing a stadium exit.'],
            ['Purposive', 'Recruit people with relevant expertise or traits.', 'Sponsorship directors.'],
            ['Quota', 'Set category targets, then recruit non-randomly to fill them.', '50 fans aged 18–34 and 50 aged 35+.'],
            ['Snowball', 'Ask eligible participants to refer others.', 'Professional athletes with sponsorship deals.'],
          ],
        },
        {
          type: 'p',
          text: '**Quota versus stratified** is the classic trap. Both use categories, but quota sampling fills the categories with whoever is easiest to reach, so it is non-probability.',
        },
      ],
    },
    {
      kicker: 'Step 3: Choosing',
      title: 'Which technique fits which situation?',
      blocks: [
        {
          type: 'table',
          head: ['Your situation', 'A sensible choice', 'Why'],
          rows: [
            ['You have a complete list and want to describe the whole group', 'Simple random or systematic', 'Everyone has a known chance'],
            ['Some groups are small but must be represented', 'Stratified', 'Every group is guaranteed a place'],
            ['People are grouped in venues or clubs and travel is costly', 'Cluster', 'You visit fewer places'],
            ['You need experts or a rare, hard-to-reach group', 'Purposive or snowball', 'There is no list to draw from'],
            ['Quick, cheap, exploratory work', 'Convenience', 'Fast, but state its limits clearly'],
          ],
        },
        {
          type: 'p',
          text: 'This table is our own summary of the lecture’s logic, not a slide. The principle to remember: pick the technique that matches your **purpose and access**, then be honest about what it allows you to claim.',
        },
      ],
    },
    {
      kicker: 'Step 4: Determine',
      title: 'How large should the sample be?',
      blocks: [
        {
          type: 'table',
          head: ['Factor', 'The question to ask'],
          rows: [
            ['Research purpose', 'Are you estimating a percentage, comparing groups or exploring a niche?'],
            ['Population variation', 'Are people very different from each other? More variety usually needs more observations.'],
            ['Desired precision or power', 'How precise must the estimate be, and how small an effect must you detect?'],
            ['Selection design', 'Strata, clusters and non-response change the planning.'],
            ['Time and feasibility', 'What do your access, budget and channels allow?'],
          ],
        },
        {
          type: 'callout',
          title: 'More responses is not the same as better representation',
          text: 'A defensible plan estimates the size from the key outcome, the precision wanted, the design and the expected response rate. “100 is a common number” is not a justification.',
        },
        {
          type: 'p',
          text: '**Optional extra, not in the slides:** for a percentage near 50% from a simple random sample, the margin of error is roughly 1 divided by the square root of n. That is about ±10 points at n = 100, ±5 at n = 400 and ±2.5 at n = 1,600. Quadrupling the sample only halves the error, and none of this fixes a biased frame.',
        },
      ],
    },
    {
      kicker: 'Step 5: Recruit',
      title: 'Where can we reach the right people?',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Direct or on-site', text: 'Approach people at stadiums, events or facilities. Example: spectators at different gates.' },
            { title: 'Email and membership lists', text: 'Use authorized club, league or federation databases. Example: randomly chosen season-ticket holders.' },
            { title: 'Online communities', text: 'Reach fans through social media, forums or newsletters. Example: an Instagram survey invitation.' },
            { title: 'Panels and gatekeepers', text: 'Use vetted panels, or reach people through trusted organizations. Example: federation-mediated invitations to athletes.' },
          ],
        },
        {
          type: 'callout',
          title: 'Channel is not technique',
          text: 'The **channel** is how you reach people (email, stadium, Instagram). The **technique** is how you pick them (random, quota, snowball). You can use random selection on an email list, or convenience selection on one.',
        },
      ],
    },
    {
      kicker: 'Step 5: Recruit',
      title: 'Every channel includes some people and misses others',
      blocks: [
        {
          type: 'table',
          head: ['Channel', 'Possible coverage problem', 'Possible improvement'],
          rows: [
            ['Stadium exit', 'Attendees who leave through one gate or at one time', 'Use different gates, days and match types'],
            ['Club email list', 'People with no current contact details', 'Update the list and monitor undelivered emails'],
            ['Social media post', 'People outside that platform or feed', 'Add other channels and disclose self-selection'],
            ['Professional network', 'People outside the gatekeepers’ networks', 'Recruit through several independent networks'],
          ],
        },
      ],
    },
    {
      kicker: 'Step 5: Participation',
      title: 'Why people agree, and how to ask fairly',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Relevance', text: 'Explain why the topic matters to this group.' },
            { title: 'Trust', text: 'Say who you are, how answers stay confidential and how data is used.' },
            { title: 'Convenience', text: 'Keep it short, mobile-friendly and flexible in timing.' },
            { title: 'Perceived value', text: 'Offer a summary of results or show how taking part could change something.' },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Incentives can help:** a small voucher, a summary of results, a modest gift or an acknowledgement.',
            '**Keep participation voluntary** and explain who is eligible for any incentive and on what conditions.',
            '**Avoid excessive rewards,** and never tie a reward to particular answers.',
            '**Protect privacy:** handle contact details separately from responses.',
          ],
        },
        {
          type: 'p',
          text: 'The aim is to reduce non-response **without** adding undue influence or bias.',
        },
      ],
    },
    {
      kicker: 'Step 6: Evaluate',
      title: 'Is the final sample fit for purpose?',
      blocks: [
        {
          type: 'cycle',
          center: 'Check the achieved sample',
          items: [
            { title: 'Eligibility', text: 'was everyone part of the target population?' },
            { title: 'Coverage', text: 'which groups had little or no chance of inclusion?' },
            { title: 'Non-response', text: 'who declined or did not finish?' },
            { title: 'Composition', text: 'are some groups over- or under-represented?' },
            { title: 'Transparency', text: 'can you describe recruitment, exclusions and limits?' },
          ],
        },
        {
          type: 'p',
          text: 'The **planned** sample and the **achieved** sample can differ. Evaluate what you really got.',
        },
      ],
    },
    {
      kicker: 'Step 6: Interpret',
      title: 'Report what the sample supports, and no more',
      blocks: [
        {
          type: 'table',
          head: ['Overclaim', 'Defensible statement'],
          rows: [
            [
              '“80% of all Formula 1 fans intend to buy official merchandise.”',
              '“Among 150 respondents recruited through Instagram, 80% reported purchase intention. The result cannot automatically be generalized to all F1 fans.”',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Selection bias is not cured by volume',
          text: 'Recruiting more people from the same biased source repeats the same bias with a bigger number.',
        },
      ],
    },
    {
      kicker: 'Practice from class',
      title: 'How to approach the activities',
      blocks: [
        {
          type: 'table',
          head: ['Activity', 'What a strong answer includes'],
          rows: [
            ['Who exactly should we study?', 'Turn “sports consumers” into geography, sport or product, eligibility and time period.'],
            ['Spot the coverage problem (VIP mailing list only)', 'Who is missing (general-admission and season-ticket fans), how that skews satisfaction upward, and extra sources such as the ticketing database or stadium-gate recruitment.'],
            ['Which sample-size justification is stronger?', 'Team B: it links size to outcome, precision, design and response rate. Still missing: the actual numbers and the population size.'],
            ['Design a recruitment strategy (women football coaches)', 'A purposive or snowball approach, gatekeepers such as federations and coaching associations, a clear and trustworthy invitation, and the main bias risk: only well-connected coaches are reached.'],
            ['Audit this sampling plan (75 VIP fans, one match)', 'At least four weaknesses with fixes: narrow frame, self-selection, one match and timing, tiny and unjustified sample, and an overclaiming conclusion.'],
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Population', def: 'All the units, such as people, households or organizations, that are relevant to a broad research area.' },
    { term: 'Target population', def: 'The precise group that the findings are meant to describe, defined with clear inclusion and exclusion criteria.' },
    { term: 'Sample', def: 'The subset of the target population that is actually included in the study.' },
    { term: 'Census', def: 'Collecting data from every member of the defined population.' },
    { term: 'Sampling frame', def: 'The practical list or source from which eligible people can be selected, such as a ticketing database.' },
    { term: 'Coverage error', def: 'A problem that occurs when the sampling frame leaves out part of the target population, so those people cannot be selected.' },
    { term: 'Probability sampling', def: 'Selection through a random procedure in which every member has a known, non-zero chance of inclusion.' },
    { term: 'Non-probability sampling', def: 'Selection that is not based on known random probabilities, for example by access, expertise, quotas or referrals.' },
    { term: 'Simple random sampling', def: 'Drawing units at random from a complete list.' },
    { term: 'Systematic sampling', def: 'Choosing a random starting point and then taking every kth unit on the list.' },
    { term: 'Stratified sampling', def: 'Dividing the population into strata and drawing a random sample within each one.' },
    { term: 'Cluster sampling', def: 'Randomly selecting whole groups, such as clubs, and then studying all or some of their members.' },
    { term: 'Convenience sampling', def: 'Recruiting whoever is easiest to reach.' },
    { term: 'Purposive sampling', def: 'Deliberately recruiting people with relevant expertise or characteristics.' },
    { term: 'Quota sampling', def: 'Setting targets for categories and then filling them non-randomly.' },
    { term: 'Snowball sampling', def: 'Asking participants to refer other eligible people.' },
    { term: 'Non-response', def: 'People who were invited but declined or did not complete the study. If they differ from responders, results are biased.' },
    { term: 'Self-selection', def: 'People decide for themselves whether to take part, so the sample may over-represent the keen or the opinionated.' },
    { term: 'Gatekeeper', def: 'A person or organization that controls access to a group, such as a club, league or federation.' },
    { term: 'Generalization', def: 'Applying findings from a sample to a wider group. It is only justified when the sample and selection support it.' },
  ],
  cards: [
    { front: 'The six sampling decisions', back: 'Define the target population, identify the frame, choose the technique, determine the size, recruit, evaluate the final sample.' },
    { front: 'Population vs target population', back: 'Population is the broad group. The target population is the precise group the findings should describe.' },
    { front: 'Sample vs census', back: 'A sample is a subset and gives estimates. A census collects data from every member.' },
    { front: 'What is a sampling frame?', back: 'The practical source from which eligible people can be selected. It should match the target population as closely as possible.' },
    { front: 'Probability vs non-probability', back: 'Probability: random selection with known, non-zero chances. Non-probability: selection by access, criteria, quotas or referrals.' },
    { front: 'Four probability techniques', back: 'Simple random, systematic, stratified, cluster.' },
    { front: 'Four non-probability techniques', back: 'Convenience, purposive, quota, snowball.' },
    { front: 'Stratified vs cluster', back: 'Stratified: a random sample from every group. Cluster: whole groups are randomly picked and the rest are left out.' },
    { front: 'Quota vs stratified', back: 'Both use categories. Quota fills them non-randomly, so it is non-probability.' },
    { front: 'Five factors in sample size', back: 'Research purpose, population variation, precision or power, selection design, time and feasibility.' },
    { front: 'Channel vs technique', back: 'Channel is how you reach people. Technique is how you select them.' },
    { front: 'Five checks on the final sample', back: 'Eligibility, coverage, non-response, composition, transparency.' },
    { front: 'Does recruiting more people fix selection bias?', back: 'No. It repeats the same bias with a bigger number.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: the 2.4 million answers that picked the wrong president',
    note: 'The 1936 Literary Digest poll. Figures are as stated in the two sources on the last slide. The two sources round the final result slightly differently, so it is given as an approximate value.',
    slides: [
      {
        kicker: 'The poll',
        title: 'The biggest straw poll of 1936',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Ballots mailed', value: '10 million', note: 'by The Literary Digest' },
              { label: 'Returned', value: '≈ 2.4 million', note: 'about 24%' },
              { label: 'Year', value: '1936', note: 'U.S. presidential election' },
            ],
          },
          {
            type: 'bullets',
            items: [
              '**Frame:** the magazine drew names from its own subscribers, automobile registration lists and telephone directories. One source adds country club memberships.',
              '**Prediction:** Alf Landon would beat Franklin D. Roosevelt, with 57% of the popular vote.',
              '**Result:** Roosevelt won with roughly 61% to 62% and carried all but two states.',
            ],
          },
        ],
      },
      {
        kicker: 'Why it failed',
        title: 'Two problems, one big sample',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Coverage and selection',
                text: 'In the Depression, owning a car, a phone or a club membership was more common among wealthier people. The frame left out many voters, and the ones it left out leaned the other way.',
              },
              {
                title: 'Non-response',
                text: 'Only about a quarter of the ballots came back. People who choose to answer can differ from those who do not.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'The lecture’s lesson, in one real number',
            text: '2.4 million answers did not rescue a frame that missed a large part of the target population. **Selection bias is not fixed simply by recruiting more people.**',
          },
        ],
      },
      {
        kicker: 'Map it to the six decisions',
        title: 'What a better design would have changed',
        blocks: [
          {
            type: 'table',
            head: ['Decision', 'What the Digest did', 'A stronger approach'],
            rows: [
              ['Target population', 'All voters, in principle', 'All voters, stated clearly'],
              ['Frame', 'Subscribers, car owners, phone listings', 'A frame that reaches voters without cars or phones'],
              ['Technique', 'Mass mailing to listed people', 'Random selection from a frame that matches the population'],
              ['Evaluation', 'Trusted the size of the sample', 'Check coverage and who did not respond'],
            ],
          },
          {
            type: 'p',
            text: 'The right-hand column is our own reading of the lecture’s framework applied to the case. It is not a claim about how the poll was actually run.',
          },
        ],
      },
      {
        kicker: 'Sources',
        title: 'Where these facts come from',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'Famous Statistical Blunders in History',
                url: 'https://math.oxford.emory.edu/site/math117/historicalBlunders/',
                note: 'Emory University, Math 117 course page. 10 million ballots, about 2.4 million returned, prediction 57% to 43%, lists used, sampling bias and non-response.',
              },
              {
                title: 'The Literary Digest straw poll of 1936',
                url: 'https://historyofinformation.com/detail.php?id=1349',
                note: 'Jeremy Norman’s History of Information. Subscribers, automobile registration lists and telephone directories; 2.4 million returned; Roosevelt carried all but two states.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers plan a match-day satisfaction survey',
    universe: 'harbor',
    slides: [
      {
        kicker: 'Steps 1 and 2',
        title: 'Define the target and find the frame',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers want to know how satisfied **home-match spectators** are with the stadium. They average **24,000** people per match.',
          },
          {
            type: 'table',
            head: ['Decision', 'The Rovers’ answer'],
            rows: [
              ['Target population', 'Adults aged 18+ who attended at least one Rovers home league match in 2025–26'],
              ['Why not “all fans”?', 'Fans who never come to the stadium cannot rate its services'],
              ['Frame', 'Ticketing database (season-ticket and online buyers) plus a gate-entry sample for people who paid cash'],
              ['Known gap', 'Cash buyers are not in the database, which is why the gate sample is added'],
            ],
          },
        ],
      },
      {
        kicker: 'The trap',
        title: 'What the VIP lounge would tell them',
        blocks: [
          {
            type: 'p',
            text: 'The three groups of spectators are not equal in size, and they feel differently. Satisfaction is scored from 1 to 5.',
          },
          {
            type: 'table',
            head: ['Group', 'Share of the crowd', 'Average satisfaction'],
            rows: [
              ['Season-ticket holders', '50% (12,000)', '3.9'],
              ['General admission', '40% (9,600)', '3.4'],
              ['Hospitality (VIP)', '10% (2,400)', '4.6'],
            ],
          },
          {
            type: 'bars',
            title: 'Average satisfaction (1 to 5)',
            unit: '',
            items: [
              { label: 'Hospitality (VIP)', value: 4.6 },
              { label: 'Season-ticket holders', value: 3.9 },
              { label: 'Whole crowd (weighted)', value: 3.77 },
              { label: 'General admission', value: 3.4 },
            ],
          },
          {
            type: 'p',
            text: 'Whole-crowd average: 0.50 × 3.9 + 0.40 × 3.4 + 0.10 × 4.6 = 1.95 + 1.36 + 0.46 = **3.77**. A VIP-only survey would report 4.6, which overstates satisfaction by about 0.83 points.',
          },
        ],
      },
      {
        kicker: 'Step 3: stratified',
        title: 'Make sure every group is represented',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers choose a **stratified** sample of 400 people, with the number in each stratum matching its share of the crowd.',
          },
          {
            type: 'table',
            head: ['Stratum', 'Share', 'Sample of 400'],
            rows: [
              ['Season-ticket holders', '50%', '200'],
              ['General admission', '40%', '160'],
              ['Hospitality (VIP)', '10%', '40'],
            ],
          },
          {
            type: 'callout',
            title: 'Why stratify here',
            text: 'A simple random sample could, by bad luck, include only a handful of VIP guests. Stratifying guarantees all three groups appear, and random selection inside each keeps it a probability design.',
          },
        ],
      },
      {
        kicker: 'Step 3: systematic',
        title: 'Picking the season-ticket holders',
        blocks: [
          {
            type: 'steps',
            items: [
              '**The list:** 12,000 season-ticket holders. The Rovers need 300 for another study.',
              '**The interval:** 12,000 ÷ 300 = every 40th name.',
              '**The start:** pick a random number between 1 and 40. Say it is 17.',
              '**The picks:** names 17, 57, 97, 137 and so on.',
            ],
          },
          {
            type: 'p',
            text: 'Check the idea of randomness: the start is random, but after that the rule is fixed. Watch out if the list has a hidden pattern, such as every 40th name being a family’s second ticket.',
          },
        ],
      },
      {
        kicker: 'Step 5 and 6',
        title: 'Recruit, then evaluate what came back',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Channels:** email invitations to the ticketing database, plus a tablet at three different gates on three different match days.',
              '**Invitation:** short, mobile-friendly, clear about confidentiality, with a promise to share a summary of results and a small prize draw that does not depend on any answer.',
              '**Evaluation:** 310 of 400 invited people finished (77.5%). General admission responded least, so the team checks whether that group is under-represented and says so in the report.',
            ],
          },
          {
            type: 'callout',
            title: 'The defensible conclusion',
            text: '“Among 310 spectators drawn from the ticketing database and from three gate samples, average satisfaction was 3.8. General-admission fans were slightly under-represented, so their score may be understated.”',
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
      q: 'What is the difference between a population and a target population?',
      options: [
        'The target population is the precise group the study aims to describe; the population is the broader group.',
        'The target population is always smaller than the sample.',
        'The population is surveyed and the target population is observed.',
        'There is no difference.',
      ],
      answer: 0,
      explanation: 'The population is the broad group relevant to the context. The target population is the specific group the findings are meant to apply to, defined with clear criteria.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A club shares a fan survey only on Instagram. What is the main risk?',
      options: [
        'Fans who do not use Instagram have no chance of being included.',
        'The survey will always have too many questions.',
        'The sample will be a census.',
        'The sample size will be too large.',
      ],
      answer: 0,
      explanation: 'This is a coverage problem. The frame (Instagram users who see the post) does not match the target population (all fans).',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which sampling technique relies on a random start followed by selecting every kth name?',
      options: ['Cluster', 'Systematic', 'Quota', 'Snowball'],
      answer: 1,
      explanation: 'That is systematic sampling. Example: every 10th entry in a fan list after a random starting point.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A researcher randomly selects 4 sports clubs out of 20 and surveys every member of those 4 clubs. This is…',
      options: ['Stratified sampling', 'Convenience sampling', 'Snowball sampling', 'Cluster sampling'],
      answer: 3,
      explanation: 'Whole groups (clubs) are randomly selected and the others are left out. In stratified sampling, every group would contribute.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A researcher sets a target of 50 fans aged 18–34 and 50 aged 35+, then recruits whoever is willing at the stadium gate until each target is met. This is…',
      options: ['Stratified random sampling', 'Quota sampling', 'Systematic sampling', 'Simple random sampling'],
      answer: 1,
      explanation: 'Quota sampling sets category targets and fills them non-randomly. It looks like stratified sampling but is a non-probability technique.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which statement about probability sampling is correct?',
      options: [
        'Every member has the same chance of selection, always.',
        'Each member has a known, non-zero chance of selection.',
        'It requires at least 1,000 respondents.',
        'It can only be used with online surveys.',
      ],
      answer: 1,
      explanation: 'The key is a random procedure with known, non-zero probabilities. They do not have to be equal.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which sample-size justification is the most defensible?',
      options: [
        '“We will use 100 because it is a common number.”',
        '“We will use whatever number replies in a week.”',
        '“We will base the size on the key outcome, the precision we want, the selection design and the expected response rate.”',
        '“Bigger is always better, so we will ask everyone we know.”',
      ],
      answer: 2,
      explanation: 'A sample size should be a reasoned decision. More responses does not automatically mean better representation.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which pair is correctly matched?',
      options: [
        'Stadium exit: possible problem is people with no contact details',
        'Club email list: possible problem is people who left through one gate',
        'Social media post: possible problem is people outside that platform or feed',
        'Professional network: possible problem is a list that is too accurate',
      ],
      answer: 2,
      explanation: 'A social media post misses people who are not on that platform. Stadium exits can miss people who leave at another time or gate, and email lists miss people without current contact details.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'A survey of 150 people recruited on Instagram finds 80% intend to buy official merchandise. Which conclusion is defensible?',
      options: [
        '“80% of all Formula 1 fans intend to buy merchandise.”',
        '“Among these 150 respondents, 80% reported purchase intention, and this cannot automatically be generalized to all fans.”',
        '“Formula 1 fans are loyal.”',
        '“The sample was a census.”',
      ],
      answer: 1,
      explanation: 'Report what the sample supports. The recruitment channel limits generalization.',
      review: { section: 'plain', slide: 14 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'In the 1936 Literary Digest poll, why did 2.4 million responses still give the wrong result?',
      options: [
        'The sample was too small.',
        'The frame and the replies did not represent the voters, so the bias remained however large the sample was.',
        'Everyone had been asked twice.',
        'Random sampling was used incorrectly.',
      ],
      answer: 1,
      explanation: 'The lists leaned toward wealthier people and only about a quarter replied. Recruiting more people does not repair a biased frame.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q11',
      type: 'open',
      q: 'Exercise. A club surveys 75 people in its VIP lounge right after one match. Participation is voluntary, and the report concludes that “all fans are highly satisfied.” List at least four weaknesses and give a practical fix for each.',
      answer: [
        '**Coverage and frame:** only VIP guests were reachable. Fix: sample from the ticketing database and at several gates so general-admission and season-ticket fans are included.',
        '**Self-selection:** only people who chose to stay and answer took part. Fix: invite a randomly selected list and follow up with non-responders.',
        '**Timing and representativeness:** one match, one moment, straight after the game. Fix: spread the survey across several matches and days.',
        '**Sample size:** 75 has no justification. Fix: set the size from the outcome, precision, design and expected response rate.',
        '**Overclaiming:** “all fans” goes far beyond the VIP lounge. Fix: report the result as applying to VIP respondents only, with the limits stated.',
      ],
      review: { section: 'plain', slide: 15 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A league wants to know how satisfied all spectators are with its stadium services. Explain the difference between probability and non-probability sampling, then recommend a sampling design for this study. In your answer, define the target population, name the frame, justify the technique and explain what could still limit the conclusions.',
      answer: [
        'Probability sampling uses a random procedure so that every member of the population has a known, non-zero chance of inclusion; this supports generalizing to the population when conditions are met. Non-probability sampling selects by access, criteria, quotas or referrals, so inclusion chances are unknown and generalization is more restricted. The difference lies in the selection procedure, not in the number of responses.',
        'Target population: adults aged 18+ who attended at least one home match this season. Frame: the ticketing database, supplemented by a gate-entry sample so that cash buyers are covered. A stratified design is appropriate because season-ticket, general-admission and hospitality spectators differ in size and in how satisfied they are; random selection inside each stratum guarantees each group is represented and keeps the design probability-based.',
        'The sample size should be justified from the key outcome, the precision wanted, the design and the expected response rate. Remaining limits: non-response (for example general-admission fans replying less), timing (one match), and gaps in the frame. The report should state what the final sample supports and not generalize beyond it.',
      ],
      marking: [
        'Correct definition of probability and non-probability sampling (2)',
        'Clear target population with inclusion criteria (1)',
        'A suitable frame that matches the target (1)',
        'Names a technique and justifies it for this case (2)',
        'Mentions sample-size reasoning (1)',
        'At least two remaining limitations such as non-response or coverage (2)',
        'States the conclusion should not exceed what the sample supports (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A club wants to study the experiences of women who work as professional football coaches. Explain why this is a difficult-to-reach population, choose a sampling technique, identify gatekeepers or channels, describe how you would invite participants and name the greatest risk of bias.',
      answer: [
        'This is a small, specialized group with no complete public list, so a random draw from a frame is not possible. A non-probability approach is appropriate: purposive sampling to recruit coaches with the relevant experience, combined with snowball sampling in which participants refer other eligible coaches.',
        'Gatekeepers and channels include national federations, coaching associations, club staff directories and professional networks. Recruiting through several independent networks reduces dependence on one gatekeeper.',
        'The invitation should be relevant (why the topic matters to this group), trustworthy (who the researcher is, confidentiality and data use), convenient (short, flexible timing) and clear about voluntary participation and any thank-you. The greatest risk of bias is that coaches who are well connected, more visible or more willing to speak are over-represented, while isolated coaches are missed, so findings must not be generalized to all women coaches.',
      ],
      marking: [
        'Explains why random sampling is not feasible (1)',
        'Chooses a suitable non-probability technique (2)',
        'Names gatekeepers or channels (2)',
        'Describes a relevant, trustworthy, ethical invitation (2)',
        'Identifies a plausible main bias and limits generalization (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'A report states: “We surveyed 500 fans through our Instagram page, so 85% of all football fans want the stadium to introduce cashless payments.” Evaluate the sampling plan and rewrite the conclusion so that it is defensible.',
      answer: [
        'The target population is not defined, and the frame (people who follow and see the club’s Instagram page) misses fans who do not use Instagram or do not follow the club. Participation is also self-selected, so people with strong views or heavy social media use may be over-represented. The channel is not a probability technique, so inclusion chances are unknown.',
        'The size of 500 does not repair these problems because selection bias is not fixed simply by recruiting more people. The sample-size choice has no stated justification, and the claim about “all football fans” goes far beyond a single club’s followers.',
        'Defensible version: “Among 500 respondents recruited through the club’s Instagram page, 85% supported cashless payments. Because respondents were self-selected from one platform, the result cannot automatically be generalized to all fans.” Improvements: define the target population, add the ticketing database and gate samples, and report who did not respond.',
      ],
      marking: [
        'Identifies the coverage problem in the frame (2)',
        'Identifies self-selection or non-response (2)',
        'States that a larger sample does not fix the bias (1)',
        'Flags the overgeneralization (1)',
        'Rewrites the conclusion with the right limits (1)',
        'Suggests at least one practical improvement to the design (1)',
      ],
    },
  ],

  videos: [],
};
