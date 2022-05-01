const express = require('express')
const router = express.Router()
const productController = require('../controllers/register.controller')


router.get('/',(req,res)=>{
    console.log('IN User Register Area')
    res.render('register/layout1',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    })    
})


//router.get('/',productController.findAll)
//router.get('/:id',productController.findOne)
router.post('/',productController.createOne)
//router.patch('/:id',productController.updateOne)
//router.delete('/:id',productController.deleteOne)

module.exports = router