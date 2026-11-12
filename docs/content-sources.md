# Portfolio content sources

Reviewed on November 12, 2026. Content is based on public project repositories, the owner's existing portfolio, and the local master's-project comparison results supplied in the workspace.

| Project or content | Source | Scope of claims |
| --- | --- | --- |
| Biography, education, experience, contact details, résumé | [Previous portfolio source](https://github.com/AevarOfjord/aevarofjord.github.io) | Existing owner-authored content; the full experience page is retained. |
| Satellite testbed | [Repository](https://github.com/AevarOfjord/mpc-air-bearing-satellite), [thesis](https://doi.org/10.13023/etd.2025.583) | Hardware metrics are reported results from the previous portfolio, linked to the published thesis for experimental context. Less than 2% deviation refers specifically to total thruster usage, not all simulation quantities. |
| 3D inspection satellite | [README](https://github.com/AevarOfjord/3D-MPC-Inspection-Satellite/blob/main/README.md) | Simulation-first work around stationary targets; not flight software or a demonstrated moving-target rendezvous system. |
| Dual-arm chess robot | [README](https://github.com/AevarOfjord/Automatic-Chess/blob/main/README.md) | Planar, fixed-height sliding; blocked moves skipped. Digital twin and design exist; hardware in progress. |
| Inverted pendulum | [README](https://github.com/AevarOfjord/Inverted-Pendulum/blob/main/README.md) | Best deadline-safe simulation results at 1–3 links; narrower margins at 4–5; 6–7 quality-only; 8 has no converged public winner. No hardware validation claim. |
| Pulse for Mac | [README](https://github.com/AevarOfjord/Pulse-Mac-Monitoring/blob/main/README.md) | Native local-only Apple silicon performance monitor; link to the repository for release status and compatibility. |
| iOS Organizer | [README](https://github.com/AevarOfjord/IOS-Organizer/blob/main/README.md) | Agent-guided preview and organization workflow. Not a claim of universal or completely automatic layout compatibility. |
| Pulse WiFi | [README](https://github.com/AevarOfjord/Pulse-Mac-Wifi/blob/main/README.md) | Wi-Fi health and configuration checks; not a certification of network trustworthiness. |
| Lava rock processing | [Capstone report](https://doi.org/10.58090/usi.1491793), previous portfolio | Mechanical design and a tested scaled prototype. |

## Media provenance

Most files are copied from the owner's public repositories; the satellite comparison plot comes from the local research material. No stock media or AI-generated representations of project results are used.

- `satellite.jpg`: `mpc-air-bearing-satellite/images/satellite.jpg`.
- `satellite-trajectory.png`: local `Master's Project/Presentation/Data/Comparison/Test/trajectory_comparison.png`. The adjacent `statistics.csv` corroborates final position error 0.0241 m, final attitude error 0.51°, and total thruster usage 188.04 s versus 190.80 s (1.47% difference).
- `mission-viewer.png`, `mission-studio.png`: `3D-MPC-Inspection-Satellite/docs/assets/readme/Viewer-overview.png` and `Studio-overview.png`.
- `chess-cad.png`: `Automatic-Chess/Images/Assembly_2026-Jul-12_05-00-20PM-000_CustomizedView53060410516.png`.
- `chess-simulator.png`: `Automatic-Chess/Images/simulator.png`.
- `pendulum-results.png`: `Inverted-Pendulum/data/cross_system_comparison.png`.

The local `Master's Project/` folder is retained as source material and excluded from Git. Only the selected trajectory image is copied into the website assets.
