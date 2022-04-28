const { string, number } = require('joi')
const mongoose = require('mongoose')

const schemaDefination = {
    name:{
        type:String,
        required:[true,'Name is required']
    },
    specs:{
        type:String
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    instock:{
        type:Boolean,
        required:[true,'Stock status is required']

    }
}

const productSchema = new mongoose.Schema(schemaDefination)
const Product = mongoose.model('Product',productSchema)
module.exports = Product