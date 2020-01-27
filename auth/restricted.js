// THIS IS FOR INITIAL AUTH / AUTH1

// const bcrypt = require("bcrypt");

// const Users = require("../users_models");

// module.exports = function restricted(req, res, next) {
//   const { user_name, password } = req.headers;

//   if (user_name && password) {
//     Users.findByLog({ user_name })
//       // .first()
//       .then(user => {
//         console.log(user);
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: "Invalid credentials" });
//         }
//       })
//       .catch(err => {
//         res.status(500).json({ message: "something went wrong" });
//         console.log(err);
//       });
//   } else {
//     res.status(401).json({ message: "Please provide valid Credentials " });
//   }
// };

// const bcrypt = require("bcrypt");

// const Users = require("../users_models");

module.exports = function restricted(req, res, next) {
  const { user_name, password } = req.headers;

  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "You are not authorized " });
  }
};
