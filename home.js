// ── YANARA FASHION — HOME PAGE ──
// This file builds the ENTIRE home page. index.html only has <div id="page-home"></div>.
// Edit THIS file to change anything on the home page.

const HOME_HTML = `
  <!-- EDITORIAL HERO -->
  <div class="ed-hero">
    <div class="ed-kicker">Premium Ethnic Wear · Est. 2025</div>
    <div class="ed-bigtype">
      <span class="l1">YANARA</span>
      <span class="l2">Fashion</span>
      <span class="l3">by Ramya</span>
    </div>
    <p class="ed-hero-sub">Handcrafted blazers, bandhgalas & indo-western sets — where heritage craft meets contemporary tailoring, made for the modern celebration.</p>
    <div class="ed-hero-actions">
      <button class="ed-btn" onclick="go('shop')">Shop the Collection</button>
      <button class="ed-btn-ghost" onclick="shopOcc('Wedding')">The Wedding Edit</button>
    </div>
    <div class="ed-hero-arch">
      <i class="ti ti-hanger"></i>
      <div class="ed-hero-archlabel">SS25 Collection</div>
    </div>
  </div>

  <div class="mq"><div class="mtrack">
    <span class="mi">Blazer Sets</span><span class="mdot"> ✦ </span><span class="mi">Bandhgala Sets</span><span class="mdot"> ✦ </span><span class="mi">Indo Western</span><span class="mdot"> ✦ </span><span class="mi">Hand Painted Shirts</span><span class="mdot"> ✦ </span><span class="mi">Award Winning Designer</span><span class="mdot"> ✦ </span><span class="mi">Free Shipping ₹2999+</span><span class="mdot"> ✦ </span><span class="mi">Blazer Sets</span><span class="mdot"> ✦ </span><span class="mi">Bandhgala Sets</span><span class="mdot"> ✦ </span><span class="mi">Indo Western</span><span class="mdot"> ✦ </span><span class="mi">Hand Painted Shirts</span><span class="mdot"> ✦ </span><span class="mi">Award Winning Designer</span><span class="mdot"> ✦ </span><span class="mi">Free Shipping ₹2999+</span><span class="mdot"> ✦ </span>
  </div></div>

  <!-- FEATURED PIECE -->
  <section class="ed-featured">
    <div class="ed-feat-grid">
      <div class="ed-feat-left">
        <div class="ed-feat-num">Signature · 01</div>
        <h1 class="ed-feat-title">The Draped<br>Collar <em>Blazer</em></h1>
        <div class="ed-feat-rule"></div>
        <p class="ed-feat-desc">A study in modern tailoring. Hand-finished draped lapel, structured shoulder, and a premium wool blend — designed to command the room.</p>
        <div class="ed-feat-details">
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-cut"></i></div>
            <div><div class="ed-feat-detail-t">Draped Lapel</div><div class="ed-feat-detail-s">Signature collar fold</div></div>
          </div>
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-feather"></i></div>
            <div><div class="ed-feat-detail-t">Premium Wool</div><div class="ed-feat-detail-s">Soft structured drape</div></div>
          </div>
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-sparkles"></i></div>
            <div><div class="ed-feat-detail-t">Hand Finished</div><div class="ed-feat-detail-s">Artisan craftsmanship</div></div>
          </div>
        </div>
        <div class="ed-feat-colors">
          <span class="lbl">In</span>
          <span class="dot" style="background:#1a1a1a" title="Black"></span>
          <span class="dot" style="background:#6d1a2a" title="Maroon"></span>
          <span class="dot" style="background:#5c1a2e" title="Wine"></span>
          <span class="dot" style="background:#6b6b6b" title="Grey"></span>
          <span class="dot" style="background:#c97d8a" title="Onion Pink"></span>
        </div>
      </div>
      <div class="ed-feat-right" onclick="shopCat('Blazer Sets')" style="cursor:pointer">
        <div class="ed-feat-mainimg"><i class="ti ti-hanger"></i></div>
        <div class="ed-feat-thumb t1"><i class="ti ti-zoom-in"></i></div>
        <div class="ed-feat-thumb t2"><i class="ti ti-zoom-in"></i></div>
        <div class="ed-feat-price">₹24,900</div>
      </div>
    </div>
  </section>

  <!-- CATEGORY SHOWCASE -->
  <section class="ed-cats">
    <div class="ed-cats-head">
      <div class="k">Explore</div>
      <h2>Shop by <em>Category</em></h2>
    </div>
    <div class="ed-cat-row">
      <div class="ed-cat" onclick="shopCat('Blazer Sets')">
        <div class="ed-cat-num">01</div>
        <i class="ti ti-jacket ed-cat-bgicon"></i>
        <div class="ed-cat-vert">Blazers</div>
        <div class="ed-cat-open">
          <h3>Blazer <em>Sets</em></h3>
          <div class="ct">9 statement designs</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Bandhgala Sets')">
        <div class="ed-cat-num">02</div>
        <i class="ti ti-shirt ed-cat-bgicon"></i>
        <div class="ed-cat-vert">Bandhgala</div>
        <div class="ed-cat-open">
          <h3>Bandhgala</h3>
          <div class="ct">12 regal pieces</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Indo Western Sets')">
        <div class="ed-cat-num">03</div>
        <i class="ti ti-shirt ed-cat-bgicon"></i>
        <div class="ed-cat-vert">Indo Western</div>
        <div class="ed-cat-open">
          <h3>Indo <em>Western</em></h3>
          <div class="ct">9 fusion co-ords</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Shirts')">
        <div class="ed-cat-num">04</div>
        <i class="ti ti-brush ed-cat-bgicon"></i>
        <div class="ed-cat-vert">Shirts</div>
        <div class="ed-cat-open">
          <h3>Hand <em>Painted</em></h3>
          <div class="ct">Wearable art</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
    </div>
  </section>
  <section style="padding:0 0 70px;background:var(--bg2)">
    <div style="padding:50px 4% 32px;display:flex;align-items:flex-end;justify-content:space-between"><div><div class="stag">Just In</div><h2 class="stitle"><strong>New</strong> Arrivals</h2></div><a class="slink" onclick="go('shop')">View All →</a></div>
    <div style="padding:0 4%"><div class="hscroll" id="new-arrivals"></div></div>
  </section>
  <section style="padding:0 0 70px">
    <div style="padding:50px 4% 32px;display:flex;align-items:flex-end;justify-content:space-between"><div><div class="stag">Most Loved</div><h2 class="stitle">Best <strong>Sellers</strong></h2></div><a class="slink" onclick="go('shop')">View All →</a></div>
    <div style="padding:0 4%"><div class="hscroll" id="bestsellers"></div></div>
  </section>
  <div class="strip">
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-needle-thread"></i></div><div class="strip-title">Handcrafted</div><div class="strip-desc">Skilled artisans, premium fabrics</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-truck-delivery"></i></div><div class="strip-title">Free Delivery</div><div class="strip-desc">On orders above ₹2,999</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-refresh"></i></div><div class="strip-title">Easy Returns</div><div class="strip-desc">7-day hassle-free returns</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-lock"></i></div><div class="strip-title">Secure Payments</div><div class="strip-desc">Powered by Razorpay</div></div>
  </div>
  <section style="background:var(--bg2);padding:70px 4%">
    <div class="sh"><div><div class="stag">Customer Stories</div><h2 class="stitle">What People <strong>Say</strong></h2></div></div>
    <div class="tgrid">
      <div class="tc"><div class="tst">★★★★★</div><div class="tt">"The blazer set is absolutely stunning. The Zari embroidery is exquisite and the fit is perfect. Worth every rupee."</div><div class="ta"><div class="av">A</div><div><div class="an">Arjun Kapoor</div><div class="alc">Mumbai</div></div></div></div>
      <div class="tc"><div class="tst">★★★★★</div><div class="tt">"Wore the Bandhgala set to my brother's wedding. Got compliments all night. The craftsmanship is outstanding."</div><div class="ta"><div class="av">R</div><div><div class="an">Rohan Mehta</div><div class="alc">Delhi</div></div></div></div>
      <div class="tc"><div class="tst">★★★★☆</div><div class="tt">"The hand painted shirt is one of a kind. YANARA truly creates wearable art. Fast delivery too!"</div><div class="ta"><div class="av">S</div><div><div class="an">Sanjay Iyer</div><div class="alc">Bengaluru</div></div></div></div>
    </div>
  </section>
  <footer>
    <div class="fgrid2">
      <div>
        <div class="fbrand">YANARA<span>Fashion</span></div>
        <div class="fdesc">Premium handcrafted ethnic wear by award-winning designer Ramya. Where tradition meets contemporary elegance.</div>
        <div class="fsoc">
          <button class="sb" onclick="toast('Follow us on Facebook!')">f</button>
          <button class="sb" onclick="toast('Follow us on Instagram!')">in</button>
          <button class="sb" onclick="toast('Follow us on Twitter!')">tw</button>
          <button class="sb" onclick="toast('Subscribe on YouTube!')">yt</button>
        </div>
      </div>
      <div><div class="ft">Categories</div><ul class="flinks"><li><a onclick="shopCat('Blazer Sets')">Blazer Sets</a></li><li><a onclick="shopCat('Bandhgala Sets')">Bandhgala Sets</a></li><li><a onclick="shopCat('Indo Western Sets')">Indo Western</a></li><li><a onclick="shopCat('Shirts')">Hand Painted Shirts</a></li><li><a onclick="go('shop')">View All</a></li></ul></div>
      <div><div class="ft">Shop By Occasion</div><ul class="flinks"><li><a onclick="shopOcc('Wedding')">Wedding</a></li><li><a onclick="shopOcc('Reception')">Reception</a></li><li><a onclick="shopOcc('Engagement')">Engagement</a></li><li><a onclick="shopOcc('Sangeet')">Sangeet</a></li><li><a onclick="shopOcc('Festive')">Festive</a></li></ul></div>
      <div><div class="ft">Support</div><ul class="flinks"><li><a onclick="openModal('modal-size')">Size Guide</a></li><li><a onclick="openModal('modal-track')">Track Order</a></li><li><a onclick="openModal('modal-returns')">Returns</a></li><li><a onclick="openModal('modal-contact')">Contact Us</a></li><li><a onclick="openModal('modal-faq')">FAQ</a></li></ul></div>
      <div><div class="ft">Policies</div><ul class="flinks"><li><a onclick="openModal('modal-shipping')">Shipping Policy</a></li><li><a onclick="openModal('modal-returns')">Return Policy</a></li><li><a onclick="openModal('modal-privacy')">Privacy Policy</a></li><li><a onclick="openModal('modal-terms')">Terms of Use</a></li><li><a onclick="go('designer')">About Designer</a></li></ul></div>
    </div>
    <div class="fbot">
      <div class="fcopy">© 2025 YANARA Fashion by Ramya. All rights reserved.</div>
      <div class="fpay"><span class="pb">UPI</span><span class="pb">VISA</span><span class="pb">MC</span><span class="pb">RUPAY</span><span class="pb">RAZORPAY</span></div>
    </div>
  </footer>
`;

// Inject the home page HTML into the shell
function buildHome(){
  const shell = document.getElementById("page-home");
  if(shell && !shell.dataset.built){
    shell.innerHTML = HOME_HTML;
    shell.dataset.built = "1";
  }
}

// Render product rows (New Arrivals / Best Sellers)
function renderHome(){
  buildHome();
  const na=document.getElementById("new-arrivals");
  const bs=document.getElementById("bestsellers");
  if(na)na.innerHTML=products.slice(0,6).map(p=>card(p,"openP")).join("");
  if(bs)bs.innerHTML=products.slice(4,10).map(p=>card(p,"openP")).join("");
}

// Build immediately on load so the home page shows even before renderHome is called
document.addEventListener("DOMContentLoaded", buildHome);
