// Business Strategy: final-exam practice questions, written the way an exam asks them.
// The instructor said the final exam is 2 hours, all multiple choice, and that some questions have more than one
// correct answer and will say so, asking you to choose ALL correct answers.
//
// Style rules for this file:
//  - Questions never mention lectures, sessions or slides. An exam asks about the concept, usually through a short scenario.
//  - Each item lists the `right` options and the `wrong` options. The builder at the bottom places them so the correct
//    answer is spread evenly across positions A to D. The exam page then mixes the options again on every attempt.
//  - How partial answers are scored in the real exam has not been announced, so practice marking is all-or-nothing.
//
// `review` points at a slide in the named topic's plain-words section (shown only after you mark your answers).

const SELECT_ALL = 'Choose ALL correct answers.';

const items = [
  // ================================================================ what is strategy
  {
    id: 'w1', topic: 'what-is-strategy', review: { section: 'plain', slide: 4 },
    q: 'Customers would pay at most $120 for Firm X’s product, which costs $70 to make. Customers would pay at most $100 for Firm Y’s product, which costs $45 to make. Which statement is correct?',
    right: ['Firm Y has a competitive advantage, because it creates $55 of value against $50'],
    wrong: ['Firm X has a competitive advantage, because customers pay more for its product', 'Firm X has a competitive advantage, because it creates $120 of value', 'The two firms are at competitive parity, because both are profitable'],
    explanation: 'Value created is willingness to pay minus cost. Firm X creates 120 − 70 = $50. Firm Y creates 100 − 45 = $55. Y has the larger gap, so Y has the advantage.',
  },
  {
    id: 'w2', topic: 'what-is-strategy', review: { section: 'plain', slide: 3 },
    q: 'A listed club’s share price rose 20% this year and it paid a dividend. Which measure of competitive advantage does this describe?',
    right: ['Shareholder value'],
    wrong: ['Accounting performance', 'Economic value', 'Willingness to sell'],
    explanation: 'Shareholder value is the return on investors’ risk capital: stock price appreciation plus dividends. Accounting performance uses ratios such as ROIC and ROE. Economic value is willingness to pay minus cost.',
  },
  {
    id: 'w3', topic: 'what-is-strategy', review: { section: 'plain', slide: 3 },
    q: 'An analyst judges a firm’s advantage using only its financial statements from last year. Which limitation applies to this approach?',
    right: ['Accounting data are historical and can miss off-balance-sheet items such as pension obligations'],
    wrong: ['Accounting data cannot be compared with rivals’ data', 'Accounting data ignore profit', 'Accounting data show only what will happen in the future'],
    explanation: 'Accounting data look backwards (“driving by looking in the rear-view mirror”) and do not capture off-balance-sheet items such as pension obligations or operating leases.',
  },
  {
    id: 'w4', topic: 'what-is-strategy', review: { section: 'plain', slide: 2 },
    q: 'A firm earns about the same economic value as the other firms in its industry. Which term describes its position?',
    right: ['Competitive parity'],
    wrong: ['Temporary competitive advantage', 'Sustained competitive advantage', 'Competitive disadvantage'],
    explanation: 'Parity means the same economic value as rivals. Advantage means more, and disadvantage means less. Advantage and parity can each be temporary or sustained.',
  },
  {
    id: 'w5', topic: 'what-is-strategy', review: { section: 'plain', slide: 5 },
    q: 'A budget airline sells a seat on the same route as rivals for a lower fare, and it can do so profitably because its costs per passenger are lower. Which generic strategy is this?',
    right: ['Cost leadership'],
    wrong: ['Differentiation', 'Stakeholder strategy', 'Scenario planning'],
    explanation: 'Similar value at lower cost, passed on as a lower price, is cost leadership. Differentiation offers more value so that buyers pay more.',
  },
  {
    id: 'w6', topic: 'what-is-strategy', review: { section: 'plain', slide: 7 },
    q: 'A city government can force a stadium operator to close, its claim is backed by law, and it needs an answer this week. How should the operator treat it under stakeholder impact analysis?',
    right: ['As the highest priority, because it has power, legitimacy and urgency'],
    wrong: ['As a low priority, because it is not a shareholder', 'As a medium priority, because only its legitimacy is clear', 'As irrelevant, because governments cannot affect strategy'],
    explanation: 'Stakeholders are scored on power, legitimacy and urgency. One with all three needs the most attention, whether or not it owns shares.',
  },
  {
    id: 'w7', topic: 'what-is-strategy', review: { section: 'plain', slide: 6 },
    q: 'Which of the following are internal stakeholders of a football club? ' + SELECT_ALL,
    right: ['Board members', 'Employees', 'Stockholders'],
    wrong: ['Suppliers', 'Local government', 'The media'],
    explanation: 'Internal stakeholders are stockholders, employees and board members. Suppliers, governments and the media are external.',
  },
  {
    id: 'w8', topic: 'what-is-strategy', review: { section: 'plain', slide: 2 },
    q: 'Which statements about competitive advantage are correct? ' + SELECT_ALL,
    right: ['It is always judged relative to rivals', 'It can be temporary or sustained', 'A firm can build it by raising willingness to pay or by lowering cost'],
    wrong: ['Any profitable firm has one', 'It can be judged without comparing the firm with anyone'],
    explanation: 'Advantage is relative: performing better than rivals or the industry average. A profitable firm in a very profitable industry may still be only at parity.',
  },
  {
    id: 'w9', topic: 'what-is-strategy', review: { section: 'plain', slide: 6 },
    q: 'Which of the following are benefits a firm can gain from a stakeholder strategy? ' + SELECT_ALL,
    right: ['Trust that lowers transaction costs', 'Cooperative stakeholders who share useful information', 'A better reputation'],
    wrong: ['A guaranteed rise in the share price', 'No need to analyze the industry'],
    explanation: 'Managing stakeholders together builds trust, shares information, steadies returns and improves reputation. It guarantees nothing and does not replace other analysis.',
  },
  {
    id: 'w10', topic: 'what-is-strategy', review: { section: 'plain', slide: 1 },
    q: 'A manager says: “We have a brilliant idea, so we already have a strategy.” Which responses are correct? ' + SELECT_ALL,
    right: ['A strategy also needs implementation: coherent actions that carry it out', 'The aim of a strategy is better performance than rivals', 'The idea should follow an analysis of the environment and the firm'],
    wrong: ['Analysis is optional if the idea is good', 'A good idea guarantees an advantage'],
    explanation: 'Strategy has three parts: analysis, formulation and implementation. An idea alone covers at most the middle one.',
  },

  // ================================================================ strategic leadership
  {
    id: 'l1', topic: 'strategic-leadership', review: { section: 'plain', slide: 2 },
    q: 'A sports group’s statement reads: “Through sport we have the power to change lives.” Which part of its direction does this best describe?',
    right: ['Its vision'],
    wrong: ['Its mission', 'Its values', 'Its functional strategy'],
    explanation: 'A vision captures aspiration and long-term objectives: where the organization wants to end up. The mission describes what it does to get there, and values set the ethical standards.',
  },
  {
    id: 'l2', topic: 'strategic-leadership', review: { section: 'plain', slide: 1 },
    q: 'The CEO of a sports group decides which leagues it will enter and which businesses it will own (a club, an arena and a media arm). Which level of strategy is this?',
    right: ['Corporate strategy'],
    wrong: ['Business strategy', 'Functional strategy', 'Operational tactics'],
    explanation: 'Corporate strategy asks where to compete. Business strategy asks how to compete in one market, and functional strategy asks how to carry the strategy out.',
  },
  {
    id: 'l3', topic: 'strategic-leadership', review: { section: 'plain', slide: 8 },
    q: 'A team keeps funding a failing fan app despite weak data, saying “we have already spent too much to stop now.” Which bias is this?',
    right: ['Escalating commitment'],
    wrong: ['Confirmation bias', 'Groupthink', 'Representativeness'],
    explanation: 'Escalating commitment is backing a project even as signs of failure appear. Confirmation bias is seeking only information that supports a belief.',
  },
  {
    id: 'l4', topic: 'strategic-leadership', review: { section: 'plain', slide: 8 },
    q: 'A leadership team reads only the reports that support its plan to enter a new market and dismisses the rest. Which bias is at work?',
    right: ['Confirmation bias'],
    wrong: ['Illusion of control', 'Reasoning by analogy', 'Escalating commitment'],
    explanation: 'Looking for information that supports what we already believe is confirmation bias.',
  },
  {
    id: 'l5', topic: 'strategic-leadership', review: { section: 'plain', slide: 4 },
    q: 'Which approach to strategy formulation fits best when the future is highly uncertain?',
    right: ['Scenario planning'],
    wrong: ['Strategic planning', 'Analysis of last year’s margins', 'Copying the market leader'],
    explanation: 'Strategic planning suits stable, predictable environments. Scenario planning prepares a strategy for several possible futures.',
  },
  {
    id: 'l6', topic: 'strategic-leadership', review: { section: 'plain', slide: 6 },
    q: 'A research chemist fails to make a strong adhesive, but a colleague sees a use for the weak one, and it becomes a successful product. Which element of planned emergence does this show?',
    right: ['Serendipity'],
    wrong: ['Strategic planning', 'Dialectic inquiry', 'System 2 thinking'],
    explanation: 'Serendipity is surprises and coincidences. Post-it Notes are the classic example. Management then backs what works through the resource allocation process.',
  },
  {
    id: 'l7', topic: 'strategic-leadership', review: { section: 'plain', slide: 9 },
    q: 'A CEO wants to reduce groupthink before approving a large acquisition. Which actions would help? ' + SELECT_ALL,
    right: ['Assign someone to argue against the proposal (devil’s advocacy)', 'Have two groups build opposing proposals and debate them (dialectic inquiry)', 'Seek input from people at different levels and functions'],
    wrong: ['Ask the team to confirm the plan quickly', 'Limit discussion so the decision is faster'],
    explanation: 'Devil’s advocacy and dialectic inquiry force a leader’s assumptions to be tested. The other options let opinions gather around the leader unchallenged.',
  },
  {
    id: 'l8', topic: 'strategic-leadership', review: { section: 'plain', slide: 7 },
    q: 'Which statements about System 1 and System 2 thinking are correct? ' + SELECT_ALL,
    right: ['System 1 is automatic and low effort, and is prone to biases', 'System 2 is deliberate and analytical, and takes more energy'],
    wrong: ['System 2 is faster and needs less energy than System 1', 'System 1 is slow and carefully reasoned'],
    explanation: 'System 1 is the default: familiar, automatic and efficient, but biased. System 2 is slower and more logical.',
  },
  {
    id: 'l9', topic: 'strategic-leadership', review: { section: 'plain', slide: 5 },
    q: 'Which of the following describe good scenario planning? ' + SELECT_ALL,
    right: ['Preparing for both optimistic and pessimistic futures', 'Attaching probabilities to the possible future states', 'Asking which resources and capabilities are needed to compete in each future'],
    wrong: ['Producing one forecast and defending it', 'Avoiding “what if” questions to save time'],
    explanation: 'Scenario planning asks “what if?”, considers several futures, attaches probabilities and asks what is needed in each.',
  },
  {
    id: 'l10', topic: 'strategic-leadership', review: { section: 'plain', slide: 3 },
    q: 'Which statements about vision, mission and values are correct? ' + SELECT_ALL,
    right: ['A vision captures aspiration and long-term objectives', 'A mission describes what the organization does and the markets it competes in', 'Values are ethical standards that guide behavior and keep strategy stable', 'Vision statements that focus on solving the customer’s problem tend to help the firm adapt'],
    wrong: ['A mission is a statement of values only', 'A product-oriented vision adapts best when the environment changes'],
    explanation: 'Customer-oriented visions focus on the customer’s problem and let a firm adapt as the environment changes. Product-oriented visions focus on improving existing products.',
  },

  // ================================================================ PESTEL
  {
    id: 'p1', topic: 'pestel', review: { section: 'plain', slide: 2 },
    q: 'A new law requires fan apps to get explicit consent before collecting personal data. Which PESTEL segment does this fall under?',
    right: ['Legal'],
    wrong: ['Political', 'Economic', 'Sociocultural'],
    explanation: 'Laws, mandates, regulations and court decisions are legal factors. Political is the pressure (lobbying, campaigns) that often leads to such laws.',
  },
  {
    id: 'p2', topic: 'pestel', review: { section: 'plain', slide: 3 },
    q: 'A central bank raises interest rates, which makes it more expensive for a club to borrow for a new stadium. Which PESTEL segment is this?',
    right: ['Economic'],
    wrong: ['Political', 'Legal', 'Technological'],
    explanation: 'Interest rates, growth, employment, price stability and exchange rates are economic factors.',
  },
  {
    id: 'p3', topic: 'pestel', review: { section: 'plain', slide: 3 },
    q: 'Younger fans increasingly prefer short video clips to watching a full match. Which PESTEL segment does this trend belong to?',
    right: ['Sociocultural'],
    wrong: ['Technological', 'Economic', 'Ecological'],
    explanation: 'Changing norms, values and demographic patterns are sociocultural. The platforms that carry the clips would be technological.',
  },
  {
    id: 'p4', topic: 'pestel', review: { section: 'plain', slide: 0 },
    q: 'Which statement correctly describes how PESTEL differs from Porter’s Five Forces?',
    right: ['PESTEL scans the general environment, while Five Forces analyzes the structure of one industry'],
    wrong: ['PESTEL analyzes one industry, while Five Forces scans the general environment', 'PESTEL looks inside the firm, while Five Forces looks outside it', 'Both analyze only the firm’s own resources'],
    explanation: 'PESTEL covers the general environment, where leaders have little control. Five Forces covers the task environment: the structure of the industry.',
  },
  {
    id: 'p5', topic: 'pestel', review: { section: 'plain', slide: 6 },
    q: 'Rising energy prices hurt one airline badly, while a rail operator gains customers. What does this show about PESTEL analysis?',
    right: ['The same trend can be an opportunity for one firm and a threat for another'],
    wrong: ['Economic factors never matter to transport firms', 'A trend is always a threat to every firm', 'PESTEL should be done for the whole economy, not for one firm'],
    explanation: 'PESTEL lists trends and then judges what each means for this firm: opportunity or threat, and how large.',
  },
  {
    id: 'p6', topic: 'pestel', review: { section: 'plain', slide: 8 },
    q: 'An online retailer’s model relied on a rule that let small parcels enter a market duty-free. The government ends the rule. Which PESTEL segment is the change, and what does it become for the retailer?',
    right: ['Legal, and a threat'],
    wrong: ['Legal, and an opportunity', 'Sociocultural, and a threat', 'Technological, and an opportunity'],
    explanation: 'A rule change is a legal factor. For a firm that benefited from the old rule it becomes a threat.',
  },
  {
    id: 'p7', topic: 'pestel', review: { section: 'plain', slide: 4 },
    q: 'Which of the following belong in the technological segment? ' + SELECT_ALL,
    right: ['Artificial intelligence used in production processes', 'Wearable devices as new products', 'Blockchain used to track payments'],
    wrong: ['An ageing population', 'A new court ruling on broadcasting'],
    explanation: 'Technological factors are innovations in processes and products. An ageing population is sociocultural and a court ruling is legal.',
  },
  {
    id: 'p8', topic: 'pestel', review: { section: 'plain', slide: 6 },
    q: 'A student’s PESTEL has long lists of facts. Which of the following would improve it? ' + SELECT_ALL,
    right: ['Say what each trend means for this firm', 'Decide whether each trend is an opportunity or a threat', 'Keep the few trends that matter most and say what to do about them'],
    wrong: ['Add the same factor under two segments to look thorough', 'Remove all judgment and keep only facts'],
    explanation: 'A good PESTEL moves from a list to a judgment: list, judge and pick. Filing a factor twice and avoiding judgment are common mistakes.',
  },
  {
    id: 'p9', topic: 'pestel', review: { section: 'plain', slide: 2 },
    q: 'Protesters and lobbyists campaign for a higher minimum wage, and parliament then passes it. Which statements are correct? ' + SELECT_ALL,
    right: ['The campaigning is political pressure', 'The resulting law is a legal factor'],
    wrong: ['The whole episode is purely ecological', 'Political and legal factors are never connected'],
    explanation: 'Political is the push from governments, NGOs and movements. Legal is the official outcome. They are linked but are different segments.',
  },
  {
    id: 'p10', topic: 'pestel', review: { section: 'plain', slide: 0 },
    q: 'Which statements about the general environment are correct? ' + SELECT_ALL,
    right: ['Strategic leaders have little control over it', 'Interest rates and exchange rates are examples', 'PESTEL is used to scan, monitor and evaluate it'],
    wrong: ['Leaders can easily change it to suit the firm', 'It consists only of the firm’s direct competitors'],
    explanation: 'The general environment is the wider world: economy, society, technology and so on. Competitors belong to the task environment.',
  },

  // ================================================================ Five Forces
  {
    id: 'f1', topic: 'five-forces', review: { section: 'plain', slide: 3 },
    q: 'A racing team can buy engines from only two manufacturers, and changing supplier would mean redesigning its car. Which force is strong?',
    right: ['Supplier power'],
    wrong: ['Buyer power', 'Threat of substitutes', 'Threat of new entrants'],
    explanation: 'Few suppliers, no real alternatives and high switching costs all give suppliers power to raise prices.',
  },
  {
    id: 'f2', topic: 'five-forces', review: { section: 'plain', slide: 6 },
    q: 'Companies find that video calls meet much of the need that business travel used to meet. This is an example of…',
    right: ['A substitute'],
    wrong: ['A new entrant', 'A complement', 'Rivalry within the industry'],
    explanation: 'A substitute comes from outside the industry yet comes close to meeting the same need.',
  },
  {
    id: 'f3', topic: 'five-forces', review: { section: 'plain', slide: 4 },
    q: 'Entering a market requires billions of dollars for plants and research. What does this suggest about the threat of new entrants?',
    right: ['It is low, because capital requirements are a barrier to entry'],
    wrong: ['It is high, because large firms attract entrants', 'It is high, because costs push prices up', 'It is irrelevant, because only rivalry matters'],
    explanation: 'High upfront investment keeps newcomers out, which protects incumbents’ profits.',
  },
  {
    id: 'f4', topic: 'five-forces', review: { section: 'plain', slide: 1 },
    q: 'A well-run club operates in an industry where every force is strong. What does Five Forces predict?',
    right: ['Profits will be squeezed even though the club is well run'],
    wrong: ['The club will earn high profits because it is well run', 'Only the club’s own resources decide its profits', 'Profits do not depend on the industry'],
    explanation: 'Five Forces judges the playing field, not one company. A strong team in a tough industry still gets squeezed.',
  },
  {
    id: 'f5', topic: 'five-forces', review: { section: 'plain', slide: 3 },
    q: 'An analyst rates one of the five forces as “high.” What does this mean for the firms already in the industry?',
    right: ['It puts more pressure on their profits'],
    wrong: ['It protects their profits', 'It means the industry is attractive', 'It has no effect on profits'],
    explanation: 'A high force is bad news for incumbents. The point of rating is to judge how strongly each force squeezes profits.',
  },
  {
    id: 'f6', topic: 'five-forces', review: { section: 'plain', slide: 7 },
    q: 'Which is the best example of a complement?',
    right: ['Video games sold for a games console'],
    wrong: ['Streaming that replaces cable television', 'A second console from a rival maker', 'A new supplier of console parts'],
    explanation: 'A complement adds value when used with the original product and raises its demand. The others are a substitute, a rival and a supplier.',
  },
  {
    id: 'f7', topic: 'five-forces', review: { section: 'plain', slide: 4 },
    q: 'A new league worries about entrants copying it. Which of the following would act as entry barriers? ' + SELECT_ALL,
    right: ['Economies of scale', 'Network effects', 'Switching costs for fans and sponsors', 'High capital requirements'],
    wrong: ['Low brand recognition among incumbents', 'Easy access to distribution for everyone'],
    explanation: 'Scale, network effects, switching costs and capital requirements all make entry harder. Easy access to distribution lowers barriers.',
  },
  {
    id: 'f8', topic: 'five-forces', review: { section: 'plain', slide: 5 },
    q: 'Buyer power is high when… ' + SELECT_ALL,
    right: ['there are few buyers and each buys a large quantity', 'the product is standardized like a commodity', 'switching costs are low', 'buyers can integrate backward and make the product themselves'],
    wrong: ['there are many small buyers and the product is highly differentiated'],
    explanation: 'Few large buyers, standard products, low switching costs and the threat of backward integration all strengthen buyers.',
  },
  {
    id: 'f9', topic: 'five-forces', review: { section: 'plain', slide: 6 },
    q: 'Rivalry in an industry is likely to be intense when… ' + SELECT_ALL,
    right: ['there are many rivals of similar size', 'industry growth is slow', 'fixed costs are high'],
    wrong: ['a few differentiated firms are protected by high barriers', 'demand is growing fast and there is room for everyone'],
    explanation: 'Slow growth means rivals can only gain at each other’s expense, and high fixed costs push firms to fill capacity. Fast growth eases price fights.',
  },
  {
    id: 'f10', topic: 'five-forces', review: { section: 'plain', slide: 8 },
    q: 'Which statements about strategic groups are correct? ' + SELECT_ALL,
    right: ['They are sets of firms in an industry that follow a similar strategy', 'They are plotted using two dimensions that are not correlated', 'Bubble size can show market share'],
    wrong: ['They show how strong each of the five forces is', 'They group firms by size only'],
    explanation: 'Strategic groups cluster firms by strategy using chosen dimensions such as price and quality. They do not rate the forces.',
  },

  // ================================================================ internal analysis
  {
    id: 'i1', topic: 'internal-analysis', review: { section: 'plain', slide: 4 },
    q: 'A resource is valuable and rare, but rivals can copy it easily. What does VRIO predict?',
    right: ['A temporary competitive advantage'],
    wrong: ['A sustained competitive advantage', 'Competitive parity', 'A competitive disadvantage'],
    explanation: 'Valuable and rare gives an advantage, but if it is not costly to imitate the advantage is temporary.',
  },
  {
    id: 'i2', topic: 'internal-analysis', review: { section: 'plain', slide: 4 },
    q: 'A resource is valuable, rare and costly to imitate, but the firm is not organized to use it well. What does VRIO predict?',
    right: ['An advantage that is not fully captured'],
    wrong: ['A sustained competitive advantage', 'Competitive parity', 'A competitive disadvantage'],
    explanation: 'The fourth question is whether the firm is organized to capture the value. If not, the advantage is not fully captured.',
  },
  {
    id: 'i3', topic: 'internal-analysis', review: { section: 'plain', slide: 4 },
    q: 'Most rivals hold the same valuable resource. According to VRIO, what is the firm’s position with respect to that resource?',
    right: ['Competitive parity'],
    wrong: ['Temporary advantage', 'Sustained advantage', 'Competitive disadvantage'],
    explanation: 'Valuable but not rare gives parity: the firm matches rivals but does not beat them.',
  },
  {
    id: 'i4', topic: 'internal-analysis', review: { section: 'plain', slide: 5 },
    q: 'Rivals study a successful firm but cannot tell which of its practices actually causes its success, so they do not know what to copy. Which isolating mechanism is this?',
    right: ['Causal ambiguity'],
    wrong: ['Path dependence', 'Intellectual property protection', 'Better expectations'],
    explanation: 'Causal ambiguity means cause and effect are unclear, so rivals cannot tell what to imitate.',
  },
  {
    id: 'i5', topic: 'internal-analysis', review: { section: 'plain', slide: 6 },
    q: 'A firm’s long-time strength in one technology becomes a handicap when the market moves to a new one. This is an example of…',
    right: ['Core rigidity'],
    wrong: ['A dynamic capability', 'A resource flow', 'Economies of scope'],
    explanation: 'Core rigidity is a former core competency that has become a liability because the environment changed.',
  },
  {
    id: 'i6', topic: 'internal-analysis', review: { section: 'plain', slide: 1 },
    q: 'Which statement correctly distinguishes a resource from a capability?',
    right: ['A resource is an asset the firm can draw on, and a capability is the skill needed to use resources'],
    wrong: ['A resource is a skill, and a capability is a physical asset', 'They are two words for the same thing', 'A resource is always intangible, and a capability is always tangible'],
    explanation: 'Resources are what you have. Capabilities are the organizational and managerial skills to use them.',
  },
  {
    id: 'i7', topic: 'internal-analysis', review: { section: 'plain', slide: 3 },
    q: 'Which of the following are tangible resources? ' + SELECT_ALL,
    right: ['A training facility', 'Cash reserves', 'A stadium'],
    wrong: ['Brand reputation', 'Staff know-how'],
    explanation: 'Tangible resources are physical and visible. Reputation and know-how are intangible.',
  },
  {
    id: 'i8', topic: 'internal-analysis', review: { section: 'plain', slide: 3 },
    q: 'Which statements about the resource-based view are correct? ' + SELECT_ALL,
    right: ['It assumes each firm has a different bundle of resources', 'It assumes resources do not move easily between firms', 'It says resources are the key to superior performance'],
    wrong: ['It assumes all firms have the same resources', 'It says capabilities do not matter'],
    explanation: 'The resource-based view rests on heterogeneity and immobility: firms differ, and resources are sticky.',
  },
  {
    id: 'i9', topic: 'internal-analysis', review: { section: 'plain', slide: 5 },
    q: 'Which of the following are isolating mechanisms that protect an advantage from imitation? ' + SELECT_ALL,
    right: ['Path dependence', 'Causal ambiguity', 'Patents and trademarks', 'Better expectations about a resource’s future value'],
    wrong: ['Core rigidity', 'Low switching costs for rivals’ customers'],
    explanation: 'The four are better expectations, path dependence, causal ambiguity and intellectual property protection. Core rigidity is a liability.',
  },
  {
    id: 'i10', topic: 'internal-analysis', review: { section: 'plain', slide: 10 },
    q: 'A mass-market carmaker lists on the stock market and says it is like a luxury carmaker that sells a few thousand cars a year. Which statements help explain why it cannot simply copy the luxury firm? ' + SELECT_ALL,
    right: ['Large volumes work against scarcity, which is part of luxury', 'The luxury firm chooses who may buy its most exclusive models', 'Heritage and racing history cannot be bought quickly'],
    wrong: ['Luxury is created by lowering prices', 'Selling more cars automatically builds exclusivity'],
    explanation: 'This follows the Ferrari and Porsche comparison: scarcity, control over who can buy and heritage are hard to imitate, so a resource that is valuable and rare also needs to be costly to copy.',
  },

  // ================================================================ SWOT
  {
    id: 's1', topic: 'swot', review: { section: 'plain', slide: 0 },
    q: 'A rich new team is about to join the championship. In a SWOT of an existing team, this is a…',
    right: ['Threat'],
    wrong: ['Weakness', 'Strength', 'Opportunity'],
    explanation: 'It is outside the firm and harmful, so it is a threat. Five Forces calls it the threat of new entrants.',
  },
  {
    id: 's2', topic: 'swot', review: { section: 'plain', slide: 1 },
    q: 'A club’s youth academy is valuable, rare, costly to imitate and well organized. In a SWOT this is a…',
    right: ['Strength'],
    wrong: ['Weakness', 'Opportunity', 'Threat'],
    explanation: 'It is inside the firm and helpful. VRIO is the tool that shows it is a strength.',
  },
  {
    id: 's3', topic: 'swot', review: { section: 'plain', slide: 1 },
    q: 'Which statement about a SWOT analysis is correct?',
    right: ['It summarizes findings from the internal and external analysis'],
    wrong: ['It replaces the need for PESTEL, Five Forces and VRIO', 'It is a list of everything the firm owns', 'It only looks at the industry’s competitors'],
    explanation: 'A SWOT is a summary, not separate research. A weak SWOT usually comes from skipping the analysis behind it.',
  },
  {
    id: 's4', topic: 'swot', review: { section: 'plain', slide: 3 },
    q: 'A team uses its unique data culture to launch live race statistics that younger fans want. Which SWOT pairing is this?',
    right: ['Strength and opportunity'],
    wrong: ['Weakness and opportunity', 'Strength and threat', 'Weakness and threat'],
    explanation: 'The data culture is a strength and young fans’ demand is an opportunity. The move uses one to capture the other.',
  },
  {
    id: 's5', topic: 'swot', review: { section: 'plain', slide: 1 },
    q: 'A club earns 60% of its income from one sponsor. In a SWOT this belongs under…',
    right: ['Weaknesses'],
    wrong: ['Threats', 'Strengths', 'Opportunities'],
    explanation: 'It is a feature of the club itself and it is harmful, so it is a weakness. It would become a threat only if it described something outside the club, such as a sponsor leaving the market.',
  },
  {
    id: 's6', topic: 'swot', review: { section: 'plain', slide: 2 },
    q: 'A student lists “strong brand” as a strength. What is the main problem with this entry?',
    right: ['It is vague and is not compared with rivals or backed by evidence'],
    wrong: ['Brands can never be strengths', 'Strengths must be outside the firm', 'It should be listed as an opportunity'],
    explanation: 'A strength should be specific, evidence-based and judged against competitors.',
  },
  {
    id: 's7', topic: 'swot', review: { section: 'plain', slide: 0 },
    q: 'Which of the following are external factors in a SWOT? ' + SELECT_ALL,
    right: ['A rival’s new low-price product', 'A change in consumer tastes', 'New regulation of the industry'],
    wrong: ['The firm’s skilled workforce', 'The firm’s weak balance sheet'],
    explanation: 'Opportunities and threats come from outside the firm. Strengths and weaknesses are inside it.',
  },
  {
    id: 's8', topic: 'swot', review: { section: 'plain', slide: 3 },
    q: 'Which pairings of SWOT boxes ask the correct question? ' + SELECT_ALL,
    right: ['Strength and threat: how can our strengths blunt this threat?', 'Weakness and opportunity: how can this opportunity help fix a weakness?', 'Weakness and threat: where are we most exposed, and how do we reduce it?'],
    wrong: ['Strength and opportunity: how do we hide the opportunity from rivals?', 'Weakness and threat: how do we ignore it?'],
    explanation: 'Pairing the boxes turns a picture into action. Strength and opportunity asks how to use strengths to seize the opportunity.',
  },
  {
    id: 's9', topic: 'swot', review: { section: 'plain', slide: 4 },
    q: 'Which of the following are common mistakes in a SWOT? ' + SELECT_ALL,
    right: ['Putting an outside factor under strengths', 'Writing long lists of vague points', 'Listing items without saying what to do about them'],
    wrong: ['Prioritizing the few items that matter most', 'Reviewing the SWOT as conditions change'],
    explanation: 'Sort carefully, be specific, compare with rivals, prioritize, act and review.',
  },
  {
    id: 's10', topic: 'swot', review: { section: 'plain', slide: 1 },
    q: 'Which tools provide the inputs for a SWOT? ' + SELECT_ALL,
    right: ['VRIO for strengths and weaknesses', 'PESTEL for opportunities and threats', 'Five Forces for opportunities and threats'],
    wrong: ['PESTEL for strengths and weaknesses', 'VRIO for opportunities and threats'],
    explanation: 'Internal analysis feeds strengths and weaknesses. External analysis feeds opportunities and threats.',
  },

  // ================================================================ shared value, performance and business models
  {
    id: 'b1', topic: 'performance-business-models', review: { section: 'plain', slide: 2 },
    q: 'A supermarket gives 1% of its profit to charity from a CSR budget. How does this differ from an app that sells surplus food to customers at a third of the price?',
    right: ['The app’s social benefit is the business itself, so it is shared value, while the donation sits outside the core business'],
    wrong: ['Both are shared value, because both help society', 'The donation is shared value and the app is CSR', 'Shared value is always philanthropy'],
    explanation: 'Creating shared value is built into core strategy: every sale creates value for society and profit for the firm. A CSR budget or PR effort sits beside the business.',
  },
  {
    id: 'b2', topic: 'performance-business-models', review: { section: 'plain', slide: 7 },
    q: 'A company sells a printer cheaply and earns most of its profit from the ink cartridges customers must keep buying. Which business model is this?',
    right: ['Razor–razor blades'],
    wrong: ['Freemium', 'Wholesale', 'Agency'],
    explanation: 'Sell the first product cheaply or at a loss and make money on the complementary replacement product.',
  },
  {
    id: 'b3', topic: 'performance-business-models', review: { section: 'plain', slide: 7 },
    q: 'Customers pay a fixed monthly fee for access to a gym whether or not they go. Which business model is this, and which metric matters most?',
    right: ['Subscription, and churn'],
    wrong: ['Pay-as-you-go, and churn', 'Freemium, and unit margin', 'Wholesale, and shelf price'],
    explanation: 'In a subscription customers pay for access during a period. Because revenue is steady, the key metric is churn: how many customers leave.',
  },
  {
    id: 'b4', topic: 'performance-business-models', review: { section: 'plain', slide: 7 },
    q: 'A mobile game is free to download, with paid extras for dedicated players. It can work because the cost of serving one more user is close to zero. Which business model is this?',
    right: ['Freemium'],
    wrong: ['Ultra-low cost', 'Bundling', 'Pay-as-you-go'],
    explanation: 'Free plus premium: basic features free, premium features paid. Ultra-low cost sells a cheap core product, not a free one.',
  },
  {
    id: 'b5', topic: 'performance-business-models', review: { section: 'plain', slide: 7 },
    q: 'An airline sells very cheap base fares and charges extra for bags, seats and upgrades. Which business model is this?',
    right: ['Ultra-low cost'],
    wrong: ['Freemium', 'Razor–razor blades', 'Agency'],
    explanation: 'Ultra-low cost offers a basic service at a very low price and sells extras at a premium, with a goal of driving costs down relentlessly.',
  },
  {
    id: 'b6', topic: 'performance-business-models', review: { section: 'plain', slide: 4 },
    q: 'In the triple bottom line, which dimension does “planet” refer to?',
    right: ['Ecological performance'],
    wrong: ['Economic performance', 'Social performance', 'Technological performance'],
    explanation: 'Profits is the economic dimension, people the social dimension and planet the ecological dimension.',
  },
  {
    id: 'b7', topic: 'performance-business-models', review: { section: 'plain', slide: 8 },
    q: 'A start-up sells razors by online subscription and is later bought for $1 billion, while the market leader loses share. What was the start-up’s main innovation?',
    right: ['A new business model for delivering value'],
    wrong: ['A sixth razor blade', 'A lower-cost raw material', 'A government subsidy'],
    explanation: 'Business model innovation is a novel and practical way to deliver value. It raises barriers to imitation and can extend an advantage.',
  },
  {
    id: 'b8', topic: 'performance-business-models', review: { section: 'plain', slide: 0 },
    q: 'Which statements about creating shared value are correct? ' + SELECT_ALL,
    right: ['It is part of core strategy, not philanthropy', 'It serves both shareholders and society', 'It can unlock new markets that rivals disregard', 'It can build intangibles such as brand, reputation and trust'],
    wrong: ['It replaces the need to compete', 'It is a charity budget separate from strategy'],
    explanation: 'Shared value policies enhance competitiveness while advancing societal conditions, and they build advantage through differentiation, cost efficiency, intangibles and new markets.',
  },
  {
    id: 'b9', topic: 'performance-business-models', review: { section: 'plain', slide: 5 },
    q: 'Which of the following are the four questions of the business model framework? ' + SELECT_ALL,
    right: ['Why does the model create value?', 'What activities are needed to create and deliver the offering?', 'Who are the main stakeholders performing the activities?', 'How are the offerings created?'],
    wrong: ['Where will the firm list its shares?', 'When will the firm merge?'],
    explanation: 'The framework asks why, what, who and how.',
  },
  {
    id: 'b10', topic: 'performance-business-models', review: { section: 'plain', slide: 3 },
    q: 'A manager uses a balanced scorecard. Which questions does it ask? ' + SELECT_ALL,
    right: ['How do we generate more profit for shareholders?', 'How do customers see us?', 'What must we excel at?', 'Can we continue to improve and create value?'],
    wrong: ['Which competitors should we acquire?', 'How do we lower our tax bill?'],
    explanation: 'The scorecard balances financial and strategic goals using internal and external metrics across four perspectives.',
  },
  {
    id: 'b11', topic: 'performance-business-models', review: { section: 'plain', slide: 6 },
    q: 'A software company moves from selling one-time licenses to a cloud subscription. Which results are likely? ' + SELECT_ALL,
    right: ['Revenue is steadier and better matched to the cost of supporting customers', 'Unauthorized use is easier to detect and disable', 'Customers always have the latest version'],
    wrong: ['Revenue now spikes at each new release', 'Piracy becomes easier'],
    explanation: 'Subscriptions replace revenue spikes at each release with revenue over a customer’s lifetime, and cloud software is easier to control.',
  },

  // ================================================================ business-level strategy
  {
    id: 'c1', topic: 'business-level-strategy', review: { section: 'plain', slide: 1 },
    q: 'Firm A’s customers would pay up to $200 and its cost is $140. Firm B’s customers would pay up to $160 and its cost is $90. Which statement is correct?',
    right: ['Firm B has the advantage, because it creates $70 of value against $60'],
    wrong: ['Firm A has the advantage, because its customers pay more', 'Firm A has the advantage, because it creates $200 of value', 'Both firms are equal'],
    explanation: 'Economic value created is value minus cost. A creates 200 − 140 = $60. B creates 160 − 90 = $70.',
  },
  {
    id: 'c2', topic: 'business-level-strategy', review: { section: 'plain', slide: 6 },
    q: 'A retailer buys in huge volume, runs very efficient logistics and sells products of adequate quality at the lowest prices in its market. Which generic strategy is this?',
    right: ['Cost leadership'],
    wrong: ['Differentiation', 'Blue ocean strategy', 'Stuck in the middle'],
    explanation: 'Adequate value at lower cost, passed on as lower prices, is cost leadership.',
  },
  {
    id: 'c3', topic: 'business-level-strategy', review: { section: 'plain', slide: 5 },
    q: 'A phone maker runs its own stores with expert technical support and a strong warranty, which makes its premium prices acceptable. Which value driver of differentiation is this?',
    right: ['Customer service'],
    wrong: ['Learning-curve effects', 'Economies of scale', 'Cost of input factors'],
    explanation: 'Service and after-sales support raise perceived value. The other options are drivers of low cost.',
  },
  {
    id: 'c4', topic: 'business-level-strategy', review: { section: 'plain', slide: 7 },
    q: 'A manufacturer grows so large that coordination becomes complicated and the firm turns slow and inflexible, so its cost per unit rises. This is…',
    right: ['Diseconomies of scale'],
    wrong: ['Economies of scope', 'Learning-curve effects', 'Value innovation'],
    explanation: 'Diseconomies of scale arise when a firm is too big: too much coordination and too little flexibility.',
  },
  {
    id: 'c5', topic: 'business-level-strategy', review: { section: 'plain', slide: 7 },
    q: 'Workers at a factory need less time to assemble each unit as they repeat the task. Which concept is this?',
    right: ['The learning curve'],
    wrong: ['Economies of scope', 'Diseconomies of scale', 'A blue ocean'],
    explanation: 'The learning curve describes efficiency gained through practice. The experience curve is broader and also counts process innovation and technological change.',
  },
  {
    id: 'c6', topic: 'business-level-strategy', review: { section: 'plain', slide: 9 },
    q: 'A circus company drops animal acts and star performers (cutting cost) and adds theater-style storytelling and a new kind of show, drawing adults who never went to the circus before. Which strategy is this?',
    right: ['Blue ocean strategy'],
    wrong: ['Cost leadership', 'Differentiation only', 'Stuck in the middle'],
    explanation: 'It lowers cost and raises buyer value together (value innovation) and opens new demand. That is a blue ocean.',
  },
  {
    id: 'c7', topic: 'business-level-strategy', review: { section: 'plain', slide: 10 },
    q: 'A firm tries to charge premium prices and also to be the cheapest, but ends up with neither a distinctive offer nor lower costs. Which term fits?',
    right: ['Stuck in the middle'],
    wrong: ['Value innovation', 'Economies of scope', 'Focused differentiation'],
    explanation: 'A firm that attempts both without achieving either is stuck in the middle. Value innovation is the successful version.',
  },
  {
    id: 'c8', topic: 'business-level-strategy', review: { section: 'plain', slide: 10 },
    q: 'In the eliminate, reduce, raise, create grid, a club stops printing race programs. Which action is this, and what is its main effect?',
    right: ['Eliminate, which lowers cost'],
    wrong: ['Reduce, which lowers cost', 'Raise, which increases perceived benefits', 'Create, which increases perceived benefits'],
    explanation: 'Dropping a factor completely is eliminating it. Eliminating and reducing lower cost, while raising and creating increase perceived benefits.',
  },
  {
    id: 'c9', topic: 'business-level-strategy', review: { section: 'plain', slide: 6 },
    q: 'Which of the following help a firm keep its costs low? ' + SELECT_ALL,
    right: ['Cheaper input factors such as raw materials, capital and labor', 'Economies of scale', 'Learning-curve effects', 'Experience-curve effects'],
    wrong: ['Frequent new product launches', 'Heavier marketing and promotion'],
    explanation: 'The four cost drivers are input factors, economies of scale, learning and experience effects. Launches and promotion are value drivers for differentiation.',
  },
  {
    id: 'c10', topic: 'business-level-strategy', review: { section: 'plain', slide: 4 },
    q: 'Which statements about a differentiation strategy are correct? ' + SELECT_ALL,
    right: ['It uses unique features so buyers will pay a higher price', 'Costs still need to be controlled', 'Economies of scope can help keep costs down'],
    wrong: ['It requires the lowest costs in the industry', 'It never involves marketing'],
    explanation: 'The advantage still comes from value minus cost beating rivals, so even a premium price does not excuse uncontrolled costs.',
  },
  {
    id: 'c11', topic: 'business-level-strategy', review: { section: 'plain', slide: 9 },
    q: 'Which statements about blue ocean strategy are correct? ' + SELECT_ALL,
    right: ['It combines differentiation and low cost', 'It uses value innovation to reconcile the trade-off between value and cost', 'It aims at untapped market space and new demand'],
    wrong: ['It is easy for any firm to achieve', 'It means competing head-on in a crowded market'],
    explanation: 'Blue oceans are untapped market space. It is difficult to succeed at value innovation.',
  },

  // ================================================================ innovation and platforms
  {
    id: 'n1', topic: 'innovation-platforms', review: { section: 'plain', slide: 0 },
    q: 'A start-up turns a lab prototype into a product and sells it to customers. Which of the four I’s describes the step of commercializing the invention?',
    right: ['Innovation'],
    wrong: ['Idea', 'Invention', 'Imitation'],
    explanation: 'An idea is an abstract concept. An invention turns it into a product. Innovation commercializes it, and imitation copies a successful innovation.',
  },
  {
    id: 'n2', topic: 'innovation-platforms', review: { section: 'plain', slide: 6 },
    q: 'A company takes sensor technology it already uses and sells it to a new market of home owners. Which type of innovation is this?',
    right: ['Architectural'],
    wrong: ['Incremental', 'Radical', 'Disruptive'],
    explanation: 'Architectural innovation brings existing technology to new markets.',
  },
  {
    id: 'n3', topic: 'innovation-platforms', review: { section: 'plain', slide: 6 },
    q: 'An app uses new technology to take customers from traditional taxi firms in the existing taxi market. Which type of innovation is this?',
    right: ['Disruptive'],
    wrong: ['Architectural', 'Incremental', 'Radical'],
    explanation: 'Disruptive innovation uses new technology in existing markets. Radical innovation targets new markets with new technology.',
  },
  {
    id: 'n4', topic: 'innovation-platforms', review: { section: 'plain', slide: 3 },
    q: 'Growth is slowing, price has become an important weapon, weaker firms are being forced out and the industry is consolidating. Which stage of the industry life cycle is this?',
    right: ['Shakeout'],
    wrong: ['Introduction', 'Maturity', 'Decline'],
    explanation: 'In shakeout the rate of growth declines and firms compete intensely. Maturity follows, with a few large firms and zero or negative growth.',
  },
  {
    id: 'n5', topic: 'innovation-platforms', review: { section: 'plain', slide: 4 },
    q: 'Demand for print newspapers is falling fast and one publisher decides to buy competitors. Which decline-stage option is this?',
    right: ['Consolidate'],
    wrong: ['Exit', 'Harvest', 'Maintain'],
    explanation: 'The four options in decline are exit, harvest, maintain and consolidate. Buying competitors is consolidation.',
  },
  {
    id: 'n6', topic: 'innovation-platforms', review: { section: 'plain', slide: 8 },
    q: 'Which statement best describes a platform business?',
    right: ['It enables interaction and matches between producers and consumers, and provides the infrastructure and governance'],
    wrong: ['It moves a product in a line from research to design to manufacture to sale', 'It sells the same product to every customer at the lowest price', 'It owns every asset used by its customers'],
    explanation: 'A pipeline makes and sells in a line. A platform’s purpose is to enable matches among users.',
  },
  {
    id: 'n7', topic: 'innovation-platforms', review: { section: 'plain', slide: 7 },
    q: 'A product has won over enthusiasts and early adopters, but the practical early majority is not buying. Which problem does this describe?',
    right: ['The chasm'],
    wrong: ['Diseconomies of scale', 'Core rigidity', 'A shakeout'],
    explanation: 'The chasm is the gap between early adopters and the early majority, who want finalized, practical products.',
  },
  {
    id: 'n8', topic: 'innovation-platforms', review: { section: 'real', slide: 0 },
    q: 'A wearable company gives customers the band for free and charges a yearly membership for the data, coaching and features. Which statement best describes the model?',
    right: ['A subscription business model, in which the hardware is included in the membership'],
    wrong: ['A wholesale model, in which the band is sold to retailers', 'A pure pipeline in which revenue comes from one-time hardware sales', 'A freemium model with no paid tier'],
    explanation: 'Customers pay for access during a period, and the hardware comes with it. That ties income to whether people keep finding it useful.',
  },
  {
    id: 'n9', topic: 'innovation-platforms', review: { section: 'plain', slide: 3 },
    q: 'Which statements describe the maturity stage of an industry? ' + SELECT_ALL,
    right: ['Only a few large firms remain', 'Firms enjoy economies of scale', 'Growth is zero or negative', 'Demand is mostly replacement or repeat purchases'],
    wrong: ['Demand is rising rapidly as first-time buyers rush in', 'Barriers to entry are at their highest because research is costly'],
    explanation: 'Rapid growth with first-time buyers is the growth stage. High research costs and entry barriers mark the introduction stage.',
  },
  {
    id: 'n10', topic: 'innovation-platforms', review: { section: 'plain', slide: 9 },
    q: 'Which statements about platform businesses and network effects are correct? ' + SELECT_ALL,
    right: ['A platform becomes more valuable as more people use it', 'Platforms can scale more efficiently than pipelines by eliminating gatekeepers', 'Platforms can benefit from community feedback'],
    wrong: ['Platforms avoid the need for network effects', 'A subscription price alone makes a business a platform'],
    explanation: 'A platform needs two or more sides that interact. A subscription may just be a pricing model.',
  },
  {
    id: 'n11', topic: 'innovation-platforms', review: { section: 'real', slide: 0 },
    q: 'A company earns most of its revenue from a hardware-plus-subscription model. Which of the following are risks to this model? ' + SELECT_ALL,
    right: ['Rivals selling similar hardware with no subscription fee', 'Members leaving after a price or upgrade-fee change (churn)', 'Regulators challenging health claims made for the product'],
    wrong: ['Recurring revenue makes customer churn irrelevant', 'Hardware sales are the only source of risk'],
    explanation: 'A subscription ties income to members continuing to see value, so churn, rival pricing and regulation all matter. The WHOOP case showed all three.',
  },
  {
    id: 'n12', topic: 'innovation-platforms', review: { section: 'plain', slide: 6 },
    q: 'Which pairings of innovation type and example are correct? ' + SELECT_ALL,
    right: ['Incremental: a new phone generation with a better camera', 'Radical: mRNA vaccines', 'Architectural: smart home systems', 'Disruptive: ride-hailing against taxis'],
    wrong: ['Disruptive: a new phone generation with a better camera', 'Incremental: mRNA vaccines'],
    explanation: 'Incremental builds on established knowledge, radical uses novel methods for new markets, architectural brings existing technology to new markets, and disruptive uses new technology in existing markets.',
  },
];

