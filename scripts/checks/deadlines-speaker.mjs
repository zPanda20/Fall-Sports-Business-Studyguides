// The Speaker Analysis assignment carries its brief and three YouTube buttons.
import { DEADLINES } from '../../src/data/deadlines.js';

export default function ({ eq, ok_ }) {
  const d = DEADLINES.find((x) => x.id === 'presentation-skills-speaker-analysis');
  ok_(d, 'speaker analysis item exists');
  eq(d.brief.points.map((p) => p.label).join(), 'Body Language & Physical Delivery,Calm & Control,Personal Preference', 'speaker analysis: three areas to note');
  ok_(d.brief.objective.length > 40 && d.brief.intro.length > 40, 'speaker analysis: objective and instructions present');
  eq(d.videos.map((v) => v.label).join(), 'Watch video 1,Watch video 2,Watch video 3', 'speaker analysis: three video buttons');
  eq(d.videos.map((v) => new URL(v.url).searchParams.get('v')).join(), 'eVFzbxmKNUw,zy2Zj8yIe6c,v1ojZKWfShQ', 'speaker analysis: the three links as given');
  ok_(d.videos.every((v) => v.url.startsWith('https://www.youtube.com/watch?v=')), 'speaker analysis: links are YouTube watch URLs');
  eq(Date.parse(d.dueAt), Date.UTC(2026, 10, 9, 9, 0), 'speaker analysis: due 10:00 on 9 Nov (UTC+1)');
  ok_(!d.unconfirmed, 'speaker analysis: due date is confirmed, no badge');
}
