exports.seed = function(knex) {
  return knex("users").insert([
    {
      user_name: "admin",
      password: "pass",
      roles_id: 1
    },
    {
      user_name: "general manager",
      password: "12345",
      roles_id: 2
    },
    {
      user_name: "local manager",
      password: "lock",
      roles_id: 3
    },
    {
      user_name: "team leader",
      password: "unlocked",
      roles_id: 3
    }
  ]);
};
