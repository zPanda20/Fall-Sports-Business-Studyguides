import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { POSES, FACES, WHO, poseUrl, faceUrl } from '../../src/companions/assets.js';
import { NEIGHBOURS, facePath } from '../../src/companions/emotions.js';
import { REACTIONS } from '../../src/companions/reactions.js';
import { line } from '../../src/companions/dialogue.js';
import { DEFAULTS } from '../../src/companions/prefs.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public');

export default function ({ eq, ok_ }) {
  // every picture the manifest names exists, is a real WebP and is not huge
  for (const who of WHO) {
    for (const pose of Object.keys(POSES[who])) {
      const f = path.join(root, poseUrl(who, pose));
      ok_(fs.existsSync(f), `${who} pose file missing: ${pose}`);
      if (fs.existsSync(f)) {
        const buf = fs.readFileSync(f);
        ok_(buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP', `${who}/${pose} is not a WebP`);
        ok_(buf.length < 200 * 1024, `${who}/${pose} is over 200 KB`);
      }
    }
    for (const face of FACES[who]) {
      ok_(fs.existsSync(path.join(root, faceUrl(who, face))), `${who} face file missing: ${face}`);
    }
    eq(Object.keys(NEIGHBOURS[who]).sort().join(), [...FACES[who]].sort().join(), `${who} emotion map covers exactly the faces`);
  }

  // moods connect: any face can reach any other through neighbouring faces, in both directions
  for (const who of WHO) {
    for (const a of FACES[who]) {
      for (const b of FACES[who]) {
        const p = facePath(who, a, b);
        ok_(p.length >= 1 && p[0] === a && p[p.length - 1] === b, `${who}: no path ${a} -> ${b}`);
        for (let i = 1; i < p.length; i++) ok_(NEIGHBOURS[who][p[i - 1]].includes(p[i]), `${who}: ${p[i - 1]} -> ${p[i]} is not a neighbouring mood`);
      }
    }
  }
  eq(facePath('seraph', 'friendly', 'shocked').join('>'), 'friendly>delighted>shocked', 'seraph neutral to shocked passes through delighted');
  eq(facePath('demon', 'deadpan', 'hysterical').join('>'), 'deadpan>smug>hysterical', 'demon neutral to hysterical passes through smug');

  // every reaction uses a pose and face that exist
  for (const who of WHO) {
    for (const [name, r] of Object.entries(REACTIONS[who])) {
      ok_(Boolean(POSES[who][r.pose]), `${who}.${name}: unknown pose ${r.pose}`);
      ok_(FACES[who].includes(r.face), `${who}.${name}: unknown face ${r.face}`);
    }
  }

  // dialogue exists at all three sarcasm levels and never swears below 'spicy'
  for (const level of ['mild', 'playful', 'spicy']) {
    for (const key of ['help', 'welcome', 'quietOn', 'previewFacepalm', 'previewLaugh', 'previewMeltdown', 'previewRespect']) {
      ok_(line('demon', key, level).length > 5, `demon.${key}.${level} missing`);
    }
  }
  const swear = /\b(shit|damn|hell|fuck|ass)\b/i;
  for (const level of ['mild', 'playful']) {
    for (let i = 0; i < 20; i++) {
      for (const key of ['help', 'welcome', 'quietOn', 'previewFacepalm', 'previewLaugh', 'previewMeltdown', 'previewRespect']) {
        ok_(!swear.test(line('demon', key, level)), `swearing at level ${level}: ${key}`);
      }
    }
  }

  // defaults: Seraph on, Demon off
  eq(DEFAULTS.seraph, true, 'Seraph is on by default');
  eq(DEFAULTS.demon, false, 'Demon is off by default');
}
