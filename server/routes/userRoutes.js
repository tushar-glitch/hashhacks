const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter.get("/getuser/:id", auth, userController.getuser);//

userRouter.get("/getallusers", auth, userController.getallusers);//

userRouter.post("/login", userController.login);//

userRouter.post("/register", userController.register);//

userRouter.put("/updateprofile", auth, userController.updateprofile); //

module.exports = userRouter;
