const express=require("express");
const router=express.Router();
const userController=require("../controller/userController");
router.post("/create", userController.create );
router.get("/getALL",userController.getAll);
router.put("/update",userController.update);
router.delete("/deleteById",userController.deleteById);


module.exports=router;