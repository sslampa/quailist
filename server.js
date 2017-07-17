const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 3000

const helloWorld = require('./controllers/hello-world')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/quailist-development', { 
    useMongoClient: true 
  })
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err))

app.get('/api/hello-world', helloWorld.helloWorld)
app.get('/', helloWorld.getHello)

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
