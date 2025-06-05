const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const generateRenderPlan = require('./renderPlan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Highlight backend running 🎉' });
});

app.post('/api/renderPlan', (req, res) => {
  const plan = generateRenderPlan(req.body || {});
  res.json({ plan });
});

// simple payment endpoint stub
app.post('/api/pay', (req, res) => {
  const { amount, currency } = req.body || {};
  if (!amount || !currency) {
    return res.status(400).json({ error: 'Missing payment details' });
  }
  const paymentId = crypto.randomBytes(8).toString('hex');
  res.json({ paymentId, status: 'received', amount, currency });
});

if (require.main === module) {
  app.listen(PORT, () =>
    console.log(`Server ready on http://localhost:${PORT}`)
  );
}

module.exports = app;

