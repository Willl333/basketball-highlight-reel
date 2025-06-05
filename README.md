# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API

### `POST /api/highlights`

Create a new highlight entry. Example payload:

```json
{
  "title": "Rivalry Game Highlights",
  "gameDate": "2024-03-12",
  "description": "Top plays from the regular season finale",
  "teamNames": ["Tigers", "Bears"],
  "focusMode": "team",
  "featuredPlayers": ["#23", "#42"],
  "source": { "youtubeUrl": "https://youtu.be/example" }
}
```

### `GET /api/highlights`

Returns a list of all stored highlight metadata.

### `GET /api/highlights/:id`

Retrieve a specific highlight entry by id.
