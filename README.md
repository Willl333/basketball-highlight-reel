# basketball-highlight-reel

AI-powered basketball highlight reel generator.

## Setup

Install dependencies using npm:

```bash
npm install
```

Start the API server:

```bash
node server.js
```

The server exposes a `/api/renderPlan` endpoint that returns a mock list of
highlight clip timings.

## Preparing highlights from a local file

1. Ensure your game footage is accessible on the local filesystem (e.g.
   `/path/to/game.mp4`).
2. With the server running, request a highlight plan that references your
   local file:

   ```bash
   curl -X POST http://localhost:3000/api/renderPlan \
     -H 'Content-Type: application/json' \
     -d '{"videoPath":"/path/to/game.mp4"}' > plan.json
   ```
3. The `plan.json` file will contain an array of clip start and end times.
4. Use `ffmpeg` to cut each clip and then concatenate them into the final
   highlight reel:

   ```bash
   # example for one clip
   ffmpeg -i /path/to/game.mp4 -ss 12 -to 20 -c copy clip1.mp4

   # concatenate clips listed in clips.txt
   ffmpeg -f concat -safe 0 -i clips.txt -c copy highlight.mp4
   ```

The `clips.txt` file should contain lines in the form `file 'clip1.mp4'` for
all generated clips. Adjust the timecodes based on the values in
`plan.json`.

