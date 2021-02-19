const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://sportsmanapp.herokuapp.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    })
  );
};
