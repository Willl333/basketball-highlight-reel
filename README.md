# basketball-highlight-reel
AI-powered basketball highlight reel generator.

## Development

### Payment Endpoint

The server exposes a stubbed payment endpoint for integration testing:

```
POST /api/pay
{
  "amount": 5,
  "currency": "USD"
}
```

It responds with a generated `paymentId`.

### Running Tests

Run the basic endpoint test with:

```bash
npm test
```

