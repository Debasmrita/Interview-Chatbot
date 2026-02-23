const sessions = {};

export function getSession(sessionId) {
  if (!sessions[sessionId]) {
    sessions[sessionId] = {
      history: [],
      score: 0,
      questionCount: 0,
      company: "General"
    };
  }
  return sessions[sessionId];
}








