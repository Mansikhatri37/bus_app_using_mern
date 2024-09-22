const mongoose = require("mongoose");


const locationSchema = new mongoose.Schema({
    nameLocation: String,
    address: String,
}, { timestamps: true, versionKey: false });


module.exports = mongoose.model("Location", locationSchema);
