const db = require('../../data/db-config');

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where("id", id).first();
};

const create = (carInfo) => {
  return db("cars").insert(carInfo);
};

module.exports = {
  getAll,
  getById,
  create
};