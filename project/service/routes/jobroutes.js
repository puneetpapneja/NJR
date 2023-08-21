const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobcontroller");



router.post("/post", jobController.postJob);
router.get('/getAll', jobController.getAll);
router.delete('/deleteById', jobController.deleteById);
router.put('/update', jobController.update);

module.exports = router;