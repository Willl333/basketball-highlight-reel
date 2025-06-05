const express = require('express');
const cors = require('cors');
const path = require('path');
const generateRenderPlan = require('./renderPlan');
const { saveBase64Video, listUploads, UPLOAD_DIR } = require('./uploadManager');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/uploads', express.static(UPLOAD_DIR));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Highlight backend running 🎉' });
});

// Upload a base64-encoded video
app.post('/api/uploads', (req, res) => {
  const { data, extension } = req.body || {};
  if (!data) {
    return res.status(400).json({ error: 'Missing video data' });
  }
  const file = saveBase64Video(data, extension);
  res.json({ file });
});

// List uploaded videos
app.get('/api/uploads', (_req, res) => {
  res.json({ files: listUploads() });
});

app.post('/api/renderPlan', (req, res) => {
  const plan = generateRenderPlan(req.body || {});
  res.json({ plan });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);
