
const mongoose = require('mongoose')

const schemaDefination = {
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String
    },
    mobile:{
        type:Number,
        required:[true,'Mobile number required']
    },
    message:{
        type:String,
     //   required:[true,'Stock status is required']

    }
}

const productSchema = new mongoose.Schema(schemaDefination)
const Product = mongoose.model('Product',productSchema)
module.exports = Product