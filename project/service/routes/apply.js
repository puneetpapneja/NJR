const express= require('express')
const router=express.Router()
const applycontrol=require("../controllers/applycontrol")

router.post("/apply",applycontrol.create)
router.delete("/withdraw",applycontrol.Withdraw)
router.get("/show",applycontrol.getAll)

module.exports = router