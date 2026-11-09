// Techway, Practical 2: GDPR and AI Act applied to prompts.
// Built from Practical 2 of the Techway lesson document (four exercises and the standard correction):
// confidential data in a prompt, inclusive content, optimizing generated text, and an ethically faulty job ad.
// Real example: Moffatt v. Air Canada (British Columbia Civil Resolution Tribunal, February 2024), a company held
// responsible for what its website chatbot told a customer.

export const practicalGdprAiTopic = {
  id: 'practical-gdpr-ai',
  course: 'techway',
  title: 'Practical 2: GDPR and AI Act in your prompts',
  sessions: 'Practical 2',
  reading: 'Techway lesson, Practical 2',
  minutes: 40,
  summary:
    'Four worked cases: cleaning a medical prompt of personal data, writing an accessible bank note, optimizing a text for non-experts, and fixing a discriminatory AI-written job ad. Includes the method behind each correction.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The practical',
      title: 'What you are asked to do',
      blocks: [
        {
          type: 'p',
          text: 'Practical 2 asks you to answer four cases in a separate document, using a generative AI tool where useful to write or improve prompts. It needs the earlier chapters and the GDPR and AI Act chapter.',
        },
        {
          type: 'table',
          head: ['Exercise', 'Theme', 'Main skill'],
          rows: [
            ['1', 'Confidentiality when using generative AI', 'Spot risks in a prompt and rewrite it without personal data.'],
            ['2', 'Inclusive content', 'Prompt for a bank note readable by people with visual or cognitive disabilities.'],
            ['3', 'Optimizing generated content', 'Rewrite a technical text for small business owners.'],
            ['4', 'Regulatory and ethical directives', 'Find discrimination in an AI-made job ad and fix it.'],
          ],
        },
        {
          type: 'callout',
          title: 'Format of a good answer',
          text: 'For each case: (1) name the tool and why, (2) show your prompt, (3) show the output you obtained (after any refinement), (4) connect it to a principle from the GDPR/AI Act chapter.',
        },
      ],
    },
    {
      kicker: 'Exercise 1',
      title: 'The medical letter prompt',
      blocks: [
        {
          type: 'p',
          text: 'An assistant in a medical office asks an AI to write a follow-up letter. The prompt contains the patient’s full name, date of birth, social security number, diagnoses (type 2 diabetes, hypertension, history of depression), exact test values (HbA1c 8.2%), phone number and home address.',
        },
        {
          type: 'table',
          head: ['Risk', 'Fix'],
          rows: [
            ['Direct identification (name)', 'Remove, or use a fictitious identifier.'],
            ['Sensitive health data (conditions)', 'Keep only the general categories needed.'],
            ['Official IDs (social security number)', 'Delete entirely: not needed.'],
            ['Contact details (address, phone)', 'Omit or replace with generic wording.'],
            ['Exact medical results', 'Say “results are not optimal” instead of values.'],
            ['Storage by the AI provider', 'Use a private instance or check the provider’s privacy terms.'],
            ['Breach of medical confidentiality', 'Apply minimization and necessity.'],
          ],
        },
        {
          type: 'callout',
          title: 'The pattern',
          text: 'Ask “what does the AI need to do this job?” For a letter template it needs the structure and the type of specialist, not who the patient is. Add real details only in the final document, outside the AI tool.',
        },
      ],
    },
    {
      kicker: 'Exercise 1',
      title: 'The corrected prompt, and why it works',
      blocks: [
        {
          type: 'callout',
          title: 'Corrected prompt (summary of the model answer)',
          text: 'Write a standard medical follow-up letter for a specialist (cardiologist) about an anonymized patient: middle-aged, history of a chronic metabolic disease and hypertension, a psychological disorder in the history, recent results that are not optimal, chest pains needing a specialist opinion. Use a formal header with no personal data, a generic “History” section, “Reason for consultation”, “Examinations carried out” with no exact values, and a polite closing. Use only “the patient”. Do not include any name, birth date, address, phone or social security number.',
        },
        {
          type: 'bullets',
          items: [
            '**Privacy by design:** protection is built into the prompt itself.',
            '**Anonymization:** direct identifiers deleted and medical details generalized.',
            '**Data minimization:** only what the purpose needs.',
            '**Special-category data:** health data gets extra protection under Art. 9.',
          ],
        },
        {
          type: 'callout',
          title: 'Check it yourself',
          text: 'Is the corrected prompt really anonymous? “Middle-aged, specific combination of conditions” is much safer than the original, but in a very small practice a combination of details could still point to one person. Generalize further when in doubt.',
        },
      ],
    },
    {
      kicker: 'Exercise 2',
      title: 'An accessible bank note',
      blocks: [
        {
          type: 'p',
          text: 'A bank communications officer must write a customer note about: two-factor authentication, a new check for large transfers, automatic detection of suspicious activity by AI, and a branch demo session next month. It must work for people with visual or cognitive disabilities.',
        },
        {
          type: 'table',
          head: ['Accessibility instruction in the prompt', 'Why'],
          rows: [
            ['Short sentences, subject-verb-object', 'Easier to follow.'],
            ['No jargon, or explain it right away', 'Cognitive accessibility.'],
            ['Clear titles and subtitles', 'Screen readers can navigate.'],
            ['Bullets for steps', 'One idea at a time.'],
            ['Simple summary first', 'Orientation before details.'],
            ['Alternatives for each action (phone or app)', 'Different needs and abilities.'],
            ['Concrete words and examples; no idioms or metaphors', 'Idioms confuse many readers.'],
            ['Length limit (one page, about 300-350 words) and a structure', 'Controls load.'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'The model answer’s note has a simple summary, four short sections, a “Need help?” block with phone, branch and web options, and a closing line.',
            'Because the note explains that the AI detects suspicious activity and the customer can confirm or deny the alert, it applies **transparency** and keeps a **human in the loop**.',
            'The example dates, amounts and numbers in the model note are placeholders. A real note must use the bank’s actual facts.',
          ],
        },
      ],
    },
    {
      kicker: 'Exercise 3',
      title: 'Optimizing a technical text',
      blocks: [
        {
          type: 'p',
          text: 'You get a stiff, jargon-heavy paragraph about cybersecurity (holistic approach, social engineering, distributed denial of service) and must rewrite it for a blog read by small entrepreneurs and shopkeepers with no IT background.',
        },
        {
          type: 'steps',
          items: [
            '**Name the audience** (small business owners, no IT knowledge).',
            '**Set the style:** simple language, a friendly, encouraging (not alarmist) tone.',
            '**Explain each technical term** the moment it appears.',
            '**Add small-business examples** (phishing as someone posing as the postman).',
            '**Ask for 3-5 cheap, practical tips.**',
            '**Define structure and length:** subtitles, short paragraphs, about the same length.',
          ],
        },
        {
          type: 'callout',
          title: 'What the model answer includes',
          text: 'Headings such as “Why worry about it?”, “The most common risks”, “How to protect yourself simply” and five tips (backups, updates, suspicious e-mails, staff training, a password manager), plus a short “prepare for the worst” plan.',
        },
        {
          type: 'p',
          text: 'This is the CLEAR framework applied to editing: you gave the AI the audience, role, constraints and length, and then reviewed the result.',
        },
      ],
    },
    {
      kicker: 'Exercise 4',
      title: 'A discriminatory job ad',
      blocks: [
        {
          type: 'p',
          text: 'A recruitment company’s AI wrote: “We are looking for a dynamic developer engineer, between 25 and 35 years old, to join our young and innovative team. The ideal candidate will be a man … able to work long hours … a diploma from a recognized French engineering school … a strong and competitive personality.”',
        },
        {
          type: 'table',
          head: ['Problem in the ad', 'Type of issue'],
          rows: [
            ['“Between 25 and 35 years old”, “young team”', 'Age discrimination.'],
            ['“The ideal candidate will be a man”', 'Gender discrimination.'],
            ['Diploma from a French engineering school only', 'Possible indirect discrimination against people trained elsewhere.'],
            ['“Work long hours when necessary”', 'Can disadvantage people with caring duties or disabilities needing adjustments.'],
            ['“Strong and competitive personality”', 'Gender-stereotyped trait instead of a skill.'],
          ],
        },
        {
          type: 'p',
          text: 'The model answer cites French labor and criminal law and EU equal-treatment directives (2000/78/EC and 2006/54/EC), and notes that AI recruitment tools are a high-risk area under the AI Act, where bias control and human review are required.',
        },
      ],
    },
    {
      kicker: 'Exercise 4',
      title: 'Fixing it with a prompt, and a human check',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Paste the original** into the prompt.',
            '**List each problem** by number (age, gender, diploma, long hours, stereotypes).',
            '**Give rewriting rules:** neutral and inclusive language, focus on skills and qualifications, balanced conditions, an equal-opportunities statement, professional and attractive tone.',
            '**Forbid** any reference to age, gender or other protected characteristics.',
            '**Review the result with a person** trained in diversity and inclusion before publication.',
          ],
        },
        {
          type: 'bullets',
          items: [
            'The corrected ad asks for “a diploma in computer science, software engineering or equivalent training”, about five years’ experience, teamwork and problem solving, and offers flexible hours and training.',
            'Fixing the output is not enough: also fix the process. Add human review, and consider why the tool produced a biased ad (the training data).',
          ],
        },
        {
          type: 'callout',
          title: 'Mini checklist for the exam',
          text: 'Identify each issue, name the harm or rule, give the fix, give a corrective prompt, show the corrected text, and add a verification step.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Data minimization', def: 'Using only the data strictly needed for the purpose.' },
    { term: 'Anonymized prompt', def: 'A prompt with identifiers removed and details generalized so no person can be recognized.' },
    { term: 'Special-category data', def: 'Sensitive data such as health, which needs extra protection (GDPR Art. 9).' },
    { term: 'Private instance', def: 'A version of an AI tool run in a controlled environment so inputs are not exposed to a public service.' },
    { term: 'Accessibility', def: 'Making content usable by everyone, including people with visual or cognitive disabilities.' },
    { term: 'Plain language', def: 'Short sentences, common words, one idea at a time, jargon explained.' },
    { term: 'Direct discrimination', def: 'Treating people worse because of a protected trait, such as stating an age or gender requirement.' },
    { term: 'Indirect discrimination', def: 'A neutral-looking rule that in practice disadvantages a group, such as requiring one country’s diploma only.' },
    { term: 'Human in the loop', def: 'A person reviews and can overrule AI output before it is used.' },
    { term: 'Corrective prompt', def: 'A follow-up prompt that points out problems in a text and tells the AI how to rewrite it.' },
    { term: 'Equal-opportunities statement', def: 'A sentence in a job ad saying applications are judged only on skills and experience.' },
  ],
  cards: [
    { front: 'First question before writing a prompt with personal data', back: 'What does the AI actually need to do this task? Remove the rest.' },
    { front: 'What to do with an ID number in a prompt', back: 'Delete it: it is not needed for the task.' },
    { front: 'How to handle exact medical values', back: 'Say “results not optimal” or give a range instead of exact numbers.' },
    { front: 'Where do real identities go?', back: 'Into the final document, outside the AI tool.' },
    { front: 'Five accessibility prompt rules', back: 'Short sentences, no jargon, clear headings, bullets, simple summary first.' },
    { front: 'Why offer alternatives in an accessible note?', back: 'People differ: phone, app, branch visit.' },
    { front: 'Prompt for a non-expert audience', back: 'Name the audience, simple language, explain terms, small-business examples, 3-5 cheap tips, friendly tone.' },
    { front: 'Five problems in the job ad', back: 'Age, gender, French-diploma-only, long hours, competitive stereotype.' },
    { front: 'What is missing after the AI fixes the ad?', back: 'A human review by someone trained in inclusion before publishing.' },
    { front: 'Which AI Act level covers recruitment AI?', back: 'High risk (employment, Annex III).' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Air Canada’s chatbot',
    note: 'Moffatt v. Air Canada, a February 2024 decision of the British Columbia Civil Resolution Tribunal, widely reported at the time. Summary based on public reporting.',
    slides: [
      {
        kicker: 'What happened',
        title: 'The chatbot gave wrong advice about a refund',
        blocks: [
          {
            type: 'p',
            text: 'A customer asked the airline’s website chatbot about bereavement fares. The chatbot told him he could buy a full-price ticket and claim a bereavement discount afterwards. The airline’s actual policy said the opposite. The airline refused the refund.',
          },
          {
            type: 'p',
            text: 'The tribunal ruled for the customer. It rejected the airline’s argument that the chatbot was a separate entity responsible for its own words and found the airline responsible for all information on its website, including the chatbot’s answers.',
          },
        ],
      },
      {
        kicker: 'Lessons',
        title: 'Why this belongs in Practical 2',
        blocks: [
          {
            type: 'table',
            head: ['Lesson', 'Link to the course'],
            rows: [
              ['You are responsible for AI you deploy', 'The user stays responsible (good practices for generative AI).'],
              ['Check AI outputs against official sources', 'Verification and human review.'],
              ['Customers should know they talk to a bot', 'AI Act transparency for chatbots (limited risk).'],
              ['A wrong answer costs money and trust', 'Why accuracy and oversight matter.'],
            ],
          },
          {
            type: 'callout',
            title: 'Different law, same idea',
            text: 'This was a Canadian consumer case, not a GDPR or AI Act case, but it shows the principle those laws share: deploying AI does not move your responsibility to the AI.',
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
                title: 'BC tribunal confirms companies remain liable for information provided by AI chatbot',
                url: 'https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/',
                note: 'American Bar Association, Business Law Today, February 2024. The Moffatt v. Air Canada decision.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: three practical cases',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Case 1',
        title: 'The complaint reply that leaked a fan',
        blocks: [
          {
            type: 'callout',
            title: 'Risky prompt',
            text: '“Reply to Mr. Karl Weber, season ticket 004512, who complains that he could not get into the stadium with his wheelchair at the north gate on Saturday. His phone is 06 XX XX XX XX. Offer him a refund.”',
          },
          {
            type: 'p',
            text: 'It has a name, an account number, a phone number and a health-related detail. **Safer:** “Write an apologetic reply from a football club’s fan services to a season-ticket holder who could not use the accessible entrance at one gate on match day. Offer a refund and name the club’s accessibility officer as the contact. Do not include any personal details.” Add the name and number in the final e-mail yourself.',
          },
        ],
      },
      {
        kicker: 'Case 2',
        title: 'An accessible match-day notice',
        blocks: [
          {
            type: 'p',
            text: 'Beacon moves to a new app ticket for entry. The notice must reach older fans and fans with sight or cognitive disabilities.',
          },
          {
            type: 'bullets',
            items: [
              'Prompt: simple summary first, short sentences, headings, numbered steps (“1. Open the app. 2. Tap ‘My ticket’.”).',
              'Offer alternatives: a printed ticket at the box office or help at the gate.',
              'Add a phone number and a “where to get help” line, and a note that the club’s chatbot is an AI assistant.',
              'Check all dates and numbers against the club’s real plan.',
            ],
          },
        ],
      },
      {
        kicker: 'Case 3',
        title: 'A steward job ad that needs fixing',
        blocks: [
          {
            type: 'p',
            text: 'An AI draft says: “Young, energetic men under 30 wanted for stewarding. Must be strong and able to stand all night.”',
          },
          {
            type: 'table',
            head: ['Issue', 'Fix'],
            rows: [
              ['“Young”, “under 30”', 'Remove age.'],
              ['“Men”', 'Neutral wording.'],
              ['“Strong”', 'State real job requirements, such as safety training, and say adjustments are possible.'],
              ['“Stand all night”', 'Describe shifts and breaks objectively.'],
            ],
          },
          {
            type: 'p',
            text: 'Prompt the AI with the numbered problems and rules, add an equal-opportunities sentence, and have HR review before posting.',
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
      q: 'You want an AI to draft a letter about a patient. What is the best first step before writing the prompt?',
      options: [
        'Paste the full patient file so the letter is accurate.',
        'Decide what the AI really needs and remove names, IDs, contact details and exact health values.',
        'Add the patient’s social security number for verification.',
        'Ask the AI to remember the patient.',
      ],
      answer: 1,
      explanation: 'Minimize and anonymize first. The AI needs a structure and a type of case, not an identity.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which principle is applied when you delete a social security number from a prompt because the task does not need it?',
      options: ['Data minimization', 'Data portability', 'Right to object', 'Transparency'],
      answer: 0,
      explanation: 'Data minimization: use only data strictly necessary for the purpose.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Why is “the patient is a middle-aged person with a chronic metabolic disease” safer than the original prompt?',
      options: [
        'It is shorter.',
        'It removes direct identifiers and generalizes sensitive details, so it is far harder to link to a person.',
        'It sounds more medical.',
        'It uses fewer words.',
      ],
      answer: 1,
      explanation: 'Generalization is a core anonymization technique. Details that single out a person are replaced by categories.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which instruction helps make a note accessible to people with cognitive disabilities?',
      options: [
        'Use long, elegant sentences with idioms.',
        'Put a short, simple summary first and use short sentences with one idea each.',
        'Use as much technical vocabulary as possible.',
        'Avoid headings so the text looks continuous.',
      ],
      answer: 1,
      explanation: 'A simple summary, short sentences and clear structure reduce load. Idioms and jargon do the opposite.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Why does the model accessible note give both phone and branch options for help?',
      options: [
        'To make the note longer.',
        'Because people have different needs and abilities, so each action should have an alternative.',
        'Because the AI Act requires a phone number.',
        'To avoid mentioning the app.',
      ],
      answer: 1,
      explanation: 'Offering alternatives is an inclusion practice: not everyone can use the app or the phone equally well.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'When rewriting a technical text for shopkeepers with no IT knowledge, which instruction fits best?',
      options: [
        'Keep all the terms exactly as they are.',
        'Use simple language, explain each term as it appears, and add small-business examples and 3-5 cheap tips.',
        'Make it as short as possible with no examples.',
        'Write an alarming tone to motivate readers.',
      ],
      answer: 1,
      explanation: 'The audience determines language and examples. The model answer also asks for a friendly, not alarmist, tone.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A job ad says “between 25 and 35 years old”. What is the problem?',
      options: [
        'It is too specific about salary.',
        'It is age discrimination.',
        'It lacks a company name.',
        'It uses too few adjectives.',
      ],
      answer: 1,
      explanation: 'Stating an age range excludes people on the basis of age, a protected characteristic.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Requiring “a diploma from a recognized French engineering school” may be…',
      options: [
        'Direct gender discrimination',
        'Indirect discrimination against people trained abroad or by other routes',
        'A privacy violation',
        'A transparency duty',
      ],
      answer: 1,
      explanation: 'A neutral-looking rule can still disadvantage a group. Asking for “a degree in the field or equivalent training” is safer.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'After the AI rewrites a discriminatory job ad, what should still happen before publishing?',
      options: [
        'Nothing, the AI fixed it.',
        'A person trained in diversity and inclusion reviews it.',
        'The ad is deleted.',
        'The AI is asked to confirm its own work.',
      ],
      answer: 1,
      explanation: 'Human review is part of oversight. AI can repeat or hide biases.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'The Air Canada chatbot case mainly shows that…',
      options: [
        'Chatbots are illegal in Canada.',
        'A company can be held responsible for wrong information its chatbot gives.',
        'Chatbots never make errors.',
        'Customers must always read small print.',
      ],
      answer: 1,
      explanation: 'The tribunal held the airline responsible for the chatbot’s statements on its site.',
      review: { section: 'real', slide: 0 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A club’s membership officer writes: “Write a reply to Anna Müller, born 4 May 1988, member 20871, who told us she has multiple sclerosis and needs a step-free seat. Her number is +49 XX. Offer a discount.” (a) List the risks in this prompt. (b) Give a corrected prompt. (c) Name two GDPR principles you applied.',
      answer: [
        'Risks: a full name and date of birth identify a person directly; the membership number links to an account; a phone number is contact data; “multiple sclerosis” is health data, a special category needing the strongest protection; and sending all of this to an external tool risks storage or exposure by the provider and breaks confidentiality and minimization.',
        'Corrected prompt: “Write a warm, short reply from a football club’s membership team to a member who needs a step-free seat. Offer a discount and say a named accessibility contact will follow up. Do not include any personal details; use ‘the member’.” Add the name and details in the final message outside the AI tool, or use an approved private tool.',
        'Principles: data minimization (only what the task needs) and privacy by design/anonymization (identifiers and the health condition removed). Special-category protection under Art. 9 also applies.',
      ],
      marking: [
        'Identifies at least four risks including health data (3)',
        'Corrected prompt contains no personal data (3)',
        'Task still clearly specified (1)',
        'Two correct principles named (2)',
        'Mentions provider storage or private tool (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Write a prompt for a generative AI to produce a one-page notice for fans about a new digital entry system, accessible to people with visual or cognitive disabilities. List the accessibility instructions you include and explain why.',
      answer: [
        'Prompt: “Act as a communications officer at a football club. Write a notice of about 300 words for fans about our new app-based entry system. Cover: how to get the ticket, how to scan at the gate, what to do if the phone fails, and a help session next month. It must be accessible for people with visual or cognitive disabilities. Start with a simple summary. Use short sentences, headings, bullets for steps, concrete words, no jargon or idioms. Give an alternative for each action (printed ticket, help at the gate). End with a help section with a phone number and a branch option.”',
        'Why: short sentences and plain words reduce cognitive load; headings let screen readers navigate; a summary first gives orientation; bullets present one step at a time; alternatives respect different abilities; avoiding idioms prevents confusion. All facts should be checked against the real plan before publishing.',
      ],
      marking: [
        'Role, context, audience and length specified (2)',
        'At least five accessibility instructions (3)',
        'Reasons given for the instructions (2)',
        'Mentions checking facts or human review (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'An AI wrote: “Wanted: young, dynamic salesman under 30, strong personality, must have studied at a top national university.” (a) Identify at least four issues and say what kind of problem each is. (b) Write a corrective prompt. (c) Explain why a human check is still needed and name the AI Act category of recruitment AI.',
      answer: [
        'Issues: “young” and “under 30” are age discrimination; “salesman” (and masculine framing) is gender-biased wording; “strong personality” is a gendered, subjective trait instead of a skill; “top national university” may be indirect discrimination against people trained abroad or in other ways.',
        'Corrective prompt: “Rewrite this job ad. Problems: 1. age wording, 2. gendered job title, 3. subjective trait, 4. narrow university requirement. Rules: neutral and inclusive language, state required skills and experience, accept equivalent qualifications, add an equal-opportunities statement, keep a professional, attractive tone. Do not refer to age, gender or other protected characteristics.”',
        'A person trained in inclusion should review the result before publishing, because AI can repeat or hide bias and the employer remains responsible. Recruitment AI is a high-risk area (employment, Annex III), which requires bias control and human oversight.',
      ],
      marking: [
        'Four issues correctly identified and categorized (4)',
        'Corrective prompt lists problems and rules (2)',
        'Human review explained (1)',
        'Recruitment is high-risk under the AI Act (1)',
      ],
    },
  ],

  videos: [],
};
