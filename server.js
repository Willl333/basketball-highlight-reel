const express = require('express');
const cors = require('cors');
const generateRenderPlan = require('./renderPlan');
const { calculateMetrics } = require('./analytics');

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

app.post('/api/analytics', (req, res) => {
  const metrics = calculateMetrics(req.body || {});
  res.json({ metrics });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);

