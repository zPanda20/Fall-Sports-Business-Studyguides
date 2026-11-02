# Fall Sports Business Study Guides

A calm, minimalist study app for two MSc Sports Business Management courses: **Accounting & Forecasting** and **Business Strategy**. Each topic has a plain-language explanation, key terms, a sports example built around a consistent fictional team, exam-style practice questions, and curated videos. There are also flashcards, search, dark mode, and progress tracking.

This is an unofficial, student-made study aid. It supplements lectures and course materials and does not replace them. All explanations are written from scratch, and all teams and numbers are fictional.

## Features

- Topic pages: plain words, key terms, sports example, practice quiz, videos
- Quiz mode (multiple choice with explanations, plus self-checked exercises)
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
2. Fill in the fields: `simple`, `terms`, `example`, `questions`, `videos`.
3. Import it in `src/data/index.js` and add it to the `topics` array. Its `id` must match a unit id in the course outline in that same file. Units without a topic show as "Coming soon".
4. Run `npm run verify`.

**Numbers in the Accounting topics are computed in code** (`src/lib/cvp.js`), not typed by hand, so the written steps, tables, chart and quiz answers always agree. `npm run verify` checks them against hand-calculated values.

**Videos:** only add a link after opening it and confirming the title and channel. Dead or wrong links are worse than none.

## Project layout

```
src/
  data/          course outlines and topic content
  lib/           progress, theme, formatting, CVP maths
  components/    quiz, example blocks, break-even chart
  pages/         home, course, topic, flashcards, search
scripts/
  verify-numbers.mjs
```
