const express = require('express') //import express into project
const cors = require('cors')
const app = express() //assign functionality to variable
const fruitRouter = require("./routes/fruits")
const logger = require("./logger")

app.use(cors())
app.use(logger)
app.use(express.json())


app.get('/', (req, res) => { // '/' is the endpoint (home), req = request, res=response
  res.send("Welcome to the Fruity API")
})


app.use("/fruits", fruitRouter)

module.exports = app
