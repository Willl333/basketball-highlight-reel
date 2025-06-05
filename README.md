# basketball-highlight-reel

Small demo API for generating basketball highlight reel plans.

## Running the server

```bash
npm install
npm run dev
```

The server exposes two endpoints:

- `GET /api/health` – simple health check.
- `POST /api/renderPlan` – generate a highlight plan.

## Render plan options

`POST /api/renderPlan` accepts a JSON body with the following optional fields:

- `title` – name of the reel.
- `gameDate` – date of the game.
- `description` – short description.
- `focusMode` – `all`, `team`, or `player`.
- `structureType` – `montage`, `countdown`, or `chronological`.
- `duration` – total video length in seconds.
- `highlightCount` – how many highlights to include.
- `resolution` – video resolution such as `720p` or `1080p`.
- `stylePreset` – stylistic preset for the edit.

The response contains the merged options, a simple list of clip timecodes, and a
few AI-style suggestions.

This project is not a full video editor but provides a starting point for an
AI-assisted highlight workflow.
