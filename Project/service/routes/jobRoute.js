const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
router.post("/create", jobController.create);
router.get("/getAll", jobController.getAll);
router.delete("/deletedById", jobController.deleteById);
router.put("/update", jobController.update);

module.exports = router;
