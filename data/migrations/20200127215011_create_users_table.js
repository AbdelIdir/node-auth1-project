exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .text("user_name")
      .notNullable()
      .unique();

    tbl.text("password").notNullable();

    tbl
      .integer("roles_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
