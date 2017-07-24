const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TestSchema = new Schema({
  name: {
    type: String,
    Required: 'Please add a name to test'
  },
  number: {
    type: Number
  }
})

module.exports = mongoose.model('Test', TestSchema)

