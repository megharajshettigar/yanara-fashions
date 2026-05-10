// ── YANARA FASHIONS — FIXES PATCH ──

// ── 0. FIX GRID LAYOUT CSS ──
(function() {
  var s = document.createElement('style');
  s.textContent = [
    '.pgrid{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))!important;gap:1px!important;background:var(--border)!important;width:100%!important}',
    '.slayout>div:last-child{min-width:0!important;overflow:hidden!important;width:100%!important}',
    '.info-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:500;align-items:center;justify-content:center;padding:20px}',
    '.info-modal.open{display:flex}',
    '.info-box{background:#141414;border:1px solid rgba(255,255,255,0.07);border-radius:4px;width:100%;max-width:560px;max-height:80vh;overflow-y:auto;padding:36px;position:relative}',
    '.info-box h2{font-size:18px;font-weight:600;margin-bottom:6px;letter-spacing:1px}',
    '.info-box .info-sub{font-size:11px;color:#c9a96e;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px}',
    '.info-box p{font-size:12px;color:#888;line-height:1.9;margin-bottom:14px}',
    '.info-box h3{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:18px 0 8px;color:#f5f5f5}',
    '.info-close{position:absolute;top:14px;right:14px;background:none;border:1px solid rgba(255,255,255,0.07);color:#888;width:28px;height:28px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .2s}',
    '.info-close:hover{border-color:#c9a96e;color:#c9a96e}'
  ].join('');
  document.head.appendChild(s);
})();

// ── 1. MODAL FUNCTIONS ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') document.querySelectorAll('.info-modal.open').forEach(function(m) { m.classList.remove('open'); });
});

// ── 2. CREATE MODALS ──
function createModals() {
  if (document.getElementById('yanara-modals')) return;
  var div = document.createElement('div');
  div.id = 'yanara-modals';
  div.innerHTML = '<div class="info-modal" id="modal-size" onclick="if(event.target===this)closeModal(\'modal-size\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-size\')">×</button><h2>Size Guide</h2><div class="info-sub">Find Your Perfect Fit</div><p>YANARA Fashions uses standard Indian sizes. Please measure yourself accurately before ordering.</p><h3>Chest Measurement</h3><p>S — 36 inches | M — 38 inches | L — 40 inches | XL — 42 inches | XXL — 44 inches</p><h3>How to Measure</h3><p>Measure around the fullest part of your chest. For blazers and bandhgalas, we recommend going one size up.</p><h3>Custom Sizing</h3><p>All YANARA pieces can be custom-tailored. Email yanarabyramya@gmail.com with your measurements.</p></div></div><div class="info-modal" id="modal-track" onclick="if(event.target===this)closeModal(\'modal-track\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-track\')">×</button><h2>Track Your Order</h2><div class="info-sub">Order Status</div><p>Once your order is dispatched, you will receive an SMS and email with tracking details.</p><h3>Typical Timeline</h3><p>Order Confirmed → Processing (1–2 days) → Dispatched → Delivered (5–7 days)</p><h3>Need Help?</h3><p>Email yanarabyramya@gmail.com or WhatsApp +91 8015781808 with your order ID.</p></div></div><div class="info-modal" id="modal-returns" onclick="if(event.target===this)closeModal(\'modal-returns\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-returns\')">×</button><h2>Returns & Exchanges</h2><div class="info-sub">7-Day Policy</div><p>We accept returns within 7 days of delivery.</p><h3>Conditions</h3><p>Items must be unused, unwashed, in original packaging with all tags. Custom orders are non-returnable.</p><h3>How to Return</h3><p>1. Email yanarabyramya@gmail.com with your order ID.<br>2. We arrange pickup within 2 business days.<br>3. Refund processed within 5–7 days.</p></div></div><div class="info-modal" id="modal-contact" onclick="if(event.target===this)closeModal(\'modal-contact\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-contact\')">×</button><h2>Contact Us</h2><div class="info-sub">We\'re Here to Help</div><p><strong>Email:</strong> yanarabyramya@gmail.com<br><strong>WhatsApp:</strong> +91 8015781808<br><strong>Hours:</strong> Mon–Sat, 10am–7pm IST</p><h3>For Orders & Customisation</h3><p>Reach out via WhatsApp for the fastest response. We reply within 2 hours during working hours.</p></div></div><div class="info-modal" id="modal-faq" onclick="if(event.target===this)closeModal(\'modal-faq\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-faq\')">×</button><h2>FAQ</h2><div class="info-sub">Frequently Asked Questions</div><h3>What fabrics do you use?</h3><p>Premium fabrics including raw silk, velvet, georgette, and handwoven textiles from master weavers across India.</p><h3>Can I customise a design?</h3><p>Yes! All designs can be customised in colour, fabric, and size.</p><h3>Do you ship outside India?</h3><p>Yes, we ship worldwide. International shipping takes 10–15 days.</p><h3>Are embroideries hand-done?</h3><p>Yes — all Zari, Cutdana, and Sequin work is done by hand by skilled artisans.</p><h3>How do I care for my garment?</h3><p>Dry clean only for blazers and bandhgalas. Hand wash cold for shirts.</p></div></div><div class="info-modal" id="modal-shipping" onclick="if(event.target===this)closeModal(\'modal-shipping\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-shipping\')">×</button><h2>Shipping Policy</h2><div class="info-sub">Delivery Information</div><p>Free shipping on all orders above ₹2,999 within India. Orders below ₹2,999 — flat ₹150 charge.</p><h3>Delivery Time</h3><p>Standard: 5–7 business days | Express: 2–3 business days (₹299 extra)</p><h3>International</h3><p>We ship to 50+ countries in 10–15 business days. Customs duties are the buyer\'s responsibility.</p></div></div><div class="info-modal" id="modal-privacy" onclick="if(event.target===this)closeModal(\'modal-privacy\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-privacy\')">×</button><h2>Privacy Policy</h2><div class="info-sub">Your Data is Safe</div><p>We collect only the information needed to process your orders — name, address, phone, and email.</p><h3>Payments</h3><p>We do not store card or UPI details. All payments are processed securely by Razorpay.</p><h3>Data Usage</h3><p>Your information is used only to fulfil your order. We do not sell or share your data with third parties.</p></div></div><div class="info-modal" id="modal-terms" onclick="if(event.target===this)closeModal(\'modal-terms\')"><div class="info-box"><button class="info-close" onclick="closeModal(\'modal-terms\')">×</button><h2>Terms of Use</h2><div class="info-sub">Please Read Carefully</div><p>By using this website and placing orders, you agree to these terms.</p><h3>Orders</h3><p>All orders are subject to availability. We reserve the right to cancel any order and issue a full refund.</p><h3>Pricing</h3><p>All prices are in Indian Rupees (₹) inclusive of GST. Prices may change without prior notice.</p><h3>Intellectual Property</h3><p>All designs and content are the property of YANARA Fashions. Reproduction without permission is prohibited.</p></div></div>';
  document.body.appendChild(div);
}

