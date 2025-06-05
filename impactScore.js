function calculateImpactScore(stats = {}) {
  const {
    points = 0,
    assists = 0,
    rebounds = 0,
    steals = 0,
    blocks = 0,
    turnovers = 0,
    minutesPlayed = 1
  } = stats;

  const rawScore =
    points +
    assists * 1.5 +
    rebounds * 1.2 +
    steals * 3 +
    blocks * 3 -
    turnovers * 2;

  return Number((rawScore / minutesPlayed).toFixed(2));
}

module.exports = calculateImpactScore;
