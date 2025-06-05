# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API

### `POST /api/analytics`

Calculates advanced statistics from a stats payload. Example request body:

```json
{
  "points": 25,
  "fga": 20,
  "fta": 5,
  "fgm": 10,
  "ftm": 3,
  "rebounds": 8,
  "assists": 5,
  "steals": 2,
  "blocks": 1,
  "turnovers": 3
}
```

Example response:

```json
{
  "ts": 0.543,
  "per": 3.25
}
```
