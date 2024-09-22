const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const users = new mongoose.Schema(
  {
    username: String,
    email: String,
    phone: String,
    password: String,
    gender: {
      enum: ["male", "female"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

users.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", users);
