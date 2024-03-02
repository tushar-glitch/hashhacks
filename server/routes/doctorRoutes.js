const express = require("express");
const User = require("../model/userModel");
const doctorController = require("../controller/doctorController");
const auth = require("../middleware/auth");

const doctorRouter = express.Router();

doctorRouter.get("/getalldoctors", doctorController.getalldoctors);

module.exports = doctorRouter;