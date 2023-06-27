//Request listener
const express = require("express");
const cors = require("cors");
const userRouter = require("../router/userRouter");

const app = express();

//use middleware to form our contract for incoming json payloads ONLY
app.use(express.json());
//use middleware for url encoding -- facilitar o processamento dos payloads advindos de formulários html clássicos.
app.use(express.urlencoded({ extended: true }));

//use middleware to handle CORS (Cross Origin Resouce Sharing) policy
//Avoid security holes thats allow any localhost enter into the server and get data from there without being allowed.
//Based Control Allow Headeres to access Control allow methods. Who can access this backend.
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Accept, Authorization, Origin, X-Requested-With"
//   );

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
//   }

//   next();
// });

//npm i cors.
app.use(cors());

// Middleware for health-check (actuator)
// http://localhost:3001
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Service is up" });
});

//defining the routers
app.use("/users", userRouter);

//bad url or error we can handle with middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

//database conection

module.exports = app;
