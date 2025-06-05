function generateRenderPlan(opts = {}) {
  const {
    focusMode = 'all',
    structureType = 'montage',
    duration = 60,
    highlightCount = 5,
    resolution = '1080p',
  } = opts;

  const clipLength = Math.floor(duration / highlightCount);
  const clips = Array.from({ length: highlightCount }, (_, i) => ({
    start: i * clipLength,
    end: i * clipLength + clipLength,
    label:
      structureType === 'countdown'
        ? `highlight-${highlightCount - i}`
        : `highlight-${i + 1}`,
  }));

  return {
    focusMode,
    structureType,
    duration,
    highlightCount,
    resolution,
    clips,
  };
}
module.exports = generateRenderPlan;

