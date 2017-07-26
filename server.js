const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const Test = require('./server/models/test')
const test = require('./server/controllers/test')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/quailist-development', { 
  useMongoClient: true 
})
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/api/test', test.getTest)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})

module.exports = app
