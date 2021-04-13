const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    if (!car) {
      next({ status: 404, message: "Car not found" });
    } else {
      req.car = car
      next();
    }
  } catch(err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  next();
};

const checkVinNumberValid = (req, res, next) => {
  next();
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