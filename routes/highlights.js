const express = require('express');
const router = express.Router();

// In-memory store for highlight metadata
const highlights = [];
let idCounter = 1;

// Create a highlight entry
router.post('/', (req, res) => {
  const {
    title = '',
    gameDate = '',
    description = '',
    teamNames = [],
    focusMode = 'all',
    featuredPlayers = [],
    source = {}
  } = req.body || {};

  const highlight = {
    id: idCounter++,
    title,
    gameDate,
    description,
    teamNames,
    focusMode,
    featuredPlayers,
    source
  };

  highlights.push(highlight);
  res.status(201).json({ highlight });
});

// List all highlights
router.get('/', (_req, res) => {
  res.json({ highlights });
});

// Retrieve a single highlight
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const highlight = highlights.find((h) => h.id === id);
  if (!highlight) {
    return res.status(404).json({ error: 'Highlight not found' });
  }
  res.json({ highlight });
});

module.exports = router;
