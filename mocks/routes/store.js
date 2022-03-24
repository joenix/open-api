const store = require("./store.json");

module.exports = [
  {
    id: "get-store", // id of the route
    url: "/api/store", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: store // body to send
        }
      },
      {
        id: "error", // id of the variant
        response: {
          status: 500, // status to send
          body: {
            // body to send
            message: "Error"
          }
        }
      }
    ]
  }
];
