// ── YANARA FASHIONS — FIXES PATCH ──
// Add this file to your GitHub repo as yanara-fixes.js
// Then add this line just before </body> in index.html:
// <script src="yanara-fixes.js"></script>

// ── 1. ABOUT PAGE (added dynamically) ──
function createAboutPage() {
  if (document.getElementById('page-about')) return;
  const about = document.createElement('div');
  about.className = 'page';
  about.id = 'page-about';
  about.innerHTML = `
    <div style="padding:80px 4% 60px;border-bottom:1px solid var(--border);text-align:center">
      <div class="stag" style="text-align:center;margin-bottom:10px">Our Story</div>
      <h1 style="font-size:clamp(28px,4vw,56px);font-weight:300;letter-spacing:-1px;margin-bottom:16px">About <strong>YANARA Fashions</strong></h1>
      <p style="font-size:14px;color:var(--gray);max-width:600px;margin:0 auto;line-height:1.9">Born from a passion for Indian craft and contemporary design, YANARA Fashions is where tradition meets elegance.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;padding:70px 4%;border-bottom:1px solid var(--border)">
      <div>
        <div class="stag">Our Mission</div>
        <h2 class="stitle" style="margin-bottom:18px">Celebrating <strong>Indian Craft</strong></h2>
        <p style="font-size:13px;color:var(--gray);line-height:1.9;margin-bottom:14px">YANARA Fashions was founded with a single vision — to bring the finest Indian ethnic wear to modern men who value craftsmanship, heritage, and style.</p>
        <p style="font-size:13px;color:var(--gray);line-height:1.9">Every piece is handcrafted by skilled artisans using age-old techniques — Zari embroidery, Cutdana work, hand painting, and more — combined with contemporary silhouettes that feel relevant today.</p>
      </div>
      <div>
        <div class="stag">The Designer</div>
        <h2 class="stitle" style="margin-bottom:18px">Designer <strong>Ramya</strong></h2>
        <p style="font-size:13px;color:var(--gray);line-height:1.9;margin-bottom:18px">Award-winning fashion designer with 5+ years of experience. From Big Boss Tamil to London concert stages — Ramya's work has graced screens, runways, and red carpets across India and abroad.</p>
        <button class="bp" onclick="go('designer')">View Full Portfolio →</button>
      </div>
    </div>
    <section style="background:var(--bg2);padding:70px 4%">
      <div class="sh" style="margin-bottom:32px"><div><div class="stag">Values</div><h2 class="stitle">What We <strong>Stand For</strong></h2></div></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border)">
        <div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-needle-thread"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Craftsmanship</div><div style="font-size:11px;color:var(--gray)">Every stitch is intentional. Every embroidery tells a story.</div></div>
        <div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-leaf"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Sustainability</div><div style="font-size:11px;color:var(--gray)">Responsible sourcing. Supporting local artisan communities.</div></div>
        <div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-star"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Excellence</div><div style="font-size:11px;color:var(--gray)">No compromise on quality — from fabric to finishing.</div></div>
        <div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-users"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Community</div><div style="font-size:11px;color:var(--gray)">Built on relationships — with customers, artisans, and partners.</div></div>
      </div>
    </section>
    <section style="text-align:center;padding:70px 4%">
      <div class="stag" style="margin-bottom:10px">Ready to Explore?</div>
      <h2 class="stitle" style="margin-bottom:24px">Discover the <strong>Collection</strong></h2>
      <button class="bp" onclick="go('shop')">Shop Now</button>
    </section>
  `;
  document.body.appendChild(about);
}

