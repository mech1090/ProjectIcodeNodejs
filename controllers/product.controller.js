
const productModel = require('../models/product.model')
const {validateNewProduct} = require('../validators/product.validator')

const findAll = async(req,res)=>{
    const productList = await productModel.find()
    return res.send(productList)
}
const findOne = async(req,res)=>{
    console.log('Finding element by ID')
    const{id} = req.params
    try{
        const product = await productModel.findById(id)
        return res.send(product)

    }catch(error){

        res.status(404).send('Can not find the element with this ID')
    }

     }



const createOne= async(req,res)=>{
    console.log('creating the data from user')
    const {name,specs,price,instock} = req.body
    const fields = {name,specs,price,instock}
    const {error,value} = validateNewProduct(fields)
    const newProduct = await productModel.create(value)
    return res.send(newProduct)

    /*
    const newProduct = new productModel(fields)
    await newProduct.save()
    res.send(newProduct)
    */
}
const updateOne = async(req,res)=>{
    console.log('updating one entry')
    const {id} = req.params
    const {name,specs,price,instock}= req.body
    const fields = {name,specs,price,instock}
    try{
        const existingProduct = await productModel.findById(id)
        if(existingProduct){
            await productModel.updateOne({_id:id},fields)
        }
        return res.send('product updated')

    }catch(error){
        console.log(error.message)
        return res.status(404).send(`can not find product with id ${id}`)
    }
    

    }

const deleteOne = async(req,res)=>{
    console.log('delete by id')
    const{id} = req.params
    try{
        await productModel.findByIdAndDelete(id)
        return res.send('product deleted')
    }catch(error){
        //console.log(error)
        return res.status(404).send(`can not find product with this id ${id}`)
    }
}


module.exports = {findAll,findOne,createOne,updateOne,deleteOne}

