const router = require("express").Router();
router.get("/createProduct", function (req,res){
    res.send("Create Products")
})
router.put("/updateProduct", function (req,res){
    res.send("Update Products")
})
module.exports = router