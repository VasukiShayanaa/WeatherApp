const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  service_port: process.env.SERVICE_PORT,
  weather_api_secret_key: "363372c73a283a4458747bd58c57f2b6",
};
