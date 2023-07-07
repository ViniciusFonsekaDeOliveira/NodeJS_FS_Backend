const express = require("express");
const { saveUser, findUser } = require("../db/db");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/register", (req, res, next) => {
  findUser({ email: req.body.email })
    .then((user) => {
      if (user) {
        //if the user exist
        res.status(409).json({ message: "User exist, try logging in" });
      } else {
        //map user pwd to user model.
        const user = new User();
        user._id = new mongoose.Types.ObjectId();
        const newUser = Object.assign(user, req.body);

        // encrypt the password - bcrypt
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          //Store hash pwd in db
          if (err) {
            return res.status(501).json({
              message: "Error: " + err.message,
            });
          } else {
            newUser.password = hash;
            //Save the user with password encrypted to the database.
            saveUser(newUser)
              .then((user) => {
                return res
                  .status(201)
                  .json({ message: "Sucessful Registration", user: user });
              })
              .catch((err) => {
                error: {
                  message: err.message;
                }
              });
          }
        });
      }
    })
    .catch((err) => {
      error: {
        message: err.message;
      }
    });
  // return response that says Email Exist try logging in
  //else
});

//router("/login", (req, res) => {});

//reset password

module.exports = router;