// ── 2. INFO MODALS (support & policy popups) ──
function createModals() {
  if (document.getElementById('yanara-modals')) return;
  const modals = document.createElement('div');
  modals.id = 'yanara-modals';
  modals.innerHTML = `
    <style>
      .info-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:500;align-items:center;justify-content:center;padding:20px}
      .info-modal.open{display:flex}
      .info-box{background:#141414;border:1px solid rgba(255,255,255,0.07);border-radius:4px;width:100%;max-width:560px;max-height:80vh;overflow-y:auto;padding:36px;position:relative}
      .info-box h2{font-size:18px;font-weight:600;margin-bottom:6px;letter-spacing:1px}
      .info-box .info-sub{font-size:11px;color:#c9a96e;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px}
      .info-box p{font-size:12px;color:#888;line-height:1.9;margin-bottom:14px}
      .info-box h3{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:18px 0 8px;color:#f5f5f5}
      .info-close{position:absolute;top:14px;right:14px;background:none;border:1px solid rgba(255,255,255,0.07);color:#888;width:28px;height:28px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .2s}
      .info-close:hover{border-color:#c9a96e;color:#c9a96e}
    </style>

    <div class="info-modal" id="modal-size" onclick="if(event.target===this)closeModal('modal-size')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-size')">×</button>
        <h2>Size Guide</h2><div class="info-sub">Find Your Perfect Fit</div>
        <p>YANARA Fashions uses standard Indian sizes. Please measure yourself accurately before ordering.</p>
        <h3>Chest Measurement</h3>
        <p>S — 36 inches &nbsp;|&nbsp; M — 38 inches &nbsp;|&nbsp; L — 40 inches &nbsp;|&nbsp; XL — 42 inches &nbsp;|&nbsp; XXL — 44 inches</p>
        <h3>How to Measure</h3>
        <p>Measure around the fullest part of your chest with a measuring tape, keeping it parallel to the ground. For blazers and bandhgalas, we recommend going one size up for a comfortable fit.</p>
        <h3>Custom Sizing</h3>
        <p>All YANARA pieces can be custom-tailored. Contact us at yanarabyramya@gmail.com with your measurements for bespoke orders.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-track" onclick="if(event.target===this)closeModal('modal-track')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-track')">×</button>
        <h2>Track Your Order</h2><div class="info-sub">Order Status</div>
        <p>Once your order is dispatched, you will receive an SMS and email with your tracking details from our courier partner.</p>
        <h3>Typical Timeline</h3>
        <p>Order Confirmed → Processing (1–2 days) → Dispatched → Delivered (5–7 days from dispatch)</p>
        <h3>Need Help?</h3>
        <p>Email us at yanarabyramya@gmail.com or WhatsApp +91 8015781808 with your order ID and we will update you immediately.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-returns" onclick="if(event.target===this)closeModal('modal-returns')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-returns')">×</button>
        <h2>Returns & Exchanges</h2><div class="info-sub">7-Day Policy</div>
        <p>We want you to love every YANARA piece. If you are not satisfied, we accept returns within 7 days of delivery.</p>
        <h3>Conditions</h3>
        <p>Items must be unused, unwashed, and in original packaging with all tags intact. Custom and bespoke orders are non-returnable.</p>
        <h3>How to Return</h3>
        <p>1. Email yanarabyramya@gmail.com with your order ID and reason.<br>2. We will arrange a pickup within 2 business days.<br>3. Refund or exchange processed within 5–7 days of receiving the item.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-contact" onclick="if(event.target===this)closeModal('modal-contact')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-contact')">×</button>
        <h2>Contact Us</h2><div class="info-sub">We're Here to Help</div>
        <p><strong>Email:</strong> yanarabyramya@gmail.com<br><strong>WhatsApp:</strong> +91 8015781808<br><strong>Working Hours:</strong> Mon–Sat, 10am – 7pm IST</p>
        <h3>For Orders & Customisation</h3>
        <p>Reach out via WhatsApp for the fastest response. We typically reply within 2 hours during working hours.</p>
        <h3>Designer Collaboration</h3>
        <p>For fashion show collaborations, celebrity styling, or brand partnerships, email Ramya directly at yanarabyramya@gmail.com.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-faq" onclick="if(event.target===this)closeModal('modal-faq')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-faq')">×</button>
        <h2>FAQ</h2><div class="info-sub">Frequently Asked Questions</div>
        <h3>What fabrics do you use?</h3>
        <p>We use premium fabrics including raw silk, velvet, georgette, and handwoven textiles sourced from master weavers across India.</p>
        <h3>Can I customise a design?</h3>
        <p>Yes! All designs can be customised in colour, fabric, and size. Contact us with your requirements.</p>
        <h3>Do you ship outside India?</h3>
        <p>Yes, we ship worldwide. International shipping takes 10–15 days. Additional charges apply.</p>
        <h3>Are the embroideries hand-done?</h3>
        <p>Yes — all Zari, Cutdana, and Sequin work is done by hand by skilled artisans.</p>
        <h3>How do I care for my garment?</h3>
        <p>Dry clean only for blazers and bandhgalas. Hand wash cold for shirts. Store in the garment bag provided.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-shipping" onclick="if(event.target===this)closeModal('modal-shipping')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-shipping')">×</button>
        <h2>Shipping Policy</h2><div class="info-sub">Delivery Information</div>
        <p>Free shipping on all orders above ₹2,999 within India. Orders below ₹2,999 have a flat ₹150 shipping charge.</p>
        <h3>Delivery Time</h3>
        <p>Standard: 5–7 business days &nbsp;|&nbsp; Express: 2–3 business days (₹299 extra)</p>
        <h3>International Shipping</h3>
        <p>We ship to 50+ countries. International orders are delivered in 10–15 business days. Customs and import duties are the buyer's responsibility.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-privacy" onclick="if(event.target===this)closeModal('modal-privacy')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-privacy')">×</button>
        <h2>Privacy Policy</h2><div class="info-sub">Your Data is Safe</div>
        <p>YANARA Fashions respects your privacy. We collect only the information needed to process your orders — name, address, phone, and email.</p>
        <h3>What We Collect</h3>
        <p>Order details, delivery address, and payment confirmation reference. We do not store card or UPI details — all payments are processed securely by Razorpay.</p>
        <h3>How We Use It</h3>
        <p>Your information is used only to fulfil your order and communicate order status. We do not sell or share your data with third parties.</p>
      </div>
    </div>

    <div class="info-modal" id="modal-terms" onclick="if(event.target===this)closeModal('modal-terms')">
      <div class="info-box">
        <button class="info-close" onclick="closeModal('modal-terms')">×</button>
        <h2>Terms of Use</h2><div class="info-sub">Please Read Carefully</div>
        <p>By using this website and placing orders, you agree to these terms. YANARA Fashions reserves the right to update these terms at any time.</p>
        <h3>Orders</h3>
        <p>All orders are subject to availability. We reserve the right to cancel any order and issue a full refund if the product is unavailable.</p>
        <h3>Pricing</h3>
        <p>All prices are in Indian Rupees (₹) and inclusive of GST. Prices may change without prior notice.</p>
        <h3>Intellectual Property</h3>
        <p>All designs, images, and content on this site are the property of YANARA Fashions and designer Ramya. Reproduction without permission is prohibited.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modals);
}

// ── 3. MODAL FUNCTIONS ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.info-modal.open').forEach(m => m.classList.remove('open'));
});

// ── 4. FIX NAV — About link ──
function fixNav() {
  const navLinks = document.querySelectorAll('.nl a');
  navLinks.forEach(a => {
    if (a.textContent.trim() === 'About') {
      a.id = 'na';
      a.onclick = () => go('about');
    }
  });
}

// ── 5. FIX FOOTER — All support & policy links ──
function fixFooter() {
  // Find all footer <a> tags and fix them by text content
  document.querySelectorAll('.flinks a, footer a').forEach(a => {
    const txt = a.textContent.trim();
    if (txt === 'Size Guide')      a.onclick = () => openModal('modal-size');
    if (txt === 'Track Order')     a.onclick = () => openModal('modal-track');
    if (txt === 'Returns' || txt === 'Return Policy') a.onclick = () => openModal('modal-returns');
    if (txt === 'Contact Us' || txt === 'Contact') a.onclick = () => openModal('modal-contact');
    if (txt === 'FAQ')             a.onclick = () => openModal('modal-faq');
    if (txt === 'Shipping Policy') a.onclick = () => openModal('modal-shipping');
    if (txt === 'Privacy Policy')  a.onclick = () => openModal('modal-privacy');
    if (txt === 'Terms of Use')    a.onclick = () => openModal('modal-terms');
  });

  // Fix social buttons
  const socialBtns = document.querySelectorAll('.sb');
  const socials = ['Facebook', 'Instagram', 'Twitter', 'YouTube'];
  socialBtns.forEach((btn, i) => {
    const name = socials[i] || 'Social';
    btn.onclick = () => toast('Follow us on ' + name + '! 🙌');
  });

  // Add visible Admin link to footer bottom
  const fbot = document.querySelector('.fbot .fcopy');
  if (fbot && !document.getElementById('admin-link')) {
    const adminLink = document.createElement('a');
    adminLink.id = 'admin-link';
    adminLink.href = 'yanara-admin.html';
    adminLink.textContent = '⚙ Admin';
    adminLink.style.cssText = 'margin-left:16px;font-size:10px;color:#555;letter-spacing:1px;text-decoration:none;border:1px solid #333;padding:2px 8px;transition:all .3s;';
    adminLink.onmouseover = () => { adminLink.style.color = '#c9a96e'; adminLink.style.borderColor = '#c9a96e'; };
    adminLink.onmouseout  = () => { adminLink.style.color = '#555';    adminLink.style.borderColor = '#333'; };
    fbot.appendChild(adminLink);
  }
}

// ── 6. OVERRIDE go() to include 'about' page ──
const _originalGo = typeof go === 'function' ? go : null;
function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  ['nh','ns','nd','na'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('on'); });
  const map = { home:'nh', shop:'ns', designer:'nd', about:'na' };
  if (map[page]) { const el = document.getElementById(map[page]); if (el) el.classList.add('on'); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'home') { if (typeof renderHome === 'function') renderHome(); }
  if (page === 'shop') { if (typeof renderShop === 'function') { window.shopFilter = window.shopFilter || 'All'; window.occFilter = ''; renderShop(); } }
  if (page === 'cart') { if (typeof renderCart === 'function') renderCart(); }
}

// ── 7. INIT — run everything on page load ──
document.addEventListener('DOMContentLoaded', () => {
  createAboutPage();
  createModals();
  fixNav();
  // Give the main script a moment to render footer, then fix it
  setTimeout(fixFooter, 100);
});
