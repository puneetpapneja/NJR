const express = require('express')
const userController = require("../controllers/userController");
const jobController = require('../controllers/jobController');
const router = express.Router();
router.post("/create",userController.create);
router.get('/getAll',userController.getAll);
router.put('/update',userController.update);
router.delete('/deleteById',userController.deleteById);
router.post("/loginValidation",userController.loginValidation);
//jobcontroller as jobs are to be accessed
router.post("/getAllForUser",jobController.getAllForUser);
module.exports = router;