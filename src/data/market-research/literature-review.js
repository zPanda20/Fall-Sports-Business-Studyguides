// Market Research, Session 4: Finding and reviewing literature.
// Built from the Session 4 lecture slides (types of sources, literature review process, keywords, APA
// citations, using AI in literature reviews). Slides are the authority; explanations are written from scratch.
// Real example: the 2023 Mata v. Avianca court case (fake AI citations), as reported by the ABA Journal.

export const literatureReviewTopic = {
  id: 'literature-review',
  course: 'market-research',
  title: 'Finding literature and writing a literature review',
  sessions: 'Session 4',
  reading: 'Session 4 slides',
  minutes: 25,
  summary:
    'How to find credible sources, search them systematically, review them critically, cite them correctly, and use AI as an assistant without letting it do the thinking.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'A literature review is a map of what is already known',
      blocks: [
        {
          type: 'big',
          text: 'A **literature review** is a careful, critical overview of what researchers already know about your topic.',
        },
        {
          type: 'bullets',
          items: [
            'It is **systematic**: you search and select in a planned way, not just whatever you find first.',
            'It shows the key **theories, findings, methods and gaps**.',
            'It goes **beyond summarizing**. You compare sources, judge their quality and combine them into one argument.',
            'It is the **foundation** for your own research.',
          ],
        },
      ],
    },
    {
      kicker: 'Why bother',
      title: 'What a literature review is for',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Understand', text: 'where research on the topic stands' },
            { title: 'Define', text: 'and justify your research question' },
            { title: 'Borrow', text: 'theories and methods that others already tested' },
            { title: 'Find the gap', text: 'what is missing or disputed' },
            { title: 'Position', text: 'your study in the academic conversation' },
          ],
        },
        {
          type: 'p',
          text: 'A good question usually comes **out of** the review. You read first, then you can say exactly what your study adds.',
        },
      ],
    },
    {
      kicker: 'Sources',
      title: 'Not every source weighs the same',
      blocks: [
        {
          type: 'table',
          head: ['Source type', 'What it gives you', 'How to use it'],
          rows: [
            ['Peer-reviewed journal articles', 'Theories, evidence and scientific debate', 'The core of a review. The most credible type.'],
            ['Books and book chapters', 'Theoretical foundations and frameworks', 'Good for concepts and definitions.'],
            ['Conference proceedings', 'Early, emerging findings', 'Use carefully. Review may be lighter than in journals.'],
            ['Institutional and industry reports', 'Up-to-date statistics, market data, policy context', 'Background, not core theory. Choose reputable organizations.'],
            ['Grey literature (news, blogs)', 'Fast-moving topics such as AI or digital marketing', 'Only with caution. Evaluate critically.'],
            ['Official statistics and datasets', 'Numbers that frame the topic', 'Use to support the literature with context.'],
          ],
        },
        {
          type: 'p',
          text: '**Peer-reviewed** means other experts checked the work before it was published. That check is why journal articles rank highest.',
        },
      ],
    },
    {
      kicker: 'Rule of thumb',
      title: 'What to lean on, and what to avoid',
      blocks: [
        {
          type: 'callout',
          title: 'A literature review must mainly use peer-reviewed journal articles',
          text: 'Books, conference papers and reliable institutional reports can support them when relevant.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Be careful with',
              text: 'Wikipedia and general blogs. Websites without credibility. Outdated sources, unless they are seminal (the classic work everyone builds on).',
            },
            {
              title: 'Never use unchecked',
              text: 'AI output you have not verified. AI can invent references that look real.',
            },
          ],
        },
        {
          type: 'p',
          text: 'The lecture warns of three real-world versions of the same mistake: papers with made-up citations, legal briefs citing cases that do not exist, and market research built on invented (synthetic) respondents.',
        },
      ],
    },
    {
      kicker: 'The process',
      title: 'Six steps, in order',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Define scope', text: 'topic and research questions, timeframe, keywords' },
            { title: '2. Search', text: 'Scopus, Web of Science, Google Scholar' },
            { title: '3. Select', text: 'apply inclusion and exclusion criteria' },
            { title: '4. Read and code', text: 'themes, methods, findings' },
            { title: '5. Synthesize', text: 'build categories, compare views' },
            { title: '6. Write', text: 'summarize trends, justify the gap, reference' },
          ],
        },
        {
          type: 'p',
          text: '**Inclusion and exclusion criteria** are rules you write down **before** you select, for example “published 2015 or later” or “about professional football.” They keep the choice fair and repeatable.',
        },
      ],
    },
    {
      kicker: 'Searching',
      title: 'Keywords and search strings',
      blocks: [
        {
          type: 'steps',
          items: [
            '**List every key concept** in your research question, then add synonyms and related terms.',
            '**Join synonyms with OR.** The lecture’s example: “luxury brand*” OR “high-end brand*” OR “prestige brand*” OR “premium brand*”.',
            '**Join different concepts with AND** (the usual next step), so each result mentions all your concepts.',
            '**Use quotation marks** for exact phrases and **an asterisk** to catch word endings (brand* finds brand, brands, branding).',
            '**Keep adding** new keywords as you discover them while reading.',
          ],
        },
        {
          type: 'callout',
          tone: 'good',
          title: 'Example for a sports topic',
          text: '(“fan experience” OR “spectator experience” OR “supporter experience”) AND (“social media” OR “Instagram” OR “online communit*”)',
        },
      ],
    },
    {
      kicker: 'Reading',
      title: 'Take notes in a table, not in your head',
      blocks: [
        {
          type: 'p',
          text: 'While you read, write the same few things for every paper. Later you can compare them side by side and see patterns.',
        },
        {
          type: 'table',
          head: ['Question', 'What you note'],
          rows: [
            ['Research question', 'What did the authors ask?'],
            ['Theoretical lens', 'Which theory or framework did they use?'],
            ['Method', 'Survey, interviews, experiment, data analysis?'],
            ['Key findings', 'What did they find?'],
            ['Limitations', 'What cannot be concluded?'],
          ],
        },
        {
          type: 'p',
          text: 'Published reviews are good models. The lecture shows “Brand Activism: A Literature Review and Future Research Agenda” (Cammarota et al., 2023) as an example of how a review is organized.',
        },
      ],
    },
    {
      kicker: 'Citing',
      title: 'APA style: give credit and let readers find the source',
      blocks: [
        {
          type: 'table',
          head: ['In-text citation', 'Format'],
          rows: [
            ['One author', '(Keller, 2013) or Keller (2013) argues that…'],
            ['Two authors', '(Smith & Lee, 2021)'],
            ['Three or more authors', '(Johnson et al., 2020)'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'Every work cited in the text must appear in the **reference list** at the end, with full details.',
            'Do not trust AI to format references. Copy the APA version from **Google Scholar** (click “Cite”, choose APA) or from a citation generator such as Scribbr.',
            'APA style avoids plagiarism, keeps writing consistent and lets readers trace every source.',
          ],
        },
        {
          type: 'figure',
          src: 'mr-literature-scholar-cite.png',
          alt: 'Google Scholar result with the Cite window open on the APA tab',
          caption: 'Where to find a ready-made APA reference in Google Scholar.',
          need: 'A screenshot of a Google Scholar search result with the “Cite” pop-up open and the APA line visible.',
        },
      ],
    },
    {
      kicker: 'AI in the review',
      title: 'AI is an assistant, not the researcher',
      blocks: [
        {
          type: 'big',
          text: '**AI structures. Humans theorize.**',
        },
        {
          type: 'flow',
          items: [
            { title: 'Step 1: Human', text: 'defines the research question and the inclusion and exclusion criteria' },
            { title: 'Step 2: AI assisted', text: 'expands keywords, screens abstracts, clusters themes' },
            { title: 'Step 3: Human control', text: 'integrates theory, formulates the gap, builds the argument' },
          ],
        },
        {
          type: 'p',
          text: 'The reason is simple. You remain responsible for the method and for every claim in your review.',
        },
      ],
    },
    {
      kicker: 'AI in the review',
      title: 'What AI can help with, and where it fails',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Helpful for',
              text: 'Generating search strings and synonyms. Summarizing abstracts and pulling out the variables, method and findings into a standard table. Suggesting first-pass themes, clusters and contradictions.',
            },
            {
              title: 'Cannot do (yet)',
              text: 'Reach paywalled databases directly. Replace a formal systematic review protocol. Guarantee completeness or theoretical depth. Avoid hallucinations.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Critical risks',
          items: [
            'Fake references.',
            'Misreading nuance.',
            'Over-standardized, bland writing.',
            'Losing your own original thinking.',
          ],
        },
        {
          type: 'p',
          text: 'Always check AI keywords by hand. Treat AI coding as a **first-order** suggestion. The **second-order** step, turning themes into theory and spotting real gaps, needs your judgment. Before uploading a PDF to an AI tool, consider copyright.',
        },
      ],
    },
    {
      kicker: 'Tools',
      title: 'Tools named in the lecture',
      blocks: [
        {
          type: 'table',
          head: ['Tool', 'What it does'],
          rows: [
            ['Elicit', 'AI research assistant. Pulls structured information out of papers.'],
            ['ResearchRabbit', 'Maps citations and research networks.'],
            ['Connected Papers', 'Draws a visual similarity graph around one paper.'],
            ['Scite', 'Shows how later papers cite a paper: supporting or contradicting.'],
            ['ChatGPT', 'Helps with thematic synthesis and structuring arguments.'],
          ],
        },
        {
          type: 'figure',
          src: 'mr-literature-connected-papers.png',
          alt: 'A Connected Papers graph built from one academic paper',
          caption: 'In class you build a graph from one paper, then look for two highly cited, two recent and one very relevant paper.',
          need: 'A screenshot of a Connected Papers graph for a sports marketing paper, with the node sizes and years visible.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Literature review', def: 'A systematic, critical overview of existing research on a topic. It evaluates and combines sources and shows the gap your study fills.' },
    { term: 'Peer review', def: 'A check of a research paper by other experts before it is published.' },
    { term: 'Grey literature', def: 'Material outside academic journals, such as newspapers and blogs. Useful for fast-moving topics, but it needs critical evaluation.' },
    { term: 'Seminal work', def: 'A classic, foundational study that later research builds on. An old source can still be acceptable if it is seminal.' },
    { term: 'Search string', def: 'A planned combination of keywords, synonyms and operators typed into a database.' },
    { term: 'Boolean operators', def: 'Words like OR and AND that combine search terms. OR widens a search. AND narrows it.' },
    { term: 'Inclusion and exclusion criteria', def: 'Written rules that decide which studies enter the review and which do not.' },
    { term: 'Synthesis', def: 'Combining findings from several sources into categories and one argument, rather than describing each source in turn.' },
    { term: 'Research gap', def: 'Something the existing literature has not answered, or where results conflict. Your study should fill or address it.' },
    { term: 'APA style', def: 'A standard citation format from the American Psychological Association: author and year in the text, full details in a reference list.' },
    { term: 'Reference list', def: 'The list at the end of a paper with the full details of every source cited in the text.' },
    { term: 'Hallucinated citation', def: 'A reference invented by an AI tool. It looks real but the paper does not exist.' },
    { term: 'Extraction table', def: 'A table with the same columns for each paper (question, lens, method, findings, limits) so papers can be compared.' },
    { term: 'First-order and second-order coding', def: 'First-order coding sorts content into themes (AI can suggest this). Second-order abstraction links the themes to theory (a human task).' },
  ],
  cards: [
    { front: 'Which source type is the core of a literature review?', back: 'Peer-reviewed journal articles, supported by books, conference papers and reliable reports.' },
    { front: 'Four things a literature review must do beyond summarizing', back: 'Compare, critically evaluate, synthesize and identify gaps.' },
    { front: 'How do you combine synonyms in a search?', back: 'With OR inside each concept group. Different concepts are then joined with AND.' },
    { front: 'What should you write down before selecting studies?', back: 'Inclusion and exclusion criteria.' },
    { front: 'How should an AI-given reference be treated?', back: 'As unverified until you find the paper yourself. Better still, copy references from Google Scholar.' },
    { front: 'APA in-text citation for three or more authors', back: '(Johnson et al., 2020)' },
    { front: 'Golden rule of AI in literature reviews', back: 'AI structures. Humans theorize.' },
    { front: 'Which steps of an AI-supported review stay human?', back: 'Defining the question and criteria, integrating theory, formulating the gap and building the argument.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Mata v. Avianca: when nobody checked the AI’s sources',
    note: 'A 2023 US court case about made-up citations, as reported by the ABA Journal on June 26, 2023. It is a legal case, not a sports one, but the lesson is the same for any literature review.',
    slides: [
      {
        kicker: 'What happened',
        title: 'Six cases that did not exist',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Ruling', value: 'June 22, 2023', note: 'US District Court, Manhattan' },
              { label: 'Fine', value: '$5,000', note: 'two lawyers and their firm' },
              { label: 'Fake opinions', value: '6', note: 'each credited to a real judge' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The lawyers were defending a personal-injury claim against an airline. Their March 1 filing cited court opinions that had been generated by ChatGPT.',
              'The airline’s lawyers said they could not find most of the cases. The judge then asked the lawyers for copies of the opinions.',
              'The court found bad faith, saying the lawyers “doubled down” and did not tell the truth until after the judge ordered them to explain.',
              'As part of the punishment, the lawyers had to send letters to each of the six judges falsely named as authors of the nonexistent opinions.',
            ],
          },
        ],
      },
      {
        kicker: 'The link to your review',
        title: 'The same trap in a literature review',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'What went wrong',
                text: 'Sources were never opened or checked. A tool produced text that **looked** like real references, and it was trusted because it sounded confident.',
              },
              {
                title: 'What a researcher does instead',
                text: 'Find each paper in a database. Read at least the abstract. Copy the reference from Google Scholar. If you cannot find it, it does not go in your review.',
              },
            ],
          },
          {
            type: 'p',
            text: 'The ABA Journal also reports that the lawyers said they used ChatGPT to “supplement” their research. The court’s reading was that they turned to it after another research tool did not help them. Either way, the checking step was missing.',
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
                title: 'Lawyers who “doubled down” and defended ChatGPT’s fake cases must pay $5K, judge says',
                url: 'https://abajournal.com/web/article/lawyers-who-doubled-down-and-defended-chatgpts-fake-cases-must-pay-5k-judge-says',
                note: 'ABA Journal, June 26, 2023. Ruling date, court, fine, the six judges, the March 1 filing and the bad-faith finding. The link to literature reviews is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers review fan loyalty and match-day atmosphere',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The question',
        title: 'Why do some season-ticket holders not renew?',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers’ research team wants to understand whether **match-day atmosphere** affects **season-ticket renewal**. Before collecting any data, they review what is already known.',
          },
          {
            type: 'bullets',
            items: [
              '**Research question:** How does perceived match-day atmosphere relate to season-ticket renewal among adult supporters?',
              '**Search string:** (“match-day atmosphere” OR “stadium atmosphere” OR “spectator experience”) AND (“season ticket*” OR “renewal” OR “repurchase intention”)',
              '**Inclusion criteria:** peer-reviewed, published 2015 or later, about professional football or similar team sports.',
              '**Exclusion criteria:** studies only about television viewing, and non-English papers.',
            ],
          },
        ],
      },
      {
        kicker: 'Selecting',
        title: 'From 240 hits to 15 studies',
        blocks: [
          {
            type: 'bars',
            title: 'Number of papers left after each step',
            unit: 'papers',
            items: [
              { label: 'Found in databases', value: 240 },
              { label: 'After removing duplicates', value: 200 },
              { label: 'After reading titles and abstracts', value: 60 },
              { label: 'After reading full texts', value: 24 },
              { label: 'Kept in the review', value: 15 },
            ],
          },
          {
            type: 'p',
            text: '40 duplicates were removed (240 − 40 = 200). The team wrote down **why** each paper was dropped, so a colleague could repeat the selection and reach the same list.',
          },
        ],
      },
      {
        kicker: 'Reading and synthesizing',
        title: 'What the extraction table showed',
        blocks: [
          {
            type: 'table',
            head: ['Theme found', 'Papers', 'What they say'],
            rows: [
              ['Atmosphere and loyalty', '9', 'Fans who rate the atmosphere higher say they are more loyal.'],
              ['Ticket price and value', '4', 'Price matters, but mostly when the atmosphere is rated poorly.'],
              ['Studies with real renewal data', '2', 'Most papers use intentions, not actual renewals.'],
            ],
          },
          {
            type: 'callout',
            title: 'The gap',
            text: 'Only 2 of 15 studies use real renewal behavior, and none look at a mid-sized club in a smaller league. That is the gap the Rovers’ own study can address.',
          },
        ],
      },
      {
        kicker: 'Using AI',
        title: 'AI helped, and a human checked',
        blocks: [
          {
            type: 'flow',
            items: [
              { title: 'AI suggested', text: '10 extra keywords and 10 references' },
              { title: 'Human checked', text: '3 of the 10 references could not be found in Google Scholar' },
              { title: 'Result', text: 'The 3 were dropped. 7 were read and 2 passed the criteria.' },
            ],
          },
          {
            type: 'p',
            text: 'Fictional numbers, but typical behavior. The team’s rule was simple: if a reference cannot be found in a database, it is not a source.',
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
      q: 'Which type of source should form the core of an academic literature review?',
      options: [
        'Peer-reviewed journal articles',
        'General blogs',
        'Newspaper opinion columns',
        'Social media posts',
      ],
      answer: 0,
      explanation: 'Peer-reviewed articles are checked by experts and give theory and evidence. Other sources can support them but should not be the core.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which best describes the purpose of a literature review?',
      options: [
        'To critically evaluate existing research, find gaps and build the foundation for a study',
        'To list as many articles as possible without comparing them',
        'To avoid collecting any data yourself',
        'To show that your first assumption was right',
      ],
      answer: 0,
      explanation: 'A review is critical and synthesizing. It does not replace your own data, and it must not be used to simply confirm what you already believe.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which of these is NOT good practice in a literature review?',
      options: [
        'Keeping only articles that support your preferred conclusion',
        'Listing synonyms for each key concept',
        'Searching Scopus, Web of Science and Google Scholar',
        'Using written inclusion and exclusion criteria',
      ],
      answer: 0,
      explanation: 'Cherry-picking supportive studies biases the review. A good review includes sources on the basis of criteria set in advance, whatever they conclude.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which statement about AI in literature reviews is correct?',
      options: [
        'AI can support keyword development, screening and first-pass coding, but the researcher must verify its output',
        'AI references can be trusted if they look academic',
        'AI can find and confirm research gaps without human judgment',
        'AI removes the need to read the original articles',
      ],
      answer: 0,
      explanation: 'AI is an assistant. Fake references, missed nuance and shallow theory are all real risks, so humans verify and decide.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which in-text citation is correct in APA style for a paper by Johnson, Kim, Martinez and Brown (2020)?',
      options: [
        '(Johnson et al., 2020)',
        '(Johnson, Kim, Martinez, Brown, 2020)',
        '(Johnson and colleagues, 2020)',
        '(2020, Johnson)',
      ],
      answer: 0,
      explanation: 'With three or more authors, APA uses the first author’s last name followed by “et al.” and the year.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'A student searches for “luxury brand*” OR “prestige brand*” OR “premium brand*”. What are the OR terms doing?',
      options: [
        'Catching different words for the same concept, so fewer relevant papers are missed',
        'Making sure every paper contains all three phrases',
        'Excluding papers on luxury',
        'Replacing the need for a database',
      ],
      answer: 0,
      explanation: 'OR widens a search by treating the terms as alternatives. AND is what narrows it by requiring different concepts to appear together.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A news article discusses a very recent AI tool for marketers. How should it be treated in a literature review?',
      options: [
        'As grey literature: possibly useful for a fast-moving topic, but evaluated critically and not the core source',
        'As equal to a peer-reviewed article',
        'It must never be cited anywhere',
        'As seminal work',
      ],
      answer: 0,
      explanation: 'Grey literature is helpful where journals are slow to catch up, but it has not been peer reviewed, so it supports the review rather than anchoring it.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'In the responsible AI framework, which step is done by the human and NOT delegated to AI?',
      options: [
        'Formulating the research gap and building the argument',
        'Suggesting extra keywords',
        'Clustering similar abstracts',
        'Summarizing an abstract',
      ],
      answer: 0,
      explanation: 'AI can assist with keywords, screening and theme clustering. Gap formulation needs theoretical judgment, which stays with the researcher.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. A student wants to review research on “fan experience” and “social media”. (a) Write a search string with synonyms. (b) Write two inclusion criteria. (c) Name the first three steps of the process that come after searching. (d) Say one thing AI may do and one thing that must stay human.',
      answer: [
        '**(a)** For example: (“fan experience” OR “spectator experience” OR “supporter experience”) AND (“social media” OR “Instagram” OR “online communit*”).',
        '**(b)** For example: peer-reviewed journal articles, and published in the last ten years. Any clear, written criteria are fine.',
        '**(c)** Select studies using the criteria, read and code them critically, then synthesize them into categories.',
        '**(d)** AI may suggest keywords or screen abstracts. The human must define the question and criteria, integrate theory and formulate the gap.',
      ],
      review: { section: 'plain', slide: 5 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain what a literature review is and why it is more than a summary of articles. Give three purposes it serves in a market research project.',
      answer: [
        'A literature review is a systematic, critical overview of existing academic knowledge on a topic. It identifies the main theories, findings, methods and gaps, and gives the conceptual foundation for the researcher’s own study.',
        'It is more than a summary because it evaluates the quality of sources, compares them and synthesizes them into categories and one argument, instead of describing each article in turn.',
        'Purposes include: understanding the state of research; defining and justifying the research question; finding theories and methods used so far; revealing gaps, inconsistencies or controversies; and positioning the study within the academic conversation.',
      ],
      marking: [
        'Defines a literature review as systematic and critical (2)',
        'Says it identifies theories, findings, methods and gaps (1)',
        'Explains the difference between summarizing and synthesizing or evaluating (2)',
        'Gives three valid purposes (3, one mark each)',
      ],
    },
    {
      id: 'e2',
      marks: 10,
      q: 'A student uses an AI tool to find sources and write the literature review for a thesis. Evaluate this approach. Say what AI can legitimately contribute, what the risks are, and how the student should use it responsibly.',
      answer: [
        'AI can legitimately help with several tasks: generating keyword combinations and synonyms for search strings, screening abstracts and extracting method and findings into a standard table, suggesting preliminary themes and spotting contradictions, and helping to structure arguments.',
        'The risks are serious. AI can produce hallucinated references that look real, misread nuance, standardize and flatten the writing, and weaken the student’s own original thinking. It cannot access paywalled databases directly, replace a systematic review protocol, guarantee completeness or ensure theoretical sophistication.',
        'Used responsibly, AI is a research assistant, not the researcher. In step 1 the human defines the research question and the inclusion and exclusion criteria. In step 2 AI helps with keyword expansion, abstract screening and theme clustering. In step 3 the human controls theory integration, gap formulation and the argument. Every reference and keyword must be verified in a database, and references should be taken from reliable sources such as Google Scholar. The student should also consider copyright before uploading PDFs.',
        'In short, handing the whole review to AI is not acceptable. Using it for structured support under human control is. AI structures and humans theorize.',
      ],
      marking: [
        'Names at least three legitimate AI uses (3)',
        'Names at least three risks, including fake references (3)',
        'Describes the human, AI-assisted, human-control framework (2)',
        'Says outputs must be verified and references checked in real databases (1)',
        'Reaches a clear overall judgment (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Describe four types of sources used in a literature review. For each, say how much weight it deserves and why. Name two things a review should not rely on.',
      answer: [
        'Peer-reviewed journal articles carry the most weight, because experts check them and they give theory, evidence and debate. Books and book chapters are useful for theoretical foundations and concepts. Institutional and industry reports (for example from the OECD or Deloitte) give up-to-date statistics and context, but they are background and not core theory. Grey literature such as newspapers suits fast-moving topics, but it needs critical evaluation and is not core evidence.',
        'A review should not rely on Wikipedia or general blogs, non-academic sites without credibility, unchecked AI output, or outdated sources unless they are seminal.',
      ],
      marking: [
        'Four correct source types (2)',
        'Correct relative weight with a reason for each (2)',
        'Two things not to rely on (2, one each)',
      ],
    },
  ],

  videos: [],
};
