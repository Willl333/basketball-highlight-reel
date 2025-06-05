const feedbackList = [];

function addFeedback(feedback) {
  if (feedback && typeof feedback === 'object') {
    feedbackList.push({ ...feedback, timestamp: Date.now() });
  }
}

function getAllFeedback() {
  return feedbackList;
}

module.exports = { addFeedback, getAllFeedback };