// ---- builder: spread the correct answer evenly over positions, deterministically -----------------
// Single-answer questions rotate the correct position A, B, C, D. Multiple-answer questions use a seeded shuffle.
function seeded(seed) {
  let s = 0;
  for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
function shuffleSeeded(list, rnd) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let singleCounter = 0;
export const examBank = items.map((it) => {
  const rnd = seeded(it.id);
  const total = it.right.length + it.wrong.length;
  if (it.right.length === 1) {
    const pos = (singleCounter++ * 3 + 1) % total; // 1, 0, 3, 2, 1, ... varied, never fixed
    const rest = shuffleSeeded(it.wrong, rnd);
    const options = [...rest];
    options.splice(pos, 0, it.right[0]);
    return { id: it.id, topic: it.topic, review: it.review, q: it.q, options, answers: [pos], explanation: it.explanation };
  }
  const tagged = shuffleSeeded([...it.right.map((text) => ({ text, ok: true })), ...it.wrong.map((text) => ({ text, ok: false }))], rnd);
  return {
    id: it.id, topic: it.topic, review: it.review, q: it.q,
    options: tagged.map((t) => t.text),
    answers: tagged.map((t, i) => (t.ok ? i : -1)).filter((i) => i >= 0),
    explanation: it.explanation,
  };
});
