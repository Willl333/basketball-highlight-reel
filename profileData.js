function generateProfile(opts = {}) {
  const {
    name = 'Player',
    profilePicture = '',
    team = '',
    reels = []
  } = opts;

  const totalReels = reels.length;
  const totalPoints = reels.reduce((sum, reel) => sum + (reel.stats?.points || 0), 0);
  const avgPoints = totalReels ? totalPoints / totalReels : 0;

  return {
    user: { name, profilePicture, team },
    totalReels,
    stats: {
      totalPoints,
      averagePointsPerGame: Number(avgPoints.toFixed(2))
    },
    reels
  };
}

module.exports = generateProfile;
