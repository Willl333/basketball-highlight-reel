# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## API Endpoints

### `POST /api/advancedStats`

Calculates advanced statistics from a set of player stats. The request body
should contain fields like `points`, `fgAttempts`, `ftAttempts`, `assists`, and
more. The response includes:

- `tsPercent` – true shooting percentage
- `per` – a simplified Player Efficiency Rating
- `impact` – custom player impact score

### `POST /api/gameComparison`

Accepts an array of game stat objects and returns the same list with advanced
metrics added for each game. This is useful for comparing performances across
multiple games or seasons.
