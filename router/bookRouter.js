const express = require("express");

const router = express.Router();

// endpoint: localhost3001/users e localhost3001/users/
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Sucessful - GET",
    metadata: {
      hostname: req.hostname,
      httpVersion: req.httpVersion,
      method: req.method,
    },
  });
});

//Get by id
router.get("/:id", (req, res, next) => {
  res.status(200).json({
    message: "Sucessful - GET BY ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//POST method
router.post("/", (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: "Sucessful - POST",
    metadata: {
      name: name,
      hostname: req.hostname,
      httpVersion: req.httpVersion,
      method: req.method,
    },
  });
});

//PUT method
router.put("/:id", (req, res, next) => {
  res.status(200).json({
    message: "Sucessful - PUT BY ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//DELETE method
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    message: "Sucessful - DELETE BY ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
