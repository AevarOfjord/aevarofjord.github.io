# Aevar Oefjoerd

Project portfolio for [aevarofjord.github.io](https://aevarofjord.github.io/). Static HTML, CSS, and a small progressive JavaScript filter. No build step, package installation, or third-party frontend services.

Preview locally:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8080`.

- `index.html` — portfolio with a featured thesis project and twelve additional selected projects
- `projects/` — thirteen project pages, with direct links that work on GitHub Pages
- `styles.css` — shared responsive layout, components, and print styles
- `script.js` — category filters; all content remains available with JavaScript disabled
- `experience.html` and `experience.css` — full experience and education page, adapted from the previous homepage
- `assets/projects/` — CAD renders and screenshots from the public project repositories
- `fonts/` — self-hosted SIL Open Font License webfonts (Geist and Instrument Serif)
- `Aevar-Oefjoerd-Resume.pdf` — resume
- `docs/content-sources.md` — source references and limits on project claims
- `docs/design-notes.md` — design system and Image Gen concept prompts

To add a project, add an article to the gallery or list in `index.html`. Set `data-categories` to space-separated values from `controls`, `robotics`, `software`, and `mechanical`. Update the initial count in `#project-count`. Detailed projects can copy an existing page in `projects/`; update its title, metadata, canonical URL, images, and next-project link.

The featured thesis remains above the filterable project index. Category counts refer to the twelve additional projects. The collection contains exactly the thirteen projects selected by the owner; Mac Performance Monitor is the Pulse monitoring app, and the other Pulse apps are outside this selection.

GitHub Pages serves the repository root from `main`; `.nojekyll` preserves plain static serving. Publishing requires pushing the reviewed website files to that branch. `Project Folders/` contains the selected local source collection. `_Previous project collection/` preserves the earlier broad collection and research files. Both are ignored and are not website assets.
