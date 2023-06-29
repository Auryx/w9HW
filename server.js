require('dotenv').config()
const express = require('express')
const app = express()
const AnimalRouter = require('./controllers/animal')
const methodOverride = require("method-override")

const PORT = process.env.PORT

//middleware
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded())

app.use('/animals', AnimalRouter)


//controllers
app.get('/', (req, res) => {
    res.send('hello world')
})
//end of controllers

app.listen(PORT, () => {
    console.log('app is listening (animals)')
})