const express = require("express");
const router = express.Router();

const DepartmentModel = require("../models/addDep");
const DepControlllers = require("../controllers/depController");


router.get("/",DepControlllers.getAllDeps);
router.post("/",DepControlllers.addDeps);
router.get("/:id",DepControlllers.getByID);
router.put("/:id",DepControlllers.updateDepartment); 
router.delete("/:id",DepControlllers.deleteDepartment);

module.exports = router;