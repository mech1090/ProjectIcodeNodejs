


const Joi = require('joi')
const validateNewProduct = fields=>{
const productValidationSchema = Joi.object({
    name:Joi.string().min(3).max(5).required(),
    specs:Joi.string().max(512),
    price:Joi.number().required(),
    instock:Joi.boolean().required()
    })

    const{error,value} = productValidationSchema.validate(fields)

    return {error,value}
}

module.exports = {validateNewProduct}