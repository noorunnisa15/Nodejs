const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/createProduct", productController.createProduct);
// router.get("/createProduct", function (req,res){
//     res.send("Create Products")
// })
// router.put("/updateProduct", function (req,res){
//     res.send("Update Products")
// })
module.exports = router;
