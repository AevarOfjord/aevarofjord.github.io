# Aevar Oefjoerd

Project portfolio for [aevarofjord.github.io](https://aevarofjord.github.io/). Static HTML and CSS with progressive JavaScript for figure viewers and simulation playback. No build step, package installation, or third-party frontend services.

Preview locally:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8080`.

- `index.html` — portfolio, a numbered ledger of eleven projects
- `experience.html` — roles
- `education.html` — degrees, credential, and athletics
- `about.html` — short bio and skills
- `contact.html` — email, GitHub, LinkedIn, résumé
- `ledger.css` — white field, blue accent, left chapter spine
- `projects/` — eleven project pages plus redirects preserving former URLs
- `styles.css` — shared type, case-study layout, and print styles
- `script.js` — kept for older gallery behavior; the ledger home does not depend on it
- `assets/projects/` — selected original CAD renders, experiment plots, screenshots, and simulation recordings
- `fonts/` — self-hosted SIL Open Font License webfonts (Geist and Instrument Serif)
- `Aevar-Oefjoerd-Resume.pdf` — resume
- `docs/content-sources.md` — source references and limits on project claims
- `docs/design-notes.md` — design system and Image Gen concept prompts

To add a project, add a numbered row to the ledger in `index.html` and a page under `projects/`. Copy an existing case study, then update its title, metadata, canonical URL, images, and next-project link. Figure links work without JavaScript. Detailed pages also open an enlarged viewer.

Planar CubeSat is row 01. Robotic Arm Development is the overview of the Modular, Foldable Desktop, and Planar arms. The chess system also has its own Planar Robotic Arm page and stays marked in development. The earlier optimized-arm URL redirects to the overview. Robotic Hand is excluded, and its old URL redirects home. Steam Bath Ventilation Improvement keeps that descriptive title. Mac Performance Monitor is the Pulse app. The other Pulse apps are outside this selection.

GitHub Pages serves the repository root from `main`; `.nojekyll` preserves plain static serving. Publishing requires pushing the reviewed website files to that branch. `Project Folders/` contains the selected local source collection. `_Previous project collection/` preserves the earlier broad collection and research files. Both are ignored and are not website assets.
