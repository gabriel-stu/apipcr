const material = require("../controllers/material.controller.js");
const db = require("../models/index.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/create",material.create);


module.exports = router;