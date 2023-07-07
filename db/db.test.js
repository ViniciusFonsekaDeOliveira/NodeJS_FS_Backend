const { connect, disconnect, saveUser, findUser } = require("./db");
const User = require("../models/userModel");
const mongoose = require("mongoose");

jest.mock("./db");

beforeAll(async () => {
  return await connect();
});

describe("User Test Suite", () => {
  //Test saveUser
  test("As a user I want to save a user to the database", async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: "Vinicius",
      lastName: "Fonseca",
      address: "123, st street",
      city: "Orlando",
      state: "FL",
      zipCode: "23344",
      email: "vinicius@vini.com",
      password: "223",
    });
    const user = await saveUser(newUser);
    expect(user.firstName).toEqual("Vinicius");
    expect(user.lastName).toEqual("Fonseca");
    expect(user.address).toEqual("123, st street");
    expect(user.city).toEqual("Orlando");
    expect(user.state).toEqual("FL");
    expect(user.zipCode).toEqual("23344");
    expect(user.email).toEqual("vinicius@vini.com");
    expect(user.password).toEqual("223");
  });
});
// Test findUser
test("As a user I want to find a user by any property", async () => {
  const obj = { firstName: "Vinicius" };
  const user = await findUser(obj);
  expect(user.firstName).toBe("Vinicius");
  expect(user.lastName).toEqual("Fonseca");
  expect(user.address).toEqual("123, st street");
  expect(user.city).toEqual("Orlando");
  expect(user.state).toEqual("FL");
  expect(user.zipCode).toEqual("23344");
  expect(user.email).toEqual("vinicius@vini.com");
  expect(user.password).toEqual("223");
});
// Connection error
// test("As a user I want to be alerted when database connection fails", async () => {
//   //Configura a promessa para ser rejeitada simulando um erro com a conexão
//   const mockMongooseConnect = jest
//     .fn()
//     .mockRejectedValue(new Error("Simulated Error"));

//   //Substitui temporariamente a função mongoose.connect pelo mock criado anteriormente
//   mockRequire("mongoose", {
//     connect: mockMongooseConnect,
//   });

//   const consoleLogSpy = jest.spyOn(console, "log"); //espia o cl

//   await connect(); //como ela foi temporariamente substituida ela deve falhar.
//   expect(mockMongooseConnect).toHaveBeenCalled();
//   expect(consoleLogSpy).toHaveBeenCalledWith(
//     "Erro ao conectar ao MongoDB",
//     expect.any(Error)
//   );

//   //Restaura a implementação original da função mongoose.connect.
//   mockRequire.stop("mongoose");
// });

afterAll(async () => {
  return await disconnect();
});

// const { connect, disconnect, saveUser, findUser } = require("./db");
// const User = require("../models/userModel");
// const mongoose = require("mongoose");
// const mockRequire = require("mock-require");

// describe("Database Test Suite", () => {
//   // Bloco de testes que requerem a conexão estabelecida
//   describe("Tests requiring database connection", () => {
//     // Configura a conexão antes de cada teste dentro do escopo
//     beforeEach(async () => {
//       await connect();
//     });

//     // Testes que dependem da conexão
//     test("As a user I want to save a user to the database", async () => {
//       const newUser = new User({
//         _id: new mongoose.Types.ObjectId(),
//         firstName: "Vinicius",
//         lastName: "Fonseca",
//         address: "123, st street",
//         city: "Orlando",
//         state: "FL",
//         zipCode: "23344",
//         email: "vinicius@vini.com",
//         password: "223",
//       });
//       const user = await saveUser(newUser);
//       expect(user.firstName).toEqual("Vinicius");
//       expect(user.lastName).toEqual("Fonseca");
//       expect(user.address).toEqual("123, st street");
//       expect(user.city).toEqual("Orlando");
//       expect(user.state).toEqual("FL");
//       expect(user.zipCode).toEqual("23344");
//       expect(user.email).toEqual("vinicius@vini.com");
//       expect(user.password).toEqual("223");
//     });

