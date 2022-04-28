
const productModel = require('../models/product.model')

const findAll = async(req,res)=>{
    const productList = await productModel.find()
    res.send(productList)
}
const findOne = (req,res)=>{console.log('Finding element by ID')}
const createOne= async(req,res)=>{
    console.log('creating the data from user')
    const {name,specs,price,instock} = req.body
    const fields = {name,specs,price,instock}
    const newProduct = await productModel.create(fields)
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


const deleteOne = (req,res)=>{console.log('delete by id')}


module.exports = {findAll,findOne,createOne,updateOne,deleteOne}