// ── 3. CREATE ABOUT PAGE ──
function createAboutPage() {
  if (document.getElementById('page-about')) return;
  var about = document.createElement('div');
  about.className = 'page';
  about.id = 'page-about';
  about.innerHTML = '<div style="padding:80px 4% 60px;border-bottom:1px solid var(--border);text-align:center"><div class="stag" style="text-align:center;margin-bottom:10px">Our Story</div><h1 style="font-size:clamp(28px,4vw,56px);font-weight:300;letter-spacing:-1px;margin-bottom:16px">About <strong>YANARA Fashions</strong></h1><p style="font-size:14px;color:var(--gray);max-width:600px;margin:0 auto;line-height:1.9">Born from a passion for Indian craft and contemporary design, YANARA Fashions is where tradition meets elegance.</p></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;padding:70px 4%;border-bottom:1px solid var(--border)"><div><div class="stag">Our Mission</div><h2 class="stitle" style="margin-bottom:18px">Celebrating <strong>Indian Craft</strong></h2><p style="font-size:13px;color:var(--gray);line-height:1.9;margin-bottom:14px">YANARA Fashions was founded with a single vision — to bring the finest Indian ethnic wear to modern men who value craftsmanship, heritage, and style.</p><p style="font-size:13px;color:var(--gray);line-height:1.9">Every piece is handcrafted by skilled artisans using age-old techniques — Zari embroidery, Cutdana work, hand painting, and more.</p></div><div><div class="stag">The Designer</div><h2 class="stitle" style="margin-bottom:18px">Designer <strong>Ramya</strong></h2><p style="font-size:13px;color:var(--gray);line-height:1.9;margin-bottom:18px">Award-winning fashion designer with 5+ years of experience. From Big Boss Tamil to London concert stages — Ramya\'s work has graced screens, runways, and red carpets across India and abroad.</p><button class="bp" onclick="go(\'designer\')">View Full Portfolio →</button></div></div><section style="background:var(--bg2);padding:70px 4%"><div class="sh" style="margin-bottom:32px"><div><div class="stag">Values</div><h2 class="stitle">What We <strong>Stand For</strong></h2></div></div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border)"><div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-needle-thread"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Craftsmanship</div><div style="font-size:11px;color:var(--gray)">Every stitch is intentional.</div></div><div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-leaf"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Sustainability</div><div style="font-size:11px;color:var(--gray)">Supporting local artisan communities.</div></div><div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-star"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Excellence</div><div style="font-size:11px;color:var(--gray)">No compromise on quality.</div></div><div style="background:var(--bg2);padding:32px 20px;text-align:center"><div style="font-size:28px;color:var(--gold);margin-bottom:12px"><i class="ti ti-users"></i></div><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Community</div><div style="font-size:11px;color:var(--gray)">Built on relationships.</div></div></div></section><section style="text-align:center;padding:70px 4%"><div class="stag" style="margin-bottom:10px">Ready to Explore?</div><h2 class="stitle" style="margin-bottom:24px">Discover the <strong>Collection</strong></h2><button class="bp" onclick="go(\'shop\')">Shop Now</button></section>';
  document.body.appendChild(about);
}

