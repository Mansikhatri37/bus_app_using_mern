const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    busProvider: String,
    driverName: String,
    numOfStaff: String,
    departureTime: String,
    arrivalTime: String,
    insurance: String,
    seats: Number,
    busType: String,
    engineNumber: String,
    ratings: String,
    journeyDuration: String,
    departure: String,
    arrival: String,
    startingFrom: Number,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Bus", busSchema);
