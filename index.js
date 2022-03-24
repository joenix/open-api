// Colour Console
require("console-color-mr");

// FS
const fs = require("fs");

// KOA
const koa = require("koa");

// Cors
const cors = require("@koa/cors");

// Router
const router = require("koa-router");

// Mock
const mock = require("mockjs");

// App
const App = new koa();

// Page
const Page = new router();

// Port
const port = 3100;

// Cors First
App.use(cors());

// All
App.use(async ctx => {
  ctx.body = mock.mock(
    JSON.parse(fs.readFileSync(`./mocks/${ctx.path}.json`, "utf8"))
  );
});

// Customize Route Demo
Page.get("/simple", async ctx => {
  ctx.body = JSON.stringify({ a: 1, b: 2, c: 3 });
});

// Use Middleware
App.use(Page.routes()).use(Page.allowedMethods());

// Listen Port
App.listen(port, () =>
  console.log(`Mock Server running at: ` + `http://localhost:${port}/`.cyan)
);
