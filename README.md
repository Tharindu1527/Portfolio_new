# Tharindu Dhanushka — Portfolio

An "AI Lab / Research Console" themed portfolio site: dark terminal aesthetic, an animated neural-network background, live stat counters, and experience/projects framed as system logs and experiments.

**Stack:** React 19 · Vite · Tailwind CSS v4 · Framer Motion · react-icons

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a fully static site to `dist/` — no server or backend required. Preview the production build locally with:

```bash
npm run preview
```

## Editing content

All CV content (summary, skills, experience, projects, research, education, competitions, certifications) lives in one place: [src/data/profile.js](src/data/profile.js). Edit that file to update copy without touching component code.

To swap the résumé, replace `public/resume.pdf` (keep the filename, or update the `resume` path in `profile.js`).

## Deployment

The site is a static build (`dist/`), so it works on any static host:

**Vercel / Netlify** — connect the repo, build command `npm run build`, publish directory `dist`. Zero config needed otherwise.

**GitHub Pages** — build locally (`npm run build`), then push the contents of `dist/` to a `gh-pages` branch (e.g. via the `gh-pages` npm package), or use GitHub Actions to build and deploy `dist/` on push.

**Any other static host / shared hosting** — run `npm run build` and upload the contents of `dist/` to the web root.

If you host under a sub-path (e.g. `example.com/portfolio/`) rather than the domain root, set `base: '/portfolio/'` in [vite.config.js](vite.config.js) before building.
