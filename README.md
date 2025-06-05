# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Development

Run the server with:

```bash
npm run dev
```

### API Endpoints

- `POST /api/renderPlan` – generate a simple render plan.
- `POST /api/reel` – run the placeholder highlight-reel algorithm. Send `user`, `video` and `options` objects in the request body.

### Algorithm

See `highlightAlgorithm.js` for a high-level skeleton of the steps used to build a highlight reel. These functions are stubs that mirror the workflow described in the project documentation.
