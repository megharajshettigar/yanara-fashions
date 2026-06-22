// /api/razorpay-create-order.js
// Creates a Razorpay order on the server before checkout opens.
// This is required by Razorpay so the payment amount can't be
// tampered with from the browser. Uses RAZORPAY_KEY_ID and
// RAZORPAY_KEY_SECRET from Vercel Environment Variables.

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

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return res.status(500).json({
      error: "Razorpay keys not set. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in Vercel > Settings > Environment Variables.",
    });
  }

  try {
    const { amount } = req.body; // amount in rupees (e.g. 24900)

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    // Razorpay expects amount in paise (smallest currency unit)
    const amountInPaise = Math.round(amount * 100);

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: "yanara_" + Date.now(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.description || "Razorpay order creation failed" });
    }

    // Return order id + key_id (safe to expose) so the browser can open checkout
    return res.status(200).json({
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
      keyId: keyId,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
