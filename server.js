const express = require('express');
const cors = require('cors');
const generateRenderPlan = require('./renderPlan');
const multer = require("multer");
const path   = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// ---------- video upload ----------
const upload = multer({ dest: path.join(__dirname, "uploads") });

// field name must be "video"
app.post('/api/renderPlan', async (req, res) => {
  try {
    const plan = await generateRenderPlan(req.body || {});
    res.json({ plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Render plan failed" });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Highlight backend running 🎉' });
});

app.post('/api/renderPlan', (req, res) => {
  const plan = generateRenderPlan(req.body || {});
  res.json({ plan });
});

app.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
);

