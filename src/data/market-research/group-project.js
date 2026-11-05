// Market Research: the graded group project, quantitative or qualitative path.
// Built from the project briefs for both paths (slide handouts and Word instructions): the five steps of each path,
// what to build and analyze, the files to submit, the report structure and format, the grading and the checklists.
// Real example: the tools the project uses, as described on the Qualtrics support page for Generate Test Responses
// and the Taguette and jamovi sites (read 5 November 2026). The instructor documents themselves are not reproduced here.

export const groupProjectTopic = {
  id: 'group-project',
  course: 'market-research',
  title: 'The group project: quantitative or qualitative',
  sessions: 'Group project',
  reading: 'Quantitative and qualitative project briefs',
  minutes: 30,
  summary:
    'How the graded group project works: the two paths, what to build, how to analyze it, how to be honest about synthetic data, which files to hand in and how the report is graded.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'One group, one study, two possible paths',
      blocks: [
        {
          type: 'big',
          text: 'Your group takes a **published sport marketing study** and rebuilds it as a small project of your own. You then explain what the evidence means for a **sport manager**.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Quantitative path',
              text: 'Rebuild a published experiment as a short Qualtrics survey, compare two conditions, and analyze the numbers in jamovi.',
            },
            {
              title: 'Qualitative path',
              text: 'Rebuild a published qualitative study, create an interview or focus-group guide, generate labelled AI material, and code it in Taguette.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'One group, one submission',
          text: 'One person uploads every required file for the whole group on Boostcamp. Open each file before you upload to be sure it is the final version.',
        },
      ],
    },
    {
      kicker: 'Choosing',
      title: 'The two paths side by side',
      blocks: [
        {
          type: 'table',
          head: ['', 'Quantitative', 'Qualitative'],
          rows: [
            ['Starting point', 'A published experiment you are assigned', 'A published qualitative study you are assigned'],
            ['Question', 'One comparison between conditions and one main outcome', 'One focused question about meanings, experiences or views'],
            ['Instrument', 'A short Qualtrics survey', 'An interview guide, focus-group protocol or netnography framework'],
            ['Data', 'Qualtrics test responses (synthetic)', 'AI-generated, clearly labelled material'],
            ['Analysis', 'jamovi: descriptives plus one test', 'Taguette: coding, codebook, categories, themes'],
            ['Output for managers', 'Two or three recommendations from the results', 'Cautious recommendations from the themes'],
          ],
        },
        {
          type: 'p',
          text: 'The course outline describes the choice as a project you can judge as suited to you. Pick the path whose tool and kind of evidence you can explain **confidently** to someone else.',
        },
      ],
    },
    {
      kicker: 'Quantitative path',
      title: 'Five steps from article to report',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Study', text: 'read the assigned article and extract one clear research question' },
            { title: '2. Build', text: 'create a short survey in Qualtrics' },
            { title: '3. Collect', text: 'generate responses with Qualtrics test responses, or the method taught in class' },
            { title: '4. Analyze', text: 'use jamovi and the techniques covered in class' },
            { title: '5. Submit', text: 'upload a short report and the required files on Boostcamp' },
          ],
        },
        {
          type: 'p',
          text: 'The brief says to “reverse-engineer” what the assigned paper did: find its conditions and outcome measure, then rebuild a small version.',
        },
      ],
    },
    {
      kicker: 'Quantitative path',
      title: 'A manageable question: one comparison, one outcome',
      blocks: [
        {
          type: 'table',
          head: ['Topic', 'Example question (from the brief)'],
          rows: [
            ['Sport sponsorship', 'Do fans exposed to two sponsorship messages report different brand attitudes?'],
            ['Ticket promotion', 'Does a limited-time ticket offer increase purchase intention compared with a regular offer?'],
            ['Fan communication', 'Does an emotional team message increase fan engagement compared with an informational one?'],
            ['Ticketing', 'Do scarcity versus neutral ticket messages lead to different purchase intentions?'],
          ],
        },
        {
          type: 'callout',
          title: 'Keep it small on purpose',
          text: 'The question must compare **two experimental conditions** in a sport marketing setting and stay tied to the assigned paper. Extra outcomes and extra conditions make the analysis harder to explain.',
        },
      ],
    },
    {
      kicker: 'Quantitative path',
      title: 'Building the survey',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Introduction and consent.** A short explanation of the study and a consent question first.',
            '**The comparison.** Include the experimental conditions needed, following the assigned paper.',
            '**One main outcome.** Measure it with 3 to 5 clear items whenever possible.',
            '**Useful background questions only.** For example age group, fan identification, attendance frequency, or sport followed.',
            '**Short.** About five minutes to complete.',
            '**Test it** from start to finish and fix problems **before** generating responses.',
          ],
        },
        {
          type: 'p',
          text: 'This is Session 5 and Session 8 knowledge at work: collect less, ask one thing at a time, and make sure the items really measure the outcome (validity and reliability).',
        },
      ],
    },
    {
      kicker: 'Quantitative path',
      title: 'What the analysis must contain',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Describe the sample:** how many respondents, and the relevant background information.',
            '**Descriptives:** the mean and standard deviation of the main variables.',
            '**One comparison** that fits your paper: a t test, ANOVA, correlation or simple regression.',
            '**The result:** report the test statistic and the p value. Do not worry if it is not significant.',
            '**Plain English:** explain what the finding means for a manager.',
          ],
        },
        {
          type: 'table',
          head: ['If your paper compares…', 'A typical choice'],
          rows: [
            ['Two groups on one outcome', 't test'],
            ['Three or more groups on one outcome', 'ANOVA'],
            ['Two numeric variables moving together', 'Correlation'],
            ['One variable used to predict another', 'Simple regression'],
          ],
        },
        {
          type: 'p',
          text: 'The table is our own reminder of the usual matches, not part of the brief. Always follow what your assigned paper did, and use only methods you understand and that were covered in class.',
        },
      ],
    },
    {
      kicker: 'Quantitative path',
      title: 'The interpretation rule',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Causation', text: 'Do not claim one variable **causes** another unless the research design supports that conclusion.' },
            { title: 'Synthetic data', text: 'Qualtrics test responses are random practice data. They show the **workflow**, not the findings of the published study.' },
          ],
        },
        {
          type: 'callout',
          title: 'Keep two kinds of statements apart',
          text: 'What the **published study** found is evidence. A pattern in your **synthetic dataset** is an illustration of how the analysis works. The report must never blur the two.',
        },
      ],
    },
    {
      kicker: 'Qualitative path',
      title: 'Five steps from article to report',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Read', text: 'problem, objective, design, participant selection, instrument, analysis, themes and limits' },
            { title: '2. Design', text: 'a focused extension question and a guide, protocol or framework' },
            { title: '3. Generate', text: 'synthetic material with an approved AI tool, documenting everything' },
            { title: '4. Code', text: 'in Taguette: codebook, categories and themes, compared with the original' },
            { title: '5. Submit', text: 'the report plus the supporting files on Boostcamp' },
          ],
        },
      ],
    },
    {
      kicker: 'Qualitative path',
      title: 'A focused question that extends the original',
      blocks: [
        {
          type: 'table',
          head: ['Context', 'Example question'],
          rows: [
            ['Fan experience', 'How do football spectators describe the features that shape their match-day experience?'],
            ['Sport sponsorship', 'How do fans interpret the authenticity of athlete endorsement messages?'],
            ['Online fan communities', 'How do supporters discuss belonging and identity in a club’s digital community?'],
          ],
        },
        {
          type: 'p',
          text: 'The assigned article sets the **method** (interviews, focus groups or netnography). Your extension should keep that qualitative logic and relate to a real sport business decision, for example by changing the sport context or the participant profile.',
        },
      ],
    },
    {
      kicker: 'Qualitative path',
      title: 'The instrument and the synthetic material',
      blocks: [
        {
          type: 'table',
          head: ['Method', 'Minimum synthetic material'],
          rows: [
            ['Semi-structured interviews', '5 transcripts'],
            ['Focus group', '1 transcript with at least 5 distinguishable participant profiles'],
            ['Netnography', '50 online comments, posts or reviews'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Segment and profiles.** Define the target segment and explain how the synthetic participants fit it.',
            '**Neutral questions.** Write prompts that do not lead the participant.',
            '**Record everything.** The exact AI tool, prompts, profiles and context given, raw outputs, edits and assumptions.',
            '**Label it.** Mark all material as synthetic, everywhere it appears.',
            '**Reflect.** Explain how simulated material may differ from real fieldwork and what that means for interpretation.',
          ],
        },
        {
          type: 'p',
          text: 'The minimum can change if your instructor states a different one.',
        },
      ],
    },
    {
      kicker: 'Qualitative path',
      title: 'Coding in Taguette',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Import', text: 'the transcripts or posts' },
            { title: 'First-cycle coding', text: 'tag excerpts with codes' },
            { title: 'Codebook', text: 'each code gets a name, a meaning and an example excerpt' },
            { title: 'Categories', text: 'group related codes' },
            { title: 'Themes', text: 'interpret the broad patterns, with labelled quotations' },
            { title: 'Compare', text: 'with the published study: similarities, differences, context effects' },
          ],
        },
        {
          type: 'p',
          text: 'Another approved coding tool is acceptable if your instructor agrees. Keep the evidence (an export or clear screenshots).',
        },
      ],
    },
    {
      kicker: 'The honest limit',
      title: 'Simulated is not observed',
      blocks: [
        {
          type: 'callout',
          title: 'The methodological limit for the qualitative path',
          text: 'AI-generated interviews, focus groups and posts are **simulations, not observations of real participants.** Matching the published themes is **not** an empirical replication, and synthetic excerpts must never be presented as real testimony.',
        },
        {
          type: 'bullets',
          items: [
            'Say “synthetic” whenever you quote.',
            'Describe managerial ideas as suggestions from an exercise, separate from findings supported by empirical research.',
            'Name at least one next step involving real participants.',
          ],
        },
      ],
    },
    {
      kicker: 'Handing in',
      title: 'Files to submit',
      blocks: [
        {
          type: 'table',
          head: ['Path', 'Required files (replace XX with your group number)'],
          rows: [
            ['Quantitative', 'GROUP_XX_REPORT.docx · GROUP_XX_JAMOVI.omv · GROUP_XX_QUALTRICS.qsf'],
            ['Qualitative', 'GROUP_XX_REPORT.docx · GROUP_XX_RESEARCH_INSTRUMENT.docx · GROUP_XX_SYNTHETIC_DATA.docx · GROUP_XX_TAGUETTE_EXPORT.pdf · GROUP_XX_AI_PROMPTS_OUTPUTS.docx'],
          ],
        },
        {
          type: 'p',
          text: 'An example name is GROUP_3A_REPORT.docx. Incorrect names cost points under “Files and appendix”.',
        },
      ],
    },
    {
      kicker: 'Writing it up',
      title: 'Report structure',
      blocks: [
        {
          type: 'table',
          head: ['Section', 'Quantitative', 'Qualitative'],
          rows: [
            ['Title page', 'Group, names, title, executive summary (max 150 words)', 'Same, plus full article citation and the qualitative method'],
            ['1', 'Introduction, about half a page', 'Introduction, about half a page'],
            ['2', 'Method, about one page', 'Methodology and analysis, about two pages'],
            ['3', 'Results, about two pages, with one or two simple tables or figures', 'Themes and comparison, about two pages'],
            ['4', 'Managerial recommendations, one to two pages (two or three)', 'Conclusion and recommendations, maximum two pages'],
            ['5', 'Conclusion, about half a page: result, one limitation, one next step', 'Study limitations, about half a page, and one or two real-world next steps'],
            ['Appendix', 'No page limit: survey and jamovi screenshots, each with a clear title', 'No page limit: protocol, dataset, codebook, Taguette evidence, prompts and outputs, AI disclosure'],
          ],
        },
        {
          type: 'p',
          text: 'Use clear headings, page numbers, 1.5 line spacing, normal margins, concise English and a clear title for every table, figure and screenshot.',
        },
      ],
    },
    {
      kicker: 'Grading',
      title: 'Where the 100 points go',
      blocks: [
        {
          type: 'bars',
          title: 'Points by criterion (same weights for both paths)',
          unit: 'pts',
          items: [
            { label: 'Analysis and interpretation', value: 25 },
            { label: 'Method (survey or instrument)', value: 20 },
            { label: 'Managerial recommendations', value: 20 },
            { label: 'Research question and relevance', value: 15 },
            { label: 'Report quality', value: 10 },
            { label: 'Files and appendix', value: 10 },
          ],
        },
        {
          type: 'p',
          text: '25 + 20 + 20 + 15 + 10 + 10 = 100. The two biggest items are **correct analysis explained in plain English** and **recommendations that follow directly from the results**. Clear questions and tidy files are the cheapest points.',
        },
      ],
    },
    {
      kicker: 'Before you upload',
      title: 'Checklist, and what to confirm on Boostcamp',
      blocks: [
        {
          type: 'bullets',
          items: [
            'The question comes from the **assigned** article and has a clear sport business focus.',
            'The survey (or protocol) is short, tested and sensible.',
            'You used only methods you understand and that were covered in class.',
            'Results are explained in plain English, and recommendations follow from them.',
            'Synthetic material is labelled as synthetic, and AI use is disclosed.',
            'Every member is named, every file is correctly named, and one person uploads everything.',
          ],
        },
        {
          type: 'callout',
          title: 'Details that differ between the handouts',
          text: 'The quantitative slide handout says Arial 11 while the Word instructions say Times New Roman 11. The qualitative slide handout mentions 10 to 15 pages and three file groups, while the Word instructions say 5 to 8 pages and list five files. When documents disagree, follow the most detailed and most recent version on Boostcamp, and ask your instructor if it is unclear.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Experimental condition', def: 'One of the versions of the message or situation that participants see, such as a scarcity message or a neutral one.' },
    { term: 'Main outcome', def: 'The one variable the project measures to compare the conditions, such as purchase intention.' },
    { term: 'Qualtrics', def: 'The online survey platform used to build the survey and export it as a .qsf file.' },
    { term: 'Test responses', def: 'Random practice answers that Qualtrics can generate. They are labelled as survey tests and do not come from real people.' },
    { term: 'jamovi', def: 'The statistics program used for descriptive statistics and tests such as t tests, ANOVA and regression. Its files end in .omv.' },
    { term: 'Taguette', def: 'A free, open-source tool for tagging passages of text with codes in qualitative research.' },
    { term: 'Synthetic data', def: 'Material created artificially, such as AI-written interviews or random survey answers, not collected from real participants.' },
    { term: 'Interview guide', def: 'A planned list of open questions and prompts for a semi-structured interview.' },
    { term: 'Focus-group protocol', def: 'A written plan for running a group discussion, including the participant profiles, the questions and the moderator’s prompts.' },
    { term: 'Netnography', def: 'The study of online communities and conversations, such as posts, comments or reviews.' },
    { term: 'Codebook', def: 'A list of codes, each with a name, a meaning and a concrete example excerpt.' },
    { term: 'First-cycle coding', def: 'The first pass through the data, attaching codes to excerpts.' },
    { term: 'Category', def: 'A group of related codes.' },
    { term: 'Theme', def: 'A broad pattern of meaning built from categories and supported by excerpts.' },
    { term: 'Executive summary', def: 'A short overview on the title page of at most 150 words.' },
    { term: 'Appendix', def: 'The part after the main report that holds the survey or protocol, evidence and documentation. It has no page limit.' },
  ],
  cards: [
    { front: 'The two project paths', back: 'Quantitative: Qualtrics survey, test responses, jamovi. Qualitative: interview or focus-group guide, AI-generated material, Taguette.' },
    { front: 'What makes a quantitative question manageable?', back: 'One main comparison between two conditions and one main outcome, tied to the assigned paper.' },
    { front: 'How many items should the main outcome have?', back: 'Three to five clear items whenever possible.' },
    { front: 'How long should the survey take?', back: 'About five minutes.' },
    { front: 'What must the quantitative analysis include?', back: 'Sample description, mean and standard deviation, one suitable comparison with its result and p value, and a plain-English explanation.' },
    { front: 'Can a Qualtrics test response show a real effect?', back: 'No. The answers are random practice data. They demonstrate the workflow and do not replicate the published findings.' },
    { front: 'Minimum synthetic material (qualitative)', back: '5 interview transcripts, or 1 focus group with at least 5 distinguishable profiles, or 50 online entries.' },
    { front: 'What must be documented about the AI?', back: 'Tool, prompts, participant profiles and context, raw outputs, edits, assumptions and a disclosure.' },
    { front: 'Qualitative coding path', back: 'Import, first-cycle coding, codebook, categories, themes, compare with the original study.' },
    { front: 'Quantitative files', back: 'GROUP_XX_REPORT.docx, GROUP_XX_JAMOVI.omv, GROUP_XX_QUALTRICS.qsf.' },
    { front: 'Grading weights', back: 'Question 15, method 20, analysis 25, recommendations 20, report quality 10, files and appendix 10.' },
    { front: 'How many people upload the files?', back: 'One student uploads everything for the group on Boostcamp.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The real tools behind the project',
    note: 'What the Qualtrics support page, Taguette and jamovi say about themselves. Pages read on 5 November 2026; features can change, so check the current versions.',
    slides: [
      {
        kicker: 'Qualtrics',
        title: 'What “generate test responses” really does',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Random dummy data.** The tool creates random answers, including random placeholder text for open-text questions, so you can preview datasets and reports.',
              '**Marked as tests.** The responses are labelled as the “Survey Test” response type, so you can filter them out later.',
              '**Not limit-counting.** According to the page, test responses do not count toward license limits.',
              '**Quirks to expect.** The page says screen-outs can occur when the generator answers at random, and that custom validation is not applied to test responses.',
            ],
          },
          {
            type: 'callout',
            title: 'What this means for your project',
            text: 'Because the answers are random, a gap between your two conditions is **luck**, not evidence. That is why the brief says not to worry if your result is not significant and not to treat it as a replication.',
          },
        ],
      },
      {
        kicker: 'jamovi and Taguette',
        title: 'The analysis tools',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'jamovi',
                text: 'Its documentation lists descriptives, t tests (independent, paired, one-sample), ANOVA (one-way, standard, repeated measures, mixed) and linear and logistic regression.',
              },
              {
                title: 'Taguette',
                text: 'Describes itself as a free, open-source qualitative research tool. You import documents, highlight text, tag it with codes you create, and export your project, highlights, documents and codes.',
              },
            ],
          },
          {
            type: 'p',
            text: 'Neither tool decides what your findings mean. They organize the work. The interpretation, the plain-English explanation and the managerial advice are yours.',
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
                title: 'Generate Test Responses',
                url: 'https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/generating-test-responses/',
                note: 'Qualtrics support page. Random dummy data, the Survey Test response type, license limits, screen-outs and validation. Read 5 November 2026.',
              },
              {
                title: 'About Taguette',
                url: 'https://www.taguette.org/about',
                note: 'Taguette. Free and open-source tool for importing, highlighting, tagging and exporting. Read 5 November 2026.',
              },
              {
                title: 'jamovi documentation: analyses overview',
                url: 'https://docs.jamovi.org/_pages/info_overview.html',
                note: 'jamovi docs. List of descriptive, t test, ANOVA and regression analyses. Read 5 November 2026.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'A Harbor City Rovers mini project, both ways',
    universe: 'harbor',
    slides: [
      {
        kicker: 'Quantitative: design',
        title: 'Does a scarcity message lift purchase intention?',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers’ ticket office wonders if “Only 200 seats left” works better than a neutral reminder. A student group rebuilds a published experiment on scarcity messages.',
          },
          {
            type: 'table',
            head: ['Part', 'The group’s plan'],
            rows: [
              ['Research question', 'Do scarcity versus neutral ticket messages lead to different purchase intention?'],
              ['Conditions', 'A: scarcity message. B: neutral message. Each person sees one.'],
              ['Main outcome', 'Four items on purchase intention, 1 to 7, averaged into one score'],
              ['Background', 'Age group, how often they attend, which team they follow'],
              ['Length', 'About five minutes'],
              ['Test', 'The group clicks through every path before generating responses'],
            ],
          },
        ],
      },
      {
        kicker: 'Quantitative: results',
        title: 'What the jamovi output might look like',
        blocks: [
          {
            type: 'table',
            head: ['Condition', 'n', 'Mean intention', 'SD'],
            rows: [
              ['A: scarcity', '40', '5.1', '1.2'],
              ['B: neutral', '40', '4.4', '1.3'],
            ],
          },
          {
            type: 'bars',
            title: 'Mean purchase intention (1 to 7)',
            unit: '',
            items: [
              { label: 'A: scarcity', value: 5.1 },
              { label: 'B: neutral', value: 4.4 },
            ],
          },
          {
            type: 'p',
            text: 'Independent-samples t test: t(78) = 2.50, p = .014. The difference is 5.1 − 4.4 = **0.7** scale points, and Cohen’s d is about 0.56, a medium effect.',
          },
        ],
      },
      {
        kicker: 'Quantitative: write-up',
        title: 'Plain English, and the right kind of caution',
        blocks: [
          {
            type: 'callout',
            title: 'Plain-English result',
            text: 'In this dataset, people who saw the scarcity message scored about 0.7 points higher on purchase intention (5.1 against 4.4 on a 7-point scale). A difference this size would be unusual if the messages made no difference, p = .014.',
          },
          {
            type: 'columns',
            items: [
              {
                title: 'Insight from the published study',
                text: 'The assigned paper’s findings are the evidence for any advice about scarcity messages.',
              },
              {
                title: 'Pattern in the synthetic data',
                text: 'The Qualtrics data are random practice answers, so this gap would be luck. It shows how to run and report the analysis, nothing more.',
              },
            ],
          },
          {
            type: 'p',
            text: 'A strong recommendation therefore says, for example: “The published study suggests testing a limited-seats message on one match; run a small real A/B test before changing all ticketing messages.” It follows from the paper, and it names the limit of our own data.',
          },
        ],
      },
      {
        kicker: 'Qualitative: design and codebook',
        title: 'Five synthetic interviews about match-day experience',
        blocks: [
          {
            type: 'p',
            text: 'Another group rebuilds a published study on the stadium experience. They write a neutral interview guide, create five distinct synthetic fan profiles, generate five transcripts with an approved AI tool, log every prompt, then code the material in Taguette. All excerpts are marked **synthetic**.',
          },
          {
            type: 'table',
            head: ['Code', 'Meaning', 'Example excerpt (synthetic)'],
            rows: [
              ['Queue frustration', 'Waiting time at entry or food stands', '“I missed the first ten minutes in the queue.”'],
              ['Atmosphere', 'Noise, singing, shared emotion', '“When the north stand sings, the whole place hums.”'],
              ['Family ease', 'How easy the stadium is for children', '“The kids’ area meant we could stay for the whole game.”'],
              ['Price worry', 'Concern about tickets, food and drinks', '“A burger and a drink cost more than my ticket.”'],
            ],
          },
        ],
      },
      {
        kicker: 'Qualitative: themes and limits',
        title: 'From codes to a theme, and back to the paper',
        blocks: [
          {
            type: 'flow',
            items: [
              { title: 'Codes', text: 'queue frustration, price worry' },
              { title: 'Category', text: 'practical barriers on match day' },
              { title: 'Theme', text: 'the atmosphere is worth it, but only if the basics run smoothly' },
            ],
          },
          {
            type: 'bullets',
            items: [
              '**Compare:** the group notes where this theme matches the published study and where the synthetic fans add or miss something, such as the effect of a different sport.',
              '**Recommendation, with caution:** “Consider testing a second entry lane before big matches; we cannot say how many real fans share this view.”',
              '**Limit:** matching the original themes is not a replication, so the next step is a small round of real interviews.',
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
      q: 'Which research question is best suited to the quantitative group project?',
      options: [
        'Do fans exposed to a scarcity ticket message report different purchase intention than fans who see a neutral message?',
        'How do fans feel about everything the club does?',
        'What is the entire future of sports sponsorship?',
        'Why do supporters join online communities, and how do they discuss belonging?',
      ],
      answer: 0,
      explanation: 'The project compares two experimental conditions on one main outcome. The last option is a qualitative question.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'How many items does the brief suggest for the main outcome when possible?',
      options: ['One', 'Three to five', 'Ten to fifteen', 'As many as possible'],
      answer: 1,
      explanation: 'Three to five clear items keep the survey short, around five minutes, while still measuring the outcome reasonably.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Why should a group not claim its Qualtrics test-response result replicates the published study?',
      options: [
        'Because the responses are random synthetic data that only demonstrate the workflow',
        'Because Qualtrics deletes the data after export',
        'Because t tests cannot be run in jamovi',
        'Because replication requires at least 1,000 responses',
      ],
      answer: 0,
      explanation: 'Test responses are random dummy data. Any difference between conditions is luck, so it is not evidence about real fans.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A group finds p = .30 in its synthetic data. What does the brief advise?',
      options: [
        'Rerun the generator until p is below .05',
        'Report it honestly and explain it in plain English; non-significant results are acceptable',
        'Drop the analysis',
        'Claim the published study was wrong',
      ],
      answer: 1,
      explanation: 'The brief says not to worry if the result is not significant. Honest reporting matters more than a significant p value.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which of the following is the minimum amount of synthetic material for a qualitative focus group?',
      options: [
        'One transcript with at least 5 distinguishable participant profiles',
        'Three transcripts with 2 profiles each',
        '50 online entries',
        'One interview',
      ],
      answer: 0,
      explanation: 'The options are 5 interviews, or one focus group with at least 5 distinguishable profiles, or 50 online entries for netnography.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'What belongs in a codebook?',
      options: [
        'Only the code names',
        'Each code’s name, meaning and a concrete example excerpt',
        'The group members’ names',
        'The AI tool’s license',
      ],
      answer: 1,
      explanation: 'A codebook defines each code and gives a concrete example so the coding is transparent and consistent.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A qualitative group’s themes closely match the published study. What can they say?',
      options: [
        'That they have empirically replicated the study',
        'That similarity is not evidence of empirical replication, because the material is synthetic',
        'That synthetic participants are equal to real ones',
        'That no real research is needed',
      ],
      answer: 1,
      explanation: 'The brief states that matching the original themes is not an empirical replication. AI material is a simulation.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which file is required for the quantitative project but NOT for the qualitative project?',
      options: [
        'GROUP_XX_REPORT.docx',
        'GROUP_XX_QUALTRICS.qsf',
        'GROUP_XX_TAGUETTE_EXPORT.pdf',
        'GROUP_XX_AI_PROMPTS_OUTPUTS.docx',
      ],
      answer: 1,
      explanation: 'The quantitative path hands in the report, the jamovi file and the exported Qualtrics survey. The qualitative path has five different files.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which two criteria carry the most points in the grading?',
      options: [
        'Files and appendix, and report quality',
        'Analysis and interpretation (25), then the survey or instrument and the managerial recommendations (20 each)',
        'Research question only',
        'Report quality and research question',
      ],
      answer: 1,
      explanation: 'Analysis and interpretation is worth 25 points. The survey or instrument and the managerial recommendations are 20 points each.',
      review: { section: 'plain', slide: 14 },
    },
    {
      id: 'q10',
      type: 'open',
      q: 'Exercise. Your quantitative group finds that fans who saw an emotional message scored 0.6 points higher on engagement than fans who saw an informational one (p = .03) in Qualtrics test data. Write (a) the plain-English result, (b) one recommendation that follows from the published study, and (c) the caution you must add about your own dataset.',
      answer: [
        '**(a)** In this dataset, fans who saw the emotional message scored about 0.6 points higher on engagement than fans who saw the informational message, and the difference was statistically significant at p = .03.',
        '**(b)** For example: “The assigned study suggests emotional messages can raise engagement, so the club could test an emotional campaign message on one match and compare it with the usual informational post.”',
        '**(c)** The Qualtrics responses are synthetic and random, so this difference is not evidence about real fans and cannot show that the message caused higher engagement. It only demonstrates the analysis workflow.',
      ],
      review: { section: 'sports', slide: 2 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'A group assigned to a published sport sponsorship experiment has generated 80 synthetic survey responses with Qualtrics and found that the group that saw a sustainability message reported higher brand attitude (p = .02). Explain how the group should report this finding and what it should not claim.',
      answer: [
        'The group should report the sample size, the mean and standard deviation of brand attitude for each condition, the test used with its statistic and p value, and explain the difference in plain English, for example that the sustainability group scored higher on average.',
        'It should not claim the sustainability message causes higher brand attitude, because the responses are random synthetic data and the design does not support a causal conclusion about real fans. The result demonstrates the analysis workflow only and does not replicate the published study.',
        'Managerial recommendations should draw on what the published study found and be framed as ideas to test, clearly separated from the pattern in the synthetic dataset.',
      ],
      marking: [
        'Reports sample, means, standard deviations, test result and p value (2)',
        'Explains the result in plain English (1)',
        'Says the data are synthetic and random (2)',
        'Does not claim causation or replication (2)',
        'Separates the published study’s insights from the synthetic pattern (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A qualitative group generates five synthetic fan interviews about authenticity in athlete endorsements, codes them in Taguette and finds the same three themes as the published study. Describe the full workflow from codes to themes, and explain what the group can and cannot conclude.',
      answer: [
        'The group imports the transcripts, completes first-cycle coding by tagging excerpts with codes, builds a codebook giving each code a name, a meaning and an example excerpt, groups related codes into categories, and interprets the broader themes, illustrating them with excerpts clearly labelled as synthetic. It then compares the themes with the published study and discusses similarities, differences and the effect of changes in context.',
        'The group can say its exercise produced themes similar to the published ones and suggest managerial ideas for testing. It cannot claim empirical replication, because AI-generated interviews are simulations, not observations of real participants. Real fieldwork might differ in depth, language and surprise.',
        'A responsible report documents the AI tool, prompts, profiles, raw outputs and edits, labels all material as synthetic, and proposes a next step with real participants.',
      ],
      marking: [
        'Workflow: import, first-cycle coding, codebook, categories, themes, comparison (3)',
        'Codebook content described correctly (1)',
        'States that similarity is not replication (2)',
        'Explains why synthetic material differs from real fieldwork (1)',
        'Mentions documentation of AI use and a real-world next step (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Compare the quantitative and qualitative project paths in terms of the research question, the instrument, the data and the analysis tool, and explain how a group should choose between them.',
      answer: [
        'Quantitative: a question comparing two experimental conditions on one outcome, a short Qualtrics survey, synthetic test responses, and jamovi for descriptives and one test. Qualitative: a focused question about meanings or experiences, an interview guide, focus-group protocol or netnography framework, AI-generated labelled material, and coding in Taguette to produce a codebook and themes.',
        'A group should choose the path whose question, tool and evidence it can explain confidently, and that fits the assigned article: an experiment suits the quantitative path and a qualitative study suits the qualitative one. Both paths require plain-English interpretation, honest limits for synthetic data and cautious recommendations.',
      ],
      marking: [
        'Question and instrument for each path (2)',
        'Data and analysis tool for each path (2)',
        'Reasoned basis for choosing (1)',
        'Notes the shared requirement for honesty about synthetic data (1)',
      ],
    },
  ],

  videos: [],
};
