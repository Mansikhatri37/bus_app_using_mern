const mongoose = require('mongoose')

const filSchema = new mongoose.Schema({
  icon: String,
  tes: String
}, { timestamps: true })

module.exports = mongoose.model('fitlerScema', filSchema)