// Vercel serverless entry point.
// Vercel doesn't run `app.listen()` — it imports whatever this file exports
// and calls it per-request. We just hand it the existing Express app.
const app = require('../src/app');

module.exports = app;
