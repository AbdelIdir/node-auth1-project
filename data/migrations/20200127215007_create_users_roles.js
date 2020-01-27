exports.up = function(knex) {
  return knex.schema.createTable("roles", tbl => {
    tbl.increments();

    tbl
      .string("description", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("roles");
};