//     test("As a user I want to find a user by any property", async () => {
//       const obj = { firstName: "Vinicius" };
//       const user = await findUser(obj);
//       expect(user.firstName).toBe("Vinicius");
//       expect(user.lastName).toEqual("Fonseca");
//       expect(user.address).toEqual("123, st street");
//       expect(user.city).toEqual("Orlando");
//       expect(user.state).toEqual("FL");
//       expect(user.zipCode).toEqual("23344");
//       expect(user.email).toEqual("vinicius@vini.com");
//       expect(user.password).toEqual("223");
//     });

//     // Teste de erro de conexão
//     test("As a user I want to be alerted when database connection fails", async () => {
//       // Simula um erro na conexão com o MongoDB
//       const mockMongooseConnect = jest.fn(() =>
//         mockRejectedValue(new Error("Simulated Error"))
//       );

//       // Substitui temporariamente a função mongoose.connect pelo mock criado anteriormente
//       mockRequire("mongoose", {
//         connect: mockMongooseConnect,
//       });

//       const consoleLogSpy = jest.spyOn(console, "log");

//       await connect();

//       expect(mockMongooseConnect).toHaveBeenCalled();
//       expect(consoleLogSpy).toHaveBeenCalledWith(
//         "Erro ao conectar ao MongoDB",
//         expect.any(Error)
//       );

//       // Restaura a implementação original da função mongoose.connect.
//       mockRequire.stop("mongoose");
//     });

//     // Desconecta após cada teste dentro do escopo
//     afterEach(async () => {
//       await disconnect();
//     });
//   });
// });

// describe("Database Test Suite", () => {
//   // Bloco de testes que requerem a conexão estabelecida
//   describe("Tests requiring database connection", () => {
//     // Testes que dependem da conexão
//     test("As a user I want to save a user to the database", async () => {
//       const newUser = new User({
//         _id: new mongoose.Types.ObjectId(),
//         firstName: "Vinicius",
//         lastName: "Fonseca",
//         address: "123, st street",
//         city: "Orlando",
//         state: "FL",
//         zipCode: "23344",
//         email: "vinicius@vini.com",
//         password: "223",
//       });
//       const user = await saveUser(newUser);
//       expect(user.firstName).toEqual("Vinicius");
//       expect(user.lastName).toEqual("Fonseca");
//       expect(user.address).toEqual("123, st street");
//       expect(user.city).toEqual("Orlando");
//       expect(user.state).toEqual("FL");
//       expect(user.zipCode).toEqual("23344");
//       expect(user.email).toEqual("vinicius@vini.com");
//       expect(user.password).toEqual("223");
//     });

//     test("As a user I want to find a user by any property", async () => {
//       const obj = { firstName: "Vinicius" };
//       const user = await findUser(obj);
//       expect(user.firstName).toBe("Vinicius");
//       expect(user.lastName).toEqual("Fonseca");
//       expect(user.address).toEqual("123, st street");
//       expect(user.city).toEqual("Orlando");
//       expect(user.state).toEqual("FL");
//       expect(user.zipCode).toEqual("23344");
//       expect(user.email).toEqual("vinicius@vini.com");
//       expect(user.password).toEqual("223");
//     });

//     // Teste de erro de conexão
//     test("As a user I want to be alerted when database connection fails", async () => {
//       // Simula um erro na conexão com o MongoDB
//       const mockMongooseConnect = jest.fn(() =>
//         mockRejectedValue(new Error("Simulated Error"))
//       );

//       // Substitui temporariamente a função mongoose.connect pelo mock criado anteriormente
//       const originalConnect = require("./db").connect;
//       require("./db").connect = mockMongooseConnect;

//       const consoleLogSpy = jest.spyOn(console, "log");

//       await connect();

//       expect(mockMongooseConnect).toHaveBeenCalled();
//       expect(consoleLogSpy).toHaveBeenCalledWith(
//         "Erro ao conectar ao MongoDB",
//         expect.any(Error)
//       );

//       // Restaura a implementação original da função connect.
//       require("./db").connect = originalConnect;
//     });

//     // Desconecta após cada teste dentro do escopo
//     afterEach(async () => {
//       await disconnect();
//     });
//   });
// });
