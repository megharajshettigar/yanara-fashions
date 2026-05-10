// ── YANARA FASHIONS — CART & CHECKOUT ──
// Cart logic is included in shop.js since it uses the products array.
// This file is reserved for future cart enhancements like:
// - Razorpay payment integration
// - Order confirmation emails
// - WhatsApp notifications

// ── TOAST ──
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2500);
}
