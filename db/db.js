require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongo);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB", error);
  }
};

module.exports = { connect };
