const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: Number,
    busId: Number,
    rating: Number,
    comment: String,
});

module.exports = mongoose.model("Review", reviewSchema);
