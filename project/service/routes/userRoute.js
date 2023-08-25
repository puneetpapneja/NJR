const express = require('express')
const userController = require("../controllers/userController");
const router = express.Router();
router.post("/create",userController.create);
router.get('/getAll',userController.getAll);
router.put('/update',userController.update);
router.delete('/deleteById',userController.deleteById);
router.post("/loginValidation",userController.loginValidation);
module.exports = router;
