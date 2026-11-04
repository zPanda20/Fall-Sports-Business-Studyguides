// International Sports Governance, Session 2 (plus the stakeholder slides from Session 5):
// systemic governance, who the stakeholders are, and what each is responsible for.
// Built from the class slides as written up in the course transcript. Dates and figures from the slides
// are marked as such. Real examples: the creation of the Court of Arbitration for Sport and the IOC's esports Games.

export const systemicGovernanceStakeholdersTopic = {
  id: 'systemic-governance-stakeholders',
  course: 'sport-governance',
  title: 'Systemic governance: stakeholders, roles and responsibilities',
  sessions: 'Session 2',
  reading: 'Session 2 slides (stakeholders), Session 5 slides (Paralympics and esports)',
  minutes: 30,
  summary:
    'Who the main players in international sport are (IOC, national Olympic committees, federations, organizing committees, WADA, CAS, the Paralympic Movement and esports) and what each does.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Systemic governance: the map of players',
      blocks: [
        { type: 'big', text: '**Systemic governance** looks at the **whole network** of organizations in a sport and asks who has which role and how they depend on each other.' },
        {
          type: 'figure',
          src: 'gov-stakeholders-map.png',
          alt: 'Diagram of the Olympic Movement: the IOC at the center, with national Olympic committees, international federations, organizing committees, WADA and CAS around it.',
          caption: 'The stakeholder map from the Session 2 slides, drawn in your own words.',
          need: 'A simple stakeholder diagram of the Olympic Movement (IOC, NOCs, IFs, NFs, OCOGs, athletes, WADA, CAS). Draw your own or use the class slide as a reference only; do not paste the lecturer’s slide.',
        },
        {
          type: 'p',
          text: 'There is no single boss. The IOC, the federations and the national committees each hold some power, and they all need each other. That is why the Session 1 point about negotiation matters.',
        },
      ],
    },
    {
      kicker: 'The anchor document',
      title: 'The Olympic Charter and the IOC',
      blocks: [
        {
          type: 'p',
          text: 'The **Olympic Charter** is the rulebook of the Olympic Movement. It sets out the Fundamental Principles of Olympism and the roles of the IOC, national Olympic committees and international federations.',
        },
        {
          type: 'callout',
          title: 'Do this yourself',
          text: 'The Session 1 and 2 exercises tell you to check claims against the Fundamental Principles of Olympism, especially principles 4, 5 and 6, and Rule 2. Read those pages of the Charter so you can quote them accurately. AI tools often paraphrase them wrongly.',
        },
      ],
    },
    {
      kicker: 'The main players',
      title: 'Who does what',
      blocks: [
        {
          type: 'table',
          head: ['Stakeholder', 'Role in one line'],
          rows: [
            ['IOC', 'Leads the Olympic Movement and owns the Games.'],
            ['National Olympic committees (NOCs)', 'Represent the Movement in a country. They support national federations, athlete training and coaches, and raise money through sponsorship and other income.'],
            ['International federations (IFs)', 'International non-governmental bodies recognized by the IOC to run one or more sports worldwide. National federations are affiliated to them.'],
            ['National federations', 'Run a sport inside a country. Size varies widely, from a few staff and volunteers to large organizations.'],
            ['Organizing committee (OCOG)', 'Delivers one edition of the Games in a host city or country.'],
            ['WADA', 'Sets the world anti-doping rules.'],
            ['CAS', 'Settles sports disputes.'],
          ],
        },
      ],
    },
    {
      kicker: 'A closer look',
      title: 'International federations act like small states',
      blocks: [
        {
          type: 'bullets',
          items: [
            'An IF that wants IOC recognition must make sure its statutes, practice and activities **conform with the Olympic Charter**, while keeping independence in running its sport.',
            'The slides stress that an IF writes the rules of its sport, and that this power is exercised **without oversight or control by a supervisory authority or by governments**.',
            'National federations are often small. In a small country or minor sport, one or two staff and some volunteers may run everything.',
            'Private leagues add a twist: in basketball, the NBA is a private league while USA Basketball is the national federation. They are different bodies with different roles.',
          ],
        },
      ],
    },
    {
      kicker: 'Delivering the event',
      title: 'The organizing committee (OCOG)',
      blocks: [
        {
          type: 'p',
          text: 'An OCOG is set up for each Games. The slides list what it handles:',
        },
        {
          type: 'columns',
          items: [
            { title: 'Money and rights', text: 'Domestic sponsorship, ticketing, licensing and merchandising, trademarks and rights protection.' },
            { title: 'Running the Games', text: 'Program of the Games, security, accreditation, visas and entry, broadcast and media coverage, sustainability.' },
            { title: 'Integrity and legal', text: 'Betting and prevention of manipulation, tax exemption, and no conflicting event.' },
          ],
        },
        { type: 'p', text: 'The IOC owns the rights to the Games. The OCOG works within a host city contract and a Joint Marketing Programme Agreement.' },
      ],
    },
    {
      kicker: 'Policing doping',
      title: 'WADA: global anti-doping',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Created after the Festina doping affair of 1998 (the year given on the slides).',
            'Funded jointly by the sports movement and governments. Its board and 16-member executive committee each have equal numbers from the sports movement and from governments.',
            'Tasks: write and harmonize the **WADA Code**, fund scientific research, run education and help national anti-doping bodies build capacity.',
            '**Criticisms in the slides:** limited independence from the IOC, not enough athlete representation and a weak separation of powers. A governance review in 2022 led to some reforms, but the criticisms remain.',
          ],
        },
      ],
    },
    {
      kicker: 'Settling disputes',
      title: 'CAS and the independence problem',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1984', text: 'CAS statutes come into force. The IOC pays for it and controls its rules.' },
            { title: '1993', text: 'The Swiss Federal Tribunal points to the many links between CAS and the IOC.' },
            { title: '1994', text: 'Reform: a new council (ICAS) runs and funds CAS, which splits into two divisions.' },
            { title: '2003', text: 'CAS becomes the appeals body for international doping disputes.' },
          ],
        },
        {
          type: 'p',
          text: 'CAS shows a pattern you will meet again: a body created inside the movement had to be separated from its founder to be believed.',
        },
      ],
    },
    {
      kicker: 'Two more stakeholders (Session 5 slides)',
      title: 'The Paralympic Movement',
      blocks: [
        {
          type: 'bullets',
          items: [
            'The **International Paralympic Committee (IPC)** is a separate organization based in Bonn, Germany. It is recognized by the IOC and is part of the Olympic Movement.',
            'An IOC and IPC partnership agreement means that from 2018 until 2032 the Paralympic Games take place under the **same host city agreement**, and the same organizing committees run both Games.',
            '**Classification** (grouping athletes by impairment so competition is fair) is a governance feature specific to Paralympic sport.',
            'In swimming, the Olympic side is run by World Aquatics, while the IPC itself organizes para swimming at the Paralympics.',
          ],
        },
      ],
    },
    {
      kicker: 'Two more stakeholders (Session 5 slides)',
      title: 'Esports and the Olympic Movement',
      blocks: [
        {
          type: 'p',
          text: 'Esports has no single world federation. The slides name several competing bodies, such as the Global Esports Federation (103 member federations to date, founded 2019) and the International Esports Federation (129 member nations, founded 2008, a signatory of the WADA Code). The IOC has not recognized a separate esports entity and relies on existing federations.',
        },
        {
          type: 'flow',
          items: [
            { title: 'June 2023', text: 'The IOC runs a virtual and simulated sports competition in Singapore, with federations and game publishers.' },
            { title: 'February 2025', text: 'The first Olympic Esports Games are postponed to 2027.' },
            { title: 'October 2025', text: 'The IOC ends its 12-year agreement with Saudi Arabia.' },
          ],
        },
        { type: 'p', text: 'The class question: what governance issues arise when a sport is owned by a company (the game publisher) rather than by a federation?' },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Stakeholder', def: 'Anyone who affects or is affected by a sport’s decisions: athletes, federations, sponsors, fans, governments.' },
    { term: 'Olympic Charter', def: 'The rulebook of the Olympic Movement, including the Fundamental Principles of Olympism.' },
    { term: 'IOC', def: 'International Olympic Committee. Leads the Olympic Movement and owns the Games.' },
    { term: 'NOC', def: 'National Olympic committee. Represents the Olympic Movement in one country.' },
    { term: 'IF', def: 'International federation. A non-governmental body recognized by the IOC to run one or more sports worldwide.' },
    { term: 'NF / NSF', def: 'National (sports) federation. Runs a sport in one country and is affiliated to its IF.' },
    { term: 'OCOG', def: 'Organizing committee for the Olympic Games. Delivers one edition of the Games.' },
    { term: 'WADA', def: 'World Anti-Doping Agency. Writes the World Anti-Doping Code and coordinates anti-doping worldwide.' },
    { term: 'CAS', def: 'Court of Arbitration for Sport. Settles sports disputes quickly and at lower cost than ordinary courts.' },
    { term: 'ICAS', def: 'International Council of Arbitration for Sport. Created in 1994 to run and fund CAS instead of the IOC.' },
    { term: 'IPC', def: 'International Paralympic Committee. The governing body of the Paralympic Movement, based in Bonn.' },
    { term: 'Classification', def: 'The system that groups Paralympic athletes by how their impairment affects the sport, so competition is fair.' },
  ],
  cards: [
    { front: 'What is systemic governance?', back: 'The level that studies the whole network of stakeholders and how they share power.' },
    { front: 'Who must an IF conform to if it wants IOC recognition?', back: 'The Olympic Charter, while keeping independence in running its sport.' },
    { front: 'Why was ICAS created?', back: 'To run and fund CAS instead of the IOC, after the Swiss Federal Tribunal pointed to the many links between CAS and the IOC.' },
    { front: 'How is WADA’s board made up?', back: 'Equal numbers of representatives from the sports movement and from governments.' },
    { front: 'IPC and the IOC: what was agreed?', back: 'From 2018 to 2032 the Paralympic Games run under the same host city agreement as the Olympic Games.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The Court of Arbitration for Sport: from IOC project to independent court',
    note: 'How one stakeholder was redesigned to earn trust, plus a current case of governance under strain: the Olympic Esports Games. Facts as of November 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Making CAS independent',
        blocks: [
          {
            type: 'bullets',
            items: [
              'IOC President Juan Antonio Samaranch proposed a sports-specific jurisdiction shortly after his election in 1981. A working group chaired by Judge Kéba Mbaye drafted the statutes, which the IOC ratified in 1983. They took effect on 30 June 1984.',
              'In the first ten years the IOC handled CAS’s governance, operating costs and statutes.',
              'In March 1993 the Swiss Federal Tribunal ruled on a case brought by a horse rider (the Gundel case). It accepted CAS’s awards as enforceable, finding it had enough autonomy from the federation involved, but it also noted that CAS’s link with the IOC “could be called into question”.',
              'A reform followed. The International Council of Arbitration for Sport (ICAS) replaced the IOC as CAS’s governing body, and CAS was split into an Ordinary Arbitration Division and an Appeals Arbitration Division. The Paris Agreement was approved on 22 June 1994.',
            ],
          },
          {
            type: 'callout',
            title: 'Lesson for stakeholder analysis',
            text: 'A dispute body funded and rewritten by the body it may judge will struggle to look independent, even if its judges are fair. Structure matters as well as people.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'A stakeholder with no clear home: the Olympic Esports Games',
        blocks: [
          {
            type: 'bullets',
            items: [
              'In October 2025 the IOC and Saudi Arabia ended their 12-year agreement to host the Olympic Esports Games in Riyadh. The IOC said both sides “mutually agreed” to end the cooperation and gave no further reason.',
              'The IOC said it would develop a new approach and look for a different partnership model, aiming to hold the first Games as soon as possible.',
              'Governance questions this raises: who owns the competition, who regulates the games (which are owned by publishers), and what the partner expects in return.',
            ],
          },
          {
            type: 'p',
            text: 'Different outlets linked the end of the agreement to other events. The IOC itself gave no such reason, so treat links as commentary, not fact.',
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
                title: 'History of the CAS',
                url: 'https://www.tas-cas.org/en/general-information/history',
                note: 'Court of Arbitration for Sport. The 1981 to 1984 creation, the 1993 Swiss Federal Tribunal decision, and the 1994 reform and Paris Agreement. Read in November 2026.',
              },
              {
                title: 'IOC and Saudi Arabia cancel their 12-year deal to host video gaming Esports Olympics in Riyadh',
                url: 'https://wtop.com/sports/2025/10/ioc-and-saudi-arabia-cancel-their-12-year-deal-to-host-video-gaming-esports-olympics-in-riyadh',
                note: 'Associated Press, via WTOP, October 2025. The cancellation and the IOC’s stated next steps. The page does not show a calendar date.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Mapping the stakeholders of the Northern Cup',
    universe: 'northern',
    slides: [
      {
        kicker: 'The map',
        title: 'Who is in the network?',
        blocks: [
          {
            type: 'table',
            head: ['Stakeholder', 'What it wants', 'What it can do'],
            rows: [
              ['NCF (federation)', 'A successful Northern Cup and steady income', 'Writes the rules and picks the host'],
              ['National associations (150)', 'Funding and a fair chance to qualify', 'Vote at the Congress'],
              ['Players’ association', 'Fewer matches and a share of revenue', 'Can threaten to boycott'],
              ['Broadcaster', 'Big audiences', 'Pays the largest check'],
              ['Host government', 'Prestige and tourism', 'Controls visas, tax and security'],
              ['Anti-doping body', 'Clean sport', 'Tests athletes and reports to the NCF'],
            ],
          },
        ],
      },
      {
        kicker: 'A dispute court',
        title: 'The Northern Sports Tribunal',
        blocks: [
          {
            type: 'p',
            text: 'The NCF created a tribunal to settle disputes about eligibility and selection. At first the NCF pays all its costs, and the NCF Council appoints every judge and can change the tribunal’s rules.',
          },
          {
            type: 'bullets',
            items: [
              'Red flag: the body being judged pays and appoints the judges.',
              'Fix in the style of the 1994 CAS reform: create a separate council with members from outside the NCF to run and fund the tribunal, and fix judges’ terms.',
              'A test: could a player who loses a case believe the tribunal is independent?',
            ],
          },
        ],
      },
      {
        kicker: 'A negotiation',
        title: 'Why the players’ association matters',
        blocks: [
          {
            type: 'p',
            text: 'The NCF wants to add 10 matches to the Northern Cup calendar. The players’ association objects. The NCF cannot simply order the change. It must trade, for example a higher player revenue share or longer rest periods, for agreement.',
          },
          {
            type: 'p',
            text: 'This is the Session 1 point in practice: in a network, governing bodies win outcomes by negotiating.',
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
      q: 'What is an international federation (IF)?',
      options: [
        'A non-governmental body recognized by the IOC to administer one or more sports worldwide',
        'A department of the United Nations that runs sport',
        'The organizing committee of a single Olympic Games',
        'A court that settles sport disputes',
      ],
      answer: 0,
      explanation: 'IFs are international non-governmental organizations. National federations are affiliated to them. OCOGs and CAS are different stakeholders.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What must an IF do if it wants to keep IOC recognition?',
      options: [
        'Make sure its statutes, practice and activities conform with the Olympic Charter',
        'Hand control of its rules to the IOC',
        'Merge with its national federations',
        'Stop organizing its own championships',
      ],
      answer: 0,
      explanation: 'IFs keep independence in running their sport, but their statutes, practice and activities must conform with the Olympic Charter.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which statement about WADA’s board is correct, according to the slides?',
      options: [
        'It has equal numbers of representatives from the sports movement and from governments',
        'It is made up only of IOC members',
        'It is made up only of athletes',
        'It has no government members',
      ],
      answer: 0,
      explanation: 'WADA is jointly funded and its board and 16-member executive committee are composed equally of the sports movement and governments. Critics still question its independence from the IOC.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Why was the International Council of Arbitration for Sport (ICAS) created in 1994?',
      options: [
        'To run and fund CAS in place of the IOC, protecting its independence',
        'To replace the Olympic Charter',
        'To organize the Paralympic Games',
        'To collect fines from athletes',
      ],
      answer: 0,
      explanation: 'The Swiss Federal Tribunal had pointed to the many links between CAS and the IOC. ICAS took over CAS’s governance and financing.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'At the Northern Cup Federation, the NCF pays all the tribunal’s costs and its Council appoints every judge. What is the main governance concern?',
      options: [
        'The tribunal may not look independent from the body it judges',
        'The tribunal is too fast',
        'The tribunal has too many judges',
        'The tribunal’s rulings are too cheap',
      ],
      answer: 0,
      explanation: 'The same issue led to the 1994 CAS reform. When the judged body controls funding and appointments, the court’s independence is doubted.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which of these best describes the IPC’s position in international sport?',
      options: [
        'A separate organization, based in Bonn, that is recognized by the IOC and part of the Olympic Movement',
        'A department inside the IOC with no separate board',
        'A national federation for athletes with disabilities in Germany',
        'A company that owns the Paralympic Games rights',
      ],
      answer: 0,
      explanation: 'The IPC is a separate organization recognized by the IOC. A partnership agreement links the Games under the same host city agreement from 2018 to 2032.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise (systemic level). Choose one case from this session (CAS, WADA, the IPC or esports). (a) Observation: list its main stakeholders. (b) Integration: say how power is shared or concentrated among them. (c) Critique: name one weakness of the current set-up.',
      answer: [
        '**(a) Observation.** Example for CAS: the IOC, ICAS, international federations, athletes, national anti-doping bodies.',
        '**(b) Integration.** Since 1994 ICAS runs and funds CAS, so power over CAS is spread beyond the IOC. But the sports bodies that sit on ICAS are also frequent parties in CAS cases.',
        '**(c) Critique.** Independence from the IOC is better, but athletes have limited input in choosing arbitrators, and sports bodies can still be both funders and litigants.',
        'Strong answers name stakeholders precisely, use the word “independence” or “separation of powers” with evidence, and keep fact and opinion apart.',
      ],
      review: { section: 'plain', slide: 6 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Describe the roles of the IOC, international federations and national federations in the Olympic Movement, and explain why decision-making in this system depends on negotiation.',
      answer: [
        'The IOC leads the Olympic Movement and owns the Games. International federations are non-governmental bodies recognized by the IOC to run one or more sports worldwide, and they must conform with the Olympic Charter while keeping independence in running their sport. National federations run the sport inside a country and are affiliated to their IF.',
        'No single body controls all the others. Federations write their own rules, national bodies run domestic sport and the IOC controls the Games and recognition.',
        'Because power is spread across the network, big changes need agreement between parties. Governing bodies mainly control their sport through negotiated outcomes, so negotiation and mutual adjustment are key skills.',
      ],
      marking: [
        '3 marks: correct, distinct roles for the three stakeholders.',
        '2 marks: the recognition link (conformity with the Charter) and IF autonomy.',
        '3 marks: a clear argument that shared power makes negotiation necessary, with an example.',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Use the example of the Court of Arbitration for Sport to explain why the independence of a dispute-settling body matters, and how the 1994 reform tried to protect it.',
      answer: [
        'A dispute body is only useful if the parties believe its decisions are not shaped by the interests of one side. In the first ten years the IOC handled CAS’s governance, paid its costs and controlled its statutes.',
        'In 1993 the Swiss Federal Tribunal accepted CAS’s awards but pointed out the links with the IOC, which could call its independence into question.',
        'In 1994 the International Council of Arbitration for Sport replaced the IOC as CAS’s governing body, the court was divided into ordinary and appeals divisions, and a procedural code was adopted. These steps separated funding and governance from the IOC.',
        'A remaining limit is that sports bodies still fund much of the system and are often parties before it.',
      ],
      marking: [
        '2 marks: why independence matters for trust and for enforcement.',
        '3 marks: the original links with the IOC and the 1993 decision.',
        '2 marks: the 1994 changes.',
        '1 mark: a limit or remaining concern.',
      ],
    },
  ],

  videos: [],
};
