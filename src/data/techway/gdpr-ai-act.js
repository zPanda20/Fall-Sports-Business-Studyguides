// Techway, complementary chapter: GDPR, ethics of AI and the EU AI Act.
// Built from the "GDPR, Ethics of Artificial Intelligence and AI Act" chapter of the Techway lesson document.
// Where the lesson simplifies or has aged, a "Check" callout says so (the AI Act was amended by Regulation (EU) 2026/1744).
// Real example: the Italian data protection authority (Garante) fining OpenAI EUR 15 million, December 2024
// (Euronews, 20 December 2024). AI Act timing: White & Case and Gibson Dunn briefings, as of November 2026.

export const gdprAiActTopic = {
  id: 'gdpr-ai-act',
  course: 'techway',
  title: 'GDPR, AI ethics and the EU AI Act',
  sessions: 'Complementary chapter',
  reading: 'Techway lesson, GDPR and AI Act chapter',
  minutes: 55,
  summary:
    'What personal data is, the principles and eight rights of the GDPR, what controllers must do (DPIA, register, DPO), anonymization vs pseudonymization, AI ethics, and how the AI Act sorts AI into four risk levels with duties for high-risk and general-purpose AI.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Why it exists',
      title: 'If it is free, you are the product',
      blocks: [
        {
          type: 'big',
          text: 'Many online services are free because the company earns money from **data about you**. Law steps in to balance using data with protecting people.',
        },
        {
          type: 'p',
          text: 'The **GDPR** (General Data Protection Regulation) has applied since **25 May 2018** in all 27 EU countries. It covers any organization, public or private, big or small, that handles the data of people in the EU. Fines can reach 4% of worldwide yearly turnover (or €20 million, whichever is higher).',
        },
        {
          type: 'table',
          head: ['Term', 'Plain meaning', 'Example'],
          rows: [
            ['Personal data', 'Anything about a person who is identified **or identifiable**, directly or by combining pieces (Art. 4(1)).', 'Name, photo, phone number, customer number, season-ticket ID.'],
            ['Sensitive data', 'Special categories with stronger protection: political opinion, religion, union membership, ethnic origin, sexual orientation, health, genetic and biometric data.', 'A fan’s medical needs for an accessible seat.'],
            ['Processing', 'Almost anything you do with data, automated or not: collect, store, sort, change, look up, share, delete.', 'Uploading a customer list to a chatbot is processing.'],
          ],
        },
        {
          type: 'callout',
          title: 'Classic error: “this is not personal data”',
          text: 'Data is personal when a person **could be identified**, not only when a name is stored. In an anonymous survey sent to a team of ten with one woman, the answer “female, 40s” points straight at her. Small groups and combined details can identify people.',
        },
        {
          type: 'p',
          text: 'Example from the lesson: in 2020 H&M was fined about €35 million in Germany for building detailed profiles of staff, including sensitive details. The regulator said it broke the data-minimization rule.',
        },
      ],
    },
    {
      kicker: 'Principles',
      title: 'Privacy by design and by default',
      blocks: [
        {
          type: 'p',
          text: 'Article 25 says data protection must be built in **from the first design step** and kept through the whole life of a product. **By default**, without the user doing anything, the most protective settings are on and only necessary data is collected.',
        },
        {
          type: 'flow',
          items: [
            { title: '1. Design', text: 'Identify privacy requirements.' },
            { title: '2. Develop', text: 'Build the protections into the code.' },
            { title: '3. Test', text: 'Check the controls really work.' },
            { title: '4. Deploy', text: 'Confirm compliance before launch.' },
            { title: '5. Maintain', text: 'Keep updating the protections.' },
          ],
        },
        {
          type: 'table',
          head: ['Cavoukian’s 7 principles', 'In practice'],
          rows: [
            ['Proactive, not reactive', 'Assess risks before launch.'],
            ['Privacy as the default', 'Protective settings are on from the start.'],
            ['Privacy embedded in design', 'Part of the system, not a later add-on.'],
            ['Full functionality (positive-sum)', 'Privacy and features together, no trade-off.'],
            ['End-to-end security', 'Protect data until it is deleted.'],
            ['Visibility and transparency', 'Document and show what you do.'],
            ['Respect for user privacy', 'Simple choices and clear notices.'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Map the data:** what is collected and why.',
            '**Analyze the risks** for the people concerned.',
            '**Design protections** (technical and organizational).',
            '**Document** the choices.',
            '**Test and validate** before going live.',
          ],
        },
        {
          type: 'callout',
          title: 'Classic error',
          text: 'Leaving the GDPR “for later”. Data handling shapes the architecture, so fixing it afterwards is costly and risky.',
        },
      ],
    },
    {
      kicker: 'Rights',
      title: 'The eight rights of people',
      blocks: [
        {
          type: 'table',
          head: ['Right', 'What it lets a person do', 'How a company makes it real'],
          rows: [
            ['Be informed', 'Know what is held, why, for how long, who gets it.', 'Layered privacy notice: short summary plus “learn more”.'],
            ['Access', 'Get a copy of their data within one month.', 'Request form, identity check, automatic export.'],
            ['Rectification', 'Fix wrong data.', 'Self-service edit with a log; tell third parties.'],
            ['Erasure (“to be forgotten”)', 'Ask for deletion.', 'Erasure procedure; document legal exceptions such as tax records.'],
            ['Restriction', 'Freeze use of the data for now.', 'A flag that blocks processing.'],
            ['Portability', 'Take their data to another service.', 'Export in CSV, XML or JSON.'],
            ['Object', 'Say no to a use, such as marketing.', 'One-click opt-out with immediate effect.'],
            ['No purely automated decision', 'Ask for a human to review an algorithm’s decision.', 'Human review step and a clear explanation.'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Deadline:** one month to answer, extendable by two more months for complex cases.',
            '**Good setup:** one contact point (such as a DPO address), acknowledgement of receipt, a proportionate identity check, a named owner, a **register of requests**, and reply templates.',
            'Automate easy rights (access, rectification, marketing opt-out) but keep a human for complex cases.',
          ],
        },
        {
          type: 'callout',
          title: 'Check the article numbers',
          text: 'The lesson cites Art. 15 for the right to be informed. In the regulation, information duties are Articles 13 and 14; Art. 15 is access. Use the lesson’s wording in the exam, but know the difference.',
        },
      ],
    },
    {
      kicker: 'Duties',
      title: 'What organizations must do',
      blocks: [
        {
          type: 'p',
          text: '**Accountability** is a core idea: it is not enough to comply, you must be able to **prove** it. The **controller** decides why and how data is processed. The **processor** handles it on the controller’s behalf. Both answer for compliance.',
        },
        {
          type: 'table',
          head: ['Duty', 'What it means', 'Example from the lesson'],
          rows: [
            ['Valid consent', 'Get clear consent where it is the legal basis. The age of digital consent is 16 by default (a country may lower it to 13).', ''],
            ['Respect the rights', 'Answer requests properly.', 'Carrefour fined €3M for asking for ID copies, ignoring requests and unfair collection.'],
            ['Security and breach reporting', 'Protect data; report a breach to the authority within 72 hours.', 'British Airways penalized after a 2018 cyberattack exposed weak basic protections.'],
            ['Register of processing', 'A list of all processing activities.', ''],
            ['DPIA', 'Impact assessment for high-risk processing.', ''],
            ['Transfers outside the EU', 'Only to countries with adequate protection, or with safeguards.', ''],
            ['Appoint a DPO', 'A data protection officer when criteria are met.', ''],
          ],
        },
        {
          type: 'callout',
          title: 'When a DPIA is mandatory',
          text: 'Systematic in-depth evaluation of people including profiling; large-scale processing of sensitive data; large-scale monitoring of public areas. Examples: facial recognition in a shopping center, a health app, an AI loan scoring tool, AI that pre-selects job candidates.',
        },
        {
          type: 'steps',
          items: [
            '**Describe** the processing: nature, scope, purposes, data flows.',
            '**Check necessity and proportionality.**',
            '**Identify risks** to people and rate probability and severity.',
            '**Choose measures** to reduce each risk (including AI-specific ones such as bias tests and human oversight).',
            '**Consult** the DPO and, if needed, the authority or the people concerned.',
            '**Decide** whether the remaining risk is acceptable and set an action plan with dates.',
          ],
        },
      ],
    },
    {
      kicker: 'Protecting data',
      title: 'Anonymization vs pseudonymization',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Anonymization',
              text: '**Irreversible.** No one can identify the person, even by combining sources. Truly anonymous data is **outside the GDPR**. Techniques: aggregation, deleting identifiers, generalizing (ranges instead of exact values), adding noise.',
            },
            {
              title: 'Pseudonymization',
              text: '**Reversible with extra information** kept separately. The data is **still personal data** and the GDPR still applies, but it is a recommended safeguard. Techniques: encryption with a stored key, salted hashing, tokenization, codes with a separate lookup table.',
            },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**The three re-identification tests** for real anonymity: can you **single out** an individual, **link** records about the same person, or **infer** something about them? If any answer is yes, it is not anonymous.',
            '**Use anonymization** for statistics, open datasets, long-term archives and software test data.',
            '**Use pseudonymization** when you must follow people over time or may need to re-identify them for a good reason (such as medical research).',
            '**Pitfalls:** perfect anonymization is hard as outside data grows; swapping names for IDs is easily broken; test the risk of re-identification.',
          ],
        },
        {
          type: 'callout',
          title: 'Link to AI use',
          text: 'Before pasting anything into a chatbot, remove or generalize personal details. That is anonymization in practice, and it is the core of Practical 2, Exercise 1.',
        },
      ],
    },
    {
      kicker: 'Ethics',
      title: 'Three ethical problems with AI',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Deepfakes', text: 'The word (2017) joins “deep learning” and “fake”. AI swaps a face or voice onto other video or audio. Risks: fraud, defamation, false news, consent.' },
            { title: 'Moral dilemmas', text: 'If a self-driving car must choose between harming its passengers or pedestrians, who decides, and who is responsible? MIT’s Moral Machine collects public opinions on such choices.' },
            { title: 'Discriminating algorithms', text: 'If an algorithm learns “the ideal candidate” from past hires who were mostly men from the same schools, it copies that pattern and screens out others.' },
          ],
        },
        {
          type: 'callout',
          title: 'What good oversight looks like',
          text: 'The lesson cites the French authority CNIL asking a facial-recognition developer for: scientifically valid performance metrics (including error rates for different groups), a systematic analysis of errors, proof of robustness in varied conditions (day and night, weather, image quality) and a reflection on bias.',
        },
      ],
    },
    {
      kicker: 'AI Act',
      title: 'Four risk levels',
      blocks: [
        {
          type: 'p',
          text: 'The **EU AI Act** is the first broad legal framework for AI. It applies across sectors and sorts AI systems by risk, with more duties as risk rises.',
        },
        {
          type: 'table',
          head: ['Level', 'Meaning', 'Examples', 'Rule'],
          rows: [
            ['Unacceptable (prohibited)', 'Against EU values and fundamental rights.', 'Social scoring, manipulative subliminal techniques, certain real-time biometric identification in public spaces for policing.', 'Banned.'],
            ['High risk', 'Real impact on safety, health or rights.', 'Credit scoring, automated recruitment, medical diagnosis, migration, justice.', 'Strict obligations (below).'],
            ['Limited risk', 'Interacts with people.', 'Chatbots, deepfake generators, emotion recognition.', 'Transparency: say it is AI or AI-generated.'],
            ['Minimal risk', 'Everything else.', 'Spam filters, AI in video games, entertainment recommendations.', 'No specific duties; voluntary codes.'],
          ],
        },
        {
          type: 'p',
          text: '**Annex III** lists eight high-risk areas: biometrics; critical infrastructure; education and training; employment and worker management; access to essential services (credit, health, housing); law enforcement; migration, asylum and borders; justice and democratic processes.',
        },
        {
          type: 'callout',
          title: 'As of November 2026: timing has moved',
          text: 'The lesson was written before the “Digital Omnibus” changes. Regulation (EU) 2026/1744 entered into force on 27 July 2026. Stand-alone high-risk systems (Annex III) now have to comply from **2 December 2027**, and AI built into regulated products (Annex I) from **2 August 2028**. Most transparency duties still apply from 2 August 2026, and the rules for general-purpose AI models have applied since 2 August 2025. The classification and the obligations in this guide are unchanged.',
        },
        {
          type: 'callout',
          title: 'Check the lesson',
          text: 'The final AI Act treats deepfakes mainly as a **transparency** matter (label them), not as a blanket ban. Always say which level a system belongs to and why.',
        },
      ],
    },
    {
      kicker: 'AI Act',
      title: 'Duties for high-risk and general-purpose AI',
      blocks: [
        {
          type: 'table',
          head: ['High-risk duty', 'In practice'],
          rows: [
            ['Risk management system', 'Continuous process, kept in a register and updated (e.g., false positives and negatives with probability, impact and fix).'],
            ['Data governance', 'Document training and test data; check quality and representativeness; detect and correct bias.'],
            ['Technical documentation', 'Architecture, algorithms, tests, validation; kept for the system’s life.'],
            ['Automatic logging', 'Record inputs, outputs and parameters so decisions can be traced.'],
            ['Transparency and accessibility', 'Clear notices in plain language, usable by people with disabilities.'],
            ['Human oversight', 'Trained people who can understand, override or ignore the output.'],
            ['Accuracy, robustness, cybersecurity', 'Test in tough conditions; continuity plans.'],
          ],
        },
        {
          type: 'p',
          text: '**General-purpose AI (GPAI)** models, such as the models behind ChatGPT, can do many tasks. The Act treats them by training compute (a model above about **10^25 FLOP** of training compute is presumed to carry systemic risk) and by whether they are open source. Basics: technical documentation, a summary of training data and respect for EU copyright. Powerful models also need risk assessment, adversarial testing, incident reporting, cybersecurity and energy reporting. Open-source models get some exemptions.',
        },
        {
          type: 'bullets',
          items: [
            '**Sanctions:** the lesson says up to 15% of turnover. In the final text, the top tier is **up to €35 million or 7%** of worldwide turnover for prohibited practices, with lower tiers for other breaches.',
            '**If you only use** a third-party AI such as ChatGPT or Claude, you remain responsible for how you use it.',
          ],
        },
        {
          type: 'callout',
          title: 'Good habits for using generative AI',
          text: 'Verify outputs with a human; never paste confidential or personal data into an external tool (use private or on-premise instances for sensitive data); say when content is AI-made; train staff and set rules for acceptable use.',
        },
      ],
    },
    {
      kicker: 'Proof',
      title: 'Documenting compliance',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Register of processing (GDPR)',
              text: 'Per activity: name and purpose; data and people concerned; legal basis, retention and recipients; security measures, transfers outside the EU, DPIA if needed. Keep it in a spreadsheet, a compliance tool or an internal database that is easy to update.',
            },
            {
              title: 'Technical file (AI Act)',
              text: 'General description and purpose; design, algorithms and data; development, tests and risk assessment; oversight, logging and maintenance; user information. Version it with the code so both stay in step.',
            },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Policies:** data protection policy, breach procedure, rights-request procedure, retention policy.',
            '**Proof:** the register, completed DPIAs, training records, logs and test results.',
            '**Consultation and decision:** DPO opinion, outcome of risk review, action plan.',
          ],
        },
        {
          type: 'big',
          text: 'Remember: **minimize, anonymize, explain, keep a human in the loop, and be able to prove it.**',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'GDPR', def: 'The EU General Data Protection Regulation, in force since 25 May 2018.' },
    { term: 'Personal data', def: 'Any information about an identified or identifiable person, directly or indirectly.' },
    { term: 'Sensitive data', def: 'Special categories such as health, religion, politics, union membership, ethnic origin, sexual orientation, genetic and biometric data.' },
    { term: 'Processing', def: 'Any operation on personal data: collecting, storing, changing, sharing, deleting.' },
    { term: 'Controller / processor', def: 'The controller decides why and how data is used. The processor works on the controller’s behalf. Both carry duties.' },
    { term: 'Data minimization', def: 'Collect and keep only the data you really need for the stated purpose.' },
    { term: 'Privacy by design / by default', def: 'Build protection in from the start (Art. 25), with the most protective settings on unless the user changes them.' },
    { term: 'Accountability', def: 'The duty to comply and to be able to prove it.' },
    { term: 'DPIA', def: 'Data Protection Impact Assessment, required for processing likely to create a high risk to people.' },
    { term: 'DPO', def: 'Data Protection Officer who advises the organization and is the contact for authorities and individuals.' },
    { term: 'Register of processing', def: 'The mandatory list of an organization’s personal-data processing activities.' },
    { term: 'Anonymization', def: 'Irreversibly removing the link to a person. Anonymous data falls outside the GDPR.' },
    { term: 'Pseudonymization', def: 'Replacing identifiers with codes while a separate key allows re-identification. Still personal data.' },
    { term: 'AI Act', def: 'The EU regulation that sorts AI into risk levels and sets duties for each.' },
    { term: 'High-risk AI', def: 'AI in sensitive areas (Annex III) that must meet strict duties such as risk management, logging and human oversight.' },
    { term: 'GPAI', def: 'General-purpose AI model able to do a wide range of tasks, such as the models behind large chatbots.' },
    { term: 'Deepfake', def: 'AI-made or altered audio or video that imitates a real person.' },
  ],
  cards: [
    { front: 'Personal data in one line', back: 'Anything that relates to an identified or identifiable person, directly or by combining pieces (Art. 4(1)).' },
    { front: 'Examples of sensitive data', back: 'Health, religion, political opinion, union membership, ethnic origin, sexual orientation, genetic and biometric data.' },
    { front: 'What is privacy by default?', back: 'Without any user action, the most protective settings are on and only necessary data is collected.' },
    { front: 'The 5-step Privacy by Design method', back: 'Map the data, analyze risks, design protections, document, test and validate.' },
    { front: 'The eight rights', back: 'Information, access, rectification, erasure, restriction, portability, objection, and human review of automated decisions.' },
    { front: 'Deadline to answer a rights request', back: 'One month, extendable by two months for complex cases.' },
    { front: 'When is a DPIA mandatory?', back: 'Profiling or in-depth evaluation, large-scale sensitive data, large-scale monitoring of public areas.' },
    { front: 'Anonymization vs pseudonymization', back: 'Anonymization is irreversible and leaves the GDPR. Pseudonymization is reversible with a separate key and stays under the GDPR.' },
    { front: 'The 3 re-identification tests', back: 'Singling out, linkability, inference.' },
    { front: 'Four AI Act risk levels', back: 'Unacceptable (banned), high, limited (transparency), minimal.' },
    { front: 'Main duty for limited-risk AI', back: 'Tell people they are dealing with AI or AI-generated content.' },
    { front: 'Examples of high-risk AI areas', back: 'Recruitment, credit scoring, medical diagnosis, migration, justice, education, critical infrastructure.' },
    { front: 'Dates as of Nov 2026', back: 'Annex III high-risk duties: 2 Dec 2027. Annex I: 2 Aug 2028. GPAI duties since 2 Aug 2025.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Italy fines OpenAI €15 million',
    note: 'The Italian data protection authority (Garante) announced the fine in December 2024, as reported by Euronews on 20 December 2024. OpenAI called it disproportionate and said it would appeal, so check for later developments.',
    slides: [
      {
        kicker: 'What happened',
        title: 'A regulator tests ChatGPT against the GDPR',
        blocks: [
          {
            type: 'p',
            text: 'After investigating how ChatGPT collects and uses personal data, the Garante fined OpenAI **€15 million** in December 2024.',
          },
          {
            type: 'bullets',
            items: [
              'Personal data was used to **train ChatGPT without an adequate legal basis**.',
              'OpenAI had breached the **transparency** principle and its information duties towards users.',
              'There was no adequate **age-verification system** to keep children under 13 away from unsuitable AI-generated content.',
              'OpenAI was also ordered to run a **six-month public awareness campaign** in Italian media on how data is collected and how people can object to its use for training.',
            ],
          },
        ],
      },
      {
        kicker: 'Connect',
        title: 'Which GDPR ideas show up?',
        blocks: [
          {
            type: 'table',
            head: ['What the regulator said', 'GDPR idea from the chapter'],
            rows: [
              ['No adequate legal basis for training', 'Lawful processing; accountability.'],
              ['Transparency failures', 'Right to be informed; visibility and transparency.'],
              ['No real age check', 'Protection of children; privacy by design and by default.'],
              ['Awareness campaign about objecting', 'Right to object made practical.'],
            ],
          },
          {
            type: 'callout',
            title: 'Why it matters for you',
            text: 'Even the biggest AI companies can be fined under the GDPR. As a user, you carry your own duties: do not feed personal data into tools without a legal basis, a safe set-up and a reason.',
          },
        ],
      },
      {
        kicker: 'AI Act today',
        title: 'The timeline, as of November 2026',
        blocks: [
          {
            type: 'table',
            head: ['What', 'When it applies'],
            rows: [
              ['Prohibited practices and AI literacy', 'Since 2 February 2025'],
              ['General-purpose AI model duties', 'Since 2 August 2025'],
              ['Most transparency duties (Art. 50)', '2 August 2026; labeling for older systems by 2 December 2026'],
              ['High-risk, stand-alone (Annex III)', '2 December 2027 (moved from 2 August 2026)'],
              ['High-risk in regulated products (Annex I)', '2 August 2028 (moved from 2 August 2027)'],
            ],
          },
          {
            type: 'p',
            text: 'Sources: White & Case (Regulation (EU) 2026/1744 entered into force on 27 July 2026) and Gibson Dunn. Dates for the first two rows come from the original Act’s schedule. Rules can change again, so check an official source before relying on a date.',
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
                title: 'Italy’s privacy watchdog fines OpenAI €15 million after probe into ChatGPT data collection',
                url: 'https://www.euronews.com/2024/12/20/italys-privacy-watchdog-fines-openai-15-million-after-probe-into-chatgpt-data-collection',
                note: 'Euronews, 20 December 2024. The Garante’s findings and orders.',
              },
              {
                title: 'EU AI Omnibus enters into force, amending the AI Act',
                url: 'https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act',
                note: 'White & Case. Entry into force on 27 July 2026 and the new high-risk dates.',
              },
              {
                title: 'EU AI Act Omnibus agreement: postponed high-risk deadlines and other key changes',
                url: 'https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/',
                note: 'Gibson Dunn. Transparency dates and general-purpose AI obligations.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: fan data, a chatbot and a facial-recognition idea',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Fan data',
        title: 'Which Beacon data is personal or sensitive?',
        blocks: [
          {
            type: 'table',
            head: ['Beacon data', 'Personal?', 'Sensitive?'],
            rows: [
              ['Season-ticket holder name and e-mail', 'Yes', 'No'],
              ['Seat number linked to an account', 'Yes (identifies a person)', 'No'],
              ['Request for a wheelchair-accessible seat', 'Yes', 'Likely yes (health)'],
              ['Fingerprint or face scan for stadium entry', 'Yes', 'Yes (biometric)'],
              ['Total attendance per match', 'No (aggregate)', 'No'],
            ],
          },
          {
            type: 'p',
            text: 'The fan-services team wants to paste a spreadsheet of complaints into a chatbot to write replies. It contains names, phone numbers and health remarks. Better: remove the identifiers and health details first (anonymize), or use an approved private tool with a legal basis.',
          },
        ],
      },
      {
        kicker: 'Rules in action',
        title: 'Rights requests and a DPIA',
        blocks: [
          {
            type: 'bullets',
            items: [
              'A fan asks for **all the data** Beacon holds. The club has **one month** to reply and checks identity proportionately, not by demanding a full ID copy (compare Carrefour).',
              'A fan says “stop sending me offers”. That is the **right to object**: it must be one click and take effect immediately.',
              'Beacon wants **face recognition at turnstiles**. That is large-scale processing of biometric data, so it needs a **DPIA** and a clear justification, and may fall under strict AI Act rules.',
            ],
          },
        ],
      },
      {
        kicker: 'AI Act',
        title: 'Classify three Beacon tools',
        blocks: [
          {
            type: 'table',
            head: ['Tool', 'Level', 'Why'],
            rows: [
              ['Website chatbot answering ticket questions', 'Limited risk', 'It interacts with people, so say it is AI.'],
              ['AI that scores staff applicants for stewarding jobs', 'High risk', 'Employment is an Annex III area: needs risk management, bias checks, human oversight, logs.'],
              ['Spam filter on the club inbox', 'Minimal risk', 'No specific duties.'],
            ],
          },
          {
            type: 'callout',
            title: 'Beacon’s rule of thumb',
            text: 'Minimize, anonymize, label AI content, keep a human reviewer on any decision about a person, and write it all down.',
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
      q: 'Which of these is personal data under the GDPR?',
      options: [
        'Only a person’s full name.',
        'Any information that relates to an identified or identifiable person, directly or by combining pieces.',
        'Only data stored in a database.',
        'Only sensitive data such as health records.',
      ],
      answer: 1,
      explanation: 'Article 4(1) covers anything that identifies or can identify a person, even indirectly or through combination.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which item is a “special category” (sensitive) data?',
      options: ['A customer number', 'A person’s medical condition', 'A first name', 'A postcode'],
      answer: 1,
      explanation: 'Health data is a special category with stronger protection. Names, numbers and postcodes are personal but not special-category.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What does “privacy by default” require?',
      options: [
        'That users must read a long privacy policy.',
        'That protective settings and minimal data collection are active without the user doing anything.',
        'That all data is deleted every night.',
        'That only the DPO can use the system.',
      ],
      answer: 1,
      explanation: 'By default means the most protective setup applies automatically, and collection is limited to what is necessary.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A fan emails a club asking for a copy of all their data. What is the normal time limit to respond?',
      options: ['24 hours', 'One week', 'One month, extendable by two months for complex cases', 'One year'],
      answer: 2,
      explanation: 'The answer is due within one month, which can be extended by two further months when the request is complex.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which of these makes a DPIA mandatory?',
      options: [
        'A paper filing cabinet with a few customer names',
        'Large-scale processing of sensitive data, such as a health app',
        'A newsletter with 20 subscribers',
        'Any use of a spreadsheet',
      ],
      answer: 1,
      explanation: 'A DPIA is required where processing is likely to create a high risk, for example large-scale processing of sensitive data, profiling or large-scale monitoring of public areas.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'A hospital replaces patient names with codes and stores the code list separately. What is this, and is the data still under the GDPR?',
      options: [
        'Anonymization; no longer under the GDPR',
        'Pseudonymization; still personal data under the GDPR',
        'Encryption; never personal data',
        'Aggregation; no longer personal data',
      ],
      answer: 1,
      explanation: 'Codes plus a separate key mean re-identification is possible, so it is pseudonymization and the GDPR still applies.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'You publish match-attendance statistics grouped by region, with every identifier removed and no way to single out, link or infer anything about a person. What can you say?',
      options: [
        'It is pseudonymized and still personal data.',
        'It is anonymized, so it falls outside the GDPR, provided the three re-identification tests really pass.',
        'It is sensitive data.',
        'It must be deleted.',
      ],
      answer: 1,
      explanation: 'Truly anonymous data is out of scope. The key is that it resists singling out, linkability and inference.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Under the AI Act, a customer-service chatbot is usually…',
      options: [
        'Prohibited',
        'High risk with a CE mark',
        'Limited risk: users must be told they are interacting with AI',
        'Minimal risk: no duties at all',
      ],
      answer: 2,
      explanation: 'Chatbots carry a transparency duty: people must know they are talking to an AI.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'An AI tool that ranks job applicants automatically belongs to which AI Act level, and why?',
      options: [
        'Minimal risk, because it only suggests',
        'Limited risk, because it is a chatbot',
        'High risk, because employment and worker management is an Annex III area',
        'Prohibited in every case',
      ],
      answer: 2,
      explanation: 'Recruitment is listed under employment in Annex III, so strict duties apply, including bias control and human oversight.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'As of November 2026, when do the Annex III high-risk obligations apply under the amended AI Act?',
      options: ['2 August 2026', '2 December 2027', '2 August 2028', 'They were cancelled'],
      answer: 1,
      explanation: 'Regulation (EU) 2026/1744 moved stand-alone high-risk systems to 2 December 2027. Annex I products moved to 2 August 2028.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'Your company uses a third-party chatbot such as ChatGPT. Who is responsible for how it is used?',
      options: [
        'Only the AI provider',
        'Nobody, because it is third-party',
        'Your organization remains responsible for its use',
        'Only the end customer',
      ],
      answer: 2,
      explanation: 'Using someone else’s AI does not move your duties: verify outputs, protect data, be transparent and train staff.',
      review: { section: 'plain', slide: 7 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Distinguish anonymization from pseudonymization. For each, give its legal consequence under the GDPR, two techniques and one situation where it is the better choice.',
      answer: [
        'Anonymization is an irreversible process that makes it impossible to identify a person, even by combining sources. Truly anonymous data is not personal data and falls outside the GDPR. Techniques: aggregation, permanent deletion of identifiers, generalization, random noise. Better for statistics, open datasets, long-term archives and software test data.',
        'Pseudonymization replaces direct identifiers with codes or tokens, with the key kept separately, so identification is still possible with additional information. The data remains personal data and the GDPR fully applies, but the technique is a recommended safeguard. Techniques: encryption with a stored key, salted hashing, tokenization, a lookup table. Better when people must be followed over time or may need re-identification, such as medical research.',
        'For anonymization to hold, it should resist singling out, linkability and inference, and it should be re-tested as outside data grows.',
      ],
      marking: [
        'Correct definition of each (2)',
        'Correct legal consequence of each (2)',
        'Two techniques for each (2)',
        'Suitable use case for each (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A club wants to use an AI system that scans fans’ faces at the stadium entrance to speed up entry. Identify the GDPR and AI Act issues and say what the club must do before launch.',
      answer: [
        'Faces are biometric data, a special category of sensitive data, so processing needs a valid legal basis and strong justification, and must respect data minimization and necessity. This is large-scale processing in a public-facing space, so a DPIA is mandatory.',
        'Under the AI Act, biometric identification and categorization is an Annex III high-risk area, and real-time remote biometric identification in public spaces for policing is in the prohibited category with limited exceptions. The club must check which category applies and cannot assume it is low risk.',
        'Before launch: apply privacy by design and by default (offer a non-biometric entry lane, short retention), complete the DPIA, consult the DPO, record the processing in the register, inform fans clearly, test accuracy across groups for bias, ensure human oversight and a fallback, and keep logs and technical documentation.',
      ],
      marking: [
        'Identifies biometric data as sensitive (2)',
        'DPIA required (2)',
        'AI Act classification discussed (2)',
        'Concrete safeguards before launch (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'List six practical good habits for an organization that uses third-party generative AI tools, and link two of them to a GDPR or AI Act principle.',
      answer: [
        'Verify every output with a human before use. Never paste confidential or personal data into an external tool; anonymize or use a private instance. Tell customers when content was generated or improved by AI. Train staff and set clear rules for acceptable use. Mark AI-generated content. Keep a human review step and documentation of how the tool is used.',
        'Links: not pasting personal data and anonymizing first applies data minimization and privacy by design (GDPR). Telling people content is AI-generated applies the transparency duty for limited-risk systems (AI Act). Human review applies the human-oversight principle.',
      ],
      marking: [
        'Six distinct good habits (3)',
        'Two correct links to a principle (2)',
        'Clear and organized answer (1)',
      ],
    },
  ],

  videos: [],
};
