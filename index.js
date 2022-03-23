var mockserver = require("mockserver-node");

mockserver.start_mockserver({
  serverPort: 1080,
  verbose: true,
  trace: true
});

// do something

// mockserver.stop_mockserver({
//   serverPort: 1080
// });
