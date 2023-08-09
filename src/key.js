export const API_URL = window.location.hostname.includes("localhost")
  ? "https://poised-yak-hose.cyclic.app"
  : "/node";

export const CLIENT_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "/";

// module.exports = API_URL;
// module.exports = CLIENT_URL;
