exports.up = function(knex) {
  return knex.schema.createTable("cars", table=>{
      table.increments() //primary key
    table.text("vin", 32).unique().notNullable()
    table.text("make", 128).notNullable()
    table.text("model").notNullable()
    table.integer("mileage").notNullable()
    table.text("title", 128)
    table.text("transmission", 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
