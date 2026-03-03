# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build
npm test         # Run tests (jest/react-testing-library)
npm run deploy   # Build and deploy to GitHub Pages (gh-pages)
```

## Architecture

React 17 SPA using `HashRouter` (required for GitHub Pages static hosting). Routing is flat with five main sections: About, Projects, WorkExperience, Skills, Education.

**Theme system:** Theme state lives in `App.js` and is persisted to `localStorage`. It is passed down via styled-components `ThemeProvider`. Theme objects are defined inline in `App.js` (light/dark). The files `src/themes.js` and `src/styles.js` exist but are **not currently used** — all active theming is done via `createGlobalStyle` and inline styled-components in each component.

**Content is data-driven:** Each section component defines its own data arrays inline (e.g., `projectData` in `Projects.js`, `experienceData` in `Timeline.js`). To update portfolio content, edit those arrays directly in the component files.

**Responsive nav:** Desktop shows a horizontal nav bar; below 1350px the nav hides and a hamburger toggles a slide-in sidebar. Both are implemented with CSS classes toggled in `App.js`.

**Key component relationships:**
- `WorkExperience` → renders `Timeline` → renders `TimelineItem` for each job entry
- `Projects` — self-contained, all project cards and data are in one file
- Assets (images, audio, PDF CV) live in `src/assets/` and are imported directly by components

**Deployment:** Hosted at `https://darex20.github.io/my-portfolio` via `gh-pages`. The `HashRouter` is intentional to avoid 404s on GitHub Pages.
