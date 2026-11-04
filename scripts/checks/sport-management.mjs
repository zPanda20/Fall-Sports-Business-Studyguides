// Foundations of Sport Management: structure of the eight topics and every number used in the examples.
// Real figures are re-calculated from the sources named on each topic's sources slide. Summit numbers are invented and shared.
import { summit } from '../../src/data/sport-management/summit.js';
import { sportMgmtIntroTopic } from '../../src/data/sport-management/sport-mgmt-intro.js';
import { sportIndustryEcosystemTopic } from '../../src/data/sport-management/sport-industry-ecosystem.js';
import { stakeholderFanEngagementTopic } from '../../src/data/sport-management/stakeholder-fan-engagement.js';
import { socialResponsibilityMarketingIntroTopic } from '../../src/data/sport-management/social-responsibility-marketing-intro.js';
import { sportsMarketingTopic } from '../../src/data/sport-management/sports-marketing.js';
import { sportsMediaRightsTopic } from '../../src/data/sport-management/sports-media-rights.js';
import { mediaAndSponsorshipIntroTopic } from '../../src/data/sport-management/media-and-sponsorship-intro.js';
import { sportsSponsorshipTopic } from '../../src/data/sport-management/sports-sponsorship.js';

export default function ({ eq, ok_, near }) {
  const all = [
    sportMgmtIntroTopic,
    sportIndustryEcosystemTopic,
    stakeholderFanEngagementTopic,
    socialResponsibilityMarketingIntroTopic,
    sportsMarketingTopic,
    sportsMediaRightsTopic,
    mediaAndSponsorshipIntroTopic,
    sportsSponsorshipTopic,
  ];

  // ---- Structure ----
  eq(new Set(all.map((t) => t.id)).size, all.length, 'Sport Management topic ids are unique');
  for (const t of all) {
    ok_(t.course === 'sport-management', `${t.id}: belongs to sport-management`);
    ok_(t.sports.universe === 'summit', `${t.id}: sports example uses the Summit universe`);
    ok_(Array.isArray(t.videos), `${t.id}: videos is an array`);
    ok_(t.plain.length >= 6, `${t.id}: at least 6 plain-language slides`);
    ok_(t.cards.length >= 5, `${t.id}: at least 5 flash cards`);
    ok_(t.terms.length >= 8, `${t.id}: at least 8 terms`);

    const mcqs = t.questions.filter((q) => q.type === 'mcq');
    const opens = t.questions.filter((q) => q.type === 'open');
    ok_(mcqs.length >= 6, `${t.id}: at least 6 multiple-choice questions`);
    ok_(opens.length >= 1, `${t.id}: at least 1 open question`);
    ok_(mcqs.every((q) => q.options.length === 4), `${t.id}: every multiple-choice question has 4 options`);
    // The right answer should not always sit in the same place once the page shuffles, but the data must at least be valid.
    ok_(mcqs.every((q) => Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length), `${t.id}: answer indexes are valid`);

    const slides = { plain: t.plain, real: t.real.slides, sports: t.sports.slides };
    ok_(t.questions.every((q) => slides[q.review?.section] && q.review.slide >= 0 && q.review.slide < slides[q.review.section].length),
      `${t.id}: every review link points at a real slide`);

    ok_(t.exam.length >= 2 && t.exam.length <= 3, `${t.id}: 2 or 3 exam questions`);
    for (const e of t.exam) {
      // marking points end with "(n)" or "(... up to n)", and they must add up to the question's marks
      const sum = e.marking.reduce((a, m) => a + Number((m.match(/up to (\d+)\)\s*$/) || m.match(/\((\d+)\)\s*$/) || [0, NaN])[1]), 0);
      eq(sum, e.marks, `${t.id}/${e.id}: marking points add up to ${e.marks} marks`);
    }

    // Every figure needs a plain file name and a description of what to supply
    for (const s of Object.values(slides).flat()) {
      for (const b of s.blocks) {
        if (b.type === 'figure') ok_(b.alt && b.need && /^fsm-[\w-]+\.png$/.test(b.src || ''), `${t.id}: figure has alt, need and an fsm-*.png name`);
        if (b.type === 'bars') ok_(b.items.every((x) => Number.isFinite(x.value)), `${t.id}: bars have numeric values`);
        if (b.type === 'sources') ok_(b.items.every((x) => /^https:\/\//.test(x.url) && x.note), `${t.id}: sources have https links and notes`);
      }
    }
  }

  // ---- Summit: shared numbers ----
  const sum = (o) => Object.values(o).reduce((a, b) => a + b, 0);
  eq(sum(summit.revenue), 76, 'Summit revenue $M');
  eq(sum(summit.sponsorship), 22, 'Summit sponsorship by asset $M');
  eq(sum(summit.sponsorsByIndustry), 22, 'Summit sponsorship by industry $M');
  eq(sum(summit.mediaPackages), 30, 'Summit media packages $M');
  near(sum(summit.merchLines), 6, 'Summit merchandise lines $M', 1e-9);
  eq(summit.sponsorship.jersey + summit.sponsorship.arenaNaming + summit.sponsorship.otherPartners + summit.sponsorship.hospitalityAndDigital, summit.revenue.commercial, 'Sponsorship equals the commercial line');
  eq(sum(summit.mediaPackages), summit.revenue.media, 'Media packages equal the media line');
  near(sum(summit.merchLines), summit.revenue.merchandise, 'Merchandise lines equal the merchandise line', 1e-9);
  ok_(summit.revenue.media === Math.max(...Object.values(summit.revenue)), 'Media is Summit’s largest revenue line');

  // Introduction topic: matchday revenue and the arena
  near(summit.arenaSeats * summit.homeGames * summit.avgTicket / 1e6, 18, 'Summit matchday $M (10,000 seats x 40 games x $45)', 1e-9);
  near(summit.homeGames * summit.hoursPerGame, 100, 'Summit hours of live hockey', 1e-9);
  near(100 / 8760 * 100, 1.14, 'Share of the year spent playing, %', 0.01);
  near(summit.revenue.media / 76 * 100, 39.5, 'Media share of Summit revenue, %', 0.05);
  near(summit.revenue.commercial / 76 * 100, 28.9, 'Commercial share of Summit revenue, %', 0.05);
  near(summit.revenue.merchandise / 76 * 100, 7.9, 'Merchandise share of Summit revenue, %', 0.05);

  // Sports marketing: merchandise and the email funnel
  eq(summit.jerseysSold * summit.jerseyPrice, 3_000_000, 'Summit jersey revenue $');
  near(summit.jerseysSold * summit.jerseyPrice / 1e6, summit.merchLines.jerseys, 'Jersey revenue matches the jersey line $M', 1e-9);
  eq(50_000 * 0.04, 2_000, 'Email clicks');
  eq(2_000 * 0.10, 200, 'Email orders');
  eq(200 * 60, 12_000, 'Email revenue $');

  // Media rights: Summit packages and the streamer round
  near(summit.mediaPackages.linear * 0.9, 10.8, 'Linear after a 10% fall', 1e-9);
  near(summit.mediaPackages.streaming * 1.2, 10.8, 'Streaming after a 20% rise', 1e-9);
  near(10.8 + 10.8 + summit.mediaPackages.international + summit.mediaPackages.highlights, 30.6, 'Summit media after the streamer round $M', 1e-9);
  near((30.6 - 30) / 30 * 100, 2, 'Change in media total, %', 1e-9);

  // Sponsorship: telecom sponsor return, cash and in kind, losing the jersey deal
  eq(600_000 * 0.015, 9_000, 'Telecom customers gained');
  eq(9_000 * 800, 7_200_000, 'Value of those customers $');
  near((7.2 - 6) / 6 * 100, 20, 'Telecom sponsor return, %', 1e-9);
  eq(3 + 1, summit.sponsorsByIndustry.automotive, 'Automotive $3M cash + $1M in kind');
  near(3 / 4 * 100, 75, 'Automotive cash share, %', 1e-9);
  eq(summit.sponsorship.jersey, 8, 'Jersey sponsor $M');
  eq(22 - summit.sponsorship.jersey, 14, 'Sponsorship after losing the jersey sponsor $M');
  near(summit.sponsorship.jersey / 22 * 100, 36.4, 'Jersey share of sponsorship, %', 0.05);
  near(summit.sponsorship.jersey / 76 * 100, 10.5, 'Jersey share of revenue, %', 0.05);
  eq(76 - summit.sponsorship.jersey, 68, 'Revenue after losing the jersey sponsor $M');
  near(summit.sponsorsByIndustry.financial / 22 * 100, 31.8, 'Financial share of Summit sponsors, %', 0.05);

  // ---- Real figures ----
  // Manchester United fiscal 2025 (SEC exhibit 99.1, 17 September 2025), GBP M
  near(188.4 + 144.9, 333.3, 'Man Utd commercial = sponsorship + merchandising', 1e-9);
  near(333.3 + 172.9 + 160.3, 666.5, 'Man Utd revenue = commercial + broadcasting + matchday', 1e-9);
  near(19.8 / (144.9 - 19.8) * 100, 15.8, 'Man Utd merchandising growth, %', 0.05);

  // Media rights (lecture figures)
  eq(52 + 50 + 66 + 44 + 58, 270, 'Premier League UK live matches per season');
  near(6.7 / 4, 1.675, 'Premier League UK average per season, GBP bn', 1e-9);
  ok_(2.1 > 6.7 / 4, 'International rights (about 2.1bn a year) exceed the UK average per season');
  near(Math.pow(78 / 58, 1 / 5) * 100 - 100, 6.1, 'Global media rights growth per year to 2030, %', 0.05);
  near((78 / 58 - 1) * 100, 34.5, 'Global media rights growth 2025 to 2030, %', 0.05);
  near(109 / 11, 9.9, 'NFL fee per year, $bn (the lecture quotes 9.7)', 0.05);
  ok_(Math.abs(109 / 11 - 9.7) > 0.1, 'The lecture’s $9.7bn a year is not exactly 109 ÷ 11');
  near((1180 / 627 - 1) * 100, 88.2, 'F1 media rights growth 2020 to 2024, %', 0.05);
  near(7.65 / 6, 1.275, 'NBC per Olympic Games, $bn', 1e-9);
  near(12.8 / 4, 3.2, 'Champions League per year, $bn', 1e-9);
  near(6.2 / 5, 1.24, 'IPL per year, $bn', 1e-9);
  // Top-ten charts shown in the lecture (SportBusiness 2024, $M)
  eq(21452 + 12627 + 4641 + 4013 + 3854 + 3381 + 3069 + 2283 + 1826 + 1324, 58470, 'Top 10 sports by media rights value, $M');
  eq(29526 + 4965 + 2526 + 2508 + 2144 + 2101 + 2075 + 1690 + 1268 + 1263, 50066, 'Top 10 markets by media rights value, $M');

  // Guest speaker slides
  near(1000 / 75, 13.3, 'Amazon NFL: $1bn against $75M', 0.05);
  near(5000 / 10, 500, 'Netflix and WWE per year, $M', 1e-9);
  near(2.0 / 0.2, 10, 'Wimbledon German fee: latest line against 2008', 1e-9);
  near(115 / 160 * 100, 71.9, 'Super Bowl audience in the USA, %', 0.05);
  near(135 / 150 * 100, 90, 'Cricket final audience in India, %', 1e-9);
  near(104 / 64, 1.625, 'World Cup matches 2026 against 2022', 1e-9);
  near((1.32 / 1.625 - 1) * 100, -18.8, 'World Cup 2026 rights value per match, % (reported as −19%)', 0.05);
  near(5.8 * 1.54, 8.9, 'World Cup 2026 forecast revenue, $bn (rounded)', 0.05);

  // Sponsorship scope (lecture)
  near(Math.pow(190 / 100, 1 / 5) * 100 - 100, 13.7, 'Sponsorship forecast growth per year, %', 0.05);

  // Shirt deals, 2025/26 (Finance Football, 4 September 2025), EUR M
  const shirts = [70, 70, 70, 70, 69, 65, 65, 58.5, 58.5, 45];
  near(shirts.reduce((a, b) => a + b, 0), 641, 'Top 10 shirt deals total, EUR M', 1e-9);
  near(641 / 10, 64.1, 'Top 10 shirt deals average, EUR M', 1e-9);
  near(70 / 45, 1.56, 'Largest shirt deal against the tenth', 0.01);
}
