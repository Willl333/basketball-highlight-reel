function generateRenderPlan(opts = {}) {
  const {
    structureType = 'montage',
    duration = 60,
    highlightCount = 3,
    resolution = '1080p',
    outputFormat = 'landscape',
    focus = 'all',
    clips = []
  } = opts;

  const defaultClips = [
    { start: 12, end: 20, label: 'dunk' },
    { start: 45, end: 52, label: 'three-pointer' },
    { start: 87, end: 94, label: 'fast break' }
  ];

  return {
    structureType,
    duration,
    highlightCount,
    resolution,
    outputFormat,
    focus,
    clips: clips.length ? clips.slice(0, highlightCount) : defaultClips.slice(0, highlightCount)
  };
}

module.exports = generateRenderPlan;

