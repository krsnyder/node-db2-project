// The router consumes all requests to a specified url ("/api/cars")
// We need express, all necessary middleware, the cars-model an instance of express, the JSON parser, and an export.

const express = require('express');
const Cars = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require("./cars-middleware")

const router = express.Router();

router.use(express.json());

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars)
    })
  .catch(next)
});

router.get("/:id", checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      res.status(200).json(car)
  })
});
router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
      
      next();
});

module.exports = router;