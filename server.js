const express = require('express');
const cors = require('cors');
const generateRenderPlan = require('./renderPlan');
const {
  trueShootingPercentage,
  simplePER,
  playerImpactScore,
} = require('./analytics');

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

app.post('/api/advancedStats', (req, res) => {
  const data = req.body || {};
  const tsPercent = trueShootingPercentage(data.points, data.fgAttempts, data.ftAttempts);
  const per = simplePER(data);
  const impact = playerImpactScore(data);
  res.json({ tsPercent, per, impact });
});

app.post('/api/gameComparison', (req, res) => {
  const { games = [] } = req.body || {};
  const results = games.map(g => ({
    ...g,
    tsPercent: trueShootingPercentage(g.points, g.fgAttempts, g.ftAttempts),
    per: simplePER(g),
    impact: playerImpactScore(g),
  }));
  res.json({ games: results });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);

