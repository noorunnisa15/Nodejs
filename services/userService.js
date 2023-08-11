const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    createUser : function(body){
        const response = userModel.createUser(body);
        return response;
    },
    getUser : function(body){
       try{ const response = userModel.getUser(body);
        return response;
    }catch(error){
        return error;
    }
    }
}