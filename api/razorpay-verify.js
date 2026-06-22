// /api/razorpay-verify.js
// Verifies a Razorpay payment signature after checkout completes.
// Razorpay sends back order_id, payment_id, and a signature. We
// recompute the expected signature using RAZORPAY_KEY_SECRET and
// compare — this proves the payment is genuine and wasn't faked
// or tampered with from the browser.

import crypto from "crypto";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keySecret) {
    return res.status(500).json({
      error: "RAZORPAY_KEY_SECRET not set. Add it in Vercel > Settings > Environment Variables.",
    });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: "Missing payment verification fields" });
    }

    // Razorpay's documented signature formula: HMAC-SHA256 of "order_id|payment_id"
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({ verified: false, error: "Payment signature mismatch" });
    }

    return res.status(200).json({ verified: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
