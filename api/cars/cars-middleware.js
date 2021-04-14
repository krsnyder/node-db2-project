const Cars = require("./cars-model");
var vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  const {id} = req.params
  try {
    const car = await Cars.getById(id);
    if (!car) {
      next({ status: 404, message: `car with id ${id} is not found` });
    } else {
      req.car = car
      next();
    }
  } catch(err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;

  if(!vin){
    res.status(400).json({message: "vin is missing"})
  } else if (!make) {
    res.status(400).json({message: "make is missing"})
  } else if (!model) {
    res.status(400).json({message: "model is missing"})
  } else if (!mileage) {
    res.status(400).json({message: "mileage is missing"})
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  if (vinValidator.validate(req.body.vin)) {
    next()
  } else {
    res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body
  try {
    const isVin = await Cars.findByVin(vin)
    if (isVin) {
      next({status: 400, message: `vin ${vin} is invalid`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
  
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};