// Techway, chapter: Beyond ChatGPT, the generative AI ecosystem.
// Built from the "Beyond ChatGPT" chapter of the Techway lesson document: structured image prompts, conversational
// iteration, visual series, text alternatives (Claude, Gemini, Copilot, Mistral), specialized tools, multi-AI workflows,
// selection criteria and technology watch. The tool descriptions are the lesson's snapshot and change quickly.
// Real example: Mistral AI's EUR 1.7 billion Series C led by ASML, September 2025 (Mistral, Orrick and press coverage).

export const beyondChatgptTopic = {
  id: 'beyond-chatgpt',
  course: 'techway',
  title: 'Beyond ChatGPT: the AI ecosystem and multi-AI workflows',
  sessions: 'Ecosystem chapter',
  reading: 'Techway lesson, Beyond ChatGPT',
  minutes: 40,
  summary:
    'How to write a structured image prompt and refine it in conversation, what different AI assistants are known for, which specialized tools exist for design, audio, video and code, how to chain several AIs in one workflow, and how to choose and keep up.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The idea',
      title: 'An orchestra, not a single instrument',
      blocks: [
        {
          type: 'big',
          text: 'Each AI has strengths. **Choose the tool for the job, and chain tools when one is not enough.**',
        },
        {
          type: 'p',
          text: 'The lesson compares this to a painter using different brushes, or a chef using the right tool at the right moment. Mastering ChatGPT is a start. The skill is knowing when another tool does the task better and how to pass work between them.',
        },
        {
          type: 'callout',
          title: 'Keep a healthy skepticism',
          text: 'Claims about which model is “best” at something change often and come from vendors. The lesson’s descriptions are a snapshot. Test tools on your own tasks before you rely on them.',
        },
      ],
    },
    {
      kicker: 'Images',
      title: 'The structured image prompt',
      blocks: [
        {
          type: 'p',
          text: 'Images, like text, need a clear brief. The lesson’s template has five parts:',
        },
        {
          type: 'table',
          head: ['Part', 'What to specify', 'Example'],
          rows: [
            ['Main subject', 'Who or what, appearance, expression, position.', 'A stadium steward with a friendly gesture, holding a tablet.'],
            ['Artistic style', 'Technique (photo, painting, 3D), inspiration, level of realism.', 'Modern editorial photography, realistic.'],
            ['Composition', 'Framing, perspective, format.', 'Medium shot, slightly low angle, portrait format.'],
            ['Atmosphere and lighting', 'Light, dominant colors, mood.', 'Soft natural light, blue and white palette, welcoming.'],
            ['Technical details', 'Resolution, focus, rendering, effects.', 'High definition, sharp face, blurred background.'],
          ],
        },
        {
          type: 'p',
          text: 'DALL-E is a dedicated image generator. The image feature in ChatGPT-4o lives inside a conversation, which suits iteration and refinement. (Product names and features change. Check what your tool offers today.)',
        },
      ],
    },
    {
      kicker: 'Images',
      title: 'Iterate, then keep a consistent series',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Create:** generate from the structured prompt.',
            '**Critique:** ask the AI to name three things to improve against your goal.',
            '**Adjust:** change one specific thing while preserving what works.',
            '**Variants:** explore two alternative directions.',
            '**Optimize:** polish a technical aspect such as lighting or sharpness.',
          ],
        },
        {
          type: 'p',
          text: '**A visual series** needs a mini graphic charter shared by all the images: unified style, 3-4 colors, signature lighting and recurring composition rules. Then you vary the theme (for example portrait, concept, result) while keeping the constants the same.',
        },
        {
          type: 'callout',
          title: 'Responsible use',
          text: 'Do not generate images of real people without consent, do not pass AI images off as real photos, and check the tool’s terms for commercial use. The AI Act expects AI-generated or manipulated content to be labeled.',
        },
      ],
    },
    {
      kicker: 'Text assistants',
      title: 'Claude, Gemini, Copilot, Mistral',
      blocks: [
        {
          type: 'table',
          head: ['Assistant', 'Known for (per the lesson)', 'Typical use'],
          rows: [
            ['Claude (Anthropic)', 'Nuanced analysis, synthesis of long documents, careful ethical reasoning.', 'Reviewing a long contract, synthesizing research, improving long texts.'],
            ['Gemini (Google)', 'Links with Google search and Workspace; multimodal reasoning.', 'Researching current information, working with Docs and Sheets.'],
            ['Copilot (Microsoft)', 'Built into Microsoft 365.', 'PowerPoint decks, Excel analysis, writing in Word, workflow automation.'],
            ['Mistral', 'European company; efficient models, open-weight options, multilingual and on-premise deployment for data control.', 'Code, multilingual work, organizations needing sovereignty over data.'],
          ],
        },
        {
          type: 'callout',
          title: 'Prompt shape for deep analysis',
          text: 'Context and approach (critical, nuanced, show tensions); structure (understand, deconstruct, evaluate strengths, weaknesses, opportunities and risks, then synthesize); and depth, angle and audience.',
        },
        {
          type: 'table',
          head: ['Scenario', 'Lesson’s pick'],
          rows: [
            ['Analyze a 50-page contract for risky clauses', 'Claude or Mistral'],
            ['Sales deck with Excel data', 'Copilot'],
            ['Research the latest industry trends', 'Gemini'],
            ['Creative visuals for a campaign', 'DALL-E / ChatGPT-4o'],
          ],
        },
        {
          type: 'p',
          text: 'The “right answer” in an exam is the tool whose stated strength matches the task. In real life, several tools can do each job, so trial and cost also matter.',
        },
      ],
    },
    {
      kicker: 'Specialists',
      title: 'Specialized tools by domain',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Visuals',
              text: '**Midjourney** for artistic, cinematic images. **Stable Diffusion** for open-source, customizable control. **Canva** for fast marketing designs with templates and teamwork.',
            },
            {
              title: 'Audio and video',
              text: '**Suno / Udio** for music and jingles. **Runway / Pika** for short video, effects and editing.',
            },
            {
              title: 'Code and apps',
              text: '**GitHub Copilot** and **Cursor** for assisted programming. **Replit** for prototyping. **v0**, **Lovable** and **Bolt.new** to build interfaces or whole apps from a conversation.',
            },
          ],
        },
        {
          type: 'p',
          text: '**Choosing your toolkit:** for each of your domains (main work, secondary, occasional) pick one tool and justify it with these criteria: output quality, ease of use, integration with your tools, cost versus benefit, and whether the tool keeps improving.',
        },
        {
          type: 'callout',
          title: 'Check before you adopt',
          text: 'For any tool: where does my data go, who owns the output, what does it cost, and does it comply with my organization’s rules (and the GDPR)?',
        },
      ],
    },
    {
      kicker: 'Workflows',
      title: 'Chaining several AIs',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Phase 1: Strategic intelligence', text: 'Claude or Gemini: research and analysis. Output: a creative brief.' },
            { title: 'Phase 2: Multimodal creation', text: 'ChatGPT-4o with DALL-E, or Midjourney: text and visuals aligned to the brief.' },
            { title: 'Phase 3: Professional optimization', text: 'Copilot or a format-specific tool: polish and package for the client.' },
          ],
        },
        {
          type: 'p',
          text: '**Pattern 2, the iterative cross-AI loop:** AI A creates, AI B critiques and improves, AI C adds its specialty, and AI A finalizes. For example: ChatGPT drafts, Claude improves, Copilot formats, ChatGPT-4o adds images.',
        },
        {
          type: 'bullets',
          items: [
            '**Centralize and document** your workflow prompts.',
            'Write **handover prompts** that carry context from one AI to the next.',
            'Set **validation checkpoints** at each phase.',
            '**Measure** which combinations work and refine.',
            '**Protect data** when passing text between tools.',
          ],
        },
      ],
    },
    {
      kicker: 'Habits',
      title: 'Focus, selection and watch',
      blocks: [
        {
          type: 'p',
          text: 'Resist testing everything. The lesson recommends **mastering three or four AIs well** rather than ten superficially.',
        },
        {
          type: 'table',
          head: ['When', 'What'],
          rows: [
            ['Month 1', 'Perfect ChatGPT, discover one specialist AI for your domain.'],
            ['Month 2', 'Add a complementary AI and try dual-AI workflows.'],
            ['Month 3', 'Optimize workflows and explore a third specialization.'],
            ['Quarter 2', 'Orchestrate multi-AI workflows and invent your own combinations.'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Selection matrix:** quality, ease of use, integration, cost/benefit, scalability.',
            '**Technology watch:** weekly check updates of your main tools, monthly try one emerging AI, quarterly re-evaluate your set-up, yearly do a full benchmark.',
            '**Exam skills:** analyze needs, select the best tool, design prompts for each platform, and orchestrate multi-AI workflows.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Generative AI ecosystem', def: 'The set of AI tools for text, images, audio, video, code and more, each with its own strengths.' },
    { term: 'Structured image prompt', def: 'An image request with subject, style, composition, atmosphere and technical details.' },
    { term: 'Conversational iteration', def: 'Refining an image or text through a series of follow-up requests.' },
    { term: 'Visual series', def: 'A set of images that share style, palette and lighting so they look like one family.' },
    { term: 'Multimodal', def: 'Able to work with more than one type of content, such as text and images.' },
    { term: 'Claude', def: 'Anthropic’s assistant, described in the lesson as strong in nuanced analysis of long documents.' },
    { term: 'Gemini', def: 'Google’s assistant, linked to Google search and Workspace.' },
    { term: 'Copilot', def: 'Microsoft’s assistant, built into Microsoft 365 apps.' },
    { term: 'Mistral', def: 'A French AI company with efficient models and options for deployment under the customer’s control.' },
    { term: 'Midjourney / Stable Diffusion', def: 'Image generators: one known for artistic style, the other for open-source customization.' },
    { term: 'Multi-AI workflow', def: 'A sequence in which different AIs handle different phases of one project.' },
    { term: 'Handover prompt', def: 'A prompt that passes the context from one AI tool to the next.' },
    { term: 'Technology watch', def: 'A regular routine to follow updates and new tools.' },
    { term: 'Digital sovereignty', def: 'Keeping control over where your data and AI services run and who can access them.' },
  ],
  cards: [
    { front: 'Five parts of a structured image prompt', back: 'Subject, style, composition, atmosphere and lighting, technical details.' },
    { front: 'Five steps of image iteration', back: 'Create, critique, adjust, variants, optimize.' },
    { front: 'What makes an image series consistent?', back: 'A shared charter: style, palette, lighting, composition.' },
    { front: 'Lesson pick for analyzing a long contract', back: 'Claude (or Mistral).' },
    { front: 'Lesson pick for slides with Excel data', back: 'Copilot.' },
    { front: 'Lesson pick for current web research', back: 'Gemini.' },
    { front: 'Lesson pick for creative visuals', back: 'DALL-E or ChatGPT-4o (also Midjourney for artistic work).' },
    { front: 'Three phases of the standard multi-AI workflow', back: 'Strategic intelligence, multimodal creation, professional optimization.' },
    { front: 'What is the iterative cross-AI loop?', back: 'AI A creates, B critiques, C adds a specialty, A finalizes.' },
    { front: 'Tool selection criteria', back: 'Quality, ease of use, integration, cost/benefit, scalability.' },
    { front: 'Why not test every tool?', back: 'Mastering 3-4 well beats knowing ten superficially.' },
    { front: 'Watch routine', back: 'Weekly: main tools. Monthly: one new AI. Quarterly: re-evaluate. Yearly: full benchmark.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Mistral AI and European sovereignty',
    note: 'Mistral AI announced a EUR 1.7 billion Series C in September 2025 at a EUR 11.7 billion valuation, with the Dutch chip-equipment maker ASML as lead investor (Mistral, Orrick and press coverage).',
    slides: [
      {
        kicker: 'What happened',
        title: 'A European challenger raises big money',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Raised', value: '€1.7B', note: 'Series C, September 2025.' },
              { label: 'Valuation', value: '€11.7B', note: 'Reported valuation after the round.' },
              { label: 'Lead investor', value: 'ASML', note: 'Became Mistral’s top shareholder.' },
            ],
          },
          {
            type: 'p',
            text: 'Mistral is the lesson’s example of a company selling both efficient models and the promise of control: models that can be deployed in the customer’s own environment.',
          },
        ],
      },
      {
        kicker: 'Why it matters',
        title: 'The ecosystem is changing quickly',
        blocks: [
          {
            type: 'bullets',
            items: [
              'New entrants and investments shift which tools are best, which is why the chapter stresses a **watch routine**.',
              'Data location and control (**sovereignty**) can be a deciding criterion for clubs, public bodies and companies under the GDPR.',
              'Funding and valuation say nothing about whether a tool suits **your** task. Test it.',
            ],
          },
          {
            type: 'callout',
            title: 'As of November 2026',
            text: 'The figures above are from September 2025 and may have changed. Check current sources before quoting valuations or product claims.',
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
                title: 'Mistral AI raises €1.7B to accelerate technological progress with AI',
                url: 'https://mistral.ai/fr/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai',
                note: 'Mistral AI, September 2025. The round, its lead investor and its stated aims.',
              },
              {
                title: 'Orrick advises Mistral AI in its €1.7B Series C funding round',
                url: 'https://www.orrick.com/en/News/2025/09/Orrick-conseille-Mistral-AI-dans-le-cadre-de-sa-levee-de-fonds-en-Serie-C',
                note: 'Orrick, September 2025. Confirms the size of the round.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: a derby campaign with three AIs',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The project',
        title: 'Plan the derby-week campaign',
        blocks: [
          {
            type: 'flow',
            items: [
              { title: 'Phase 1: Gemini', text: 'Research recent derby attendance trends and fan sentiment from public sources. Output: a short brief with audience and message ideas.' },
              { title: 'Phase 2: ChatGPT-4o', text: 'Draft slogans and social posts and generate a matching visual series. Output: a campaign kit.' },
              { title: 'Phase 3: Copilot', text: 'Build the sponsor presentation and the ticket-sales tracking sheet. Output: deck and dashboard.' },
            ],
          },
          {
            type: 'p',
            text: 'Between phases Dana writes a **handover prompt**: “Here is the brief from phase 1: [text]. Use it to write five slogans for families and five for season-ticket holders.” She checks facts at each checkpoint and keeps fan names out of every prompt.',
          },
        ],
      },
      {
        kicker: 'Visuals',
        title: 'A structured image prompt for the series',
        blocks: [
          {
            type: 'table',
            head: ['Part', 'Beacon’s choice'],
            rows: [
              ['Subject', 'A diverse group of supporters in club scarves walking towards the stadium at dusk, smiling.'],
              ['Style', 'Warm editorial photography, realistic, no real logos or recognizable individuals.'],
              ['Composition', 'Wide shot, slightly low angle, landscape for banners; also a portrait crop for stories.'],
              ['Atmosphere', 'Golden-hour light, club colors (deep blue and amber), festive but calm.'],
              ['Technical', 'High resolution, sharp foreground, soft background crowd.'],
            ],
          },
          {
            type: 'callout',
            title: 'Rules Beacon follows',
            text: 'Label AI-generated images in the campaign, never present them as real match photos, and have the communications lead approve every image.',
          },
        ],
      },
      {
        kicker: 'Choosing tools',
        title: 'Beacon’s toolkit',
        blocks: [
          {
            type: 'table',
            head: ['Need', 'Tool', 'Why'],
            rows: [
              ['Analyze sponsor contracts', 'A long-document assistant (such as Claude or Mistral)', 'Handles long text and nuance. Contracts stay inside an approved, private set-up.'],
              ['Sales decks and sheets', 'Copilot', 'Club already uses Microsoft 365.'],
              ['Quick social graphics', 'Canva', 'Templates and teamwork for the small comms team.'],
              ['Current-trend research', 'Gemini', 'Search integration.'],
            ],
          },
          {
            type: 'p',
            text: 'The lesson’s advice applies: master three or four tools, review the set-up every quarter, and run a monthly try-out of one new tool.',
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
      q: 'What is the central principle of the “Beyond ChatGPT” chapter?',
      options: [
        'ChatGPT should be used for everything.',
        'Different AIs have different strengths, so match the tool to the task and orchestrate several when needed.',
        'The newest tool is always the best.',
        'Avoid image generation.',
      ],
      answer: 1,
      explanation: 'Specialization and orchestration: the right tool for each job and a workflow that chains them.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which set lists the parts of the structured image prompt?',
      options: [
        'Context, Length, Examples, Audience, Role',
        'Subject, style, composition, atmosphere and lighting, technical details',
        'Who, what, where, when, why',
        'Hook, body, call to action',
      ],
      answer: 1,
      explanation: 'CLEAR is the text-prompt framework. The image template adds visual parameters.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'You like a generated image but the facial expression is cold. What does the iteration method recommend?',
      options: [
        'Start from scratch with a new prompt.',
        'Ask for a targeted change (a warmer expression) while preserving the elements that work.',
        'Give up on AI images.',
        'Regenerate until it is perfect, without changing the prompt.',
      ],
      answer: 1,
      explanation: 'Targeted adjustments preserve good elements and make the change controllable.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'What keeps a series of images visually coherent?',
      options: [
        'Using a different style for each image',
        'A shared graphic charter: style, palette, lighting and composition rules',
        'Different tools for each image',
        'Random settings',
      ],
      answer: 1,
      explanation: 'The constants (palette, lighting, realism level) are specified once and repeated.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Per the lesson, which assistant is the best fit for building a PowerPoint deck with Excel data inside a Microsoft environment?',
      options: ['Copilot', 'Midjourney', 'Suno', 'Stable Diffusion'],
      answer: 0,
      explanation: 'Copilot is integrated into Microsoft 365, so it works natively with PowerPoint and Excel.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'You need up-to-date industry trends from the web. Which choice does the lesson give?',
      options: ['Gemini', 'Runway', 'v0', 'Canva'],
      answer: 0,
      explanation: 'Gemini is described as strong at real-time web research through the Google ecosystem.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which pair is correctly matched?',
      options: [
        'Suno/Udio: music generation',
        'Runway/Pika: spreadsheets',
        'Canva: database design',
        'Cursor: audio mastering',
      ],
      answer: 0,
      explanation: 'Suno and Udio generate music. Runway and Pika are for video, Canva for design and Cursor for coding.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'In the three-phase multi-AI workflow, what is produced at the end of phase 1?',
      options: [
        'The final client deliverable',
        'A contextualized creative brief based on research and analysis',
        'A set of images',
        'A budget spreadsheet',
      ],
      answer: 1,
      explanation: 'Phase 1 builds the strategic brief that guides creation in phase 2 and polishing in phase 3.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'What is a “handover prompt”?',
      options: [
        'A prompt that deletes the conversation',
        'A prompt that carries context from one AI tool to the next',
        'A prompt for image resolution',
        'A legal notice',
      ],
      answer: 1,
      explanation: 'It makes sure the next tool has the context it needs, without relying on any memory of the earlier chat.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'The lesson’s advice on how many tools to learn is…',
      options: [
        'Test as many as possible',
        'Master 3 to 4 well rather than 10 superficially',
        'Use only one',
        'Switch tool every day',
      ],
      answer: 1,
      explanation: 'The “economy of attention” principle favors depth over breadth.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'Why should you not rely on a vendor’s funding or valuation to choose a tool?',
      options: [
        'Funding is always fake.',
        'It says nothing about whether the tool fits your task, data rules and budget, so you must test it.',
        'Investors choose the best tools.',
        'It is illegal to check.',
      ],
      answer: 1,
      explanation: 'Selection should use quality, ease, integration, cost/benefit and compliance for your own use case.',
      review: { section: 'real', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A club must prepare a sponsor proposal: market research on the sponsor’s sector, a visual concept, and a final presentation with figures. Design a three-phase multi-AI workflow. For each phase, name the AI and justify the choice, state the deliverable, and describe the handover to the next phase and one quality check.',
      answer: [
        'Phase 1, strategic intelligence: a research-capable assistant such as Gemini (current web information) or Claude (analysis of long documents). Deliverable: a brief with sponsor goals, audience, competitors and key messages. Check: verify facts and sources.',
        'Handover: “Here is the brief: [text]. Use it to propose three visual concepts and the text for each.”',
        'Phase 2, multimodal creation: ChatGPT-4o with DALL-E (or Midjourney for artistic concepts) for coordinated text and images, with a shared graphic charter. Deliverable: concept kit. Check: consistency with the brief and no real people or logos used improperly. Label AI images.',
        'Handover: provide the approved texts and images with the numbers to be included.',
        'Phase 3, professional optimization: Copilot for PowerPoint and Excel (if the club uses Microsoft 365). Deliverable: the sponsor deck and a figures sheet. Check: numbers match club data, and a human reviews before sending.',
        'Each phase enriches the next: brief, then creative content, then a client-ready package.',
      ],
      marking: [
        'Three phases with a suitable AI each (3)',
        'Justification for each choice (3)',
        'Deliverables and handovers (2)',
        'Quality checks and human review (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Write a structured image prompt for a banner showing a family arriving at a stadium for a match, using all five parts of the template. Then write a second-round prompt that improves it by iteration.',
      answer: [
        'Subject: a family of four in club scarves, the two children smiling and pointing at the stadium, parents holding tickets on their phones, standing in the foreground. Style: warm editorial photography, realistic, no recognizable real people or real brand logos. Composition: wide shot, slightly low angle, landscape format for a web banner, space on the right for text. Atmosphere: golden-hour light, deep blue and amber palette, festive and welcoming. Technical: high resolution, sharp foreground, softly blurred crowd, natural skin tones.',
        'Iteration: “List three things that could be improved so the image feels more welcoming. Then keep the composition and palette, make the expressions more joyful, widen the empty space on the right for a headline, and generate two variants: one with a grandparent included, one at night under floodlights.”',
      ],
      marking: [
        'All five parts present and specific (5)',
        'Follow-up prompt critiques, adjusts while preserving, and asks for variants (3)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Compare Claude, Gemini and Copilot as presented in the lesson. For each, give the main strength and one task you would assign to it. Then give two reasons why you should still test any tool yourself.',
      answer: [
        'Claude: nuanced analysis and synthesis of long documents; task: review a long sponsorship contract and list risky clauses. Gemini: integration with Google search and Workspace; task: research current trends and summarize sources. Copilot: integration with Microsoft 365; task: build a PowerPoint deck from Excel data.',
        'Test tools yourself because: model quality and features change quickly and the lesson is a snapshot, and results depend on your task, data and budget. Vendor claims are not independent evidence. Compliance (where data goes, GDPR) must also be checked for your own use.',
      ],
      marking: [
        'Each assistant with strength and task (3)',
        'Two valid reasons to test (2)',
        'Clear and concise (1)',
      ],
    },
  ],

  videos: [],
};
