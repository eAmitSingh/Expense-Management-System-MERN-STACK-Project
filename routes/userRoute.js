const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
//post || login
router.post("/login", loginController);

//POST || Register
router.post("/register", registerController);

module.exports = router;
