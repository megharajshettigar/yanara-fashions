// ── YANARA FASHION — HOME PAGE ──
// This file builds the ENTIRE home page. index.html only has <div id="page-home"></div>.
// Edit THIS file to change anything on the home page.

// ── HOME PAGE IMAGE URLS (from ImageKit) ──
// Helper to build a high-quality ImageKit URL for any product image.
// Uses the same ImageKit base as shop.js.
function homeImg(code, n, w){
  var width = w || 1000;
  return "https://ik.imagekit.io/megharaj/" + code + "-" + n + ".jpg?tr=w-" + width + ",q-90,f-auto";
}

// Featured + hero + category images (chosen products)
var IMG_HERO      = homeImg("BZ10BL", 1, 900);   // SS25 hero — Hand Painted Art Blazer (striking)
var IMG_FEAT_MAIN = homeImg("BZ01BL", 1, 900);   // Signature 01 — Draped Collar Blazer (main)
var IMG_FEAT_T1   = homeImg("BZ01BL", 2, 500);   // featured thumbnail 1
var IMG_FEAT_T2   = homeImg("BZ01BL", 3, 500);   // featured thumbnail 2
var IMG_CAT_BLZ   = homeImg("BZ10BL", 1, 700);   // Blazers category tile
var IMG_CAT_BND   = homeImg("BG01BL", 1, 700);   // Bandhgala category tile
var IMG_CAT_IW    = homeImg("IW01BL", 1, 700);   // Indo Western category tile
var IMG_CAT_SH    = homeImg("SH01WH", 1, 700);   // Shirts category tile


