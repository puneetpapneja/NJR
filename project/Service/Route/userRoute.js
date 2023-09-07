const express = require('express');
const multer=require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' +file.originalname;
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage })
const userController = require('../Controller/userController');
router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/deleteById', userController.deleteById);
router.post('/update',upload.single('file'), userController.update);
// router.post('/find',userController.loginValidation);
router.post('/validateUser', userController.hasValidUser);
router.post('/addedjobs',userController.appliedjobs);
router.post('/showapplied',userController.showapplied);
module.exports = router;
