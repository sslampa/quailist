const mongoose = require('mongoose')
let Test = mongoose.model('Test')

function getTest(req, res) {
  Test.find({}, function(err, test) {
    if (err)
      res.send(err)
    res.json(test)
  })
}

module.exports = { getTest }
