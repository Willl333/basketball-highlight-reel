# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Render Plan API

The `/api/renderPlan` endpoint accepts the following options:

- `focusMode` – one of `all`, `team`, or `player` (default `all`)
- `structureType` – `montage`, `countdown`, or `chronological` (default `montage`)
- `duration` – total length of the reel in seconds (default `60`)
- `highlightCount` – number of clips to include (default `5`)
- `resolution` – output resolution such as `720p`, `1080p`, or `4K` (default `1080p`)

The response contains a simple list of clips with start and end times
demonstrating where highlights could be placed.
