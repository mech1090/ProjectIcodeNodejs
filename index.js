
// Dependencies
const express = require('express')
const pug = require('pug')
const cors = require('cors')
const config = require('config')
const registerPage = require('./routes/register')
const homePage = require('./routes/home')
const menuPage = require('./routes/menu')
const contactPage = require('./routes/contact')
const {NOT_FOUND_MSG}  = require('./constants')
const mongoose = require('mongoose')

require('./db')

//initializing app
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/register',registerPage)
app.use('/home',homePage)
app.use('/menu',menuPage)
app.use('/contact',contactPage)

//templete engine pug
app. set('view engine', 'pug')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.send('OK')
})

app.get('*',(req,res)=>{
    res.status(404).send(NOT_FOUND_MSG)
})
//start server
port = config.get('port') || 8080

// Establishing connection with db
mongoose.connection.once('open',()=>{
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    })
    console.log('db connected')
})


