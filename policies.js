// ── YANARA FASHION — POLICIES & INFO MODALS ──
// This file holds the content for the footer policy/info popups
// (Terms, Shipping, Cancellation & Refund, Privacy, Contact, etc.).
// It injects them into the page and reuses the existing
// .info-modal / .info-box styles from index.html.
//
// To edit any policy text later, just change it in THIS file.

var POLICIES_HTML = `
  <!-- TERMS & CONDITIONS -->
  <div class="info-modal" id="modal-terms" onclick="if(event.target===this)closeModal('modal-terms')">
    <div class="info-box">
      <button class="info-close" onclick="closeModal('modal-terms')">&times;</button>
      <h2>Terms &amp; Conditions</h2>
      <div class="info-sub">Terms of Service</div>
      <p>This website is operated by Yanara Fashion. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Yanara Fashion. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
      <p>By visiting our site and/or purchasing something from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions, including those additional terms and policies referenced herein. These Terms of Service apply to all users of the site.</p>

      <h3>Online Store Terms</h3>
      <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>

      <h3>Accuracy of Billing &amp; Account Information</h3>
      <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. In the event that we make a change to or cancel an order, we may attempt to notify you via the e-mail and/or billing address/phone number provided at the time the order was made. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>

      <h3>Product Display &amp; Pricing</h3>
      <p>Prices for our products are subject to change without notice. We have made every effort to display as accurately as possible the colours and images of our apparel. We cannot guarantee that your computer monitor's or mobile screen's display of any colour will be completely accurate.</p>

      <h3>Governing Law</h3>
      <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India, with jurisdiction operating in Bangalore, Karnataka.</p>

      <h3>Contact Information</h3>
      <p>Questions about the Terms of Service should be sent to us at yanarabyramya@gmail.com<br>
      <strong>Business Address:</strong> Bhavani Plaza, Nethaji Road, Hanumanthapuram, Hosur, Tamil Nadu 635109<br>
      <strong>Phone:</strong> 080157 81808</p>
    </div>
  </div>

  <!-- SHIPPING POLICY -->
  <div class="info-modal" id="modal-shipping" onclick="if(event.target===this)closeModal('modal-shipping')">
    <div class="info-box">
      <button class="info-close" onclick="closeModal('modal-shipping')">&times;</button>
      <h2>Shipping Policy</h2>
      <div class="info-sub">Delivery Information</div>
      <p>Thank you for visiting and shopping at Yanara Fashion. The following terms and conditions constitute our Shipping Policy.</p>

      <h3>Order Processing Time</h3>
      <p>All orders are processed within 1&ndash;3 business days. Orders are not shipped or delivered on weekends or public holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</p>

      <h3>Shipping Rates &amp; Delivery Estimates</h3>
      <p>Shipping charges for your order will be calculated and displayed at checkout.<br>
      &bull; Standard Shipping (Metro Cities): 3&ndash;5 business days.<br>
      &bull; Standard Shipping (Rest of India): 5&ndash;7 business days.</p>

      <h3>Shipment Confirmation &amp; Tracking</h3>
      <p>You will receive a Shipment Confirmation email/SMS once your order has shipped, containing your tracking number. The tracking number will become active within 24 hours.</p>

      <h3>Customs, Duties &amp; Taxes</h3>
      <p>Yanara Fashion is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer.</p>

      <h3>Damages</h3>
      <p>Yanara Fashion is liable for products damaged or lost during transit. If you received your order damaged, please contact our support team within 24 hours of delivery to file a claim. Please save all packaging materials and damaged goods, and ensure you take an unboxing video as proof to help speed up the process.</p>
    </div>
  </div>

  <!-- CANCELLATION & REFUND POLICY -->
  <div class="info-modal" id="modal-returns" onclick="if(event.target===this)closeModal('modal-returns')">
    <div class="info-box">
      <button class="info-close" onclick="closeModal('modal-returns')">&times;</button>
      <h2>Cancellation &amp; Refund Policy</h2>
      <div class="info-sub">Returns &amp; Exchanges</div>
      <p>At Yanara Fashion, we want you to love your purchase. If you are not entirely satisfied with your order, we're here to help.</p>

      <h3>Cancellations</h3>
      <p>You can cancel your order within 24 hours of placing it, provided it has not already been shipped. To request a cancellation, please contact us immediately at yanarabyramya@gmail.com or call 080157 81808. Once the order has been handed over to our courier partner, it cannot be cancelled.</p>

      <h3>Returns &amp; Exchanges</h3>
      <p>&bull; <strong>Eligibility Window:</strong> We accept return or exchange requests within 7 days from the date of delivery.<br>
      &bull; <strong>Condition:</strong> Items must be unused, unwashed, and in the same condition that you received them, with all original tags attached and in the original packaging.<br>
      &bull; <strong>Non-Returnable Items:</strong> Final sale items, altered garments, and certain custom pieces or innerwear are not eligible for return.</p>

      <h3>Refunds</h3>
      <p>Once we receive your returned garment, our quality check team will inspect it and notify you of the status of your refund. If approved, we will initiate a refund to your original method of payment (or via bank transfer for Cash on Delivery orders). You will receive the credit within 5&ndash;7 business days, depending on your card issuer's or bank's policies.</p>

      <h3>Return Shipping</h3>
      <p>To initiate a return or exchange, please email us at yanarabyramya@gmail.com with your Order ID and reason for return. We offer free reverse pickups for most pin codes across India. If reverse pickup is unavailable for your location, you will be requested to ship the item back to our warehouse, and shipping costs will be reimbursed up to a fixed amount.</p>
    </div>
  </div>

  <!-- PRIVACY POLICY -->
  <div class="info-modal" id="modal-privacy" onclick="if(event.target===this)closeModal('modal-privacy')">
    <div class="info-box">
      <button class="info-close" onclick="closeModal('modal-privacy')">&times;</button>
      <h2>Privacy Policy</h2>
      <div class="info-sub">Your Data is Safe</div>
      <p>We collect only the information needed to process your orders &mdash; name, address, phone, and email.</p>
      <h3>Payments</h3>
      <p>We do not store card or UPI details. All payments are processed securely by Razorpay.</p>
      <h3>Data Usage</h3>
      <p>Your information is used only to fulfil your order. We do not sell or share your data with third parties.</p>
    </div>
  </div>
`;

// Inject the policy modals: replace any existing ones with the
// same id, then append the rest, so there are no duplicates.
(function injectPolicies(){
  function run(){
    var temp = document.createElement("div");
    temp.innerHTML = POLICIES_HTML;
    var newModals = temp.querySelectorAll(".info-modal");
    newModals.forEach(function(m){
      var existing = document.getElementById(m.id);
      if(existing){
        existing.replaceWith(m);   // replace old modal with updated one
      } else {
        document.body.appendChild(m); // add if not present
      }
    });
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
