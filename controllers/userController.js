const joi = require("joi");
const userService = require("../services/userService");

const createUserSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
module.exports = {
    // createUser : function(req, res){
    //     const response = userService.createUser();
    //     res.send(response);
    // },
    createUser: async function (req,res){
        try{
            const validate = await createUserSchema.validateAsync(req.body);
            if(validate.error){
                res.send(validate.error);
            }
            const response = userService.createUser(validate);
            res.send(response);
        }catch(error){
            res.status(500).send({error: error.message});
        }
    },
    getUser : function(req, res){
        const response = userService.getUser(req.body);
        res.send(response);
    }
}