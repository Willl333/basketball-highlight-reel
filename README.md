# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Development

Run the API in development mode:

```bash
npm run dev
```

### Highlight Algorithm

The `highlightAlgorithm.js` module contains a skeleton implementation of the
workflow described in the project docs. It exposes helper functions for video
upload, segmentation, highlight detection, transitions and rendering. The
`/api/highlightPlan` route demonstrates how these functions could be used to
produce a basic highlight plan.
