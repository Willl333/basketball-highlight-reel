# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Monetization API

This repo contains example endpoints to expose subscription plans and to mock
purchasing those plans.  These are **not** full payment integrations but can be
used by a front end to prototype plan selection flows.

### `GET /api/plans`

Returns available subscription and one‑time purchase options.

### `POST /api/purchase`

Accepts a `planId` and responds with the matching plan. In a real
application this route would integrate with a payment gateway.
