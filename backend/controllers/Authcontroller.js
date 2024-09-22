const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/tokenGenerator");
const { sendOTPToPhone, verifyOTP } = require("../utils/otpService"); // Import the OTP service

// Signup Endpoint
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

// Login Endpoint: Sends OTP to the provided phone number
module.exports.Login = async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    // Send OTP and store it
    await sendOTPToPhone(phoneNumber);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
};

// User Verification Endpoint: Verifies the OTP
module.exports.UserVerification = async (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ error: "Phone number and OTP are required" });
  }

  try {
    const isValid = await verifyOTP(phoneNumber, otp);
    if (isValid) {
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to verify OTP" });
  }
};

// Forgot Password Endpoint
module.exports.ForgotPassword = async (req, res) => {
  // Implement forgot password logic here
};

// Reset Password Endpoint
module.exports.ResetPassword = async (req, res) => {
  // Implement reset password logic here
};

// Login with Google Endpoint
module.exports.LoginWithGoogle = async (req, res) => {
  // Implement Google login logic here
};

// Login with OTP Endpoint
module.exports.LoginWithOTP = async (req, res) => {
  // Implement OTP login logic here
};
