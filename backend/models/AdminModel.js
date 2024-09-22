const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullName: String,
    role: {
        type: String,
        enum: ["admin", "superadmin"],
        default: "admin"
    }
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);
