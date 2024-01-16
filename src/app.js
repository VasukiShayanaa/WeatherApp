const express = require("express");
const errorHandler = require("node-error-handler");
var router = require("../src/routes/index.js");
const config = require("../config.js");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorHandler({ debug: true, camel_case: false }));

app.listen(config.service_port, () =>
  console.log(`Server started on http://localhost:${config.service_port}`)
);

module.exports = app;
