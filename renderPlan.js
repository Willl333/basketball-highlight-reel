const DEFAULTS = {
  title: 'Highlight Reel',
  gameDate: null,
  description: '',
  focusMode: 'all',
  structureType: 'montage',
  duration: 60, // seconds
  highlightCount: 3,
  resolution: '1080p',
  stylePreset: 'standard',
  commentaryStyle: 'excited',
  musicGenre: 'hiphop',
  introText: '',
  outroText: ''
};

function generateRenderPlan(opts = {}) {
  const plan = { ...DEFAULTS, ...opts };

  // simple demo clip generation
  plan.clips = Array.from({ length: plan.highlightCount }, (_v, i) => {
    const start = Math.round((i * plan.duration) / plan.highlightCount);
    const end = start + 5;
    return { start, end, label: `highlight-${i + 1}` };
  });

  // basic AI-style suggestions
  plan.suggestions = [
    'Consider adding slow motion to your best plays.',
    'Try a cinematic style preset for dramatic effect.'
  ];

  return plan;
}

module.exports = generateRenderPlan;
