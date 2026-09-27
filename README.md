# Kirubel Alemu — Portfolio

A single-page portfolio built with React 18 and Vite.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run lint     # ESLint
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Editing content

All content (profile, social links, skills and projects) lives in `src/data.js`.
To add a project, add an entry to `projects` and drop a screenshot in `public/images/`
(WebP, about 960px wide keeps it small).

## Structure

- `src/components/`: page sections (Nav, Hero, About, Projects, Contact, Footer) and the inline SVG `Icon`
- `src/hooks/`: theme toggle, scroll-reveal and active-section tracking
- `src/styles.css`: all styles, with light and dark theme tokens at the top
