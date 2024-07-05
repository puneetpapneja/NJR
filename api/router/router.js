const router=require('express').Router()
const cAPi=require('../controler/controlers')


const multer=require('multer');



let storage = multer.diskStorage({
    /// This is for file upload
    destination: function (req, file, cb) {
      cb(null, "./public/uploads"); /// file destination
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname); // file name
    },
  });
  
  let upload = multer({
    storage: storage,
    limits: { files: 1024 * 1024 * 6 }, // file limit
  });



router.post("/postdata",upload.single('image'),cAPi.data)

router.get('/getpostdata',cAPi.getpostdata)





module.exports = router