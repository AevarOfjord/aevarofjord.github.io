# Portfolio content sources

Reviewed on November 12, 2026. Content is based on public project repositories, the owner's existing portfolio, and the local project materials selected by the owner. The public gallery contains thirteen selected projects. Source collections and private repositories are not published or linked as public downloads.

| Project or content | Source | Scope of claims |
| --- | --- | --- |
| Biography, education, experience, contact details, résumé | [Previous portfolio source](https://github.com/AevarOfjord/aevarofjord.github.io) | Existing owner-authored content; the full experience page is retained. |
| Satellite testbed | [Repository](https://github.com/AevarOfjord/mpc-air-bearing-satellite), [thesis](https://doi.org/10.13023/etd.2025.583) | Hardware metrics are reported results from the previous portfolio, linked to the published thesis for experimental context. Less than 2% deviation refers specifically to total thruster usage, not all simulation quantities. |
| 3D inspection satellite | [README](https://github.com/AevarOfjord/3D-MPC-Inspection-Satellite/blob/main/README.md) | Simulation-first work around stationary targets; not flight software or a demonstrated moving-target rendezvous system. |
| Dual-arm chess robot | [README](https://github.com/AevarOfjord/Automatic-Chess/blob/main/README.md) | Planar, fixed-height sliding; blocked moves skipped. Digital twin and design exist; hardware in progress. |
| Inverted pendulum | [README](https://github.com/AevarOfjord/Inverted-Pendulum/blob/main/README.md) | Best deadline-safe simulation results at 1–3 links; narrower margins at 4–5; 6–7 quality-only; 8 has no converged public winner. No hardware validation claim. |
| Mac Performance Monitor (Pulse for Mac) | [README](https://github.com/AevarOfjord/Pulse-Mac-Monitoring/blob/main/README.md), local `Mac-Performance-Monitor/README.md` | Native Apple silicon performance monitor; described as the 2.0 preview, without a claim of support for all hardware or sensors. |
| iOS Organizer | [README](https://github.com/AevarOfjord/IOS-Organizer/blob/main/README.md) | Agent-guided preview and organization workflow. Not a claim of universal or completely automatic layout compatibility. |
| Lava rock processing | [Capstone report](https://doi.org/10.58090/usi.1491793), previous portfolio | Mechanical design and a tested scaled prototype. |
| Gufuhellir Fontana | Local STEP model, `steam-bath-cutaway.png`, Python case/solver scripts, and October 2026 engineering reports | CAD and numerical ventilation/thermal study. No invented temperature improvements or field-validation claims. |
| Robotic Arm | Local `Robotic-Arm-V1/README.md`, `models/mechanical_v05.py`, engineering renders, original/2.0/Arduino/ESP32 source folders | Multiple design/control iterations. v0.5 is a CAD engineering study under validation, not a qualified fabrication release. |
| Optimized Robotic Arm | Local `Optimized-robotic-arm/README.md`, Python model/API and React frontend | Four-DOF static pose/torque MVP. Dynamic MPC and DMPC are roadmap items, not implemented results. |
| Robotic Hand | Local `Robotic Hand/Vol 1`, `Vol 2`, `Vol 3` CAD assemblies and STL files | Mechanical design exploration. No autonomous grasping, clinical performance, or authorship claim over the reference thesis in the archive. |
| Grain / CMMS | Local current `Grain/README.md` and application source layout | Public-facing product summary of facilities workflows and stack. No customer data, internal records, deployment credentials, or private repository links. |
| Photomerge | Local `Photomerge/README.md` and source | Desktop MVP with local stitching, review, export, and mission-file editing. Does not directly operate aircraft. |

## Media provenance

Most files are copied from the owner's public repositories; the satellite comparison plot comes from the local research material. No stock media or AI-generated representations of project results are used.

- `satellite.jpg`: `mpc-air-bearing-satellite/images/satellite.jpg`.
- `satellite-trajectory.png`: local `Master's Project/Presentation/Data/Comparison/Test/trajectory_comparison.png`. The adjacent `statistics.csv` corroborates final position error 0.0241 m, final attitude error 0.51°, and total thruster usage 188.04 s versus 190.80 s (1.47% difference).
- `mission-viewer.png`, `mission-studio.png`: `3D-MPC-Inspection-Satellite/docs/assets/readme/Viewer-overview.png` and `Studio-overview.png`.
- `chess-cad.png`: `Automatic-Chess/Images/Assembly_2026-Jul-12_05-00-20PM-000_CustomizedView53060410516.png`.
- `chess-simulator.png`: `Automatic-Chess/Images/simulator.png`.
- `pendulum-results.png`: `Inverted-Pendulum/data/cross_system_comparison.png`.
- `fontana-cutaway.png`: local `Gufuhellir Fontana/steam-bath-cutaway.png`; geometric opening annotations are not flow-result vectors.
- `robotic-arm-cad.png`: local `Robotic-Arm-V1/renders/mechanical-v05/exterior-front.png`; actual CAD study, not a concept rendering or completed physical arm.
- `ios-layout-preview.png`: local `IOS-Organizer/docs/assets/layout-preview.png`; fictional example apps and illustrative icons.

The local selected collection is in `Project Folders/`; the earlier collection is preserved in `_Previous project collection/`. Both are excluded from Git. Only the separately reviewed images in `assets/projects/` are website assets. The earlier local 3D satellite source documents the thruster/reaction-wheel branch; the existing public screenshots illustrate the later inspection environment. Earlier README performance numbers are not reused as new validated results.
