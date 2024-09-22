const mongoose = require("mongoose");


const frequentQuestion = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
  component: Function,
},
  { timestamps: true, versionKey: false }
);


module.exports = mongoose.model("FrequentQuestion", frequentQuestion);
