const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/createUser", userController.createUser);
router.get("/getUsers",userController.getUsers);
router.get("/getUserbyEmail",userController.getUserbyEmail);
module.exports = router;