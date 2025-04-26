const express = require("express");
// import { Routes } from "react-router-dom";
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//Routes
//add transections POST
router.post("/add-transection", addTransection);

//Edit transections POST
router.post("/edit-transection", editTransection);

//Delete transections POST
router.post("/delete-transection", deleteTransection);

//get transections
router.post("/get-transection", getAllTransection);

module.exports = router;
