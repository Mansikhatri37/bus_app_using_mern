const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const route = new mongoose.Schema(
  {
    username: String,
    buses: String,
    origin: String,
    destination: String,
    address: String,
    pin: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model( "Route", route );
