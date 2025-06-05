function generateRenderPlan(opts = {}) {
  const {
    videoSource,
    title = 'Highlight Reel',
    gameDate = '',
    gameDescription = '',
    teams = [],
    focusMode = 'all',
    featuredPlayers = [],
    jerseyNumbers = {},
    playerDescriptions = {},
    structure = {},
    output = {},
    style = {},
    audio = {},
    effects = {},
    intro = {},
    outro = {},
    aiAssisted = true,
    clips = [
      { start: 12, end: 20, label: 'dunk' },
      { start: 45, end: 52, label: 'three-pointer' },
      { start: 87, end: 94, label: 'fast break' }
    ]
  } = opts;

  return {
    videoSource,
    title,
    gameDate,
    gameDescription,
    teams,
    focusMode,
    featuredPlayers,
    jerseyNumbers,
    playerDescriptions,
    structure: {
      type: structure.type || 'montage',
      highlightCount: structure.highlightCount || 5,
      duration: structure.duration || 60
    },
    output: {
      resolution: output.resolution || '1080p',
      aspectRatio: output.aspectRatio || 'landscape'
    },
    style: {
      preset: style.preset || 'standard',
      effects: style.effects || []
    },
    audio: {
      commentary: audio.commentary || 'excited',
      music: audio.music || null,
      levels: audio.levels || { commentary: 0.8, music: 0.6, game: 1 }
    },
    effects,
    intro,
    outro,
    clips,
    aiAssisted
  };
}
module.exports = generateRenderPlan;

