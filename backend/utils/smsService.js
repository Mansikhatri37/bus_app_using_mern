// services/smsService.js
const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function sendSMS(phoneNumber, message) {
  try {
    await client.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw new Error('Failed to send SMS');
  }
}

module.exports = { sendSMS };
