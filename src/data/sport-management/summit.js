// The made-up numbers for Summit Sports Group, shared by every Sport Management topic so they always agree.
// Summit Peaks is a professional hockey club. Summit Arena is its home. Summit Media streams its games and sells its rights.
// All amounts are in US$ millions unless a name says otherwise. They are invented for teaching, not real data.
export const summit = {
  arenaSeats: 10_000,
  homeGames: 40,
  avgTicket: 45, // dollars
  hoursPerGame: 2.5,
  // Revenue by source, $M
  revenue: { matchday: 18, commercial: 22, media: 30, merchandise: 6 },
  // Commercial (sponsorship) income by asset, $M
  sponsorship: { jersey: 8, arenaNaming: 6, otherPartners: 5, hospitalityAndDigital: 3 },
  // Sponsorship by sponsor industry, $M
  sponsorsByIndustry: { financial: 7, beverage: 5, telecom: 6, automotive: 4 },
  // Media rights by package, $M
  mediaPackages: { linear: 12, streaming: 9, international: 6, highlights: 3 },
  // Merchandise by line, $M
  merchLines: { jerseys: 3.0, otherApparel: 2.0, digitalDrops: 1.0 },
  jerseysSold: 40_000,
  jerseyPrice: 75,
};
