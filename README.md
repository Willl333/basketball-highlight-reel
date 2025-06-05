# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API Endpoints

### `POST /api/renderPlan`

Generate a simple render plan for testing purposes.

### `POST /api/generate`

Runs the high-level highlight reel algorithm and returns a skeleton response
containing selected clips and metadata. Supply a JSON body with `user`,
`video`, and optional settings like `focusMode` or `musicTrack`.
