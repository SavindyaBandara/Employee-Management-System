const express = require("express");
const router = express.Router();

//Insert model 
const User = require("../models/userModel");

//insert userControllers
const userController = require("../controllers/userControllers");

router.get("/",userController.getAllUsers);
router.post("/",userController.addUsers);
router.get("/:id",userController.getByID);
router.put("/:id",userController.updateUser); 
router.delete("/:id",userController.deleteUser);

//export
module.exports = router;