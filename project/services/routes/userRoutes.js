// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userControllers");

// router.post("/create", userController.create);
// router.get("/getAll", userController.getAll);
// router.delete("/deleteById", userController.deleteById);
// router.put("/update", userController.update);

// module.exports = router;

//module.exports = router;
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
router.post("/create", userControllers.create);
router.post("/validUser", userControllers.hasvalidUser);
router.get("/getAll", userControllers.getAll);
router.put("/update", userControllers.update);
router.delete("/deleteById", userControllers.deleteById);

module.exports = router;
