const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.create);
router.post("/validUser", userController.hasValidUser);
router.get("/getAll", userController.getAll);
router.delete("/deleteById", userController.deleteById);
router.put("/update", userController.update);

module.exports = router;
