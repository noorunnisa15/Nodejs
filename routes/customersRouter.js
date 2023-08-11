const router = require("express").Router();
router.get("/getCustomer", function (req,res){
    res.send("Get Customer");
})
module.exports = router;