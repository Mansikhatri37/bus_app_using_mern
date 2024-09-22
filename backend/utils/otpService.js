// services/otpService.js
const crypto = require('crypto');
const { sendSMS } = require('./smsService'); // Example function for sending SMS

const otpStorage = new Map(); // Temporary storage for OTPs

// Generate and send OTP
async function sendOTPToPhone(phoneNumber) {
  const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
  otpStorage.set(phoneNumber, otp);

  // Send OTP via SMS
  await sendSMS(phoneNumber, `Your OTP is ${otp}`);
}

// Verify OTP
async function verifyOTP(phoneNumber, otp) {
  const storedOtp = otpStorage.get(phoneNumber);
  if (storedOtp && storedOtp === otp) {
    otpStorage.delete(phoneNumber); // OTP used, delete it
    return true;
  }
  return false;
}

module.exports = { sendOTPToPhone, verifyOTP };
