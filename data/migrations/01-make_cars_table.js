exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("id");
    table.text("vin", 17).unique().notNullable();
    table.text("make", 32).notNullable();
    table.text("model", 32).notNullable();
    table.integer("mileage").unsigned().notNullable();
    table.text("title", 128).defaultTo("automatic");
    table.text("transmission", 128).defaultTo("clean");
  });
};

exports.down = function(knex) { 
  return knex.schema.dropTableIfExists("cars");
};
