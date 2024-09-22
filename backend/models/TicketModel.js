const mongoose = require("mongoose");

const ticket = new mongoose.Schema(
  {
    Traveldate: String,
    Travelday: String,
    Transportname: String,
    Departuretime: String,
    DepartureAddress: String,
    TimeDuration: String,
    ArrivalTime: String,
    ArrivalAddress: String,
    TicketNo: String,
    PNR: String,
    Fare: String,
    BusProvider: String,
    BusType: String,
    PickUpPoint: String,
    DropPoint: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Ticket", ticket);
