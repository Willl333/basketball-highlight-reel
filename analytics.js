function trueShootingPercentage({ points = 0, fga = 0, fta = 0 } = {}) {
  const denom = 2 * (fga + 0.44 * fta);
  if (denom === 0) return 0;
  return points / denom;
}

function playerImpactScore({ points = 0, assists = 0, rebounds = 0, steals = 0, blocks = 0, turnovers = 0 } = {}) {
  // Simplified custom formula
  return points + 1.5 * assists + 1.2 * rebounds + 2 * (steals + blocks) - turnovers;
}

function calculateMetrics(stats = {}) {
  return {
    ts: trueShootingPercentage(stats),
    impact: playerImpactScore(stats)
  };
}

module.exports = {
  calculateMetrics,
  trueShootingPercentage,
  playerImpactScore
};