const HOME_HTML = `
  <style>
    /* Category tile real images */
    .ed-cat{position:relative;overflow:hidden}
    .ed-cat-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;opacity:.55;transition:opacity .4s,transform .6s}
    .ed-cat:hover .ed-cat-img{opacity:.8;transform:scale(1.06)}
    .ed-cat-num,.ed-cat-vert,.ed-cat-open{position:relative;z-index:2}
    .ed-cat::after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.65))}

    /* ── REVIEWS SECTION ── */
    .ed-reviews{position:relative;background:var(--bg2);padding:90px 4% 100px;overflow:hidden;text-align:center}
    .ed-rev-head{position:relative;z-index:3;margin-bottom:48px}
    .ed-rev-rating{margin-top:18px;display:flex;flex-direction:column;align-items:center;gap:4px}
    .ed-rev-score{font-family:var(--font-display,serif);font-size:54px;line-height:1;color:var(--gold);font-weight:600}
    .ed-rev-stars-inline{color:var(--gold);letter-spacing:4px;font-size:20px}
    .ed-rev-count{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gray);margin-top:4px}

    /* floating stars that animate on scroll */
    .ed-rev-stars{position:absolute;inset:0;z-index:1;pointer-events:none}
    .ed-star{position:absolute;color:var(--gold);opacity:0;font-size:28px;transform:scale(0) rotate(-30deg)}
    .ed-reviews.revealed .ed-star{animation:starPop .9s cubic-bezier(.2,1.4,.4,1) forwards}
    .ed-star.s1{top:14%;left:12%;font-size:34px}
    .ed-star.s2{top:22%;right:14%;font-size:22px;animation-delay:.12s!important}
    .ed-star.s3{top:60%;left:8%;font-size:26px;animation-delay:.24s!important}
    .ed-star.s4{top:54%;right:10%;font-size:32px;animation-delay:.36s!important}
    .ed-star.s5{top:38%;left:50%;font-size:20px;animation-delay:.48s!important}
    @keyframes starPop{
      0%{opacity:0;transform:scale(0) rotate(-30deg)}
      60%{opacity:.9;transform:scale(1.15) rotate(8deg)}
      100%{opacity:.5;transform:scale(1) rotate(0)}
    }

    /* review cards reveal */
    .ed-rev-grid{position:relative;z-index:3;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;max-width:1100px;margin:0 auto}
    .ed-rev-card{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:28px 26px;text-align:left;opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .ed-reviews.revealed .ed-rev-card{opacity:1;transform:translateY(0)}
    .ed-reviews.revealed .ed-rev-card:nth-child(1){transition-delay:.25s}
    .ed-reviews.revealed .ed-rev-card:nth-child(2){transition-delay:.4s}
    .ed-reviews.revealed .ed-rev-card:nth-child(3){transition-delay:.55s}
    .ed-reviews.revealed .ed-rev-card:nth-child(4){transition-delay:.7s}
    .ed-rev-st{color:var(--gold);letter-spacing:3px;font-size:15px;margin-bottom:14px}
    .ed-rev-tt{font-size:15px;line-height:1.75;color:var(--white);margin-bottom:22px;font-style:italic}
    .ed-rev-author{display:flex;align-items:center;gap:12px}
    .ed-rev-av{width:42px;height:42px;border-radius:50%;background:var(--gold);color:var(--bg);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;flex-shrink:0}
    .ed-rev-an{font-weight:600;font-size:14px;color:var(--white)}
    .ed-rev-loc{font-size:11px;color:var(--gray);letter-spacing:.5px;display:flex;align-items:center;gap:4px;margin-top:2px}
    @media (max-width:600px){
      .ed-rev-score{font-size:44px}
      .ed-star{font-size:20px!important}
    }
  </style>
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
      <img src="${IMG_HERO}" alt="YANARA SS25 Collection" loading="eager" style="width:100%;height:100%;object-fit:cover;border-radius:inherit" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<i class=\\'ti ti-hanger\\'></i>')">
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
        <div class="ed-feat-mainimg"><img src="${IMG_FEAT_MAIN}" alt="The Draped Collar Blazer" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<i class=\\'ti ti-hanger\\'></i>')"></div>
        <div class="ed-feat-thumb t1"><img src="${IMG_FEAT_T1}" alt="detail" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<i class=\\'ti ti-zoom-in\\'></i>')"></div>
        <div class="ed-feat-thumb t2"><img src="${IMG_FEAT_T2}" alt="detail" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<i class=\\'ti ti-zoom-in\\'></i>')"></div>
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
        <img src="${IMG_CAT_BLZ}" alt="Blazers" loading="lazy" class="ed-cat-img" onerror="this.style.display='none'">
        <div class="ed-cat-vert">Blazers</div>
        <div class="ed-cat-open">
          <h3>Blazer <em>Sets</em></h3>
          <div class="ct">9 statement designs</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Bandhgala Sets')">
        <div class="ed-cat-num">02</div>
        <img src="${IMG_CAT_BND}" alt="Bandhgala" loading="lazy" class="ed-cat-img" onerror="this.style.display='none'">
        <div class="ed-cat-vert">Bandhgala</div>
        <div class="ed-cat-open">
          <h3>Bandhgala</h3>
          <div class="ct">12 regal pieces</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Indo Western Sets')">
        <div class="ed-cat-num">03</div>
        <img src="${IMG_CAT_IW}" alt="Indo Western" loading="lazy" class="ed-cat-img" onerror="this.style.display='none'">
        <div class="ed-cat-vert">Indo Western</div>
        <div class="ed-cat-open">
          <h3>Indo <em>Western</em></h3>
          <div class="ct">9 fusion co-ords</div>
          <div class="cb">Explore <i class="ti ti-arrow-right"></i></div>
        </div>
      </div>
      <div class="ed-cat" onclick="shopCat('Shirts')">
        <div class="ed-cat-num">04</div>
        <img src="${IMG_CAT_SH}" alt="Hand Painted Shirts" loading="lazy" class="ed-cat-img" onerror="this.style.display='none'">
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
  <section class="ed-reviews" id="ed-reviews">
    <div class="ed-rev-stars" id="ed-rev-stars" aria-hidden="true">
      <i class="ti ti-star ed-star s1"></i>
      <i class="ti ti-star ed-star s2"></i>
      <i class="ti ti-star ed-star s3"></i>
      <i class="ti ti-star ed-star s4"></i>
      <i class="ti ti-star ed-star s5"></i>
    </div>
    <div class="ed-rev-head">
      <div class="stag">Customer Stories</div>
      <h2 class="stitle">What People <strong>Say</strong></h2>
      <div class="ed-rev-rating">
        <span class="ed-rev-score">4.9</span>
        <span class="ed-rev-stars-inline">★★★★★</span>
        <span class="ed-rev-count">Based on 18 Google reviews</span>
      </div>
    </div>
    <div class="ed-rev-grid" id="ed-rev-grid">
      <div class="ed-rev-card">
        <div class="ed-rev-st">★★★★★</div>
        <div class="ed-rev-tt">"I loved the quality of product as well as styling. She is a great designer, so you can also have the best outfit from YANARA — and she was also too sweet and responsible."</div>
        <div class="ed-rev-author"><div class="ed-rev-av">A</div><div><div class="ed-rev-an">Aniket Kumar</div><div class="ed-rev-loc"><i class="ti ti-brand-google"></i> Google Review</div></div></div>
      </div>
      <div class="ed-rev-card">
        <div class="ed-rev-st">★★★★★</div>
        <div class="ed-rev-tt">"I had a wonderful experience purchasing a blazer set from YANARA Fashion. The finishing was neat and given on time. The fitting was so perfect."</div>
        <div class="ed-rev-author"><div class="ed-rev-av">S</div><div><div class="ed-rev-an">Sunandha S</div><div class="ed-rev-loc"><i class="ti ti-brand-google"></i> Google Review</div></div></div>
      </div>
      <div class="ed-rev-card">
        <div class="ed-rev-st">★★★★★</div>
        <div class="ed-rev-tt">"Great design collection and customised fittings were done perfectly. Very satisfied!"</div>
        <div class="ed-rev-author"><div class="ed-rev-av">S</div><div><div class="ed-rev-an">Srinivasan K</div><div class="ed-rev-loc"><i class="ti ti-brand-google"></i> Google Review</div></div></div>
      </div>
      <div class="ed-rev-card">
        <div class="ed-rev-st">★★★★★</div>
        <div class="ed-rev-tt">"Designer Ramya explained the designs so well and her work was so neat and perfect. Loved the fit and design."</div>
        <div class="ed-rev-author"><div class="ed-rev-av">S</div><div><div class="ed-rev-an">Sri N</div><div class="ed-rev-loc"><i class="ti ti-brand-google"></i> Google Review</div></div></div>
      </div>
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
    setupReviewReveal();
  }
}

// ── SCROLL-TRIGGERED STAR REVEAL for the reviews section ──
// When the reviews section scrolls into view, add the "revealed" class.
// That class triggers the star-pop animation + the review cards sliding in.
function setupReviewReveal(){
  const section = document.getElementById("ed-reviews");
  if(!section) return;

  // If IntersectionObserver isn't available, just reveal immediately.
  if(!("IntersectionObserver" in window)){
    section.classList.add("revealed");
    return;
  }

  const obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        section.classList.add("revealed");
        obs.unobserve(section); // animate once
      }
    });
  }, { threshold: 0.25 }); // trigger when ~25% of the section is visible

  obs.observe(section);
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
