// International Sports Governance, Session 6: competitive balance and the three dimensions of integrity.
// Built from the Session 6 slides (headings and key lines), with figures checked against the sources in the real example.
// Where the slides give only a heading, this guide explains the idea in general terms and says so.

export const competitiveBalanceIntegrityTopic = {
  id: 'competitive-balance-integrity',
  course: 'sport-governance',
  title: 'Competitive balance and the three dimensions of integrity',
  sessions: 'Session 6',
  reading: 'Session 6 slides',
  minutes: 30,
  summary:
    'Why sport needs uncertain outcomes, what rules try to protect them (and whether they work), and how threats to fair competition link to personal, competition and institutional integrity.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Warm-up',
      title: 'Sport, or spectacle?',
      blocks: [
        {
          type: 'p',
          text: 'The session opens with a question: is a well-known boxing match between a 58-year-old former champion and a 27-year-old online star **an athletic contest that measures excellence**, or **entertainment built around a famous name**?',
        },
        {
          type: 'columns',
          items: [
            { title: 'Signs of sport', text: 'Comparable conditions, agreed rules, results that reflect skill, the same weight class, uncertain outcome.' },
            { title: 'Signs of spectacle', text: 'Special rules to suit the show, big gaps between competitors, a result that matters less than the attention.' },
          ],
        },
        { type: 'p', text: 'The details of this fight are in the real example. The question matters because sport only keeps its value if people believe the contest is real and fair.' },
      ],
    },
    {
      kicker: 'The idea',
      title: 'What is competitive balance?',
      blocks: [
        {
          type: 'big',
          text: '“A more or less equal distribution of talent is necessary if there is to be uncertainty of outcome.” (Simon Rottenberg, 1956)',
        },
        {
          type: 'p',
          text: '**Competitive balance** means that teams or athletes are close enough in strength that results cannot be predicted from the start. The slides give three basic assumptions behind it:',
        },
        {
          type: 'steps',
          items: [
            '**Unequal resources lead to unequal competition.** The richest clubs buy the best talent.',
            '**Fans lose interest when outcomes are too predictable.**',
            '**Certain redistribution tools can raise uncertainty** (for example drafts, salary caps and revenue sharing).',
          ],
        },
        {
          type: 'callout',
          title: 'Spot the assumptions',
          text: 'Each assumption is a claim that can be tested. The rest of this topic tests them.',
        },
      ],
    },
    {
      kicker: 'A test',
      title: 'Does balance really drive interest?',
      blocks: [
        {
          type: 'p',
          text: 'The slides raise a paradox: **dominance sells too**. Fans pay to see great teams win, and many love an underdog story just because it is rare.',
        },
        {
          type: 'p',
          text: 'Other things also explain demand besides balance, and the slides name some of them:',
        },
        {
          type: 'bullets',
          items: [
            '**Home win probability:** supporters like to see their side win more often than not.',
            '**Match significance:** a game that decides a title or a relegation draws more attention.',
            '**Star players:** a famous name can fill a stadium even in a lopsided match.',
          ],
        },
        {
          type: 'callout',
          title: 'What this means',
          text: 'Balance is one driver of interest among several. A rule that improves balance at the cost of stars or rivalries may lower interest, so “more balance” is not automatically better.',
        },
      ],
    },
    {
      kicker: 'The tools',
      title: 'Policies that protect balance',
      blocks: [
        {
          type: 'table',
          head: ['Tool', 'How it is meant to work', 'Typical question'],
          rows: [
            ['Draft (reverse order)', 'Weakest teams pick the best new players first', 'Does it reward losing on purpose (tanking)?'],
            ['Salary cap / cost cap', 'Limits what each team can spend', 'Does the limit apply to everything that matters?'],
            ['Revenue sharing', 'Richer teams pay into a pool shared with others', 'Is the pool big enough to change anything?'],
            ['Collective selling of media rights', 'Competition sells rights together and splits the money', 'The slides say: no clear effect on balance'],
            ['Squad and spending rules', 'Link spending to income', 'Aim may be sustainability, not balance'],
          ],
        },
        {
          type: 'callout',
          title: 'Balance versus competition law',
          text: 'In EU law, protecting balance is a **legitimate aim, if the measure is proportionate**. A rule that restricts clubs or players more than needed to reach the aim can be challenged.',
        },
      ],
    },
    {
      kicker: 'Two case studies',
      title: 'Football’s spending rules versus Formula 1’s cost cap',
      blocks: [
        {
          type: 'p',
          text: 'The slides compare UEFA’s financial rules with the Formula 1 cost cap. Their main points:',
        },
        {
          type: 'bullets',
          items: [
            '**Two distinct objectives, not opposite ones:** financial sustainability and competitive balance.',
            '**Today’s rules mostly target sustainability**, not balance.',
            '**The reference point of a limit decides its effect.** A limit tied to a club’s own income keeps big clubs big. A flat cap for everyone, like F1’s, pulls teams toward the same level.',
            '**Sustainability rules have not improved balance** in European football, according to the slides.',
          ],
        },
        {
          type: 'callout',
          title: 'The trilemma',
          text: 'The slides say European football faces a trilemma, not a simple trade-off. Look at your lecture notes for the three goals; this guide does not guess them.',
        },
      ],
    },
    {
      kicker: 'Threats',
      title: 'What can disturb the balance of probability?',
      blocks: [
        {
          type: 'p',
          text: 'Balance is about the **probability** of each side winning. Anything that moves that probability away from what the rules intend is a threat:',
        },
        {
          type: 'flow',
          items: [
            { title: 'Resources', text: 'Money, facilities, coaching' },
            { title: 'Talent flows', text: 'Transfers, nationality changes' },
            { title: 'Rule differences', text: 'Eligibility, categories' },
            { title: 'Cheating', text: 'Doping, age or equipment manipulation, match-fixing' },
          ],
        },
        {
          type: 'p',
          text: 'The first three are about **structure**: who has what. The last is about **honesty**. That is where balance meets integrity.',
        },
      ],
    },
    {
      kicker: 'Two athletics cases',
      title: 'Transfers of allegiance and differences in sex development',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Transfer of allegiance',
              text: 'Athletes who change nationality can strengthen one team and weaken another. The rules aim to preserve balance by limiting quick, purely opportunistic switches. World Rugby and World Athletics use different conditions; the AI exercise compares them.',
            },
            {
              title: 'Differences in sex development',
              text: 'Rules on eligibility for women’s events set fairness for the category against the rights of individual athletes. It is a clash of two legitimate values, not a simple right-or-wrong case.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Careful with details',
          text: 'Eligibility rules change. For exact conditions, read the current rules of each federation and the court decisions, not summaries.',
        },
      ],
    },
    {
      kicker: 'Integrity',
      title: 'The three dimensions of integrity',
      blocks: [
        {
          type: 'p',
          text: 'Integrity in sport can be looked at on three levels. The course outline and the research literature use the same three:',
        },
        {
          type: 'table',
          head: ['Dimension', 'Question it asks', 'Examples of threats'],
          rows: [
            ['Personal (individual)', 'Do athletes and officials act honestly?', 'Doping, bribe-taking, age manipulation'],
            ['Competition', 'Is the contest fair and its result reliable?', 'Match-fixing, equipment manipulation, unequal conditions'],
            ['Institutional', 'Are the bodies that run sport honest and accountable?', 'Corruption, conflicts of interest, weak integrity units'],
          ],
        },
        {
          type: 'p',
          text: 'The same event often touches several dimensions. A doped athlete (personal) harms the fairness of the race (competition) and a federation that hides it (institutional) harms trust in the whole system.',
        },
      ],
    },
    {
      kicker: 'Method',
      title: 'Did the fix work, or move the problem?',
      blocks: [
        {
          type: 'p',
          text: 'The AI exercise gives three options: tanking and the reverse draft, Champions League revenue distribution, or transfers of allegiance in rugby and athletics. In every case ask the same question:',
        },
        {
          type: 'steps',
          items: [
            '**State the purpose:** what balance problem was the rule meant to solve?',
            '**Find the actual rule:** the real numbers and conditions, not a summary.',
            '**Look for evidence of effect:** did the measure change behavior or outcomes?',
            '**Look for side effects:** did the problem simply move somewhere else?',
            '**Check what the AI told you** against the rules and the data.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Competitive balance', def: 'A situation where teams or athletes are close enough in strength that outcomes are uncertain.' },
    { term: 'Uncertainty of outcome', def: 'Not knowing in advance who will win. Seen as a key reason why people watch.' },
    { term: 'Rottenberg (1956)', def: 'Economist who argued that an equal distribution of talent is needed for uncertain outcomes.' },
    { term: 'Reverse-order draft', def: 'A system where the worst teams choose new players first.' },
    { term: 'Tanking', def: 'Losing on purpose to improve a draft position.' },
    { term: 'Cost cap', def: 'A limit on what a team may spend on specified items.' },
    { term: 'Transfer of allegiance', def: 'An athlete’s change of nationality to represent a different country.' },
    { term: 'Personal, competition and institutional integrity', def: 'Three levels at which sport’s honesty can be threatened: individuals, the contest, and the bodies that run it.' },
    { term: 'Proportionality', def: 'A measure should go no further than necessary to reach its aim.' },
  ],
  cards: [
    { front: 'Rottenberg’s idea (1956)', back: 'A more or less equal distribution of talent is necessary for uncertainty of outcome.' },
    { front: 'Three assumptions behind competitive balance', back: 'Unequal resources mean unequal competition; fan interest falls when outcomes are predictable; redistribution tools can raise uncertainty.' },
    { front: 'Balance in EU law', back: 'A legitimate aim, if the measure is proportionate.' },
    { front: 'The “paradox” of balance', back: 'Dominance sells too: stars, rivalries and underdog stories also drive demand.' },
    { front: 'The three dimensions of integrity', back: 'Personal (individual), competition, institutional.' },
    { front: 'Questions to ask of any balance-protecting rule', back: 'What was its purpose? What are the real rules? Did it work? Did it move the problem?' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Four cases: a boxing show, a cost cap, a lottery and the Enhanced Games',
    note: 'Cases used in or close to the Session 6 slides. Figures and dates from the cited sources, as of November 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Tyson versus Paul: sport or spectacle?',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Rounds', value: '8 × 2 min', note: 'instead of the usual 3-minute rounds' },
              { label: 'Gloves', value: '14 oz', note: 'instead of 10 oz for heavyweights' },
              { label: 'Ages', value: '58 vs 27', note: 'a gap of over 30 years' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The fight took place at AT&T Stadium in Arlington, Texas, on 15 November 2024. It was licensed by the Texas Department of Licensing and Regulation and sanctioned as a professional bout that counts on both fighters’ records.',
              'The special rules were made with safety in mind, but they raise the question of whether the contest was built more for entertainment.',
              'The slides add a governance point: seven US states kept the fight off their betting boards, which shows regulators disagreed on how to treat it.',
            ],
          },
          {
            type: 'p',
            text: 'Apply the lens: comparable conditions (age and weight), agreed rules, and a result that measures skill. Where it falls short, the contest looks more like spectacle.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'Formula 1: a flat cap to level the field',
        blocks: [
          {
            type: 'bars',
            title: 'Formula 1 cost cap per team',
            unit: 'm USD',
            items: [
              { label: '2021', value: 145 },
              { label: '2022', value: 140 },
              { label: '2023 to 2025', value: 135 },
              { label: '2026', value: 215 },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The cap was introduced for 2021. It covers spending that directly affects car performance, for example design and manufacturing of new aerodynamic parts.',
              'It excludes items such as driver salaries, the three highest-paid staff, marketing and race travel. What is left out matters as much as the number.',
              'F1 describes two aims: to “level things up” between richer and poorer teams, and to protect teams’ long-term financial stability.',
              'For 2026 the figure rises by 80 million to 215 million, which F1 says is roughly neutral overall once rule changes are accounted for.',
            ],
          },
          {
            type: 'callout',
            title: 'Why it contrasts with football',
            text: 'A flat cap uses the same reference point for every team. A rule tied to each club’s own income can leave the ranking of rich and poor unchanged.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'The NBA lottery: a fix aimed at tanking',
        blocks: [
          {
            type: 'p',
            text: 'In the NBA, the worst teams get the best chances at the top draft picks. That created an incentive to lose on purpose. The league reformed its draft lottery for 2019:',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Old odds, worst team', value: '25%', note: 'chance of the No. 1 pick' },
              { label: 'New odds', value: '14%', note: 'for each of the three worst teams' },
              { label: 'Fourth-worst', value: '12.5%', note: 'falling to 0.7% for the 14th' },
            ],
          },
          {
            type: 'p',
            text: 'Sports Illustrated described the change as putting the bottom three on an even playing field and said it should reduce drastic tanking for the top pick. Whether it did is an empirical question: the exercise asks you to check the evidence, not the headline.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'The Enhanced Games: where balance meets integrity',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The Enhanced Games, held in Las Vegas in May 2026, allow performance-enhancing drugs that are banned in mainstream sport.',
              'Athletes were paid. The first-place prize in each event was 250,000 USD, and a 1 million USD bonus went to athletes who beat a world record. One swimmer, Kristian Gkolomeev, won it with a 50 m freestyle time of 20.81 seconds, faster than the recognized record of 20.88.',
              'That mark will not be entered in the record books because of the event’s drug policy. In the 100 m, Fred Kerley ran 9.97, well short of the 9.58 world record.',
            ],
          },
          {
            type: 'callout',
            title: 'Integrity reading',
            text: 'Personal integrity (rules on drugs), competition integrity (are the times comparable with records set under other rules?) and institutional integrity (who recognizes the results?) are all in play. It is a useful case for the three dimensions.',
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
                title: 'Mike Tyson vs. Jake Paul fight rules explained',
                url: 'https://www.thewrap.com/tyson-vs-paul-rules-rounds-amendments/',
                note: 'TheWrap, 15 November 2024. Venue, eight two-minute rounds, 14 oz gloves, ages 58 and 27, professional sanctioning.',
              },
              {
                title: 'Explained: what is the F1 cost cap and why has it gone up?',
                url: 'https://www.formula1.com/en/latest/article/explained-what-is-the-f1-cost-cap-and-why-has-it-gone-up.2tYtDIe5SbE5utjThctBT3',
                note: 'Formula1.com. Cap by year, what it covers and excludes, its aims, and the 2026 figure of 215 million.',
              },
              {
                title: 'NBA draft lottery changes: odds, tanking teams',
                url: 'https://www.si.com/nba/2019/nba-draft-lottery-changes-odds-tanking-teams-knicks-bulls-cavs',
                note: 'Sports Illustrated, 2019. The new odds of 14%, 12.5% and 0.7%, against 25% before.',
              },
              {
                title: 'Kerley runs 9.97 at Enhanced Games, where Gkolomeev gets a $1M bonus for swimming mark',
                url: 'https://www.foxsports.com/articles/summer/kerley-runs-997-at-enhanced-games-where-kristian-gkolomeev-gets-a-1m-bonus-for-swimming-mark',
                note: 'Fox Sports, 25 May 2026. Prize money, the drug policy and why the record will not be recognized.',
              },
              {
                title: 'Uncertainty by regulation: Rottenberg’s invariance principle',
                url: 'https://researchdiscovery.drexel.edu/esploro/outputs/journalArticle/Uncertainty-by-regulation-Rottenbergs-invariance-principle/991019168866504721',
                note: 'Journal article record. Rottenberg’s 1956 argument that drafts and reservation systems may not change talent allocation.',
              },
              {
                title: 'Sports integrities: a conceptual and methodological framework for analysis and policymaking',
                url: 'https://repositorio.iscte-iul.pt/handle/10071/31844',
                note: 'Moriconi and McNamee. A framework that argues for three conceptions of integrity: personal, competition and institutional.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Northern Cup League’s revenue pool',
    universe: 'northern',
    slides: [
      {
        kicker: 'The proposal',
        title: 'A pool to narrow the gap',
        blocks: [
          {
            type: 'p',
            text: 'The Northern Cup League has four clubs of very different size. The league wants a revenue pool: every club puts 20% of its revenue into a pot, and the pot is shared equally.',
          },
          {
            type: 'bars',
            title: 'Revenue before the pool',
            unit: 'm',
            items: [
              { label: 'Club A', value: 240 },
              { label: 'Club B', value: 120 },
              { label: 'Club C', value: 80 },
              { label: 'Club D', value: 60 },
            ],
          },
          {
            type: 'p',
            text: 'Total revenue is 500 million, so the pool is 100 million and each club receives 25 million.',
          },
        ],
      },
      {
        kicker: 'The result',
        title: 'What changes, and what does not',
        blocks: [
          {
            type: 'bars',
            title: 'Revenue after the pool',
            unit: 'm',
            items: [
              { label: 'Club A', value: 217 },
              { label: 'Club B', value: 121 },
              { label: 'Club C', value: 89 },
              { label: 'Club D', value: 73 },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The gap between the biggest and smallest club falls from **4.0 times** (240 / 60) to about **3.0 times** (217 / 73).',
              'Club A still has three times the money of Club D, so the league is more balanced but far from equal.',
              'If the clubs also earn separately from sponsors and gate receipts, those can widen the gap again.',
            ],
          },
        ],
      },
      {
        kicker: 'Analysis',
        title: 'Did the fix work, or move the problem?',
        blocks: [
          {
            type: 'table',
            head: ['Step', 'Finding'],
            rows: [
              ['Purpose', 'Narrow the resource gap so results are less predictable'],
              ['Real rule', '20% of revenue, shared equally'],
              ['Effect on resources', 'Gap down from 4.0 to about 3.0 times'],
              ['Side effects', 'Club A may argue it pays 48 million and receives 25 million, a net loss of 23 million. It may threaten to leave'],
              ['Proportionality', 'A modest pool is easier to defend as proportionate than a full equalization'],
            ],
          },
          {
            type: 'p',
            text: 'The pool helps, but only partly. The league should track results, not only revenue, to see whether outcomes became less predictable.',
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
      q: 'Which statement best matches Rottenberg’s (1956) idea?',
      options: [
        'A more or less equal distribution of talent is needed for uncertainty of outcome',
        'Dominant teams always reduce fan interest',
        'Salary caps always improve balance',
        'Competitions should be sold collectively',
      ],
      answer: 0,
      explanation: 'The quote on the slide links equal talent distribution to uncertain outcomes. Whether specific rules achieve it is a separate, testable question.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What does the “paradox” on the slides mean?',
      options: [
        'Dominance also sells: stars, rivalries and underdog stories drive demand, so balance is not the only factor',
        'Balanced leagues always earn more',
        'Fans never care about results',
        'Unequal leagues never attract viewers',
      ],
      answer: 0,
      explanation: 'Balance is one driver among several, along with home win probability, match significance and star players.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'In EU law, how is a rule that protects competitive balance viewed?',
      options: [
        'As a legitimate aim, if the measure is proportionate',
        'As always illegal',
        'As always legal, whatever its effects',
        'As irrelevant to competition law',
      ],
      answer: 0,
      explanation: 'Balance can justify restrictions, but the measure must not go further than needed.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Why can a flat cost cap such as Formula 1’s level the field more than a rule tied to each club’s own income?',
      options: [
        'Everyone has the same limit, so richer teams cannot outspend others on covered items',
        'It bans all spending',
        'It sets driver salaries',
        'It removes the need for rules on eligibility',
      ],
      answer: 0,
      explanation: 'The reference point of a limit decides its effect. A limit tied to income keeps big clubs big. Remember, though, that the F1 cap excludes items such as driver salaries.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'After the NBA’s 2019 lottery reform, what is each of the three worst teams’ chance of the No. 1 pick?',
      options: ['14%', '25%', '10%', '0.7%'],
      answer: 0,
      explanation: 'Before the change the worst team had 25%. Now the three worst each have 14%, the fourth 12.5%, falling to 0.7% for the 14th.',
      review: { section: 'real', slide: 2 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'In the Northern Cup League pool, what is the ratio of the biggest to the smallest club’s revenue after the pool (to one decimal place)?',
      options: ['3.0', '4.0', '2.0', '1.0'],
      answer: 0,
      explanation: 'After the pool, Club A has 217 and Club D has 73. 217 divided by 73 is about 3.0, down from 4.0 (240 / 60).',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise (observation, integration, critique). Choose one: (a) tanking and the reverse draft, (b) Champions League revenue distribution and domestic balance, or (c) transfers of allegiance in rugby and athletics. Ask: did the fix work, or did it move the problem elsewhere? Write a short analysis using the five-step method.',
      answer: [
        '**Purpose.** For (a): the reverse draft aims to help weak teams, but it can reward losing on purpose.',
        '**Real rule.** The NBA reformed its lottery for 2019 so that the three worst teams each have a 14% chance of the top pick, against 25% for the worst team before.',
        '**Evidence of effect.** Look at data on losing patterns and team strategies before and after. The press said the change should reduce drastic tanking; whether it did needs checking.',
        '**Side effects.** A flatter lottery may reduce the reward for being worst but still reward being bad, and may push the problem to other seasons or other rules.',
        '**Verification.** Save the AI answer, compare it with the real odds and any statistics, and say where the AI was wrong or vague.',
      ],
      review: { section: 'plain', slide: 8 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain the idea of competitive balance and the three assumptions behind it. Then give one reason why more balance is not always better for a competition.',
      answer: [
        'Competitive balance means teams or athletes are close enough in strength that outcomes are uncertain. Rottenberg (1956) argued that a more or less equal distribution of talent is needed for uncertainty of outcome.',
        'Three assumptions: unequal resources lead to unequal competition; fan interest declines when outcomes become less uncertain; specific redistribution mechanisms can produce more uncertainty.',
        'More balance is not always better because dominance also sells: star players, rivalries and match significance drive demand, so a rule that levels teams could reduce the appeal of great teams or players.',
        'A good answer adds that balance rules must also be proportionate under EU competition law.',
      ],
      marking: [
        '2 marks: definition and the Rottenberg idea.',
        '3 marks: the three assumptions.',
        '2 marks: a reasoned point on why balance is not always better.',
        '1 mark: link to proportionality or another relevant legal point.',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Describe the three dimensions of integrity in sport and use one example to show that a single event can touch all three.',
      answer: [
        'The three dimensions are personal (individual), competition and institutional integrity.',
        'Personal integrity concerns whether athletes and officials act honestly. Competition integrity concerns whether the contest is fair and the result reliable. Institutional integrity concerns whether the bodies running sport are honest and accountable.',
        'Example: a doping case. The doped athlete breaches personal integrity. The race loses fairness, which is competition integrity. If the federation hides or ignores the case, institutional integrity is harmed too.',
        'The Enhanced Games can also be used: drug rules, comparability of results with records, and who recognizes the results.',
      ],
      marking: [
        '3 marks: the three dimensions named and explained.',
        '3 marks: an example that clearly links all three.',
      ],
    },
  ],

  videos: [],
};
