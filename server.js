const express = require('express');
const cors = require('cors');
const generateRenderPlan = require('./renderPlan');
const { getPlans } = require('./plans');

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

app.get('/api/plans', (_req, res) => {
  res.json(getPlans());
});

app.post('/api/purchase', (req, res) => {
  const { planId } = req.body || {};
  const plans = getPlans();
  const match = [...plans.subscription, ...plans.oneTime].find(p => p.id === planId);
  if (!match) {
    res.status(400).json({ error: 'Unknown plan' });
    return;
  }
  // In a real app, integrate payment gateway here
  res.json({ status: 'success', plan: match });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);

