# basketball-highlight-reel

Simple Express API for generating basketball highlight reel plans.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The server listens on `http://localhost:3000` by default.

## API

### `GET /api/health`

Health check endpoint. Returns a simple status message.

### `POST /api/renderPlan`

Generate a highlight reel render plan. The request body accepts various
fields describing the video, teams and desired style. Example:

```json
{
  "title": "Top Plays",
  "gameDate": "2024-06-14",
  "teams": [
    { "name": "Raptors", "color": "#ce1141" },
    { "name": "Lakers", "color": "#552583" }
  ],
  "structure": { "type": "montage", "highlightCount": 10 },
  "style": { "preset": "broadcast" }
}
```

The response contains the full plan with defaults applied.
