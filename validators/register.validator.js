


const Joi = require('joi')
const validateNewProduct = fields=>{
const productValidationSchema = Joi.object({
    name:Joi.string().min(3).max(5).required(),
    email:Joi.string().max(512),
    mobile:Joi.string().min(10).max(10).pattern(/^\d+$/).required(),
    message:Joi.string().min(5).max(300)
    })

    const{error,value} = productValidationSchema.validate(fields)

    return {error,value}
}

module.exports = {validateNewProduct}