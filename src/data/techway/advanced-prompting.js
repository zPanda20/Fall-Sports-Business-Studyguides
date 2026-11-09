// Techway, Chapter 8: Advanced prompt engineering (orchestration and intelligent systems).
// Built from Chapter 8 of the Techway lesson document: three levels of sophistication, chain-of-thought (classic,
// multi-perspective, self-improving), sequential pipelines, multi-expert conversation, cognitive profiling, prompt A/B
// testing, resolving contradictions by transcendence, structural analogy, ethics of advanced practice, self-evolving
// systems and the synthesis project.
// Real example: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (Wei et al., Google, January 2022,
// arXiv 2201.11903).

export const advancedPromptingTopic = {
  id: 'advanced-prompting',
  course: 'techway',
  title: 'Advanced prompting: chains, pipelines and complex problems',
  sessions: 'Chapter 8',
  reading: 'Techway lesson, Chapter 8',
  minutes: 50,
  summary:
    'Level 3 of prompt engineering: step-by-step reasoning (chain-of-thought) in three versions, multi-step pipelines, a multi-expert round table, tailoring the AI to your thinking style, A/B testing prompts, resolving contradictions, borrowing solutions by analogy, and the ethics of advanced use.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Where we are',
      title: 'Three levels of sophistication',
      blocks: [
        {
          type: 'table',
          head: ['Level', 'What you do', 'Key words'],
          rows: [
            ['1. Simple prompts', 'One prompt, one answer. Get excellent at single prompts and specialize by domain.', 'Direct, optimized, specialized'],
            ['2. Orchestration', 'Plan chains of prompts, mix human and AI steps, adjust according to intermediate results.', 'Chains, hybrid workflows, adaptive'],
            ['3. Intelligent systems (this chapter)', 'Networks of specialized prompts and personas, capabilities beyond any single piece, systems designed to improve through use, with supervision.', 'Ecosystems, emergence, evolution'],
          ],
        },
        {
          type: 'callout',
          title: 'The “Impossible Challenge” thread',
          text: 'The lesson asks you to choose ONE hard problem you struggle with and apply every technique to it. Its example: improve knowledge management for 15 people in different places so everyone finds relevant, current information without overload.',
        },
        {
          type: 'bullets',
          items: [
            'Self-assess (1-5) your skill in **multi-step orchestration** (sequences that enrich each other, if-then workflows, human feedback) and **adaptive systems** (prompts or personas chosen by context, handling edge cases).',
            'Remember the warning: more complex is not always better.',
          ],
        },
      ],
    },
    {
      kicker: 'Technique 1',
      title: 'Chain-of-thought: make it show its reasoning',
      blocks: [
        {
          type: 'big',
          text: 'Ask the AI to **reason step by step before it answers**. For complex problems this usually gives better and more checkable answers.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Classic structured CoT',
              text: 'Five steps in the prompt: (1) restate the problem and objectives, (2) break it into sub-problems, (3) solve each with reasoning, (4) synthesize into a coherent solution, (5) verify and refine.',
            },
            {
              title: 'Multi-perspective CoT',
              text: 'The AI takes three expert viewpoints in turn (for example technology, human psychology, project management), explains each one’s reasoning, then writes an **integrative synthesis**.',
            },
            {
              title: 'Self-improving CoT',
              text: 'Iteration 1: propose a solution. Iteration 2: act as a critical but fair outside consultant and list weaknesses, wrong assumptions and gaps. Iteration 3: produce an improved solution that answers the criticism.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'How to judge the answer',
          text: 'Is the restatement faithful? Is the decomposition logical and complete? Do the solutions have arguments? Is the synthesis coherent? Does the verification really find weak points? Visible reasoning helps you check, but a fluent chain can still be wrong.',
        },
      ],
    },
    {
      kicker: 'Technique 2',
      title: 'Multi-step pipelines and the expert round table',
      blocks: [
        {
          type: 'p',
          text: 'In a **pipeline**, the output of one prompt feeds the next. Each prompt does one job.',
        },
        {
          type: 'flow',
          items: [
            { title: '1. Collect', text: 'Gather and structure facts, with sources and confidence.' },
            { title: '2. Analyze', text: 'Use output 1 to find the top challenges and opportunities.' },
            { title: '3. Generate options', text: 'Use outputs 1 and 2 to create three distinct options with pros and cons.' },
            { title: '4. Evaluate', text: 'Score options against criteria and recommend one.' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'The lesson’s knowledge-management pipeline: diagnose current use and pain points; propose three contrasting scenarios; evaluate them; build a six-month roadmap for the chosen one.',
            'In the exercise you **design** the pipeline (objective, key instruction, expected output for each step), you do not need to run it.',
          ],
        },
        {
          type: 'p',
          text: '**Multi-expert simulation in a continuous conversation:** unlike the single-prompt multi-perspective CoT, you run a round table over several prompts. You introduce Expert 1 (name, specialty, personality, angle), ask for a first analysis (and for questions if information is missing), then switch to Expert 2 who must build on what Expert 1 said, and so on. A final prompt asks a “principal rapporteur” to summarize contributions, find convergences and tensions, propose an integrated approach and suggest 2-3 first steps.',
        },
      ],
    },
    {
      kicker: 'Technique 3',
      title: 'Tailor the AI to you, and test your prompts',
      blocks: [
        {
          type: 'p',
          text: '**Cognitive profile.** Tell the AI how you think and work so it adapts. A profile covers: your dominant thinking style (for example analytical-sequential, or systemic-global), your preferred formats (titles, bullets, summaries first), your usual goals with the AI, and your points of vigilance (a bias such as “paralysis by analysis”, if you know it).',
        },
        {
          type: 'callout',
          title: 'Example from the lesson',
          text: 'A systemic thinker asks for an overview first, structured answers with headings and bullets, and a gentle warning when exhaustive exploration could delay a decision. The AI’s next answer had an overview, modules, options to go deeper and a “point of vigilance”.',
        },
        {
          type: 'p',
          text: '**A/B testing of prompts** is a simple experiment to improve a prompt rigorously:',
        },
        {
          type: 'steps',
          items: [
            '**Define the goal** of the prompt.',
            '**Version A:** your current prompt.',
            '**Hypothesis:** what change should improve the result?',
            '**Version B:** change only ONE major element, to isolate its effect.',
            '**Same test task** for both (repeat on several tasks for reliability).',
            '**Criteria:** for example impact, clarity, originality, format, length, errors, scored 1-5.',
            '**Run each in a new session** so one run does not contaminate the other.',
            '**Conclude** whether the hypothesis holds, then iterate.',
          ],
        },
        {
          type: 'p',
          text: 'In the lesson’s example, adding “catchy, concise, reader-benefit oriented” to a request for three blog titles raised the averages from 2.3 to 4.3 out of 5. Those scores are the author’s own subjective ratings from a single try, so treat them as an illustration of the method rather than proof.',
        },
      ],
    },
    {
      kicker: 'Technique 4a',
      title: 'Resolve contradictions by transcending them',
      blocks: [
        {
          type: 'p',
          text: 'Hard problems often hide a tug-of-war between two goals. A compromise gives half of each. **Transcendence** looks for a solution that changes the frame so both goals can be met.',
        },
        {
          type: 'steps',
          items: [
            '**Identify** the main contradictions as two poles (for example speed vs quality).',
            '**Question the assumptions** that make the poles look incompatible: are they still true?',
            '**Generate transcendent solutions:** dissolve the contradiction by changing the frame, turn opposition into synergy, or make one pole obsolete.',
            '**Synthesize** the best ideas into one integrated approach.',
          ],
        },
        {
          type: 'table',
          head: ['Contradiction (lesson example)', 'Hidden assumption', 'Transcendent idea'],
          rows: [
            ['Complete documentation vs speed and workload', 'Documentation is a separate task after the work.', 'Just-in-time documentation built into daily tools; minimum viable standards.'],
            ['Central hub (easy to find) vs bottleneck and rigidity', 'One owner and one structure must serve everything.', 'A federated hub with distributed curators.'],
            ['Always current vs the effort to update', 'Humans must check everything.', 'Revision alerts and AI help for summaries and search.'],
          ],
        },
      ],
    },
    {
      kicker: 'Technique 4b',
      title: 'Innovation by structural analogy',
      blocks: [
        {
          type: 'p',
          text: 'Instead of searching in your own field, strip the problem to its **abstract structure** and look for fields with the same structure but different surface.',
        },
        {
          type: 'steps',
          items: [
            '**Abstract:** list the key actors, the relationships and the underlying mechanism (flow, balance, growth, conflict, adaptation). Restate it in one or two sentences.',
            '**Find 2 or 3 analogous fields** (natural, social, technical, artistic) and explain how each manages the same structure.',
            '**Transpose:** what principles can you borrow, and what new approach do they suggest when combined?',
          ],
        },
        {
          type: 'callout',
          title: 'Lesson example',
          text: 'Knowledge management as a distributed ecosystem led to analogies such as a forest ecosystem, the immune system and an efficient market, and to ideas like a “living” knowledge garden with gardeners who curate it. Analogies inspire ideas, they are not proof: test them before you rely on them.',
        },
      ],
    },
    {
      kicker: 'Responsibility',
      title: 'Ethics, pitfalls and self-evolving systems',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Duties of an advanced user',
              text: '**Transparency** about AI use; **reliability and bias** checks; **benevolent purpose**; **sharing and training** others; **intellectual humility** about AI’s limits.',
            },
            {
              title: 'Pitfalls',
              text: '**Technological hubris** (AI can fix anything); **over-complexification** (a simple prompt would work); **disconnection from human impact** (real people live with the outputs).',
            },
          ],
        },
        {
          type: 'p',
          text: '**A self-evolving system (conceptual).** Design three things: a **selective memory** (what interactions and results to keep), **improvement metrics** (such as search success rate, time to find information, satisfaction, share of documents updated recently) and **learning loops** (alert a curator on poor ratings, spot gaps from failed searches, suggest better tags, personalize ranking). A human supervisor stays in charge.',
        },
        {
          type: 'p',
          text: '**Synthesis project.** Restate your challenge, give a global prompting strategy, apply at least 3-4 techniques with key prompts, explain how they work together (for example multi-expert analysis, then analogy for ideas, then a pipeline to build options, then a self-improving CoT for the roadmap), and describe the added value of the multi-prompt approach.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Chain-of-thought (CoT)', def: 'Asking the AI to reason step by step before giving its answer.' },
    { term: 'Classic structured CoT', def: 'A five-step prompt: understand, decompose, solve, synthesize, verify.' },
    { term: 'Multi-perspective CoT', def: 'The AI analyzes a problem from several expert viewpoints, then writes an integrative synthesis.' },
    { term: 'Self-improving CoT', def: 'The AI proposes a solution, criticizes it, then improves it.' },
    { term: 'Prompt pipeline', def: 'A sequence of prompts in which each output feeds the next.' },
    { term: 'Multi-expert simulation', def: 'A round table in one conversation where the AI plays successive experts and finally a rapporteur.' },
    { term: 'Cognitive profile', def: 'A description of your thinking style, format preferences, goals and blind spots given to the AI.' },
    { term: 'A/B testing (prompts)', def: 'Comparing two prompt versions on the same task using set criteria.' },
    { term: 'Contradiction by transcendence', def: 'Finding a solution beyond a compromise by changing the frame of a tension.' },
    { term: 'Structural analogy', def: 'Solving a problem by borrowing from another field that has the same underlying structure.' },
    { term: 'Selective memory', def: 'The deliberately chosen information an AI system keeps from interactions in order to improve.' },
    { term: 'Learning loop', def: 'A feedback mechanism that adjusts prompts, approaches or knowledge based on results.' },
    { term: 'Technological hubris', def: 'Believing AI and clever prompting can solve everything.' },
    { term: 'Over-complexification', def: 'Building complicated prompt systems where a simple one would do.' },
  ],
  cards: [
    { front: 'What does chain-of-thought ask the AI to do?', back: 'Show its reasoning step by step before the final answer.' },
    { front: 'The five steps of classic CoT', back: 'Understand, decompose, solve sub-problems, synthesize, verify and refine.' },
    { front: 'Multi-perspective CoT in one line', back: 'Three expert angles, then an integrative synthesis.' },
    { front: 'Self-improving CoT in one line', back: 'Solution, critical self-review, improved solution.' },
    { front: 'What is a prompt pipeline?', back: 'Several prompts in a row, each using the previous output.' },
    { front: 'Four steps of the example pipeline', back: 'Collect, analyze, generate options, evaluate and recommend.' },
    { front: 'What goes into a cognitive profile?', back: 'Thinking style, format preferences, usual goals, points of vigilance.' },
    { front: 'Rule for A/B testing prompts', back: 'Change only ONE major element, use the same task, new session each, score with set criteria.' },
    { front: 'Transcendence vs compromise', back: 'A compromise gives half of each; transcendence changes the frame so both goals can be met.' },
    { front: 'Structural analogy: three steps', back: 'Abstract the structure, find analogous fields, transpose the principles.' },
    { front: 'Parts of a self-evolving system', back: 'Selective memory, improvement metrics, learning loops (with a human supervisor).' },
    { front: 'Three pitfalls of advanced practice', back: 'Technological hubris, over-complexification, disconnection from human impact.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The paper behind chain-of-thought',
    note: 'Wei and colleagues at Google Research, “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models”, arXiv 2201.11903 (January 2022). Numbers are from the paper’s Table 1 as read on arXiv.',
    slides: [
      {
        kicker: 'The idea',
        title: 'Showing the steps, not just the answer',
        blocks: [
          {
            type: 'p',
            text: 'The authors gave a model a few examples in which a math question was answered with **worked reasoning steps** instead of only the final answer. The model then reasoned in the same way on new questions.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Standard prompting', value: '17.9%', note: 'PaLM 540B on the GSM8K grade-school math benchmark, 8 examples.' },
              { label: 'With chain-of-thought', value: '56.9%', note: 'Same model, same benchmark, examples with reasoning steps.' },
            ],
          },
        ],
      },
      {
        kicker: 'Fine print',
        title: 'What the paper also found',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The benefit appeared mainly in very large models (roughly 100 billion parameters and above). The authors call it an **emergent ability of scale**.',
              'Smaller models wrote fluent but illogical chains and did **worse** than with standard prompting.',
              'The paper tested a particular style of prompting (few-shot with worked examples). The chapter’s “think step by step” templates are related but not identical, and newer models may have reasoning built in.',
            ],
          },
          {
            type: 'callout',
            title: 'Link to the chapter',
            text: 'CoT is not magic words. It works because writing out steps gives the model (and you) room to reason and to check. Visible reasoning is easier to audit, but it can still contain errors.',
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
                title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
                url: 'https://arxiv.org/abs/2201.11903',
                note: 'Wei et al., Google Research, January 2022. The GSM8K figures are from Table 1.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: the matchday-experience challenge',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The challenge',
        title: 'An “impossible” problem with a tension',
        blocks: [
          {
            type: 'callout',
            title: 'Beacon’s challenge',
            text: 'Make match days feel premium for hospitality guests AND welcoming and affordable for families, without building a new stand and without adding queues.',
          },
          {
            type: 'table',
            head: ['Technique', 'How Beacon uses it'],
            rows: [
              ['Multi-perspective CoT', 'Experts: hospitality manager, supporter-relations officer, stadium operations lead. Then a synthesis.'],
              ['Contradiction by transcendence', 'Premium vs affordable. Hidden assumption: “premium” means a separate area. Idea: premium services (fast entry lane, seat delivery of food) can be sold as add-ons in any stand.'],
              ['Structural analogy', 'Abstract: many users with different needs share one scarce space. Analogy: airlines sell seat upgrades and priority boarding, not separate planes.'],
            ],
          },
        ],
      },
      {
        kicker: 'Pipeline and test',
        title: 'From idea to roadmap, and testing the prompt',
        blocks: [
          {
            type: 'flow',
            items: [
              { title: '1. Diagnose', text: 'Pain points: queues at gate 3, empty seats midweek.' },
              { title: '2. Options', text: 'Three scenarios: add-on packs, zone upgrades, loyalty tiers.' },
              { title: '3. Evaluate', text: 'Score on cost, fan fairness, queue impact.' },
              { title: '4. Roadmap', text: 'Six-month pilot plan for the chosen option.' },
            ],
          },
          {
            type: 'p',
            text: 'Dana runs an **A/B test** on the step-2 prompt. A: “Give three ideas for match-day upgrades.” B: same, plus “each idea must name who pays, who benefits and what it does to queues.” She uses the same task, new sessions, and scores 1-5 for usefulness and realism. She changes only one element, so she knows the extra constraints made the difference.',
          },
          {
            type: 'callout',
            title: 'Human oversight',
            text: 'Any idea that touches fan data (such as loyalty tiers) goes through the club’s data protection check, and nobody should treat an AI’s “expert” opinion as a real expert’s advice.',
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
      q: 'What is the main purpose of chain-of-thought prompting?',
      options: [
        'To make answers shorter.',
        'To have the AI reason step by step before the final answer, which improves complex problem solving and lets you check the logic.',
        'To hide the AI’s reasoning.',
        'To avoid giving context.',
      ],
      answer: 1,
      explanation: 'Writing out the intermediate steps improves answers to multi-step problems and makes them easier to audit.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which are the steps of the classic structured CoT?',
      options: [
        'Ask, wait, accept',
        'Understand the problem, decompose, solve sub-problems, synthesize, verify and refine',
        'Role, context, examples',
        'Collect, clean, publish',
      ],
      answer: 1,
      explanation: 'The five-step structure guides the AI from restating the problem to verifying the final solution.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What distinguishes the self-improving CoT?',
      options: [
        'Three experts speak in turn.',
        'The AI proposes a solution, critiques it as an outside consultant, then produces an improved version.',
        'It uses a pipeline of ten prompts.',
        'It needs no human.',
      ],
      answer: 1,
      explanation: 'Propose, self-criticize, improve: three iterations.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'In a multi-step pipeline, what is the key feature?',
      options: [
        'All prompts are sent at the same time.',
        'The output of one prompt becomes input for the next.',
        'Only one prompt is allowed.',
        'The AI changes model between steps.',
      ],
      answer: 1,
      explanation: 'Each step does one job using earlier results, so complexity is split into manageable pieces.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'How does the multi-expert simulation in conversation differ from the multi-perspective CoT?',
      options: [
        'It uses one single prompt.',
        'It runs over several prompts in the same conversation: each expert builds on the previous ones, then a rapporteur synthesizes.',
        'It has no synthesis.',
        'It uses different AI tools for each expert.',
      ],
      answer: 1,
      explanation: 'Multi-perspective CoT is one prompt; the round table is a series of prompts in a continuing conversation.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'What should a cognitive profile for the AI contain?',
      options: [
        'Your passwords',
        'Your thinking style, preferred formats, usual goals and points of vigilance',
        'Your private documents',
        'Only your job title',
      ],
      answer: 1,
      explanation: 'These four elements let the AI adapt style and structure. Do not include confidential or sensitive personal data.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'You test two prompts. Version B differs from A in tone, length, example and role at once, and B scores better. What is the problem?',
      options: [
        'None, B is better.',
        'You changed several elements, so you cannot tell which change made the difference.',
        'You should have used more words.',
        'You should have used the same session.',
      ],
      answer: 1,
      explanation: 'A/B tests change ONE major element at a time, run in separate sessions, on the same task.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'What does “resolving a contradiction by transcendence” aim for?',
      options: [
        'Choosing one side and dropping the other',
        'Splitting the difference in a compromise',
        'Changing the frame so that both goals can be met, often by questioning the hidden assumptions',
        'Ignoring the tension',
      ],
      answer: 2,
      explanation: 'It goes beyond a compromise by challenging the assumptions that make the poles look incompatible.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'What is the first step of innovation by structural analogy?',
      options: [
        'Find a famous company to copy.',
        'Abstract the problem’s structure: actors, relationships and underlying mechanism.',
        'Choose a tool.',
        'Write the final report.',
      ],
      answer: 1,
      explanation: 'You need the abstract structure before you can find fields that share it.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Which of these is an example of “over-complexification”?',
      options: [
        'Using a single clear prompt for a simple task.',
        'Building a six-prompt pipeline with multiple personas to rewrite one sentence.',
        'Adding a human review.',
        'Testing two versions of a prompt.',
      ],
      answer: 1,
      explanation: 'Advanced systems must earn their complexity. Simple tools should be used for simple jobs.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'The original chain-of-thought paper found that it helped mainly…',
      options: [
        'Very small models',
        'Very large models, while small models could get worse',
        'Only image models',
        'All models equally',
      ],
      answer: 1,
      explanation: 'The authors describe CoT as an emergent ability of model scale: it helped models of about 100 billion parameters and more.',
      review: { section: 'real', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A club wants to improve how its 12 staff in ticketing, marketing and stadium operations share up-to-date information without overload. Design a prompt system using at least three techniques from the chapter. For each, say what the prompt asks the AI to do and what you will check yourself. Explain how they fit together.',
      answer: [
        'Technique 1, multi-perspective CoT: ask the AI to analyze the problem as a technology expert, an organizational psychologist and a process manager, then write an integrative synthesis. I check that the viewpoints are distinct and that the synthesis does not hide disagreements.',
        'Technique 2, contradictions by transcendence: list tensions (complete documentation vs speed, central hub vs bottleneck), question the hidden assumptions and propose solutions beyond compromise, such as just-in-time documentation and distributed curators. I check that ideas are truly new and realistic.',
        'Technique 3, pipeline: diagnose current tools and pain points; generate three scenarios; evaluate them on adoption, cost and effort; produce a six-month roadmap. I check each output before passing it on and fix errors early.',
        'Technique 4, self-improving CoT for the roadmap: propose, criticize, improve. Fit: the multi-expert view gives understanding; transcendence gives ideas; the pipeline develops them; self-criticism hardens the plan. A human decides, tests the prompts (A/B) and anonymizes any staff or fan data.',
      ],
      marking: [
        'At least three techniques correctly described (3)',
        'A specific AI task for each (3)',
        'Human checks for each (2)',
        'Explains how they work together (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'You want to find out whether adding “justify each recommendation with evidence” makes an AI’s sponsorship ideas more useful. Describe how to run a valid prompt A/B test and what could still make the result unreliable.',
      answer: [
        'Goal: generate sponsorship ideas. Version A: the current prompt. Hypothesis: asking for evidence will make ideas more concrete and credible. Version B: the same prompt with only that extra sentence. Same test task (the same club description and constraints), ideally repeated on several tasks. Criteria such as usefulness, realism, specificity and format, each scored 1-5. Run each version in a new session so the earlier answer cannot influence the later one. Compare scores, conclude, and iterate.',
        'Limits: scoring is subjective (use a second rater or a checklist), one run is a small sample and models vary between runs, and “evidence” the AI cites can itself be invented, so factual claims must still be verified.',
      ],
      marking: [
        'Single change between A and B (2)',
        'Same task, new sessions, defined criteria (3)',
        'Conclusion and iteration (1)',
        'Reliability limits discussed (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Explain “innovation by structural analogy” using a sports-business problem of your choice. Give the three steps and one analogy, and state one risk of relying on analogies.',
      answer: [
        'Example problem: reduce queues and uneven crowding at stadium entry on match day. Step 1, abstract the structure: many users arrive at the same time for one limited flow point, with varied needs; the mechanism is a flow bottleneck. Step 2, find fields with the same structure: airports (check-in and priority lanes), hospitals (triage) or motorway tolls (multiple lanes and electronic passes). Step 3, transpose: staggered arrival slots and incentives, a triage-style fast lane for those who need help, pre-validated digital tickets.',
        'Risk: analogies suggest ideas but prove nothing. The fields differ in important ways, so every idea must be tested against the club’s real constraints (safety rules, crowd behavior, cost).',
      ],
      marking: [
        'Three steps correctly stated (3)',
        'Appropriate analogy and transposition (2)',
        'A valid risk or limitation (1)',
      ],
    },
  ],

  videos: [],
};
