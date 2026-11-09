// Techway, Chapter 6: Creativity and brainstorming (the GENIUS framework).
// Built from Chapter 6 of the Techway lesson document (three levels of augmented creativity, GENIUS = Generate /
// Explore / Navigate / Incubate / Unify / Synthesize with its eleven session techniques, product, problem-solving and
// strategy applications, five creative blockages, managing abundance, continuous innovation, creative metrics and
// creative autonomy; the lesson numbers 22 techniques in all).
// Real example: Doshi and Hauser, "Generative AI enhances individual creativity but reduces the collective diversity
// of novel content", Science Advances vol. 10, no. 28 (2024), as summarized by ScienceDaily on 16 July 2024.

export const creativityGeniusTopic = {
  id: 'creativity-genius',
  course: 'techway',
  title: 'Creativity and brainstorming: the GENIUS framework',
  sessions: 'Chapter 6',
  reading: 'Techway lesson, Chapter 6',
  minutes: 45,
  summary:
    'Use AI as a creative partner, not just a faster writer. Learn the GENIUS framework (Generate, Explore, Navigate, Incubate, Unify, Synthesize), application to products, problems and strategy, how to beat creative blocks, how to manage abundance and how to keep your own originality.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The idea',
      title: 'Creativity is collision and exploration, not lonely genius',
      blocks: [
        {
          type: 'big',
          text: 'Great ideas usually come from **colliding different perspectives**, **combining things that do not obviously fit** and **systematically exploring possibilities**. AI is very good at all three.',
        },
        {
          type: 'table',
          head: ['Level', 'What the AI does', 'Limit or gain'],
          rows: [
            ['1. Creative assistant', 'Produces ideas on demand, helps you past blocks, offers variations.', 'Stays inside your usual way of thinking.'],
            ['2. Creative partner', 'Challenges assumptions, explores unexpected directions, mixes your ideas with outside views.', 'Greatly widens the field.'],
            ['3. Innovation catalyst', 'Co-creates live, reveals links you would not see, turns constraints into opportunities.', 'Lets you innovate beyond what you could alone.'],
          ],
        },
        {
          type: 'callout',
          title: 'Remember Chapter 1',
          text: 'The AI recombines patterns it learned. It does not have lived experience or taste. The value is in the **combination of its breadth with your judgment**.',
        },
      ],
    },
    {
      kicker: 'The framework',
      title: 'GENIUS: six stages of a creative session',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'G: Generate', text: 'Produce lots of ideas.' },
            { title: 'E: Explore', text: 'Map the space of possibilities.' },
            { title: 'N: Navigate', text: 'Sort and prioritize.' },
            { title: 'I: Incubate', text: 'Let ideas mature.' },
            { title: 'U: Unify', text: 'Join the best ideas into one coherent whole.' },
            { title: 'S: Synthesize', text: 'Distill into actions.' },
          ],
        },
        {
          type: 'p',
          text: 'The lesson gives 11 techniques inside GENIUS and 11 more for applications and habits (22 in total). You do not memorize every template; you learn the **logic** of each stage and can name an example technique for each.',
        },
      ],
    },
    {
      kicker: 'G: Generate',
      title: 'Quantity first: dimensional brainstorming and forced association',
      blocks: [
        {
          type: 'p',
          text: 'Principle: **quantity generates quality**. The more you explore, the likelier you find something exceptional.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Technique 1: Dimensional brainstorming', text: 'Explore every dimension of a challenge. **Time:** how would it be solved in 1950, in 2050, in 5 minutes, with 10 years and no limits? **Sector:** how would entertainment, the military, art, medicine or nature solve it? **Constraints:** zero budget, 24 hours, a banned obvious solution, a forced odd element.' },
            { title: 'Technique 2: Forced association', text: 'List 10 random everyday objects and find three links from each to your challenge: functional (how it could solve it), metaphorical (what analogy it reveals) and paradoxical (what useful contradiction it hints at). Example: a toaster for training suggests perfect timing, “toasting” knowledge to make it appetizing, or controlled frustration to keep attention.' },
          ],
        },
      ],
    },
    {
      kicker: 'E: Explore',
      title: 'Map the “impossible” and borrow other minds',
      blocks: [
        {
          type: 'p',
          text: 'The lesson claims we naturally explore only a small part (5 to 10%) of the possible solutions and AI can help map the rest. Treat that percentage as a memorable illustration, not a measured fact.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Technique 3: Mapping the impossibles', text: 'List 15 things that would solve your challenge but seem technically, financially, legally, culturally or time-wise impossible. For each, ask what *exactly* makes it impossible, whether that is permanent, whether the impossible has become possible elsewhere, and how to go around it. Then turn five into opportunities by changing the scale, timing, angle or partner.' },
            { title: 'Technique 4: Extreme personas', text: 'View the problem as very different characters would: a radical minimalist (remove everything superfluous), an obsessive optimizer (10 times more ambitious), a philosophical poet (human uplift), a creative engineer (art plus science), a social entrepreneur (positive impact), a digital disruptor (rethink the user experience).' },
          ],
        },
        {
          type: 'callout',
          title: 'Use personas as styles',
          text: 'Naming famous people is a shortcut to a way of thinking. The AI gives a plausible imitation of an approach, not what that person would really say. Do not present its output as a real quote.',
        },
      ],
    },
    {
      kicker: 'N: Navigate',
      title: 'Sort the flood of ideas',
      blocks: [
        {
          type: 'p',
          text: 'AI can produce hundreds of ideas in minutes. The risk is drowning. Navigation tools:',
        },
        {
          type: 'table',
          head: ['Technique', 'How it works'],
          rows: [
            ['5. Creative potential matrix', 'Score each idea from 1 to 5 on **potential impact** (size, reach, durability), **feasibility** (resources, complexity, resistance), **differentiating originality** (novelty, surprise, hard to copy) and **strategic alignment** (fit with goals, strengths and vision).'],
            ['6. Intuitive clustering', 'Give the AI your raw list (say 50 ideas) and ask it to find 5 to 7 natural themes without forcing categories, show how themes connect through “bridge” ideas, and name the meta-pattern behind them all.'],
          ],
        },
      ],
    },
    {
      kicker: 'I: Incubate',
      title: 'Let ideas mature on purpose',
      blocks: [
        {
          type: 'p',
          text: 'Many best ideas come after stepping away. AI can structure that.',
        },
        {
          type: 'steps',
          items: [
            '**Technique 7, programmed incubation.** Saturation (about 10 minutes): the AI asks you 20 questions about your challenge. Digression (15): drop the challenge and talk about a different fascinating topic. Re-emergence (10): return and ask what unexpected links appear. Crystallization (5): state the deepest insight in one sentence.',
            '**Technique 8, fertile questions.** Ask questions that trigger insight: *deconstruction* (what do we assume that might not be true?), *inversion* (how would we guarantee failure?), *amplification* (what if a billion people used it?), *temporality* (what will make this obsolete?).',
          ],
        },
      ],
    },
    {
      kicker: 'U: Unify',
      title: 'Turn many good ideas into one coherent solution',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Technique 9: Synthesis through contradiction', text: 'List contradictions between your top 5 ideas (method, resources, philosophy, timing). For each, find three ways to make them complementary: sequence them, segment by context, or hybridize. Then design an overall architecture that uses these tensions instead of avoiding them.' },
            { title: 'Technique 10: Innovation storytelling', text: 'Tell the idea in three acts: the frustration (the problem and why earlier attempts failed), the revelation (your approach and what is different), the realization (the new world it makes possible). Ask for the emotional essence and the story archetype.' },
          ],
        },
      ],
    },
    {
      kicker: 'S: Synthesize',
      title: 'Distill to what you will do this week',
      blocks: [
        {
          type: 'p',
          text: '**Technique 11, progressive distillation** narrows the whole session:',
        },
        {
          type: 'flow',
          items: [
            { title: 'Level 1', text: 'Capture everything (about 100 items).' },
            { title: 'Level 2', text: 'Select 20 using impact × originality × feasibility.' },
            { title: 'Level 3', text: 'Concentrate to 5 key insights.' },
            { title: 'Level 4', text: 'Crystallize 1 central revelation.' },
            { title: 'Level 5', text: 'Turn it into 3 actions to start this week.' },
          ],
        },
        {
          type: 'callout',
          title: 'A full first session',
          text: 'The lesson suggests Generate with two techniques (30 minutes), Explore the impossibles (20), Navigate (15), one Incubation (20), Unify by contradiction (15) and a final Synthesis (10), with a journal, top five surprises and a week plan as outputs.',
        },
      ],
    },
    {
      kicker: 'Application 1',
      title: 'Product innovation',
      blocks: [
        {
          type: 'p',
          text: 'The shift is from user-centered design to design amplified by collective intelligence. The **InnovationLab** assistant is configured with a domain, target users, constraints and a vision, and works with methods such as augmented jobs-to-be-done (unspoken needs), contradiction engineering (constraints become features), future-back design (start from the ideal future) and cross-pollination (inspiration from other sectors). It can work in revolutionary, evolutionary or disruptive mode.',
        },
        {
          type: 'callout',
          title: 'Technique 12: Innovation through reverse friction',
          text: 'List every friction (first use, daily use, mastering, social adoption, emotional frustration), then ask how each could become a desirable feature. Example: a steep learning curve becomes a progressive mastery journey that turns users into experts.',
        },
      ],
    },
    {
      kicker: 'Application 2',
      title: 'Problem solving beyond brainstorming',
      blocks: [
        {
          type: 'p',
          text: 'Classic brainstorming explores variations of the known. These techniques push into the unknown.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Technique 13: Impossible constraints', text: 'Add extreme limits: zero budget with premium results; works instantly and for 50 years; use only technology from 100 years ago; works for one person and a billion; combine the logic of three incompatible sectors.' },
            { title: 'Technique 14: Anti-solution', text: 'Design the worst possible solution (worst users, experience, side effects, business model, technology), reverse each element into a creative opposite that creates value, then combine the best reversals.' },
          ],
        },
      ],
    },
    {
      kicker: 'Application 3',
      title: 'Business strategy',
      blocks: [
        {
          type: 'p',
          text: 'The **StrategyGenius** assistant is set with your sector, competitive position (leader, challenger, niche), key resources and ambition, and uses frameworks such as an amplified blue-ocean approach, platform design, exponential strategy and anti-fragile models, from 360° stakeholder, time and probabilistic views.',
        },
        {
          type: 'callout',
          title: 'Technique 15: Strategy through creative contradiction',
          text: 'Map the contradictions everyone accepts in your sector (quality versus price, speed versus personalization, simplicity versus sophistication, local versus global, profit versus social impact). For each, imagine a business model that turns the opposition into synergy, then assemble them into one model.',
        },
      ],
    },
    {
      kicker: 'Blockages',
      title: 'Five creative blocks and an AI antidote for each',
      blocks: [
        {
          type: 'table',
          head: ['Block', 'Sounds like', 'Antidote prompt idea'],
          rows: [
            ['Blank page', '“I don’t know where to start.”', '“Give me 10 starting points, each with a first question and first action.”'],
            ['Paralyzing perfectionism', '“It’s not good enough yet.”', '“Make 5 imperfect versions in different directions; we’ll refine the best.”'],
            ['Too much convergent thinking', '“I always find the same kind of answer.”', '“Challenge each idea with its opposite and find a synthesis.”'],
            ['Fear of judgment', '“What if it’s silly?”', '“Give 10 deliberately ridiculous ideas and show the seed of value in each.”'],
            ['Cognitive overload', '“Too much information.”', '“Organize everything into at most 3 categories and find the hidden thread.”'],
          ],
        },
      ],
    },
    {
      kicker: 'Abundance',
      title: 'Too many ideas? Filter for you and for impact',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Technique 16: Personal coherence filter', text: 'Write your non-negotiable values, preferred way of creating impact, energy gains and drains, and best conditions and resources. Ask the AI to judge ideas for fit with *you*, not only brilliance.' },
            { title: 'Technique 17: Exponential impact', text: 'Prioritize ideas with a domino effect: multiplier effect (generates other ideas), network effect (more adoption makes it stronger), learning effect (teaches us for later), time effect (grows in value). Score = Multiplier × Network × Learning × Time.' },
          ],
        },
      ],
    },
    {
      kicker: 'Habits',
      title: 'Continuous innovation and how to measure it',
      blocks: [
        {
          type: 'table',
          head: ['Technique', 'Idea'],
          rows: [
            ['18. Daily micro-innovations', 'Improve 1% a day: Monday optimize a micro-process, Tuesday test a new approach, Wednesday find an unexpected connection, Thursday question an assumption, Friday combine the week into one insight.'],
            ['19. Extended innovation network', 'Four circles: internal innovators, external experts from other sectors, leading-edge users, and specialized AI assistants.'],
            ['20. Personal creative audit', 'Each month review your best innovations, lessons and blocks; when you are most creative; what to develop next; and one experiment, habit and collaboration to commit to.'],
          ],
        },
        {
          type: 'p',
          text: 'Creative metrics fall into four groups: **generation** (ideas per session, variety, novelty), **transformation** (ideas turned into prototypes and implemented, measured impact), **personal evolution** (comfort with uncertainty, willingness to challenge your own ideas, enjoyment, confidence) and **systemic impact** (problems solved, people affected, opportunities revealed).',
        },
      ],
    },
    {
      kicker: 'Mastery',
      title: 'Your signature and passing it on',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Technique 21, signature method:** write down your favorite sources of inspiration, your best creative process and rituals, and what makes your innovations recognizable.',
            '**Technique 22, creative multiplier:** demonstrate results first, train three people, help them build their own style, and let them train others (1, then 3, 9, 27 in four cycles).',
            '**Signs of mastery:** you generate unexpected ideas in dialogue with AI, move between pure creativity and feasibility, turn constraints into opportunities, create your own methods, inspire others and anticipate what will make today’s solutions obsolete.',
            '**Responsibility:** use amplified creative power for something worthwhile, and keep checking originality, facts and rights before you publish.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'GENIUS', def: 'The lesson’s creativity framework: Generate, Explore, Navigate, Incubate, Unify, Synthesize.' },
    { term: 'Augmented creativity', def: 'Using AI as a partner in generating, exploring and refining ideas while the human sets direction and judges the result.' },
    { term: 'Dimensional brainstorming', def: 'Exploring a challenge along dimensions such as time, sector and constraints to produce varied ideas.' },
    { term: 'Forced association', def: 'Deliberately linking a challenge with unrelated objects to reveal unexpected connections.' },
    { term: 'Mapping the impossibles', def: 'Listing apparently impossible solutions, analyzing what makes them impossible and turning some into opportunities.' },
    { term: 'Extreme personas', def: 'Viewing a challenge from the perspective of radically different characters or mindsets.' },
    { term: 'Creative potential matrix', def: 'A grid scoring ideas on impact, feasibility, differentiating originality and strategic alignment.' },
    { term: 'Intuitive clustering', def: 'Asking the AI to find natural themes, bridges and a meta-pattern in a long list of ideas.' },
    { term: 'Programmed incubation', def: 'A planned cycle of saturation, digression, re-emergence and crystallization to let ideas mature.' },
    { term: 'Fertile question', def: 'A question that triggers many insights, such as one that deconstructs, inverts, amplifies or shifts time.' },
    { term: 'Synthesis through contradiction', def: 'Unifying ideas by finding where they clash and turning each tension into complementarity.' },
    { term: 'Innovation storytelling', def: 'Telling an innovation as a three-act story of frustration, revelation and realization.' },
    { term: 'Progressive distillation', def: 'Narrowing a session from about 100 items to 20, then 5, then 1 insight and 3 actions.' },
    { term: 'Reverse friction', def: 'Turning the frictions in a product into desirable features.' },
    { term: 'Impossible constraints', def: 'Extreme, even paradoxical limits added to a problem to stimulate inventive solutions.' },
    { term: 'Anti-solution', def: 'Designing the worst possible solution and then reversing each element into a good one.' },
    { term: 'Coherence filter', def: 'Your personal criteria (values, energy, strengths) used to judge which ideas suit you.' },
    { term: 'Exponential impact score', def: 'Multiplier × Network × Learning × Time effect, used to favor ideas with domino effects.' },
    { term: 'Micro-innovation', def: 'A very small daily improvement that accumulates over time.' },
    { term: 'Creative audit', def: 'A regular review of your creative results, patterns, blocks and next experiments.' },
  ],
  cards: [
    { front: 'GENIUS in order', back: 'Generate, Explore, Navigate, Incubate, Unify, Synthesize.' },
    { front: 'Three levels of augmented creativity', back: 'Creative assistant, creative partner, innovation catalyst.' },
    { front: 'Principle of Generate', back: 'Quantity generates quality.' },
    { front: 'Three dimensions of dimensional brainstorming', back: 'Temporal, sectoral, constraint.' },
    { front: 'Three links in forced association', back: 'Functional, metaphorical, paradoxical.' },
    { front: 'Four ways to turn an impossible into an opportunity', back: 'Change the scale, the timing, the angle or the partner.' },
    { front: 'Four criteria of the creative potential matrix', back: 'Potential impact, feasibility, differentiating originality, strategic alignment.' },
    { front: 'Four phases of programmed incubation', back: 'Saturation, digression, re-emergence, crystallization.' },
    { front: 'Four kinds of fertile question', back: 'Deconstruction, inversion, amplification, temporality.' },
    { front: 'How to unify conflicting ideas', back: 'Map the tensions, then sequence, segment or hybridize them into complementarity.' },
    { front: 'Progressive distillation levels', back: '~100 items, 20, 5, 1 insight, 3 actions this week.' },
    { front: 'Reverse friction example', back: 'A steep learning curve becomes a progressive mastery journey.' },
    { front: 'Anti-solution method', back: 'Design the worst solution, reverse each element, combine the best reversals.' },
    { front: 'Five creative blocks', back: 'Blank page, perfectionism, convergent thinking, fear of judgment, cognitive overload.' },
    { front: 'Exponential impact score', back: 'Multiplier × Network × Learning × Time.' },
    { front: 'Daily micro-innovation week', back: 'Optimize, experiment, connect, question, synthesize.' },
    { front: 'Creative multiplier', back: 'Demonstrate, train three, empower them, let them spread: 1, 3, 9, 27.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real study: AI makes individual stories better but more alike',
    note: 'Doshi and Hauser, Science Advances vol. 10, no. 28 (2024), as summarized by ScienceDaily on 16 July 2024. Percentages are left out because the summary gives them in an unclear way.',
    slides: [
      {
        kicker: 'The experiment',
        title: 'Writers with and without AI ideas',
        blocks: [
          {
            type: 'p',
            text: 'About **300 participants** wrote eight-sentence micro-stories for young adults. They were split into three groups: **no AI help**, **one AI-generated idea** (a three-sentence story starter from ChatGPT) or **up to five AI-generated ideas** to pick from. A separate group of about **600 people rated** the stories for novelty and usefulness.',
          },
          {
            type: 'columns',
            items: [
              { title: 'What improved', text: 'Stories written with AI ideas were rated more novel and useful. Writers who started out **less creative** gained the most, narrowing the gap with naturally more creative writers.' },
              { title: 'What worsened', text: 'Stories from writers using AI ideas were **more similar to each other**. Individually better, collectively less varied.' },
            ],
          },
        ],
      },
      {
        kicker: 'Why it matters',
        title: 'A creativity dilemma for GENIUS users',
        blocks: [
          {
            type: 'table',
            head: ['Finding', 'Lesson for the GENIUS framework'],
            rows: [
              ['AI helped most those with less creative skill.', 'AI is a powerful starter for the blank page (Blockage 1).'],
              ['Outputs became more alike.', 'If everyone asks the same question the same way, ideas converge. Use forced association, extreme personas, impossible constraints and your own coherence filter to move away from the typical.'],
              ['The authors warned of reduced collective novelty.', 'Add **your own experience** and sources not common in the training data, and check originality before publishing.'],
            ],
          },
          {
            type: 'callout',
            title: 'A habit to build',
            text: 'After you collect AI ideas, ask: “What would a completely different industry do?” and “What is the idea that nobody else will have?” Use the AI to move away from the average.',
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
                title: 'Generative AI enhances individual creativity but reduces the collective diversity of novel content (summary)',
                url: 'https://www.sciencedaily.com/releases/2024/07/240712222127.htm',
                note: 'ScienceDaily, July 2024, summarizing Doshi and Hauser in Science Advances.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: a GENIUS session on empty weekday seats',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The challenge',
        title: 'Fill the stadium on Tuesday evenings',
        blocks: [
          {
            type: 'p',
            text: 'Beacon Athletic’s midweek cup games draw about half the crowd of weekend matches (an invented figure for this fictional club). The marketing lead runs a 90-minute GENIUS session with an assistant, using no private fan data.',
          },
          {
            type: 'steps',
            items: [
              '**Generate:** dimensional brainstorming: how would a cinema, a night market and a school solve this? How would the club solve it with a budget of zero? Forced association with “umbrella”, “bakery”, “library”.',
              '**Explore:** map impossibles such as “free transport for everyone”. What exactly makes it impossible? Could a partner (a bus company) make a version possible?',
              '**Navigate:** score ideas on impact, feasibility, originality and alignment. Cluster 40 ideas into themes like “family evenings”, “community nights” and “after-work crowd”.',
            ],
          },
        ],
      },
      {
        kicker: 'Mature and combine',
        title: 'Incubate, unify, synthesize',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Incubate:** the AI asks 20 questions, then the team talks about something unrelated (street-food festivals), then returns and finds links.',
              '**Unify:** two top ideas clash: “cheap tickets for students” versus “premium evening hospitality”. Resolved by context segmentation: student terraces plus premium boxes.',
              '**Synthesize:** the long list is distilled to one insight (“Tuesday is a social night, not a sports night”) and three actions for this week.',
            ],
          },
          {
            type: 'callout',
            title: 'Human judgment',
            text: 'Costs, safety and ticket-pricing rules are checked by the finance and operations leads before any idea is announced.',
          },
        ],
      },
      {
        kicker: 'Risks',
        title: 'Keeping it original',
        blocks: [
          {
            type: 'bullets',
            items: [
              'If every club asks for “fan engagement ideas” in the same words, they will get similar answers. Beacon adds its own local facts and its coherence filter (values: community first, no gimmicks).',
              'Use of famous names as “personas” is only a thinking style; nothing is attributed to them in public material.',
              'Slogans and campaign names are checked to make sure they are not already in use by others.',
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
      q: 'Which description matches the “innovation catalyst” level of augmented creativity?',
      options: [
        'AI only generates ideas on demand inside your usual framework.',
        'AI co-creates in real time, reveals connections you would not see and turns constraints into opportunities.',
        'AI is switched off.',
        'AI writes the final report alone.',
      ],
      answer: 1,
      explanation: 'Level 3 is a deep collaboration that lets you innovate beyond your individual capabilities. Level 1 stays within your thinking; level 2 challenges assumptions.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What does the “G” in GENIUS stand for, and what is its foundational principle?',
      options: [
        'Generate; quantity generates quality.',
        'Guess; trust your gut.',
        'Gather; collect only one idea.',
        'Group; ideas should be shared.',
      ],
      answer: 0,
      explanation: 'The Generate stage encourages creative proliferation: the more you explore, the likelier you find a gem.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'In forced association, which three kinds of link do you look for between a random object and your challenge?',
      options: [
        'Functional, metaphorical, paradoxical',
        'Fast, cheap, good',
        'Past, present, future',
        'Red, green, blue',
      ],
      answer: 0,
      explanation: 'Functional (could it solve it), metaphorical (what analogy it reveals) and paradoxical (what productive contradiction).',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'What is the purpose of “mapping the impossibles”?',
      options: [
        'To prove nothing can change.',
        'To list apparent impossibilities, find out what exactly makes them impossible and turn some into opportunities.',
        'To reduce the number of ideas.',
        'To avoid brainstorming.',
      ],
      answer: 1,
      explanation: 'It deconstructs impossibilities and changes scale, timing, angle or partner to create opportunities.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which criteria are in the creative potential matrix?',
      options: [
        'Impact, feasibility, differentiating originality, strategic alignment',
        'Speed, color, weight, price',
        'Length, tone, audience, role',
        'Past, present, future, luck',
      ],
      answer: 0,
      explanation: 'Each idea is scored 1 to 5 on these four criteria to help you navigate abundance.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'In programmed incubation, what is the role of the “digression” phase?',
      options: [
        'To end the session early.',
        'To step completely away from the challenge and talk about something different so the mind can make fresh links.',
        'To restate the problem 20 times.',
        'To grade the ideas.',
      ],
      answer: 1,
      explanation: 'The four phases are saturation, digression, re-emergence and crystallization. Digression lets ideas mature.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Two of your best ideas contradict each other. What does “synthesis through contradiction” recommend?',
      options: [
        'Drop both.',
        'Find ways to turn the tension into complementarity (sequence, segment or hybridize) and design a whole that uses the tension.',
        'Pick the cheaper idea.',
        'Ask someone else.',
      ],
      answer: 1,
      explanation: 'It maps tensions and converts them into complementarity instead of avoiding them.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Progressive distillation narrows a session in which order?',
      options: [
        'About 100 elements, then 20, then 5, then 1 insight, then 3 actions',
        '1, 5, 20, 100',
        '3, 2, 1',
        '100, 100, 100',
      ],
      answer: 0,
      explanation: 'It captures everything, selects on impact × originality × feasibility, concentrates, crystallizes and activates.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'What does “reverse friction” suggest you do with product frustrations?',
      options: [
        'Hide them.',
        'Map them, then ask how each could become a desirable feature.',
        'Ignore them.',
        'Charge users extra.',
      ],
      answer: 1,
      explanation: 'A steep learning curve, for example, becomes a progressive mastery journey.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'In the anti-solution approach, what do you do first?',
      options: [
        'Design the worst possible solution.',
        'Write the final report.',
        'Ask for a budget.',
        'Choose the best idea.',
      ],
      answer: 0,
      explanation: 'First design the worst solution, then reverse each element into its creative opposite and combine the best reversals.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'You say “I don’t know where to start.” Which antidote fits?',
      options: [
        'Ask for 10 possible starting points, each with a first question and first action.',
        'Wait for inspiration.',
        'Delete the file.',
        'Ask for a 100-page report.',
      ],
      answer: 0,
      explanation: 'This is the “creative starter” technique for the blank page syndrome.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'How is the exponential impact score calculated?',
      options: [
        'Multiplier × Network × Learning × Time',
        'Cost + time',
        'Ideas ÷ people',
        'Impact − risk',
      ],
      answer: 0,
      explanation: 'It favors ideas that generate other ideas, grow with adoption, teach us for later and gain value over time.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q13',
      type: 'mcq',
      q: 'Which group of creativity metrics includes “ideas converted into prototypes”?',
      options: ['Generation metrics', 'Transformation metrics', 'Personal evolution metrics', 'Systemic impact metrics'],
      answer: 1,
      explanation: 'Transformation metrics cover prototypes, successfully implemented innovations, measured impact and influence on the team.',
      review: { section: 'plain', slide: 13 },
    },
    {
      id: 'q14',
      type: 'mcq',
      q: 'What did Doshi and Hauser find about stories written with AI-generated ideas?',
      options: [
        'They were worse and more varied.',
        'They were rated more novel and useful for many writers, especially the less creative, but were more similar to one another.',
        'They were identical to human stories.',
        'Nothing changed.',
      ],
      answer: 1,
      explanation: 'The study showed an individual creativity boost but a loss of collective diversity.',
      review: { section: 'real', slide: 0 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A sports club wants new ways to attract young adults to women’s matches. Plan a GENIUS session: name the six stages, give one technique and one example prompt for each stage, and say how you would end with concrete actions.',
      answer: [
        'Generate: dimensional brainstorming. “Generate 10 ideas imagining this challenge in 2050, in a cinema, in a music festival and with zero budget.” Explore: mapping the impossibles. “List 15 things that would fill our women’s games but seem impossible, then analyze what exactly makes each impossible and how a partner or a change of scale could help.”',
        'Navigate: creative potential matrix or clustering. “Score each idea from 1 to 5 on impact, feasibility, originality and alignment with our values; cluster the rest into 5-7 themes.” Incubate: programmed incubation. “Ask me 20 questions about the challenge, then discuss an unrelated topic, then return and find unexpected links.” Unify: synthesis through contradiction. “Map the tensions between my top five ideas and turn each into complementarity by sequencing, segmenting or hybridizing.”',
        'Synthesize: progressive distillation. “Recap all insights, select the 20 with the best impact × originality × feasibility, then 5, then one central insight, then convert it into three actions for this week.” The actions are checked by people for cost, safety and fit with the club’s values, and any facts or numbers are verified.',
      ],
      marking: [
        'All six stages named in order (2)',
        'A correct technique for each stage (3)',
        'Relevant example prompts (2)',
        'Ends with concrete actions (distillation) (2)',
        'Human review or verification mentioned (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A colleague complains: “The AI’s ideas all sound the same, and I never find anything original.” Using the chapter and the Doshi and Hauser study, explain why this happens and suggest at least three ways to push the AI toward more diverse ideas.',
      answer: [
        'A language model predicts the most plausible continuation based on patterns in its training data, so ideas drift toward the typical. If many people use similar prompts, outputs converge. The study found that AI ideas improved individual stories but made stories more similar to each other, reducing collective diversity.',
        'Ways to diversify: use forced association with unrelated objects; ask for extreme personas or very different sectors; add impossible constraints (zero budget, ban the obvious solution); use the anti-solution method or perspective inversion; use fertile questions that invert or deconstruct the problem; supply your own experience and local facts and apply a personal coherence filter; and request many imperfect versions in different directions.',
        'The human still decides which ideas are worth developing and should check originality and rights before publishing.',
      ],
      marking: [
        'Explains the tendency toward typical/plausible output (2)',
        'Refers to the study finding on collective diversity (2)',
        'Gives at least three valid diversification techniques (3)',
        'Mentions human judgment or originality checks (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Explain the “creative potential matrix” and the “exponential impact” score. For each, say what it is used for and give one limit.',
      answer: [
        'The creative potential matrix scores each idea from 1 to 5 on four criteria: potential impact, feasibility, differentiating originality and strategic alignment. It is used to prioritize among many ideas. A limit is that the scores are subjective, and the AI’s scoring can be biased or superficial, so people must review them.',
        'The exponential impact score multiplies four effects: multiplier (does it generate other ideas), network (does it grow stronger with adoption), learning (does it teach us for the future) and time (does it grow in value). It favors ideas with a domino effect. A limit is that multiplying four judgments magnifies any error in one of them, and a score of zero in one factor makes the whole product zero, so it should support, not replace, discussion.',
      ],
      marking: [
        'Matrix criteria listed (2)',
        'Exponential score factors listed (2)',
        'Purpose of each (1)',
        'A reasonable limit (1)',
      ],
    },
  ],

  videos: [],
};
