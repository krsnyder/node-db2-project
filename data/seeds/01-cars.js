exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {
          vin: 'N4AC7FE42B78G35HJ',
          make: "Toyota",
          model: "Tacoma",
          mileage: 46136,
          title: "lease",
          transmission: "automatic"
        },
        {
          vin: 'L4LS98CC7345AZ0L1',
          make: "Subaru",
          model: "Crosstrek",
          mileage: 23098,
          title: "lease",
          transmission: "manual"
        },
        {
          vin: 'D93MB7SQ6DLBGJ523',
          make: "Geo",
          model: "Tracker",
          mileage: 198463,
          title: "clean",
          transmission: "manual"
        }
    ])
  })
}