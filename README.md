# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API

### `POST /api/renderPlan`
Generate a simple render plan for a highlight reel. Expects JSON
describing options and returns a list of clips.

### `POST /api/feedback`
Submit feedback about a generated highlight reel. The request body can
contain any fields and will be stored in memory.

### `GET /api/feedback`
Retrieve all feedback that has been submitted during the server's
current session.
