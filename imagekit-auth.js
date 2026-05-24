// /api/imagekit-auth.js
// Secure ImageKit authentication endpoint for YANARA Fashion admin uploads.
// This runs on Vercel as a serverless function. It uses the PRIVATE key
// (stored safely in Vercel Environment Variables) to generate a temporary,
// single-use signature so the browser can upload directly to ImageKit
// WITHOUT ever seeing the private key.

import crypto from "crypto";

export default function handler(req, res) {
  // --- CORS / basic headers ---
  // Allow the admin page (same site) to call this endpoint.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle browser preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // --- Read the private key from Vercel Environment Variables ---
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

  if (!privateKey) {
    // Safety: never crash silently. Tells you the env var is missing.
    return res.status(500).json({
      error:
        "IMAGEKIT_PRIVATE_KEY is not set. Add it in Vercel > Settings > Environment Variables.",
    });
  }

  // --- Generate the authentication parameters ---
  // ImageKit expects: token, expire, signature
  // token   = a random unique string for this upload
  // expire  = UNIX timestamp when this signature stops being valid
  // signature = HMAC-SHA1 of (token + expire) using the private key

  // token: random unique value
  const token = crypto.randomBytes(16).toString("hex");

  // expire: valid for 30 minutes from now (in seconds)
  const expire = Math.floor(Date.now() / 1000) + 60 * 30;

  // signature: HMAC-SHA1 of (token + expire), keyed with the private key
  const signature = crypto
    .createHmac("sha1", privateKey)
    .update(token + expire)
    .digest("hex");

  // Return the three values the browser upload needs.
  return res.status(200).json({
    token,
    expire,
    signature,
  });
}
