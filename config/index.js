const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: Number(process.env.PORT),
  env: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
};

module.exports = config;
