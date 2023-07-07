require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/userModel");

const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.mongo);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB", error);
  }
};

const disconnect = async () => {
  await mongoose.connection.close();
};

const findUser = async (obj) => {
  return await User.findOne(obj).exec(); //make it truly async com .exec().
};
const saveUser = async (newUser) => {
  return await newUser.save();
};

module.exports = { connect, disconnect, findUser, saveUser };
