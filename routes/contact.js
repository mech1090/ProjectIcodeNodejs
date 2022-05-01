const express = require('express')
const router = express.Router()
const {NOT_FOUND_MSG}  = require('../constants')

router.get('/',(req,res)=>{
    console.log('IN RENDER AREA')
    res.render('contact/layout',{
        pageTitle:'Panini',
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'

    })
})

module.exports =    router