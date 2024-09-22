const mongoose = require("mongoose");
const busSchema = require("./BusModel"); 

const routeMapSchema = new mongoose.Schema(
  {
    buses: [busSchema],
    origin: String,
    destination: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("RouteMap", routeMapSchema);
