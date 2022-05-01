const express = require('express')
const router = express.Router()
const {NOT_FOUND_MSG}  = require('../constants')

router.get('/',(req,res)=>{
    res.render('menu/layout',{
        pageTitle:'Menu',
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'

    })
})

module.exports =    router