// ── 4. FIX NAV About link ──
function fixNav() {
  document.querySelectorAll('.nl a').forEach(function(a) {
    if (a.textContent.trim() === 'About') {
      a.id = 'na';
      a.onclick = function() { go('about'); };
    }
  });
}

// ── 5. FIX FOOTER links & Admin button ──
function fixFooter() {
  document.querySelectorAll('.flinks a, footer a').forEach(function(a) {
    var txt = a.textContent.trim();
    if (txt === 'Size Guide')                         a.onclick = function(){ openModal('modal-size'); };
    if (txt === 'Track Order')                        a.onclick = function(){ openModal('modal-track'); };
    if (txt === 'Returns' || txt === 'Return Policy') a.onclick = function(){ openModal('modal-returns'); };
    if (txt === 'Contact Us' || txt === 'Contact')    a.onclick = function(){ openModal('modal-contact'); };
    if (txt === 'FAQ')                                a.onclick = function(){ openModal('modal-faq'); };
    if (txt === 'Shipping Policy')                    a.onclick = function(){ openModal('modal-shipping'); };
    if (txt === 'Privacy Policy')                     a.onclick = function(){ openModal('modal-privacy'); };
    if (txt === 'Terms of Use')                       a.onclick = function(){ openModal('modal-terms'); };
  });
  var names = ['Facebook','Instagram','Twitter','YouTube'];
  document.querySelectorAll('.sb').forEach(function(btn, i) {
    btn.onclick = function(){ if(typeof toast==='function') toast('Follow us on '+(names[i]||'Social')+'!'); };
  });
  var fbot = document.querySelector('.fbot .fcopy');
  if (fbot && !document.getElementById('admin-link')) {
    var a = document.createElement('a');
    a.id = 'admin-link';
    a.href = 'yanara-admin.html';
    a.textContent = '⚙ Admin';
    a.style.cssText = 'margin-left:16px;font-size:10px;color:#555;letter-spacing:1px;text-decoration:none;border:1px solid #333;padding:2px 8px;transition:all .3s;cursor:pointer;';
    a.onmouseover = function(){ a.style.color='#c9a96e'; a.style.borderColor='#c9a96e'; };
    a.onmouseout  = function(){ a.style.color='#555'; a.style.borderColor='#333'; };
    fbot.appendChild(a);
  }
}

// ── 6. SAFE go() PATCH — only handles 'about', original handles everything else ──
var _origGo = window.go;
window.go = function(page) {
  if (page === 'about') {
    document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
    var ap = document.getElementById('page-about');
    if (ap) ap.classList.add('active');
    document.querySelectorAll('.nl a').forEach(function(a){ a.classList.remove('on'); });
    var na = document.getElementById('na');
    if (na) na.classList.add('on');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (typeof _origGo === 'function') _origGo(page);
  }
};

// ── 7. INIT ──
document.addEventListener('DOMContentLoaded', function() {
  createAboutPage();
  createModals();
  fixNav();
  setTimeout(fixFooter, 200);
});
