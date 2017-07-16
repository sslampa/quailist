const express = require('express')
const app = express()
const port = 3000

const helloWorld = require('./controllers/hello-world')

app.get('/api/hello-world', helloWorld.helloWorld)
app.get('/', helloWorld.getHello)

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
