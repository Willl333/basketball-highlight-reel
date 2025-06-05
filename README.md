# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Usage

Start the server with `node server.js` and interact with the following endpoints:

### `POST /api/uploads`
Upload a base64 encoded video. Body should include:
```
{
  "data": "BASE64_STRING",
  "extension": "mp4" // optional
}
```
Returns the stored file id and filename.

### `GET /api/uploads`
Returns a list of previously uploaded videos.

### `POST /api/renderPlan`
Pass highlight options grouped by section:
```
{
  "videoSource": { ... },
  "basicInfo": { ... },
  "focusSettings": { ... },
  "highlightStructure": { ... },
  "styleSettings": { ... },
  "visualEffects": { ... },
  "audioSettings": { ... },
  "introOutro": { ... },
  "advancedOptions": { ... }
}
```
The response contains the same options plus a mock list of clips.
