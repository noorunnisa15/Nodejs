const productModel = require("../models/productModel")
module.exports = {
    createProduct : async(body)=>{
        try{
           const product = await productModel.create({ ...body });
        }catch(error){
            return error;
        }
    }
}