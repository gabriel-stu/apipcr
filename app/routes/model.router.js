module.exports = app => {
    const model = require("../controllers/model.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", model.create);
};