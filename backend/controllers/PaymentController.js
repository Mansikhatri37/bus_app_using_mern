const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const { RAZORPAY_KEY_ID, RAZORPAY_SECRET } = process.env;

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_SECRET,
});

// Create Razorpay order
module.exports.createOrder = async (req, res, next) => {
  const { amount, currency = "INR" } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise (1 INR = 100 paise)
      currency,
      receipt: `receipt_${Date.now()}`,
    });

    // Log the order object to see its structure
    console.log("Razorpay Order Created: ", order);
    
    res.status(200).json({
      orderId: order.id, // Send orderId to the client
      amount: order.amount, // Return amount in paise
      currency: order.currency,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Verify Razorpay payment signature
module.exports.verifyPayment = (req, res, next) => {
  const { orderId, paymentId, signature } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", RAZORPAY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  if (generatedSignature === signature) {
    res
      .status(200)
      .json({ success: true, message: "Payment verified successfully" });
  } else {
    res
      .status(400)
      .json({ success: false, message: "Invalid signature, payment verification failed" });
  }
};
