const express = require('express')
const jobController = require("../controllers/jobController");
const router = express.Router();
router.post("/create",jobController.create);
router.get('/getAll',jobController.getAll);
router.get('/getById',jobController.getById);
router.put('/update',jobController.update);
router.delete('/deleteById',jobController.deleteById);
router.post("/getByFilters",jobController.getByFilters);
router.post("/getByEmail",jobController.getByEmail);
router.put("/apply",jobController.updateApplyers)
module.exports = router;