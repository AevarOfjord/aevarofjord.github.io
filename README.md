# Aevar Oefjoerd

Project portfolio for [aevarofjord.github.io](https://aevarofjord.github.io/). Static HTML and CSS with progressive JavaScript for project filters, figure viewers, and simulation playback. No build step, package installation, or third-party frontend services.

Preview locally:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8080`.

- `index.html` — portfolio with a featured thesis project and ten additional project cards
- `projects/` — eleven project pages plus redirects preserving former URLs
- `styles.css` — shared responsive layout, components, and print styles
- `script.js` — category filters; all content remains available with JavaScript disabled
- `experience.html` and `experience.css` — full experience and education page, adapted from the previous homepage
- `assets/projects/` — selected original CAD renders, experiment plots, screenshots, and simulation recordings
- `fonts/` — self-hosted SIL Open Font License webfonts (Geist and Instrument Serif)
- `Aevar-Oefjoerd-Resume.pdf` — resume
- `docs/content-sources.md` — source references and limits on project claims
- `docs/design-notes.md` — design system and Image Gen concept prompts

To add a project, add an image card to the gallery in `index.html`. Set `data-categories` to space-separated values from `controls`, `robotics`, `software`, and `mechanical`. Update the initial count in `#project-count`. The gallery uses three columns on desktop, two on tablets, and one on phones. Detailed projects can copy an existing page in `projects/`; update its title, metadata, canonical URL, images, and next-project link. Figure links work without JavaScript; detailed pages also provide an enlarged viewer.

The featured Planar CubeSat thesis remains above the filterable project index. Category counts refer to the ten additional projects. Robotic Arm Development combines the Modular, Foldable Desktop, and Planar arms; the chess system also has a dedicated Planar Robotic Arm case study. The earlier optimized-arm URL redirects to that overview. Robotic Hand is excluded at the owner's request, and its old URL redirects to the project index. Steam Bath Ventilation Improvement replaces the former client-named page. Mac Performance Monitor is the Pulse monitoring app; the other Pulse apps are outside this selection.

GitHub Pages serves the repository root from `main`; `.nojekyll` preserves plain static serving. Publishing requires pushing the reviewed website files to that branch. `Project Folders/` contains the selected local source collection. `_Previous project collection/` preserves the earlier broad collection and research files. Both are ignored and are not website assets.
