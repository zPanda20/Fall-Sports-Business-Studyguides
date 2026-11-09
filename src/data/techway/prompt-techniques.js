// Techway, Chapter 4: Prompt writing techniques.
// Built from Chapter 4 of the Techway lesson document (three levels of specification, progressive focus, four kinds of
// context and the 5-9 rule, the tone / style / audience triangle, few-shot prompting and the rule of three, five types
// of undesirable answers and how to correct them, performance multipliers, modular and conditional prompts).
// Real example: Brown et al. (2020), "Language Models are Few-Shot Learners" (the GPT-3 paper): tasks and a few
// demonstrations given purely as text, with no retraining of the model.

export const promptTechniquesTopic = {
  id: 'prompt-techniques',
  course: 'techway',
  title: 'Prompt writing techniques: precision, tone, few-shot and correction',
  sessions: 'Chapter 4',
  reading: 'Techway lesson, Chapter 4',
  minutes: 40,
  summary:
    'Go from prompts that work to prompts that excel: be specific without being wordy, choose strategic context, tune tone, style and audience, teach by example (few-shot), correct bad answers step by step, and use multipliers, modular and conditional prompts.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Precision',
      title: 'Clarity is relevance, not length',
      blocks: [
        {
          type: 'big',
          text: 'The goal is to be **precise enough to get what you want** without burying the key point in detail. Clarity comes from *strategic relevance*, not from quantity.',
        },
        {
          type: 'table',
          head: ['Level', 'What it sets', 'Required?', 'Examples'],
          rows: [
            ['1. Intent', 'The purpose you want to achieve.', 'Mandatory', 'Not “improve my communication” but “convince my team to adopt this method” or “prepare to negotiate this raise”.'],
            ['2. Constraints', 'The limits the AI must respect.', 'Recommended', 'Time (“15 minutes of reading”), budget (“under €1,000”), technical (“works with our CRM”), human (“for a team resistant to change”), regulatory (“GDPR compliant”).'],
            ['3. Style', 'How it should sound.', 'Optional but powerful', 'Emotional tone, formality, teaching approach, a reference such as “consulting-firm style”.'],
          ],
        },
      ],
    },
    {
      kicker: 'Calibration',
      title: 'Too little, too much, just right',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Too little', text: '“Help me with my presentation.” The AI must guess everything.' },
            { title: 'Too much', text: 'A 45-slide request that lists every operational detail of the whole region, team and quarter. The key goal disappears in the noise.' },
            { title: 'Balanced', text: 'Role + intent (reassure the board after client losses while celebrating wins) + constraints (max 12 slides, mixed audience, 3 key numbers) + style (direct, “problem, action, result”).' },
          ],
        },
        {
          type: 'callout',
          title: 'Progressive focus (the funnel)',
          text: 'For a complex topic, start broad, then narrow: (1) an overview of challenges and opportunities, (2) the 3 priorities with benefits and difficulty, (3) a detailed plan for priority number one. Each step uses the last one’s results.',
        },
      ],
    },
    {
      kicker: 'Context',
      title: 'Strategic context: four more kinds, and a limit',
      blocks: [
        {
          type: 'p',
          text: 'Chapter 4 describes context in four types that steer the answer’s approach. (Chapter 3 used a different four: situational, functional, organizational and stakes. Both help; know both.)',
        },
        {
          type: 'table',
          head: ['Type', 'What you say', 'What the AI adjusts'],
          rows: [
            ['Situational', '“Preparing the 2025 budget” or “in an immediate client crisis” or “a 5-year decision”.', 'Urgency, time horizon and method.'],
            ['Relational', '“A demotivated team after layoffs” or “a skeptical committee” or “a young, tech-friendly team”.', 'Language register, arguments and psychology.'],
            ['Competitive', '“Market leader under attack from start-ups” or “challenger against a giant”.', 'Positioning and comparative arguments.'],
            ['Emotional', '“After a project failure” or “in post-success euphoria”.', 'Sensitivity and psychological approach.'],
          ],
        },
        {
          type: 'callout',
          title: 'The 5 to 9 rule',
          text: 'Like human memory, the AI works best with a limited number of context elements. Keep to about **5 to 9** per prompt. A good set: current situation, main challenge, critical constraint, key audience, measurable success goal, each in about one sentence.',
        },
      ],
    },
    {
      kicker: 'Tone',
      title: 'Tone is the emotion you want to create',
      blocks: [
        {
          type: 'p',
          text: 'Tone is more than formal versus casual. It is the feeling the reader should get.',
        },
        {
          type: 'table',
          head: ['Family', 'Examples of tone words'],
          rows: [
            ['Authority', 'Expert advisor (credible, not condescending); experienced mentor (supportive but directive); inspiring leader (visionary).'],
            ['Proximity', 'Professional ally; personal coach; senior colleague (experienced and approachable).'],
            ['Service', 'Boutique consultant (discreet excellence); executive assistant (efficient, anticipating); technical expert (precise, teaching).'],
          ],
        },
        {
          type: 'p',
          text: 'Example: announcing new processes to a team in four voices. The **mentor** reassures and explains, the **leader** is firm and structured, the **companion** is informal and empathetic, the **consultant** is analytical and uses data. Same message, four effects.',
        },
      ],
    },
    {
      kicker: 'Style',
      title: 'Style is how information is structured',
      blocks: [
        {
          type: 'table',
          head: ['Style', 'Signature'],
          rows: [
            ['Analytical', 'Break things down, cause and effect, data and evidence (consulting-firm approach).'],
            ['Creative', 'Associations, metaphors, unconventional solutions (design-thinking approach).'],
            ['Pragmatic', 'Action first, concrete solutions, lessons from experience (start-up, lean).'],
            ['Pedagogical', 'Logical steps, examples, checking understanding (structured teaching).'],
          ],
        },
        {
          type: 'callout',
          title: 'Style by reference',
          text: 'Name a well-known approach to activate a style at once: “a keynote style with vision and simplicity”, “a pyramid-principle consulting structure”, “a storytelling teacher with broad perspective and concrete examples”. It saves ten lines of description. Use reference *styles*, not a claim that you are quoting a person.',
        },
      ],
    },
    {
      kicker: 'Audience',
      title: 'Five things to say about your reader',
      blocks: [
        {
          type: 'p',
          text: 'Without an audience the AI writes an “average” answer that satisfies nobody. With one, vocabulary, examples, arguments and detail all adapt.',
        },
        {
          type: 'table',
          head: ['Dimension', 'Options and effect'],
          rows: [
            ['1. Expertise', 'Beginner: analogies, no jargon. Intermediate: balanced. Expert: precise vocabulary and advanced ideas.'],
            ['2. Position', 'Operational: step by step. Manager: team implications. Executive: ROI and strategic impact.'],
            ['3. Attitude to change', 'Innovator: stress novelty. Pragmatist: proof and case studies. Conservative: continuity and gradual evolution.'],
            ['4. Time and attention', 'Very limited: bullets and a crisp summary. Normal: balanced. Overloaded: maximum simplification, checklists.'],
            ['5. Motivation', 'Results-driven: benefits first. Process-driven: the method. Relationship-driven: the human impact.'],
          ],
        },
      ],
    },
    {
      kicker: 'Audience in action',
      title: 'The same message for three readers',
      blocks: [
        {
          type: 'p',
          text: 'A quick template: **[your request] for [role] + [level] + [main constraint]**. Example: “Summarize this project’s benefits for a non-technical director who has five minutes.”',
        },
        {
          type: 'table',
          head: ['Reader', 'What the message leads with', 'Lever'],
          rows: [
            ['Conservative, non-technical executive with 5 minutes', 'Competitive necessity, three key numbers, a gradual and safe approach.', 'Fear of falling behind plus reassurance'],
            ['Tech manager and early adopter', 'Specific tools, a 90-day pilot, measurable KPIs.', 'Opportunity'],
            ['Skeptical operational team', 'Acknowledge fears, show which repetitive tasks disappear, offer support.', 'Reassurance'],
          ],
        },
        {
          type: 'p',
          text: 'The core message is identical. Only the framing changes. (The lesson’s sample figures in these messages are illustrative, not sourced.)',
        },
      ],
    },
    {
      kicker: 'Few-shot',
      title: 'Show instead of explain',
      blocks: [
        {
          type: 'p',
          text: '**Few-shot prompting** gives the AI two or three examples of what you want. It detects the pattern and reproduces it. A good example is often worth a long explanation.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Format examples', text: 'Show the exact layout, for instance a product sheet with the essentials, who it is for, the price, the plus and the caution.' },
            { title: 'Tone examples', text: 'Show sample replies to a price objection and a timing objection so the AI copies the attitude.' },
            { title: 'Reasoning examples', text: 'Show *how to think*: observation, hypothesis, validation, diagnosis, solution.' },
          ],
        },
        {
          type: 'callout',
          title: 'Then ask',
          text: 'End with “Now do the same for [your case].” Examples set the pattern; the last line sets the task.',
        },
      ],
    },
    {
      kicker: 'Few-shot',
      title: 'Why three examples?',
      blocks: [
        {
          type: 'table',
          head: ['Number', 'Effect'],
          rows: [
            ['1', 'Risk of **overfitting**: the AI copies too literally.'],
            ['2', 'Not enough variety to generalize a pattern.'],
            ['3', 'A solid pattern without overload.'],
            ['4 or more', 'Diminishing returns and extra complexity.'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Example 1:** a typical, standard case.',
            '**Example 2:** a variant with a nuance.',
            '**Example 3:** an edge case or creative one.',
            'Then give your specific challenge.',
          ],
        },
        {
          type: 'p',
          text: 'Practice routine: pick three posts you admire, list what they share (structure, tone, length, call to action), build the few-shot prompt, test, refine. Use your own examples, or ones you have the right to reuse.',
        },
      ],
    },
    {
      kicker: 'When it goes wrong',
      title: 'Five types of bad answers',
      blocks: [
        {
          type: 'table',
          head: ['Type', 'Looks like', 'Typical cause', 'Correction to send'],
          rows: [
            ['1. Generalist', 'Valid but applicable to anything.', 'Too little context or too generic a role.', '“Refine this considering [specific detail].”'],
            ['2. Off-topic', 'Answers another question.', 'Ambiguous instruction or unclear goal.', '“I misspoke. What I really want is [clear restatement].”'],
            ['3. Unbalanced', 'Over-develops one point, neglects others.', 'An implicit instruction misread.', '“Balance it: develop [neglected part] as much as [overdeveloped part].”'],
            ['4. Wrong level', 'Too simple or too technical.', 'Audience not defined.', '“Adjust the level for [audience] by [direction].”'],
            ['5. Monotonous', 'Repetitive structure, flat.', 'No style or creativity guidance.', '“Make it more [quality] by varying [element].”'],
          ],
        },
      ],
    },
    {
      kicker: 'Correction toolbox',
      title: 'Guide the AI instead of starting over',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Progressive reframing', text: '“Keep the structure but replace A with B.” Then “expand section X.” Then “adjust the tone.”' },
            { title: 'Counter-example', text: 'Show what to avoid and what to prefer: “Avoid this style: … Prefer this approach: …”.' },
            { title: 'Guidance by questions', text: '“Why did you start with X rather than Y?” “What is missing to convince [persona]?”' },
            { title: 'Guided iteration', text: 'Cycle 1 a rough draft; cycle 2 change the angle; cycle 3 enrich without losing what works; cycle 4 finalize style and coherence.' },
          ],
        },
        {
          type: 'p',
          text: 'Worked example: the generic advice “acknowledge the failure, analyze causes, learn, set goals, celebrate” is improved in three corrections: **contextualize** (a team of six after a failed client project), **personalize** (two upset seniors, three self-doubting mid-levels, one junior who feels responsible) and **operationalize** (the exact script for tomorrow’s meeting). Each pass adds a layer of specificity without losing coherence.',
        },
        {
          type: 'callout',
          title: 'Avoid the “perfect prompt” trap',
          text: 'Iteration avoids paralysis. Ask for a first version, even imperfect.',
        },
      ],
    },
    {
      kicker: 'Multipliers',
      title: 'Three tricks that raise quality',
      blocks: [
        {
          type: 'table',
          head: ['Multiplier', 'Idea', 'Prompt examples'],
          rows: [
            ['Creative constraint', 'Clever limits make the AI more inventive inside them.', '“Explain this concept only with cooking analogies.” “Write the sales argument as a Socratic dialogue.” “Structure the report like a TV episode: teaser, development, cliffhanger.”'],
            ['Perspective inversion', 'Take the opposite or unexpected viewpoint.', '“Give the smartest objections from our competitors.” “Explain why this strategy might fail.” “How could this client resist us?”'],
            ['Shifted temporality', 'Move in time to enrich the analysis.', '“Look at this decision as our selves in 10 years.” “Imagine it failed; write the post-mortem.” “Write the success report for 2030.”'],
          ],
        },
        {
          type: 'callout',
          title: 'Pre-mortem and post-mortem',
          text: 'Imagining failure and writing its post-mortem is a practical way to surface risks before they happen.',
        },
      ],
    },
    {
      kicker: 'Architecture',
      title: 'Modular and conditional prompts',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Modular prompt', text: 'Split the request into linked modules, each with its own expert role: MODULE 1 analysis, MODULE 2 strategy, MODULE 3 execution. Add: “Make sure each module enriches the next.”' },
            { title: 'Conditional prompt', text: 'Anticipate variables: “IF condition A → prioritize approach A. IF B → focus on B. IF C → balance A and B. My current situation is …”.' },
          ],
        },
        {
          type: 'p',
          text: 'The lesson’s integration exercise (persuading a board to pivot its product strategy for generative AI) combines everything: successive expert roles, a creative frame (past, present, future), a diagnostic module, a vision module with a success press release and a failure autopsy, an execution module with go/no-go milestones, and one thesis that links the modules.',
        },
        {
          type: 'bullets',
          items: [
            '**Clarity ≠ length:** strategic specificity beats quantity.',
            '**Tone, style, audience:** the triangle of fine adaptation.',
            '**Few-shot:** show rather than explain.',
            '**Iterative correction:** guide, do not restart.',
            '**Multipliers:** creative constraints and shifted perspectives.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Specification of intent', def: 'The mandatory part of a prompt that states the purpose you want to achieve.' },
    { term: 'Specification of constraints', def: 'The limits the answer must respect: time, budget, technical, human or regulatory.' },
    { term: 'Stylistic specification', def: 'Optional guidance on how the answer should sound or be structured.' },
    { term: 'Progressive focus (funnel)', def: 'Starting broad and narrowing through successive prompts to a precise, actionable answer.' },
    { term: 'Strategic context', def: 'Only the background that changes the answer, kept to about 5 to 9 elements.' },
    { term: 'Tone', def: 'The emotion the message is meant to convey, such as mentor, leader or companion.' },
    { term: 'Style', def: 'The way information is structured and reasoned: analytical, creative, pragmatic or pedagogical.' },
    { term: 'Style by reference', def: 'Naming a well-known approach (for example a consulting structure) to activate a style quickly.' },
    { term: 'Few-shot prompting', def: 'Giving the AI a few worked examples in the prompt so it copies the pattern.' },
    { term: 'Overfitting (in examples)', def: 'The AI copying a single example too literally instead of generalizing the pattern.' },
    { term: 'Progressive reframing', def: 'Guiding the AI step by step to change an answer instead of starting over.' },
    { term: 'Counter-example', def: 'A sample of what you do not want, shown alongside what you prefer.' },
    { term: 'Guided iteration', def: 'Several cycles of draft, angle change, enrichment and finalization.' },
    { term: 'Creative constraint', def: 'A deliberate limit that pushes the AI to be more inventive within it.' },
    { term: 'Perspective inversion', def: 'Asking the AI to argue the opposite or unexpected viewpoint.' },
    { term: 'Shifted temporality', def: 'Analyzing a decision from the future or past, including imagining a failure and writing its post-mortem.' },
    { term: 'Modular prompt', def: 'A prompt split into linked modules (analysis, strategy, execution), each with its own role.' },
    { term: 'Conditional prompt', def: 'A prompt with IF-style branches so the answer adapts to different circumstances.' },
  ],
  cards: [
    { front: 'The 3 levels of specification', back: 'Intent (mandatory), constraints (recommended), style (optional but powerful).' },
    { front: 'Five kinds of constraint', back: 'Temporal, budgetary, technical, human, regulatory.' },
    { front: 'What is progressive focus?', back: 'A funnel: broad overview, then priorities, then an operational plan for one priority.' },
    { front: 'The four contexts of Chapter 4', back: 'Situational, relational, competitive, emotional.' },
    { front: 'The 5 to 9 rule', back: 'Keep context to about 5 to 9 elements so the prompt stays coherent.' },
    { front: 'Tone vs style', back: 'Tone is the emotion you want to create. Style is how information is structured and reasoned.' },
    { front: 'Four styles', back: 'Analytical, creative, pragmatic, pedagogical.' },
    { front: 'Five audience dimensions', back: 'Expertise, position, attitude to change, time and attention, main motivation.' },
    { front: 'What are the three types of few-shot examples?', back: 'Format, tone and reasoning (logical progression).' },
    { front: 'Why three examples?', back: 'One risks overfitting, two is too few, three gives a solid pattern, four or more adds little.' },
    { front: 'The five bad-answer types', back: 'Generalist, off-topic, unbalanced, wrong level, monotonous.' },
    { front: 'Four correction techniques', back: 'Progressive reframing, counter-example, guidance by questions, guided iteration.' },
    { front: 'Three performance multipliers', back: 'Creative constraint, perspective inversion, shifted temporality.' },
    { front: 'Modular vs conditional prompt', back: 'Modular splits the job into linked parts. Conditional adds IF branches for different situations.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: the GPT-3 paper and learning from examples in the prompt',
    note: 'Brown et al., “Language Models are Few-Shot Learners” (2020), the paper introducing GPT-3. Facts are those stated in its abstract. This guide does not repeat benchmark numbers.',
    slides: [
      {
        kicker: 'The finding',
        title: 'A very large model can learn a task from a few examples in the text',
        blocks: [
          {
            type: 'p',
            text: 'In 2020 a team led by Tom Brown described GPT-3, an autoregressive language model with **175 billion parameters**. Their key idea was “few-shot” use: the task and a handful of demonstrations are given **purely as text in the prompt**, with **no retraining** of the model (no weight updates).',
          },
          {
            type: 'bullets',
            items: [
              'They reported that making language models much larger substantially improved this kind of task-agnostic few-shot performance.',
              'In some cases it came close to earlier systems that had been specially fine-tuned for the task.',
              'It worked on tasks such as translation, question answering and tasks needing on-the-fly adaptation.',
              'The authors also reported that it still struggled on some datasets.',
            ],
          },
        ],
      },
      {
        kicker: 'Connect',
        title: 'This is exactly what you do when you paste examples',
        blocks: [
          {
            type: 'table',
            head: ['Research idea', 'Your prompt'],
            rows: [
              ['Demonstrations given as text', 'The three LinkedIn posts or product sheets you paste in.'],
              ['No retraining', 'Nothing about the model changes; only the prompt does.'],
              ['Performance rises with good demonstrations', 'Better examples lead to better matching of format, tone and reasoning.'],
              ['Still limited on some tasks', 'Few-shot is not magic. Check results, especially facts.'],
            ],
          },
          {
            type: 'callout',
            title: 'Why this matters',
            text: 'Few-shot prompting is not a user-interface trick. It is a documented capability of large language models, which is why “show, don’t tell” is a core technique.',
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
                title: 'Language Models are Few-Shot Learners',
                url: 'https://arxiv.org/abs/2005.14165',
                note: 'Brown et al., 2020 (the GPT-3 paper). Tasks and demonstrations given as text with no retraining.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: a few-shot template for fan replies',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The task',
        title: 'Replies to fans with the right attitude',
        blocks: [
          {
            type: 'p',
            text: 'Beacon Athletic’s fan-services team answers about 200 messages a week. The replies need the same warm but firm tone every time, whoever writes them. Description rules never work as well as showing the tone, so the lead writes a few-shot prompt.',
          },
          {
            type: 'callout',
            title: 'Prompt (abridged)',
            text: 'Use this tone for fan complaints. EXAMPLE 1, late kick-off: “We hear you, and we’re sorry the wait outside was long. We’ve asked stewards to open two more gates from next match. Thanks for telling us.” EXAMPLE 2, ticket price: “It’s a fair question. Prices are set once a season, and we also hold 1,000 family seats at a reduced rate. Here is how to book them.” EXAMPLE 3, edge case, angry and partly mistaken: “We can see how disappointing that was. Our records show the match was moved, and here’s the notice we sent. Let’s sort out what we can do.” Now reply to this message: [message].',
          },
          {
            type: 'p',
            text: 'The three examples follow the template: standard case, nuanced variant and an edge case. The numbers are made-up club details.',
          },
        ],
      },
      {
        kicker: 'The bad answer',
        title: 'Diagnosing and correcting',
        blocks: [
          {
            type: 'table',
            head: ['First answer', 'Type', 'Correction'],
            rows: [
              ['Generic apology that would fit any club.', 'Generalist', '“Refine this: mention the family zone, the new gate plan and a named contact.”'],
              ['Three long paragraphs for a short complaint.', 'Unbalanced / length', '“Cut to 80 words; keep the apology and the action.”'],
              ['Too stiff for a young fan.', 'Wrong level', '“Adjust for a 19-year-old supporter: friendlier, shorter, no formal phrases.”'],
            ],
          },
          {
            type: 'p',
            text: 'Each fix is a single follow-up instruction (progressive reframing), not a new prompt from scratch.',
          },
        ],
      },
      {
        kicker: 'Multipliers',
        title: 'Using inversion and time-shifting for a sponsor pitch',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Perspective inversion:** “List the five smartest reasons a regional bank might say no to sponsoring our women’s team.”',
              '**Pre-mortem:** “Imagine the sponsorship failed after one year. Write a short post-mortem explaining why.”',
              '**Creative constraint:** “Rewrite our pitch opening as a one-minute radio commentary.”',
              '**Check:** all facts and figures are filled in by a person from the club’s own records.',
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
      q: 'According to Chapter 4, which level of specification is mandatory?',
      options: ['Style', 'Constraints', 'Intent', 'None'],
      answer: 2,
      explanation: 'Intent (the purpose) is mandatory. Constraints are recommended and style is optional but powerful.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: '“Compatible with our Salesforce CRM” is an example of which type of constraint?',
      options: ['Temporal', 'Technical', 'Human', 'Regulatory'],
      answer: 1,
      explanation: 'It limits the solution to what works with a given system, a technical constraint.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What does the “progressive focus” (funnel) technique do?',
      options: [
        'Starts with a very narrow request and widens it.',
        'Starts broad, then narrows over several prompts to a detailed plan for one priority.',
        'Uses only one very long prompt.',
        'Removes context.',
      ],
      answer: 1,
      explanation: 'Overview first, then priorities, then an operational zoom, each step building on earlier results.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'The lesson suggests limiting context in a prompt to roughly how many elements?',
      options: ['1 or 2', '5 to 9', '20 to 30', 'As many as possible'],
      answer: 1,
      explanation: 'Inspired by limits on working memory, the “rule of 7±2” suggests about 5 to 9 context elements.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: '“Faced with a demotivated team after two layoffs” is which Chapter 4 context type?',
      options: ['Situational', 'Relational', 'Competitive', 'Emotional'],
      answer: 1,
      explanation: 'Relational context describes who is involved and the dynamics between them. It changes register and psychology.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which pair correctly distinguishes tone and style?',
      options: [
        'Tone is the emotion to convey; style is how information is structured and reasoned.',
        'Tone is the length; style is the audience.',
        'Tone is the topic; style is the file type.',
        'They mean exactly the same thing.',
      ],
      answer: 0,
      explanation: 'Tone is the underlying emotion (mentor, leader, companion). Style is the intellectual signature (analytical, creative, pragmatic, pedagogical).',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which is one of the five audience dimensions?',
      options: ['Favorite color', 'Attitude toward change', 'Shoe size', 'Typing speed'],
      answer: 1,
      explanation: 'The dimensions are expertise, hierarchical position, attitude toward change, time and attention constraints, and main motivation.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'A skeptical operational team needs your message about adopting AI. Which framing fits?',
      options: [
        'Hype about revolutionary change.',
        'Acknowledging their concerns, showing the repetitive tasks that go away and offering support.',
        'A technical specification of the architecture.',
        'A threat about falling behind.',
      ],
      answer: 1,
      explanation: 'Reassurance is the lever for a skeptical operational audience. The core message stays the same; the framing changes.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which are the three types of few-shot examples in the chapter?',
      options: [
        'Format, tone and reasoning (logical progression)',
        'Length, color and size',
        'Fast, slow and medium',
        'Question, answer and comment',
      ],
      answer: 0,
      explanation: 'Format examples show the layout, tone examples calibrate attitude, reasoning examples show how to think.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Why does the lesson recommend about three examples in a few-shot prompt?',
      options: [
        'One risks overfitting, two gives too weak a pattern, four or more add little.',
        'Because the AI can only read three lines.',
        'Because three is a lucky number.',
        'Because more examples always cause errors.',
      ],
      answer: 0,
      explanation: 'Three examples (typical, nuanced variant, edge case) give a solid pattern without overload.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'An answer is accurate but is far too advanced for the beginner who will read it. Which bad-answer type is this, and what is the fix?',
      options: [
        'Monotonous; vary the structure.',
        'Wrong level; restate the audience and the direction of adjustment.',
        'Off-topic; reword the question.',
        'Unbalanced; delete a section.',
      ],
      answer: 1,
      explanation: 'Type 4 is the inappropriate-level response, caused by an imprecise audience. Correct it with “adjust the level for [audience] by [direction]”.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'You show the AI what you want to avoid next to what you prefer. Which technique is this?',
      options: ['Counter-example', 'Meta-prompt', 'Composite role', 'Temperature'],
      answer: 0,
      explanation: 'The counter-example technique makes the boundary explicit by contrasting a bad sample with a good one.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q13',
      type: 'mcq',
      q: '“Imagine the strategy failed and write the post-mortem” is an example of which multiplier?',
      options: ['Creative constraint', 'Perspective inversion', 'Shifted temporality', 'Modular prompt'],
      answer: 2,
      explanation: 'Moving the analysis in time (future failure or success) is shifted temporality. It surfaces risks and success factors.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q14',
      type: 'mcq',
      q: 'What is a conditional prompt?',
      options: [
        'A prompt written only if you are in a good mood.',
        'A prompt with IF-style branches that adapts the answer to different conditions.',
        'A prompt that never mentions the audience.',
        'A prompt with a single sentence.',
      ],
      answer: 1,
      explanation: 'It anticipates variables: IF condition A, prioritize approach A; IF B, focus on B; IF C, balance both.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q15',
      type: 'mcq',
      q: 'What did the GPT-3 paper show about “few-shot” use?',
      options: [
        'The model must be retrained for every new task.',
        'A very large model can pick up a task from a few demonstrations given purely as text in the prompt, without weight updates.',
        'Prompts do not matter.',
        'Few-shot always beats every specialist system.',
      ],
      answer: 1,
      explanation: 'Tasks and demonstrations were specified via text only. The authors also noted it still struggled on some datasets.',
      review: { section: 'real', slide: 0 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A club’s communications officer needs the AI to write replies to angry fans in a consistent tone. (a) Explain why a few-shot prompt is suitable. (b) Write the structure of the prompt, with three examples and the final instruction. (c) Explain how you would correct a reply that is accurate but generic.',
      answer: [
        'Few-shot prompting suits this task because tone is hard to describe but easy to show. The AI detects the pattern in examples (attitude, length, structure) and reproduces it, which is more reliable than a long description of the tone. Because the examples are text in the prompt, no retraining is needed.',
        'Structure: a short instruction (“Use this tone for fan complaints”); Example 1, a typical complaint with an ideal reply; Example 2, a variant with a nuance (for example a price question); Example 3, an edge case (an upset fan who is partly mistaken) with a calm, factual reply; then “Now reply to this message: [message]”. Three examples give a solid pattern without overfitting or overload.',
        'For a generic reply (type 1, the generalist response), use progressive reframing rather than starting over: “Refine this reply by including [specific detail: the new gate plan, the family zone, a named contact]”. If needed add a counter-example (“avoid phrases like ‘we value your feedback’”) and then check the facts against club records before sending.',
      ],
      marking: [
        'Explains why showing beats describing for tone (2)',
        'Gives a sound prompt structure with three varied examples (3)',
        'Final instruction and placeholder (1)',
        'Identifies the generalist response and uses a refinement prompt (2)',
        'Mentions counter-example or verification (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Rewrite the prompt “Help me with my presentation for the board” using the three levels of specification, the audience dimensions and at most seven context elements. Invent plausible details for a sports club.',
      answer: [
        'Role: Act as an experienced sports-business consultant. Level 1, intent: help me prepare a presentation that persuades the board to approve a new fan-app project, while reassuring them about the risk. Level 2, constraints: maximum 10 slides; 10-minute slot; must comply with data-protection rules; budget ceiling of €150,000.',
        'Context (five to seven elements): the club has 12,000 members; matchday app use is low; a competitor club has just launched an app; the board meets next Tuesday; key objection will be cost; success means a go decision for a pilot. Audience: five board members, executives, non-technical, pragmatic, who want ROI and risk first, with little time.',
        'Level 3, style: direct and factual, “problem, action, result” structure, with the recommendation in the first slide; tone of an expert advisor, credible and not salesy. Ask for an executive summary of 150 words and the three numbers the board will care about, with placeholders where the club must supply verified data.',
      ],
      marking: [
        'Clear intent (1)',
        'At least three relevant constraints (2)',
        'Context limited to a sensible number of elements (1)',
        'Audience described on several dimensions (2)',
        'Style/tone specified (1)',
        'Placeholders for facts or a note to verify (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Explain two of the three “performance multipliers” and show how each could be used to stress-test a proposal to sponsor a youth academy.',
      answer: [
        'Perspective inversion asks the AI to argue the opposite or an unexpected viewpoint. For the proposal: “List the five smartest objections a potential sponsor could raise against sponsoring our youth academy, and explain how each could be answered.” This exposes weaknesses before the real meeting.',
        'Shifted temporality moves the analysis in time. For example: “Imagine that the sponsorship failed after two years and write a short post-mortem explaining why”, or “write the success report for the same period”. The failure story reveals risks (weak activation, unclear benefits, no measurement), while the success story shows what must happen to deliver value.',
        'Creative constraint could also be used (for example, present the pitch as a one-minute radio commentary), but the two above are the most useful for testing the logic of a proposal. All outputs still need human review and fact-checking.',
      ],
      marking: [
        'Correct explanation of the first multiplier (1)',
        'Application to the academy proposal (2)',
        'Correct explanation of the second multiplier (1)',
        'Application to the academy proposal (2)',
      ],
    },
  ],

  videos: [],
};
