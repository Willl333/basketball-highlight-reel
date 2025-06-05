# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API

### `POST /api/impactScore`

Calculate a player's impact score from basic box score data. Pass a JSON body with any of the following fields:

```
{
  "points": 0,
  "assists": 0,
  "rebounds": 0,
  "steals": 0,
  "blocks": 0,
  "turnovers": 0,
  "minutesPlayed": 0
}
```

The response will contain a numeric `score` representing contribution per minute.
