const express = require('express');
const cors = require('cors');
const generateRenderPlan = require('./renderPlan');
const highlight = require('./highlightAlgorithm');

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

// Example endpoint using the high level highlight algorithm
app.post('/api/highlightPlan', (req, res) => {
  const { video, focusMode, userSettings } = req.body || {};
  const uploaded = highlight.handleVideoUpload(video);
  let clips = highlight.detectHighlights(uploaded, focusMode, userSettings);
  clips = highlight.applyVideoTransitions(clips, 'Fade', 'default');
  const filePath = highlight.renderHighlightReel(clips, '1080p', 'mp4');
  res.json({ filePath, clips });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);

