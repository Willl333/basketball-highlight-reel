function generateRenderPlan(opts = {}) {
  const defaults = {
    title: 'Untitled Highlight Reel',
    gameDate: null,
    description: '',
    teams: [
      { name: 'Home', color: '#ff0000' },
      { name: 'Away', color: '#0000ff' }
    ],
    focus: {
      mode: 'all',
      featuredPlayers: []
    },
    structure: {
      type: 'montage',
      duration: 30,
      highlightCount: 5
    },
    resolution: '1080p',
    aspectRatio: 'landscape',
    style: {
      preset: 'standard',
      customEffects: []
    },
    audio: {
      commentaryStyle: 'excited',
      music: 'hip-hop',
      levels: { commentary: 0.8, music: 0.5, game: 0.7 }
    },
    effects: {
      slowMotion: 0,
      replay: true,
      zoom: 0
    },
    intro: { text: '', branding: null },
    outro: { text: '', branding: null }
  };

  const config = {
    ...defaults,
    ...opts,
    teams: opts.teams || defaults.teams,
    focus: { ...defaults.focus, ...(opts.focus || {}) },
    structure: { ...defaults.structure, ...(opts.structure || {}) },
    style: { ...defaults.style, ...(opts.style || {}) },
    audio: { ...defaults.audio, ...(opts.audio || {}) },
    effects: { ...defaults.effects, ...(opts.effects || {}) },
    intro: { ...defaults.intro, ...(opts.intro || {}) },
    outro: { ...defaults.outro, ...(opts.outro || {}) }
  };

  const clips = opts.clips || [
    { start: 12, end: 20, label: 'dunk' },
    { start: 45, end: 52, label: 'three-pointer' },
    { start: 87, end: 94, label: 'fast break' }
  ];

  return { ...config, clips };
}
module.exports = generateRenderPlan;

