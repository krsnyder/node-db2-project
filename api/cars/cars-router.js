const express = require('express');
const Cars = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require("./cars-middleware");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get("/:id", checkCarId, (req, res, next) => {
  res.status(200).json(req.car);
});

router.post("/", checkCarPayload,
  checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
  Cars.create(req.body)
    .then(newId => {
      return Cars.getById(newId);
    })
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);

});

module.exports = router;