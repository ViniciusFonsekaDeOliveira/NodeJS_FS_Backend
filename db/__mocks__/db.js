const connect = async () => {
  try {
    console.log("Conexão MOCKED com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.log("Erro ao tentar MOCKED conection ao MongoDB", error);
  }
};

const disconnect = async () => {
  console.log("MOCKED Disconnection");
};

const findUser = async (obj) => {
  return Promise.resolve({
    firstName: "Vinicius",
    lastName: "Fonseca",
    address: "123, st street",
    city: "Orlando",
    state: "FL",
    zipCode: "23344",
    email: "vinicius@vini.com",
    password: "223",
  });
};
const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: "Vinicius",
    lastName: "Fonseca",
    address: "123, st street",
    city: "Orlando",
    state: "FL",
    zipCode: "23344",
    email: "vinicius@vini.com",
    password: "223",
  });
};

module.exports = { connect, disconnect, findUser, saveUser };
