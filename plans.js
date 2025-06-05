const plans = {
  subscription: [
    {
      id: 'basic',
      name: 'Basic Plan',
      priceMonthly: 5,
      videoQuality: '1080p',
      highlightsPerMonth: 5,
      features: ['basic AI assistance']
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      priceMonthly: 12,
      videoQuality: '4K',
      highlightsPerMonth: 'unlimited',
      priorityRendering: true,
      features: ['advanced AI', 'premium effects']
    },
    {
      id: 'elite',
      name: 'Elite Plan',
      priceMonthly: 20,
      videoQuality: '4K',
      highlightsPerMonth: 'unlimited',
      priorityRendering: true,
      features: ['advanced AI', 'premium effects', 'exclusive styles']
    }
  ],
  oneTime: [
    {
      id: 'basic-ot',
      name: 'Basic One-Time',
      price: 2,
      videoQuality: '1080p'
    },
    {
      id: 'premium-ot',
      name: 'Premium One-Time',
      price: 5,
      videoQuality: '4K'
    }
  ]
};

function getPlans() {
  return plans;
}

module.exports = {
  getPlans
};
