
const registration = require('../models/register.model')
const {validateNewProduct} = require('../validators/register.validator')



const createOne= async(req,res)=>{
    console.log('creating the data from user')
    const {name,email,mobile,message} = req.body
    const fields = {name,email,mobile,message}
    const {error,value} = validateNewProduct(fields)
    if (error){
        console.log('BAD_DATA')
    }
    const newProduct = await registration.create(value)
    res.render('thankyou/layout',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    
    })
     
    console.log(newProduct)


/*
const findAll = async(req,res)=>{
    const productList = await registration.find()
    return res.send(productList)
}
const findOne = async(req,res)=>{
    console.log('Finding element by ID')
    const{id} = req.params
    try{
        const product = await registration.findById(id)
        return res.send(product)

    }catch(error){

        res.status(404).send('Can not find the element with this ID')
    }

     }

*/


    /*
    const newProduct = new productModel(fields)
    await newProduct.save()
    res.send(newProduct)
    */
}
/*
const updateOne = async(req,res)=>{
    console.log('updating one entry')
    const {id} = req.params
    const {name,email,mobile,message}= req.body
    const fields = {name,email,mobile,message}
    try{
        const existingProduct = await registration.findById(id)
        if(existingProduct){
            await registration.updateOne({_id:id},fields)
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
        await registration.findByIdAndDelete(id)
        return res.send('product deleted')
    }catch(error){
        //console.log(error)
        return res.status(404).send(`can not find product with this id ${id}`)
    }
}
*/
module.exports = {createOne}
//module.exports = {findAll,findOne,createOne,updateOne,deleteOne}

