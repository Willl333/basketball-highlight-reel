# Basketball Highlight Reel

Simple API for generating a basic render plan for a basketball highlight
reel.  The `/api/renderPlan` endpoint accepts an options object and returns
a JSON plan describing how the video should be edited.  The plan now
supports extra metadata like game information, team colors and style
preferences.

Example request:

```bash
curl -X POST http://localhost:3000/api/renderPlan \
  -H "Content-Type: application/json" \
  -d '{"title":"Championship Highlights","structure":{"type":"countdown"}}'
```

Example response (truncated):

```json
{
  "title": "Championship Highlights",
  "structure": { "type": "countdown", "duration": 30, "highlightCount": 5 },
  "clips": [
    { "start": 12, "end": 20, "label": "dunk" }
  ]
}
```
