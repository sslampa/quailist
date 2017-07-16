function getHello(req, res) {
  res.send('Hello World!')
}

function helloWorld(req, res) {
  res.json({
    phrase: 'Hello World!'
  })
}

module.exports = { getHello, helloWorld }
