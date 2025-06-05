# basketball-highlight-reel

This project contains a lightweight API server that generates plans for basketball highlight reels. It is intended as the starting point for a more complete application.

## Overview

The API currently exposes two endpoints:

- `GET /api/health` – health check.
- `POST /api/renderPlan` – returns a basic plan describing which clips to include.

Future development aims to support a full suite of editing features. The list below captures the main areas of functionality that would make this app a one-stop solution for highlight creation and analysis.

## Proposed Feature Areas

1. **Video Creation & Editing**
   - Upload videos or reference YouTube links.
   - Enter game details, team names and colors.
   - Choose focus on teams or individual players.
   - Different highlight structures, durations and output formats.
   - Style presets with customizable effects such as slow motion and zoom.
   - Commentary options and music selection with level control.
   - Visual effects, text callouts and overlays.
   - Intro/outro branding.
   - AI-assisted highlight detection and editing suggestions.
2. **User Creation Studio**
   - Drag‑and‑drop timeline with real-time preview.
   - AI takeover for automatic editing with manual override.
   - Template and effect customization.
3. **Profile & Stats Tracking**
   - Dashboard showing created reels and player statistics.
   - Video history with analytics and improvement suggestions.
4. **Social & Community Features**
   - Collaborative reel editing and fan voting.
   - Easy sharing to social platforms with hashtag suggestions.
5. **Advanced Scouting Tools**
   - Generate scouting reports and allow coach feedback.
6. **Training & Skill Improvement**
   - Track player progress and recommend drills.
7. **Video Quality & Special Effects**
   - Cinematic filters, slow motion and AR tracking effects.
8. **Feedback & Revisions**
   - Revision history and AI-driven improvements.
9. **Monetization & Marketing**
   - Watermarking, merchandising and subscription tiers.
10. **Security & Privacy**
    - Data encryption, privacy settings and parental controls.

These ideas represent the long-term vision for the project. The current codebase is intentionally minimal, providing a small Express server to build upon.

## Development

Install dependencies and start the server in development mode:

```bash
npm install
npm run dev
```

To test the health endpoint once running, open `http://localhost:3000/api/health` in your browser or use `curl`.

