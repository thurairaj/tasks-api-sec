const app = require("./src/app");
const config = require("./config/index");

console.log(config);

app.listen(config.port, () => {
  console.log(
    `${config.appName} started on port ${config.port} running in ${config.env} mode`,
  );
});
