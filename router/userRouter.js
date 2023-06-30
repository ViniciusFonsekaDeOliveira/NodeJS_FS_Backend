const express = require("express");

const router = express.Router();

router.post("/register", (req, res, next) => {
  // findUser
  //if the user exist
  // return response that says Email Exist try logging in
  //else
  // encrypt the password
  //set the password with the encrypted password
  //save the user to the db
});

router("/login", (req, res) => {});

module.exports = router;
