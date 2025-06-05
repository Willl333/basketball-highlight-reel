# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API

- `GET /api/health` – basic health check.
- `POST /api/renderPlan` – returns a demo render plan.
- `POST /api/createHighlight` – runs the placeholder highlight algorithm and returns a mock highlight reel. Provide a JSON body with optional `user`, `video`, and `options` fields.
