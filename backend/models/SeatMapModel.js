const mongoose = require("mongoose");

const seatMapSchema = new mongoose.Schema({
  
  lowerDeck: [
    {
      columnOne: [String],
      columnTwo: [String]
    }
  ],
  upperDeck: [
    {
      columnOne: [String],
      columnTwo: [String]
    }
  ]
});

const SeatMap = mongoose.model("SeatMap", seatMapSchema);

module.exports = SeatMap;
