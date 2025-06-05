function trueShootingPercentage(points, fga, fta) {
  const divisor = 2 * (fga + 0.44 * fta);
  if (!divisor) return 0;
  return +(points / divisor).toFixed(3);
}

function simplePER({ points = 0, rebounds = 0, assists = 0, steals = 0, blocks = 0, turnovers = 0, fgAttempts = 0, ftAttempts = 0 }) {
  const ts = trueShootingPercentage(points, fgAttempts, ftAttempts);
  const efficiency = points + rebounds * 1.2 + assists * 1.5 + steals * 2 + blocks * 2 - turnovers * 2;
  return +(efficiency * ts).toFixed(3);
}

function playerImpactScore({ points = 0, assists = 0, rebounds = 0, steals = 0, blocks = 0, turnovers = 0 }) {
  const score = points + assists * 0.7 + rebounds * 0.7 + steals * 1.5 + blocks * 1.2 - turnovers;
  return +score.toFixed(3);
}

module.exports = {
  trueShootingPercentage,
  simplePER,
  playerImpactScore,
};
