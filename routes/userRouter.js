const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/createUser", userController.createUser);
router.get("/getUsers",userController.getUsers);
router.get("/getUserbyEmail",userController.getUserbyEmail);
router.put("/updateUser",userController.updateUser);
router.delete("/deleteUser",userController.deleteUser);
module.exports = router;