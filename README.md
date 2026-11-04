# Fall Sports Business Study Guides

A calm, minimalist study app for five MSc Sports Business Management courses: **Accounting & Forecasting**, **Business Strategy**, **Market Research**, **International Sports Governance** and **Foundations of Sport Management**. Each topic has a plain-language explanation, key terms, a sports example built around a consistent fictional team, exam-style practice questions, and curated videos. There are also flashcards, search, dark mode, and progress tracking.

This is an unofficial, student-made study aid. It supplements lectures and course materials and does not replace them. All explanations are written from scratch, and all teams and numbers are fictional.

## Features

- Topic pages with a sidebar and one section at a time: plain words (interactive slides), key terms, a real example (with sources and dates), a sports example (fictional team), practice quiz, videos
- Quiz mode (multiple choice with explanations, plus self-checked exercises). A wrong answer offers "Review this section" and a ready-made message for the student's preferred AI (ChatGPT and Perplexity open prefilled; Claude, Gemini, Mistral and DeepSeek copy the message and open the site)
- Flashcards for each topic or a whole course
- Search across topics, terms and formulas
- Dark mode, mobile-friendly layout
- Progress saved in the browser (localStorage). No accounts and no backend.

## Run it locally

```bash
npm install
npm run dev        # development server
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run verify     # check the worked numbers and quiz structure
```

Requires Node 18 or newer.

## Deploy on Render (free static site)

1. Push this repo to GitHub.
2. In Render, choose **New → Blueprint** and select the repo. It reads `render.yaml` and creates the static site automatically.
   - Or create a **Static Site** by hand with build command `npm install && npm run build` and publish directory `dist`.
3. Every push to `main` redeploys. Share the Render URL with the class.

The app uses hash-based routing (`/#/topic/...`), so links work on any static host without rewrite rules.

## Add or edit a topic

Content lives in `src/data/`, one file per topic, separate from the code.

1. Copy one of the sample topics (`src/data/accounting/cost-volume-profit.js` or `src/data/strategy/five-forces.js`).
2. Fill in the fields: `plain` (slides), `terms`, `real` (`{title, note, slides}`, must end with a sources slide), `sports` (`{title, universe, slides}`), `questions` (each with `review: {section, slide}` pointing at the slide that explains it), `videos`. Slides are `{kicker?, title, blocks}`; block types are listed at the top of `src/components/Blocks.jsx`.
3. Import it in `src/data/index.js` and add it to the `topics` array. Its `id` must match a unit id in the course outline in that same file. Units without a topic show as "Coming soon".
4. Run `npm run verify`.

**Numbers in the Accounting topics are computed in code** (`src/lib/cvp.js`), not typed by hand, so the written steps, tables, chart and quiz answers always agree. `npm run verify` checks them against hand-calculated values.

**What is filled in:** topics are written only from the course slides and guides. Accounting & Forecasting covers accounting basics, the accounting process, statements and notes, assets, liabilities and equity, and cost-volume-profit. Business Strategy covers what strategy is, strategic leadership, PESTEL, Five Forces, internal analysis, SWOT, and performance and business models. Units with no source material stay "Coming soon". Two topics carry a "Partly covered" note because a chapter was missing from the materials (Chapter 6 and Chapter 11). Items marked not-for-exam in the slides are left out.

**Market Research** has its full outline from the syllabus (12 sessions plus 2 asynchronous activities, each listing the topics it covers) and its own dark sapphire look. Its units show "Coming soon" until course slides are added. When you add a topic, give it `course: 'market-research'` and an `id` from the outline. Courses with their own look are listed in `SKINNED` in `src/App.jsx` and styled under "skins" in `src/styles.css`.

**International Sports Governance** and **Foundations of Sport Management** also have their full syllabus outlines, with a "Coming soon" tag until slides are added. Each has its own colour-shifting look: alexandrite (teal-green moving through blue-violet to raspberry) and opalescent (a pearly base with a play of colour through violet, cyan, rose and jade). The palettes live in `src/skins.css` and move only on the home page and those courses' pages, and not at all with reduced motion.

**Clarification bookmarks:** every topic and every slide has a bookmark button. Bookmarks are saved in the browser (`sbsg:bookmarks:v1`), listed on the Bookmarks page with an optional note, and can be sent to an AI with a ready-made message that includes the slide's text and the note.

**Due dates:** the Due dates page and the home page's "Coming up" panel list assignments with a live countdown. Ticking one archives it (with an undo, and "Put back" in the archive). Done items and any changed dates are saved in the browser (`sbsg:deadlines:v1`), so each person keeps their own list. Edit `src/data/deadlines.js` to add or change items; times are written with a UTC offset (the platform's Monaco time, UTC+1 in November) and shown in the viewer's own time zone. Items with `dueAt: null` get a date picker (and an optional `approx` such as "Early December"); `group: true` adds a Group project tag.

**Quick test and exam practice:** each course page has a Quick test (a random 5, 10 or 15 multiple-choice questions drawn from every topic, with the topics optionally narrowed) and Exam practice (written exam-level questions with model answers and a self-marking checklist). Each topic's Practice section also has an Exam-style tab. Questions live in the topic files as `questions` (multiple choice and exercises) and `exam` (`{ id, marks, q, answer[], marking[] }`).

**Visuals:** slide blocks `flow`, `cycle`, `bars`, `figure` (an image slot that shows a labeled placeholder until the file is added to `public/assets/`), `balance` (an animated balance sheet that you step through) and `sheet` (a working mini spreadsheet with checkable tasks, powered by `src/lib/sheet.js`). `npm run assets` writes ASSETS-TO-FIND.md, the list of images and videos still to supply.

**Read aloud:** the Course basics panel and every slide have a Read aloud button that uses the browser's own voices (nothing is sent anywhere).

**Progress rings:** circular rings show topics done per course, sections opened, quiz scores, quick-test scores, self-marked exam points and handed-in assignments.

**Extra check files:** every `scripts/checks/*.mjs` runs as part of `npm run verify` (it default-exports `({ eq, ok_, near }) => {}`).

**Videos:** most topics have none yet and the Watch section says so. Only add a link after opening it and confirming the title and channel. Dead or wrong links are worse than none.

## Project layout

```
src/
  data/          course outlines and topic content
  lib/           progress, theme, formatting, CVP maths
  components/    slides, content blocks, quiz, AI hand-off, break-even chart
  pages/         home, course, topic, flashcards, search
scripts/
  verify-numbers.mjs
```
