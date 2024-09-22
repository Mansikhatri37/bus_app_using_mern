const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const operator = new mongoose.Schema(
  {
    firstName: String,
    middleName: String,
    lastName: String,
    aadharNumber: String,
    panNumber: String,
    gender: {
      enum: ["male", "female"],
    },

    username: String,
    email: String,
    phone: String,
    address: String,

    companyName: String,
    companyEmail: String,
    companyContact: String,
    companyAddress: String,
    numberOfBuses: Number,
    gstNumber: String,


    busType: String,
    busDetails: String,
    password: String,

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

operator.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("Operator", operator);

