const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/createUser", userController.createUser);
router.get("/getUser",userController.getUser);
module.exports = router;