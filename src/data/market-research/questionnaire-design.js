// Market Research, Session 8: Principles of questionnaire design.
// Built from the Lesson 8 lecture slides (what a questionnaire is, design before writing, question order from welcome to
// submission, unbiased wording, open and closed questions, measurement levels, Likert and semantic differential scales,
// validated measures, independent and dependent variables, adapting scales from an article, and the key takeaways).
// The slides close with "Next: build the survey in Qualtrics", so the Qualtrics building blocks are not covered here.
// Real example: Pew Research Center on question wording and order effects (a January 2019 "good jobs" experiment and the
// polls collected on Pew's "Questionnaire design" page).

export const questionnaireDesignTopic = {
  id: 'questionnaire-design',
  course: 'market-research',
  title: 'Questionnaire design and online surveys',
  sessions: 'Session 8',
  reading: 'Session 8 slides (Lesson 8)',
  minutes: 35,
  summary:
    'How to turn a research question into a questionnaire: plan the structure from welcome to submission, write neutral, specific questions, choose open or closed formats and the right measurement scale, and use validated items.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'A questionnaire is a measuring instrument',
      blocks: [
        {
          type: 'big',
          text: 'A **questionnaire** is a structured set of questions designed to collect information that answers your research objective.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Relevant', text: 'Every question helps answer the research question.' },
            { title: 'Understandable', text: 'Respondents know exactly what is being asked.' },
            { title: 'Measurable', text: 'The answers can be analyzed properly.' },
          ],
        },
        {
          type: 'callout',
          title: 'The lecture’s warning',
          text: 'A longer questionnaire is **not** necessarily a better questionnaire. Each extra question costs the respondent time and attention.',
        },
        {
          type: 'p',
          text: 'The four skills of the session: **structure** a questionnaire from introduction to closing, **write** clear and neutral questions, **measure** with the right question types and scales, and **implement** it in an online survey tool (Qualtrics, which comes next).',
        },
      ],
    },
    {
      kicker: 'Before you write',
      title: 'Design starts before writing questions',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Research question', text: 'What do we need to know?' },
            { title: '2. Constructs and variables', text: 'What must be measured?' },
            { title: '3. Measurement items', text: 'Which questions represent each construct?' },
            { title: '4. Survey instrument', text: 'How should the items be presented and answered?' },
          ],
        },
        {
          type: 'callout',
          title: 'Start with the question, not the software',
          text: 'The first key takeaway of the lecture: begin with the research question. Opening a survey tool and typing questions comes last, not first.',
        },
      ],
    },
    {
      kicker: 'Structure',
      title: 'Question order: from welcome to submission',
      blocks: [
        {
          type: 'table',
          head: ['Step', 'Block', 'What it does'],
          rows: [
            ['1', 'Introduction and consent', 'Explains the purpose, that taking part is voluntary, and how data is used'],
            ['2', 'Screening', 'Checks eligibility and excludes people who do not qualify'],
            ['3', 'Warm-up', 'Short, easy, topic-related questions to begin'],
            ['4', 'Core measures', 'Grouped, validated scales, moving from general to specific'],
            ['5', 'Sensitive questions', 'Only if necessary, after trust has been built'],
            ['6', 'Classification', 'Demographic or segment questions'],
            ['7', 'Closing', 'Optional final comment, thanks and submission'],
          ],
        },
        {
          type: 'callout',
          title: 'Two rules to remember',
          text: '**Screening comes before the main blocks.** **Sensitive questions normally come later,** once rapport exists.',
        },
      ],
    },
    {
      kicker: 'The first minute',
      title: 'Introduction and screening',
      blocks: [
        {
          type: 'p',
          text: 'The introduction is where people decide whether to continue. The lecture’s example is a real university survey welcome page. A good one covers six things.',
        },
        {
          type: 'bullets',
          items: [
            '**Purpose** of the study, in general terms.',
            '**Sponsor** (optional).',
            '**Importance of participation.**',
            '**Assurance of anonymity and confidentiality.**',
            '**Estimated completion time.**',
            '**Simple instructions.**',
          ],
        },
        {
          type: 'p',
          text: 'The example page also says who can take part (adults with relevant work experience) and that participation is voluntary: people may stop at any time without giving a reason. **Screening questions** then identify qualified respondents and filter out ineligible ones.',
        },
      ],
    },
    {
      kicker: 'The middle and the end',
      title: 'Warm-up, core, sensitive, classification and closing',
      blocks: [
        {
          type: 'table',
          head: ['Block', 'What belongs there'],
          rows: [
            ['Warm-up', 'Easy, engaging, non-threatening, general topic-related questions'],
            ['Core or specific', 'The main research questions. Logical order from general to specific, grouped by topic, including interval, ratio and attitude scales'],
            ['Sensitive or difficult', 'Personal, financial or sensitive topics, placed later to maintain rapport'],
            ['Demographic or classification', 'Age, gender, education, income and similar'],
            ['Closing', 'Optional open-ended question, a thank-you note, a reminder of confidentiality and submission instructions'],
          ],
        },
        {
          type: 'p',
          text: 'The logic: ease people in, get the data you need while attention is highest, ask the uncomfortable questions once trust exists, and finish politely.',
        },
      ],
    },
    {
      kicker: 'Unbiased wording',
      title: 'Four common wording problems',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Leading', text: 'Suggests which answer is preferred.' },
            { title: 'Vague', text: 'Uses unclear words or undefined time periods.' },
            { title: 'Double-barrelled', text: 'Combines two different things into one item.' },
            { title: 'Presupposition', text: 'Assumes a behavior or experience has occurred.' },
          ],
        },
        {
          type: 'callout',
          title: 'The goal',
          text: 'The goal is **not** to make questions positive. It is to make them **neutral and answerable**.',
        },
      ],
    },
    {
      kicker: 'Fix the question',
      title: 'Four bad questions and their repairs',
      blocks: [
        {
          type: 'table',
          head: ['Problem and bad question', 'Better version'],
          rows: [
            ['Vague: “Do you like our restaurant?”', '“How satisfied, on a scale from 1 to 5, are you with the food quality at our restaurant?”'],
            ['Leading: “How excellent was the service provided by our friendly staff?”', '“How would you rate the quality of service provided by the staff?”'],
            ['Assumption: “When you visit our bar, which cocktail do you enjoy the most?”', 'First ask “Have you visited our bar?” and only if yes ask “Which drink did you enjoy the most?”'],
            ['Leading: “Our restaurant always offers great value for money. Do you agree?”', '“To what extent do you agree or disagree that the restaurant offers good value for money?”'],
            ['Double-barrelled: “How satisfied are you with the food quality and the prices at this restaurant?”', 'Two questions: one on food quality, one on prices'],
          ],
        },
        {
          type: 'p',
          text: 'The fix for an assumption is a **screening or filter question** before the main question. The fix for a double-barrelled question is **one idea per question**.',
        },
      ],
    },
    {
      kicker: 'Sport versions',
      title: 'The same problems at the stadium',
      blocks: [
        {
          type: 'table',
          head: ['Problem and bad question', 'Better version'],
          rows: [
            ['Leading: “How much did you enjoy our excellent stadium experience?”', '“How would you rate your overall stadium experience?”'],
            ['Vague: “Do you regularly attend games?”', '“How many home matches have you attended in the past 12 months?”'],
            ['Assumption: “What do you usually buy at the stadium?”', 'First ask whether the respondent bought anything at the stadium'],
            ['Double-barrelled: “How satisfied are you with ticket prices and stadium facilities?”', 'Two questions: ticket prices, then stadium facilities'],
          ],
        },
        {
          type: 'callout',
          title: 'Test for double-barrelled',
          text: 'If the answers to the two halves **could differ**, the concepts need separate questions.',
        },
      ],
    },
    {
      kicker: 'Order effects',
      title: 'Question order matters',
      blocks: [
        {
          type: 'big',
          text: 'A well-designed survey follows the **respondent’s reasoning**, not the researcher’s spreadsheet.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Do', text: 'Use clear sections, related items and sensible transitions.' },
            { title: 'Avoid', text: 'Starting with intrusive questions, or jumping between unrelated topics.' },
          ],
        },
        {
          type: 'callout',
          title: 'If order might change answers',
          text: 'Test it, or **randomize** suitable question blocks. The real example later shows how much an earlier question can shift a later answer.',
        },
      ],
    },
    {
      kicker: 'Question types',
      title: 'Open questions or closed questions?',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Open (unstructured)', text: 'Respondents answer in their own words. Examples: “What is your occupation?” and “What do you think of people who buy secondhand clothes?”' },
            { title: 'Closed (structured)', text: 'A specific set of response options or a fixed format is provided: multiple choice, dichotomous or scale.' },
          ],
        },
        {
          type: 'table',
          head: ['', 'Open', 'Closed'],
          rows: [
            ['Strength', 'Rich insights, and less biasing influence from the researcher’s options', 'Less costly and time-consuming to process'],
            ['Cost', 'Needs coding and data processing', 'Options can steer the answer, so they must be well designed'],
          ],
        },
        {
          type: 'p',
          text: 'The strengths and costs above are laid out on the slide as a set of labels. The pairing is our reading of it: open questions give richer answers but are slower to code, closed questions are quicker to analyze. The last row of the table is our own addition.',
        },
      ],
    },
    {
      kicker: 'Closed formats',
      title: 'Multiple choice, dichotomous and scale',
      blocks: [
        {
          type: 'table',
          head: ['Format', 'What it is', 'Lecture example'],
          rows: [
            ['Multiple choice', 'A choice of answers is provided', '“What is your favorite watch brand?” Rolex, Omega, Apple Watch, Tag Heuer, I don’t wear a watch, Other (please specify)'],
            ['Dichotomous', 'Only two response alternatives', '“Do you intend to buy a new watch within the next six months?” Yes or No'],
            ['Scale', 'A continuum on which the measured objects are placed', 'The same question answered from “Definitely will not buy” to “Definitely will buy”'],
          ],
        },
        {
          type: 'callout',
          title: 'Note on the slide',
          text: 'The dichotomous slide also lists “I don’t know”, which makes three options. For a strictly dichotomous item, offer only two. If you add “don’t know”, treat it as a deliberate third option.',
        },
        {
          type: 'p',
          text: '“Other (please specify)” is a small open question inside a closed one.',
        },
      ],
    },
    {
      kicker: 'Measurement levels',
      title: 'Nominal, ordinal, interval and ratio',
      blocks: [
        {
          type: 'table',
          head: ['Scale', 'What the numbers mean, and an example'],
          rows: [
            ['Nominal', 'Numbers only name or classify. No order or quantity. Example: customer gender, type of retail outlet, preferred social media platform'],
            ['Ordinal', 'Numbers show order or ranking, but not the size of the differences. Example: ranking shops by service quality, ranking TV programs from 1 to 4'],
            ['Interval', 'Differences between values are meaningful, but zero does not mean “nothing”. Example: satisfaction or attitude scales, such as a 1 to 7 agreement scale'],
            ['Ratio', 'Zero means the absence of the variable, so ratios are meaningful. Example: age, income, sales, costs, market share, hours per week on social media'],
          ],
        },
        {
          type: 'callout',
          title: 'Memory aid from the slides',
          text: 'Sometimes numbers are **labels** (nominal), sometimes they show **order** (ordinal), sometimes they show **differences** (interval) and sometimes they show **real quantities** (ratio).',
        },
      ],
    },
    {
      kicker: 'Scale types',
      title: 'Likert and semantic differential scales',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Likert scale', text: 'Respondents say how strongly they agree or disagree with a statement. Example: 1 = Strongly disagree, 2 = Disagree, 3 = Neither agree nor disagree, 4 = Agree, 5 = Strongly agree. The lecture’s example lists beliefs about the Odeon cinema.' },
            { title: 'Semantic differential', text: 'Descriptive scales bounded at each end by bipolar adjectives, such as Unwelcoming and Welcoming (1 to 7). Good for perceptions of an experience, brand or service.' },
          ],
        },
        {
          type: 'callout',
          title: 'A subtle point the lecture raises',
          text: 'A **single** Likert item is ordinal. A response of 1 to 7 does **not** automatically prove equal psychological intervals between the numbers. The scale table lists attitude scales as interval, which is how they are often treated once several items are combined. Know both statements.',
        },
        {
          type: 'p',
          text: 'The final sentence of the callout is our reading of how the two slides fit together. If the exam asks, say what the lecture says: a single item is ordinal, and attitude scales are commonly treated as interval in practice.',
        },
      ],
    },
    {
      kicker: 'Validated measures',
      title: 'Why validated measures matter',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Construct', text: 'A latent variable such as fan engagement. It cannot be seen in a single number.' },
            { title: 'Dimensions', text: 'Different behaviors may reflect different facets of the construct.' },
            { title: 'Items', text: 'Several statements operationalize each facet.' },
            { title: 'Evidence', text: 'Researchers assess reliability and validity before recommending a scale.' },
          ],
        },
        {
          type: 'callout',
          title: 'Context matters',
          text: 'A measure validated in one setting may still need **adaptation and testing** in another.',
        },
        {
          type: 'p',
          text: 'This builds on Session 5 (validity and reliability): a scale taken from a published article already has evidence behind it, which a question you invent does not.',
        },
      ],
    },
    {
      kicker: 'Variables',
      title: 'Independent and dependent variables',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Independent variable (IV)', text: 'The variable that influences or predicts another. Often manipulated in experiments or studied as a cause. Examples: advertising intensity, price level, service quality.' },
            { title: 'Dependent variable (DV)', text: 'The variable that responds to changes in the IV. It is the outcome of interest. Examples: sales, customer satisfaction, purchase intention.' },
          ],
        },
        {
          type: 'steps',
          items: [
            '**Start with your objective.** Example: “Examine how advertising affects customer purchase intention.”',
            '**Formulate the research question.** Example: “Does increasing advertising frequency increase purchase intention for Product X?”',
            '**Identify the IV and DV.** IV = the cause (advertising frequency). DV = the effect you observe (purchase intention).',
            '**Identify optional control variables** that may affect the DV but are not the focus, such as price, brand loyalty or competitor actions.',
          ],
        },
      ],
    },
    {
      kicker: 'From article to survey',
      title: 'Use scales from the literature and document changes',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Choose constructs,** for example team identification, prosocial behavior or purchase intention.',
            '**Locate the original items** in the article’s appendix and identify the items that belong to each construct.',
            '**Keep measurement consistent:** preserve the wording and response anchors where feasible.',
            '**Document adaptations:** state exactly what changed and why.',
          ],
        },
        {
          type: 'callout',
          title: 'What comes next',
          text: 'In the workshop, students implement the selected scales. This session teaches the **design logic**. The deck ends with “Build the survey in Qualtrics”.',
        },
      ],
    },
    {
      kicker: 'Wrap-up',
      title: 'Five key takeaways',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Start with the research question, not the software.**',
            '**Write neutral, specific, answerable questions.**',
            '**Match the response format to the variable being measured.**',
            '**Use literature-based scales and document adaptations.**',
            '**Pretest** content, logic, usability and data capture.',
          ],
        },
        {
          type: 'callout',
          title: 'Pretesting, in practice',
          text: 'Before launch, ask a few people to complete the survey and think aloud. Check that questions are understood, the logic and skips work, it works on a phone, and the answers are recorded correctly.',
        },
        {
          type: 'p',
          text: 'The callout expands the slide’s one-line “pretest content, logic, usability and data capture” and is our own explanation.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Questionnaire', def: 'A structured set of questions designed to collect information relevant to a research objective.' },
    { term: 'Construct', def: 'A concept that cannot be observed directly, such as fan engagement or brand trust. It has to be measured through items.' },
    { term: 'Measurement item', def: 'A single question or statement that represents part of a construct.' },
    { term: 'Screening question', def: 'An early question that checks whether a person is eligible, so that people who do not qualify can be filtered out.' },
    { term: 'Warm-up question', def: 'An easy, non-threatening, topic-related question at the start of the main survey.' },
    { term: 'Classification question', def: 'A question about age, gender, education, income or segment, usually asked near the end.' },
    { term: 'Leading question', def: 'A question that suggests which answer is preferred.' },
    { term: 'Double-barrelled question', def: 'A question that combines two different things in one item, so the answer is unclear.' },
    { term: 'Presupposition', def: 'A question that assumes a behavior or experience happened, such as asking what people usually buy before asking whether they bought anything.' },
    { term: 'Vague question', def: 'A question with unclear words or undefined time periods.' },
    { term: 'Open-ended question', def: 'A question respondents answer in their own words. It gives rich insight but needs coding.' },
    { term: 'Closed-ended question', def: 'A question with a specific set of response alternatives or a fixed format.' },
    { term: 'Dichotomous question', def: 'A closed question with only two response alternatives, such as yes or no.' },
    { term: 'Scale question', def: 'A closed question where the answer is a position on a continuum.' },
    { term: 'Nominal scale', def: 'Numbers only name or classify. There is no order or quantity.' },
    { term: 'Ordinal scale', def: 'Numbers show order or ranking, but not the size of the differences.' },
    { term: 'Interval scale', def: 'Differences between values are meaningful, but zero does not represent nothing.' },
    { term: 'Ratio scale', def: 'Zero means the absence of the variable, so ratios and comparisons are meaningful.' },
    { term: 'Likert scale', def: 'A set of statements rated from strongly disagree to strongly agree.' },
    { term: 'Semantic differential', def: 'A scale bounded by two opposite adjectives, such as unwelcoming and welcoming.' },
    { term: 'Independent variable (IV)', def: 'The variable that influences or predicts another. The presumed cause.' },
    { term: 'Dependent variable (DV)', def: 'The outcome variable that responds to changes in the IV.' },
    { term: 'Control variable', def: 'A variable that may affect the DV but is not the focus of the study.' },
    { term: 'Pretest', def: 'Trying out a questionnaire before launch to check content, logic, usability and data capture.' },
  ],

  cards: [
    { front: 'What is a questionnaire?', back: 'A structured set of questions designed to collect information relevant to a research objective.' },
    { front: 'Three qualities of a good questionnaire', back: 'Relevant, understandable and measurable.' },
    { front: 'Four steps of design before writing questions', back: 'Research question, constructs and variables, measurement items, survey instrument.' },
    { front: 'The seven blocks in order', back: 'Introduction and consent, screening, warm-up, core measures, sensitive questions, classification, closing.' },
    { front: 'Where do screening questions go?', back: 'Before the main blocks, so ineligible people are filtered out early.' },
    { front: 'Where do sensitive questions go?', back: 'Later, after trust has been built, and only if necessary.' },
    { front: 'Six things in a good introduction', back: 'Purpose, sponsor (optional), importance of taking part, anonymity and confidentiality, estimated time, simple instructions.' },
    { front: 'Four common wording problems', back: 'Leading, vague, double-barrelled, presupposition.' },
    { front: 'How do you fix a double-barrelled question?', back: 'Split it so each question has one idea. If the answers could differ, they need separate questions.' },
    { front: 'How do you fix a presupposition?', back: 'Ask a screening or filter question first, such as whether the person did the thing at all.' },
    { front: 'Open versus closed questions', back: 'Open: own words, rich insight, needs coding. Closed: fixed options, quicker to process.' },
    { front: 'Three closed formats', back: 'Multiple choice, dichotomous (two options) and scale.' },
    { front: 'Four measurement levels', back: 'Nominal (labels), ordinal (order), interval (meaningful differences, no true zero), ratio (true zero).' },
    { front: 'Is a single Likert item interval or ordinal?', back: 'The lecture says a single item is ordinal. It does not prove equal intervals, though attitude scales are often treated as interval in practice.' },
    { front: 'What is a semantic differential?', back: 'A scale between two opposite adjectives, such as unwelcoming to welcoming.' },
    { front: 'IV versus DV', back: 'IV is the cause or predictor. DV is the outcome that responds to it.' },
    { front: 'What are control variables?', back: 'Variables that may affect the DV but are not the focus, such as price, brand loyalty or competitor actions.' },
    { front: 'Why use validated scales?', back: 'They already have evidence of reliability and validity. Keep the wording and anchors where feasible, and document any adaptation.' },
    { front: 'The five takeaways', back: 'Start with the research question, write neutral and specific questions, match the format to the variable, use literature scales and document changes, pretest.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: how a single word or an earlier question changes the answer',
    note: 'Two sources from Pew Research Center, a U.S. polling organization: a January 2019 survey experiment and the polls collected on its “Questionnaire design” page (poll dates are given beside each result). The results are percentages from each poll as reported.',
    slides: [
      {
        kicker: 'One word',
        title: '“Jobs” or “good jobs”?',
        blocks: [
          {
            type: 'p',
            text: 'In a January 2019 Pew survey, respondents were randomly split in two and asked whether there were plenty of jobs available in their area. One group was asked about “jobs”. The other was asked about “good jobs”.',
          },
          {
            type: 'bars',
            title: 'Said plenty were available (%)',
            unit: '%',
            items: [
              { label: 'Asked about “jobs”', value: 60 },
              { label: 'Asked about “good jobs”', value: 48 },
            ],
          },
          {
            type: 'callout',
            title: 'What it shows',
            text: 'One added word moved the result by **12 percentage points**. Because people were assigned to each version at random, the difference can be put down to the wording itself.',
          },
        ],
      },
      {
        kicker: 'Wording effects',
        title: 'Adding a clause changes the answer',
        blocks: [
          {
            type: 'table',
            head: ['Poll', 'Wording', 'Result'],
            rows: [
              ['Iraq, January 2003', '“…taking military action in Iraq to end Saddam Hussein’s rule”', '68% favor, 25% oppose'],
              ['Iraq, January 2003', 'Same, plus “…even if it meant that U.S. forces might suffer thousands of casualties”', '43% favor, 48% oppose'],
              ['Terminally ill patients, 2005', '“…making it legal for doctors to give terminally ill patients the means to end their lives”', '51% favor'],
              ['Terminally ill patients, 2005', '“…making it legal for doctors to assist terminally ill patients in committing suicide”', '44% favor'],
            ],
          },
          {
            type: 'bullets',
            items: [
              'The same issue, with different wording, produced a different majority in the Iraq case.',
              'Neither wording is “wrong”. The point is that respondents react to the **words**, so wording must be chosen deliberately and reported.',
            ],
          },
        ],
      },
      {
        kicker: 'Order effects',
        title: 'An earlier question colors a later one',
        blocks: [
          {
            type: 'bars',
            title: 'Dissatisfied with the way things are going in the country, December 2008 (%)',
            unit: '%',
            items: [
              { label: 'Asked after the presidential approval question', value: 88 },
              { label: 'Asked without that context', value: 78 },
            ],
          },
          {
            type: 'bullets',
            items: [
              'In October 2003, support for legal agreements for gay couples was **45%** when asked after a question on gay marriage, against **37%** without that context.',
              'A single question about the president first made the general question about the country more negative.',
              'The fix the lecture gives: **test the order or randomize** question blocks.',
            ],
          },
          {
            type: 'callout',
            title: 'A double-barrelled example from the same page',
            text: '“How much confidence do you have in President Obama to handle domestic and foreign policy?” Pew’s advice is to split it into two questions, one on each.',
          },
          {
            type: 'p',
            text: 'The same page stresses that pretesting a survey is an essential step in questionnaire design.',
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
                title: '“Good jobs” vs. “jobs”: survey experiments can measure the effects of question wording and more (Pew Research Center)',
                url: 'https://www.pewresearch.org/short-reads/2019/01/29/good-jobs-vs-jobs-survey-experiments-can-measure-the-effects-of-question-wording-and-more/',
                note: 'Pew Research Center, 29 January 2019. 60% versus 48%, randomly assigned wording.',
              },
              {
                title: 'Questionnaire design (Pew Research Center, copy hosted by Grand Valley State University)',
                url: 'https://www.gvsu.edu/cms5/asset/f1045829-476f-432e-ac84-e42b5b53aaa5/1e119ed7-9f0e-4b70-81b7-36546651fe0b/pew_surveydesign_nodate.pdf',
                note: 'Undated copy. Iraq 2003 and terminally ill 2005 wording effects, order effects from 2003 and 2008, a double-barreled example and pretesting advice.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers write their match-day survey',
    universe: 'harbor',
    slides: [
      {
        kicker: 'From question to variables',
        title: 'What do the Rovers actually need to know?',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Objective:** understand what makes home supporters renew their season tickets.',
              '**Research question:** “Does a better matchday atmosphere rating increase intention to renew?”',
              '**IV:** atmosphere rating. **DV:** intention to renew.',
              '**Control variables:** ticket price, years as a supporter and distance from the stadium.',
            ],
          },
          {
            type: 'p',
            text: 'Only now do they write questions. Each item must serve one of these variables, otherwise it is cut.',
          },
        ],
      },
      {
        kicker: 'Fix the draft',
        title: 'The first draft has five problems',
        blocks: [
          {
            type: 'table',
            head: ['Draft question and problem', 'Repair'],
          rows: [
            ['“How amazing was the incredible atmosphere?” Leading', '“How would you rate the atmosphere at the match?”'],
            ['“Do you often go to matches?” Vague', '“How many home matches did you attend in 2025–26?”'],
            ['“What did you eat at the stadium?” Presupposition', 'Ask first: “Did you buy food or drink at the stadium?”'],
            ['“Are you happy with prices and facilities?” Double-barrelled', 'Two questions: prices, then facilities'],
            ['“Do you think the Rovers are the best club in the league?” Leading', '“How would you rate the Rovers compared with other clubs in the league?”'],
          ],
        },
        ],
      },
      {
        kicker: 'Why splitting matters',
        title: 'What the double-barrelled question would have hidden',
        blocks: [
          {
            type: 'p',
            text: 'In the pilot, 200 supporters rate satisfaction from 1 to 5 for each of the two things separately.',
          },
          {
            type: 'bars',
            title: 'Average satisfaction (1 to 5)',
            unit: '',
            items: [
              { label: 'Stadium facilities', value: 4.2 },
              { label: 'Combined (average of the two)', value: 3.4 },
              { label: 'Ticket prices', value: 2.6 },
            ],
          },
          {
            type: 'p',
            text: 'Average of the two: (2.6 + 4.2) ÷ 2 = **3.4**. A single combined question would produce a middling score and suggest “people are fine”. Split, it shows a **real problem with prices** (2.6) and a strength in facilities (4.2).',
          },
        ],
      },
      {
        kicker: 'The running order',
        title: 'The Rovers’ questionnaire, block by block',
        blocks: [
          {
            type: 'table',
            head: ['Block', 'Rovers example'],
            rows: [
              ['Introduction and consent', 'Purpose, 10 minutes, confidential, voluntary, club prize draw not tied to any answer'],
              ['Screening', '“Did you attend at least one home league match in 2025–26?” If no, thank and end'],
              ['Warm-up', '“How many home matches did you attend this season?”'],
              ['Core measures', 'Atmosphere items, then satisfaction with prices, then with facilities, then intention to renew'],
              ['Sensitive', 'Household income band (optional, with a “prefer not to say” option)'],
              ['Classification', 'Age group, postcode area, years as a supporter'],
              ['Closing', 'Optional “Anything else?” comment box, thank-you and confidentiality reminder'],
            ],
          },
          {
            type: 'p',
            text: 'The pilot also showed a risk of order effects: asking about the club’s recent results before atmosphere could color the atmosphere answers. The team randomizes the order of the atmosphere and facilities blocks.',
          },
        ],
      },
      {
        kicker: 'Match format to the variable',
        title: 'Which level of measurement is each question?',
        blocks: [
          {
            type: 'table',
            head: ['Question and format', 'Level'],
          rows: [
            ['Which stand do you usually sit in? Multiple choice', 'Nominal'],
            ['Rank these four match-day services from 1 (best) to 4. Ranking', 'Ordinal'],
            ['The atmosphere was welcoming (1 to 7, strongly disagree to strongly agree). Likert item', 'Ordinal as a single item, often treated as interval when combined into a scale'],
            ['How many home matches did you attend? Number', 'Ratio'],
            ['Will you renew your season ticket? Yes or No. Dichotomous', 'Nominal'],
          ],
        },
          {
            type: 'callout',
            title: 'Why it matters',
            text: 'The level decides what you can do with the data. A mean number of matches (ratio) makes sense. A mean “stand number” (nominal) does not.',
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
      q: 'Where in a questionnaire should screening questions appear?',
      options: [
        'Before the main blocks, to filter out ineligible people early',
        'At the very end',
        'Right after the sensitive questions',
        'Only inside the closing section',
      ],
      answer: 0,
      explanation: 'The order is introduction and consent, then screening, warm-up, core measures, sensitive questions, classification and closing.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Why are sensitive questions normally placed later in the questionnaire?',
      options: [
        'Trust and rapport have been built by then',
        'They are the most important questions',
        'Respondents are less tired at the start',
        'They are easier to code',
      ],
      answer: 0,
      explanation: 'Personal, financial or sensitive questions can make people drop out if asked early. Later, trust has been established. Ask them only if necessary.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: '“How much did you enjoy our excellent stadium experience?” has which problem?',
      options: ['It is a leading question', 'It is double-barrelled', 'It is a dichotomous question', 'It is a screening question'],
      answer: 0,
      explanation: 'The word “excellent” suggests the preferred answer. A neutral version is “How would you rate your overall stadium experience?”',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: '“How satisfied are you with ticket prices and stadium facilities?” should be changed because…',
      options: [
        'It combines two concepts that could get different answers',
        'It is too short',
        'It uses a scale',
        'It asks about satisfaction',
      ],
      answer: 0,
      explanation: 'This is a double-barrelled question. Split it into one question on ticket prices and one on stadium facilities.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: '“What do you usually buy at the stadium?” is a problem because it…',
      options: [
        'Assumes the respondent bought something',
        'Is too long',
        'Uses an open format',
        'Is a screening question',
      ],
      answer: 0,
      explanation: 'It presupposes a behavior. Ask first whether the respondent bought anything at the stadium, then ask what.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which statement describes an open-ended question?',
      options: [
        'Respondents answer in their own words',
        'Respondents choose between yes and no',
        'Respondents tick one of six brands',
        'Respondents rate a statement from 1 to 5',
      ],
      answer: 0,
      explanation: 'Open questions give rich insight with less biasing influence, but they need coding and data processing.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which closed format has only two response alternatives?',
      options: ['Dichotomous', 'Multiple choice', 'Semantic differential', 'Likert'],
      answer: 0,
      explanation: 'Dichotomous questions, such as yes or no, have two alternatives. Multiple choice offers several, and scales offer a continuum.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Ranking four TV programs from 1 (favorite) to 4 (least favorite) gives which level of measurement?',
      options: ['Ordinal', 'Nominal', 'Interval', 'Ratio'],
      answer: 0,
      explanation: 'The numbers show order but not the size of the differences between items.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which variable is measured on a ratio scale?',
      options: [
        'Hours per week spent on social media',
        'Preferred social media platform',
        'Rank of favorite brands',
        'Agreement from 1 to 7',
      ],
      answer: 0,
      explanation: 'A ratio scale has a true zero, so zero hours means none and ratios make sense. The others are nominal, ordinal and interval or ordinal.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'What is true of a single Likert item?',
      options: [
        'It is ordinal, and a response of 1 to 7 does not automatically establish equal psychological intervals',
        'It is always a ratio scale',
        'It is nominal because it uses numbers as labels',
        'It cannot be used in a survey',
      ],
      answer: 0,
      explanation: 'A single item is ordinal. Attitude scales are commonly treated as interval in practice, but that does not come automatically from the numbers.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'In “Does increasing advertising frequency increase purchase intention?”, what is the dependent variable?',
      options: ['Purchase intention', 'Advertising frequency', 'Price', 'Brand loyalty'],
      answer: 0,
      explanation: 'The DV is the outcome that responds to changes in the IV. Advertising frequency is the IV, and price and brand loyalty are possible control variables.',
      review: { section: 'plain', slide: 14 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'You adapt a published scale for your survey. What should you do?',
      options: [
        'Keep the wording and response anchors where feasible and document exactly what changed and why',
        'Rewrite every item in your own words',
        'Drop the response anchors',
        'Use only the first item',
      ],
      answer: 0,
      explanation: 'Validated measures carry evidence of reliability and validity. Changing them without a record weakens that evidence.',
      review: { section: 'plain', slide: 15 },
    },
    {
      id: 'q13',
      type: 'open',
      q: 'Exercise. Rewrite these five questions so they are neutral, specific and answerable: (1) “Do you like our app?” (2) “How great was our friendly ticket office?” (3) “What do you usually drink at matches?” (4) “Are you satisfied with the seats and the food?” (5) “Do you often attend?”',
      answer: [
        '(1) Vague: “How satisfied are you with the club’s app, from 1 (very dissatisfied) to 5 (very satisfied)?”',
        '(2) Leading: “How would you rate the service at the ticket office?”',
        '(3) Presupposition: first ask “Did you buy a drink at a match this season?” and only then “What did you buy?”',
        '(4) Double-barrelled: ask separately about the seats and the food.',
        '(5) Vague: “How many home matches did you attend in the past 12 months?”',
      ],
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'c1',
      type: 'mcq',
      q: 'Which of these should come first when designing a questionnaire?',
      options: [
        'The research question: what do we need to know?',
        'Choosing the survey software',
        'Writing the thank-you message',
        'Deciding the font',
      ],
      answer: 0,
      explanation: 'Start with the research question, then the constructs and variables, then the items, then the instrument. The software comes last.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'c2',
      type: 'mcq',
      q: 'Which pair best matches what a closed question and an open question are each good at?',
      options: [
        'Closed: quick to process. Open: rich insight',
        'Closed: rich insight. Open: quick to process',
        'Both are equally slow to code',
        'Closed: only for qualitative research. Open: only for numbers',
      ],
      answer: 0,
      explanation: 'Closed questions are quicker and cheaper to process. Open questions give richer answers but need coding.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'c3',
      type: 'mcq',
      q: 'A survey asks about the club’s poor recent results and then asks fans to rate the atmosphere. What is the main risk?',
      options: [
        'An order effect: the earlier question can shift the later answer',
        'A sampling frame problem',
        'A double-barrelled question',
        'A control variable',
      ],
      answer: 0,
      explanation: 'The real Pew examples show that an earlier question can move later answers. If order might matter, test or randomize the blocks.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'c4',
      type: 'mcq',
      q: 'The Pew “jobs” experiment moved results by 12 points by adding one word. What does that teach?',
      options: [
        'Respondents react to the exact wording, so wording must be chosen and reported with care',
        'Surveys cannot measure anything',
        'Larger samples remove the effect of wording',
        'Only open questions are reliable',
      ],
      answer: 0,
      explanation: 'Wording changes the result. Random assignment to each version shows that the difference came from the word, not from different people.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'c5',
      type: 'mcq',
      q: 'Which measurement level has a true zero that means “none of the variable”?',
      options: ['Ratio', 'Nominal', 'Ordinal', 'Interval'],
      answer: 0,
      explanation: 'Ratio scales have a true zero, so ratios and comparisons are meaningful. Interval scales do not.',
      review: { section: 'plain', slide: 11 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A league wants to survey fans about renewing season tickets. Describe the structure of the questionnaire from introduction to closing, and explain where screening and sensitive questions go and why.',
      answer: [
        'Start with an introduction and consent: purpose, voluntary participation, confidentiality, estimated time and simple instructions.',
        'Screening comes next, before the main blocks, to check eligibility (for example attended at least one home match) and filter out people who do not qualify.',
        'Then easy warm-up questions, followed by the core measures grouped by topic and moving from general to specific, using validated scales.',
        'Sensitive questions, such as household income, come later, only if necessary, because trust and rapport have been built. Classification questions such as age and years as a supporter follow.',
        'Close with an optional comment box, a thank-you, a confidentiality reminder and submission instructions.',
      ],
      marking: [
        'Introduction and consent with at least two correct contents (2)',
        'Screening placed early and its purpose explained (2)',
        'Warm-up then core measures in a general-to-specific order (2)',
        'Sensitive questions placed later with the reason (2)',
        'Classification and closing placed correctly (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Identify the problem in each question and rewrite it: (a) “How wonderful was our fantastic new stand?” (b) “Do you regularly watch our matches?” (c) “What do you usually order at the club bar?” (d) “How satisfied are you with the app and the website?”',
      answer: [
        '(a) Leading: the words “wonderful” and “fantastic” suggest the answer. Rewrite: “How would you rate the new stand?”',
        '(b) Vague: “regularly” has no defined meaning or time frame. Rewrite: “How many of our matches did you watch in the past 12 months?”',
        '(c) Presupposition: assumes the person has ordered at the bar. Rewrite: first ask “Have you ordered at the club bar this season?” and only if yes ask what they ordered.',
        '(d) Double-barrelled: two things in one question, and the answers could differ. Rewrite as two questions, one on the app and one on the website.',
      ],
      marking: [
        'Identifies (a) as leading and rewrites neutrally (2)',
        'Identifies (b) as vague and gives a defined time frame (2)',
        'Identifies (c) as a presupposition and adds a filter question (2)',
        'Identifies (d) as double-barrelled and splits it (2)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'A club asks: (1) Which stand do you sit in? (2) Rank four services from 1 to 4. (3) The atmosphere was welcoming (1 to 7, strongly disagree to strongly agree). (4) How many home matches did you attend? State the level of measurement of each, and name the independent and dependent variable in the research question “Does a better atmosphere rating increase intention to renew?”',
      answer: [
        '(1) Nominal: the stands are labels with no order or quantity.',
        '(2) Ordinal: the ranks show order but not the size of the differences.',
        '(3) A Likert item: a single item is ordinal, though attitude scales are often treated as interval once several items are combined.',
        '(4) Ratio: it has a true zero and ratios make sense.',
        'Independent variable: atmosphere rating. Dependent variable: intention to renew.',
      ],
      marking: [
        'Nominal for the stand question (1)',
        'Ordinal for the ranking (1)',
        'Likert item identified as ordinal as a single item, or interval in practice, with a reason (2)',
        'Ratio for the count of matches (1)',
        'Correct independent variable (1)',
        'Correct dependent variable (1)',
        'Names at least one sensible control variable (1)',
      ],
    },
  ],

  videos: [],
};
