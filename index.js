
// Dependencies
const express = require('express')
const cors = require('cors')
const config = require('config')
const registerRouter = require('./routes/register')
const mongoose = require('mongoose')

require('./db')

//initializing app
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/products',registerRouter)

//templete engine EJS
app.set('view engine','ejs')
app.set('view','./views')

//start server
port = config.get('port') || 8080

// Establishing connection with db
mongoose.connection.once('open',()=>{
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    })
    console.log('db connected')
})


