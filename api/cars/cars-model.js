const db = require('../../data/db-config');

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  //originally destructured id from arguments but received the error SQLITE_ERROR: no such column: id
  return db("cars").where("car_id", id).first();
};

const create = (carInfo) => {
  return db("cars").insert(carInfo);
};

module.exports = {
  getAll,
  getById,
  create
};