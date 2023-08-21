const express=require("express");
const router=express.Router();
const jobController=require("../controller/jobController");
router.post("/create", jobController.create );
router.get("/getALL",jobController.getAll);
router.put("/update",jobController.update);
router.delete("/deleteById",jobController.deleteById);


module.exports=router;