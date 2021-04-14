const express = require("express");
const carsRouter = require("./cars/cars-router");
const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);

server.use("*", (req, res) => {
  res.status(500).json({
    message: "AHHHHH REAL MONSTERS"
  });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = server;
