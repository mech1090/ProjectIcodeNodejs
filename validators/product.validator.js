
/*
const res = require('express/lib/response')
const { object } = require('joi')
const Joi = require('joi')

const validateProduct = fields=>{
    const productValidationSchema = object({
        name:Joi.string().min(3).max(120).required,
        specs:Joi.string().max(512).required,
        price:Joi.number.required,
        instock:Joi.boolean.required
    })

    const{error,value} = productValidationSchema.validate(value)
    return{error,value}
    if(error){
        res.status(400).send(error.details[0].message)
    }
}

module.exports = {validateProduct}

*/