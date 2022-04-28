
// Dependencies
const express = require('express')
const cors = require('cors')
const config = require('config')
const productRouter = require('./routes/product')

//initializing app
const app = express()

//middlewares

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/products',productRouter)

//templete engine EJS

app.set('view engine','ejs')
app.set('view','./views')

//start server
port = config.get('port') || 8080
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
