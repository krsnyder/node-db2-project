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

  // Attempted to iterate through body for validation
  // const recs = [vin, make, model, mileage];
  
  // recs.forEach(rec => {
  //   if (!rec) {
  //     next({status: 400, message: `${rec} is missing`})
  //   } else {
  //     return
  //   }
  // })

  if(!vin || !make || !model || !mileage){
    next({
      status: 400,
      message: "Vin, make, model, and mileage required"
    })
  }else{
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

const checkVinNumberUnique = (req, res, next) => {
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};