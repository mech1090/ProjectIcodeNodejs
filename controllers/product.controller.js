
const findAll = (req,res)=>{res.send('OKK')}
const findOne = (req,res)=>{console.log('Finding element by ID')}
const createOne=(req,res)=>{console.log('creating the data from user')}
const updateOne = (req,res)=>{console.log('updating one entry')}
const deleteOne = (req,res)=>{console.log('delete by id')}


module.exports = {findAll,findOne,createOne,updateOne,deleteOne}

