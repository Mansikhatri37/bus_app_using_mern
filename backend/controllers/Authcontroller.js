// const User = require("../models/UserModel");
// const { createSecretToken } = require("../utils/tokenGenerator");
// // const { sendOTPToPhone, verifyOTP } = require("../utils/otpService"); // Import the OTP service

// // Signup Endpoint
// module.exports.Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }
//     const user = await User.create({ email, password, username, createdAt });
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });
//     res
//       .status(201)
//       .json({ message: "User created successfully", success: true, user });
//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Login Endpoint: Sends OTP to the provided phone number
// module.exports.Login = async (req, res) => {
//   const { phoneNumber } = req.body;

//   if (!phoneNumber) {
//     return res.status(400).json({ error: "Phone number is required" });
//   }

//   try {
//     // Send OTP and store it
//     await sendOTPToPhone(phoneNumber);
//     res.status(200).json({ message: "OTP sent successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to send OTP" });
//   }
// };

// // User Verification Endpoint: Verifies the OTP
// module.exports.UserVerification = async (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   if (!phoneNumber || !otp) {
//     return res.status(400).json({ error: "Phone number and OTP are required" });
//   }

//   try {
//     const isValid = await verifyOTP(phoneNumber, otp);
//     if (isValid) {
//       res.status(200).json({ message: "OTP verified successfully" });
//     } else {
//       res.status(400).json({ error: "Invalid OTP" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to verify OTP" });
//   }
// };

// // Forgot Password Endpoint
// module.exports.ForgotPassword = async (req, res) => {
//   // Implement forgot password logic here
// };

// // Reset Password Endpoint
// module.exports.ResetPassword = async (req, res) => {
//   // Implement reset password logic here
// };

// // Login with Google Endpoint
// module.exports.LoginWithGoogle = async (req, res) => {
//   // Implement Google login logic here
// };

// // Login with OTP Endpoint
// module.exports.LoginWithOTP = async (req, res) => {
//   // Implement OTP login logic here
// };
const bcrypt = require("bcrypt");
const User = require("../models/UserModel"); // Adjust the path to your User model
const { createSecretToken } = require("../utils/tokenGenerator"); // Assume this function generates a JWT token

// Signup Controller
module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create the user
    const user = await User.create({ username, email, password });

    // Generate a JWT token for the user
    const token = createSecretToken(user._id);

    // Send the token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    });

    // Respond with success message and user data
    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);

    // Ensure the error message is captured properly
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// SignIn Controller
module.exports.SignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = createSecretToken(user._id);

    // Send the token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    });

    // Respond with user details and success message
    res.status(200).json({
      message: "Sign-in successful",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during sign-in:", error);

    // Handle unexpected errors
    res.status(500).json({ message: "Internal server error" });
  }
};
