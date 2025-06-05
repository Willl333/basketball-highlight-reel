function computeTS({ points = 0, fga = 0, fta = 0 } = {}) {
  const denominator = 2 * (fga + 0.44 * fta);
  return denominator ? points / denominator : 0;
}

function computePER({ points = 0, rebounds = 0, assists = 0, steals = 0, blocks = 0, fga = 0, fgm = 0, fta = 0, ftm = 0, turnovers = 0 } = {}) {
  const uPER =
    (1 / (fga || 1)) *
      (fgm + 0.5 * ftm) +
    (rebounds + steals + 0.5 * assists + 0.5 * blocks) -
    (fga - fgm + turnovers + 0.5 * (fta - ftm));
  return uPER;
}

module.exports = { computeTS, computePER };
