function generateRenderPlan(opts = {}) {
  return {
    ...opts,
    clips: [
      { start: 12, end: 20, label: 'dunk' },
      { start: 45, end: 52, label: 'three-pointer' },
      { start: 87, end: 94, label: 'fast break' }
    ]
  };
}
module.exports = generateRenderPlan;

