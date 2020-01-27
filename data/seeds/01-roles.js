exports.seed = function(knex) {
  return knex("roles").insert([
    { description: "admin" },
    { description: "general manager" },
    { description: "local manager" },
    { description: "team leader" }
  ]);
};
