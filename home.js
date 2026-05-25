// ── YANARA FASHION — HOME PAGE ──
// This file builds the ENTIRE home page. index.html only has <div id="page-home"></div>.
// Edit THIS file to change anything on the home page.

// ── HOME IMAGE HELPER (ImageKit, high quality) ──
function homeImg(code, n, w){
  var width = w || 1100;
  return "https://ik.imagekit.io/megharaj/" + code + "-" + n + ".jpg?tr=w-" + width + ",q-92,f-auto";
}

// ── FEATURED: Wine Bandhgala group (Group E) — colours sync on click ──
// Default colour = Wine (BG17WI). All ₹38,000, 5 images each.
var FEAT_GROUP = [
  { code:"BG17WI", id:19, name:"Wine",      hex:"#5c1a2e", imgs:5 },
  { code:"BG14DB", id:16, name:"Dark Blue", hex:"#1a2a4a", imgs:5 },
  { code:"BG15PK", id:17, name:"Pink",      hex:"#e8a0b0", imgs:5 },
  { code:"BG16GY", id:18, name:"Grey",      hex:"#6b6b6b", imgs:5 }
];
var FEAT_PRICE = "₹38,000";

// Category tile images (representative product per category)
var IMG_CAT_BLZ = homeImg("BZ10BL", 1, 800);  // Blazers
var IMG_CAT_BND = homeImg("BG17WI", 1, 800);  // Bandhgala
var IMG_CAT_IW  = homeImg("IW01BL", 1, 800);  // Indo Western
var IMG_CAT_SH  = homeImg("SH01WH", 1, 800);  // Shirts
var IMG_HERO    = homeImg("BZ10BL", 1, 1000); // SS25 hero

const HOME_HTML = `
  <style>
    /* ═══ HERO IMAGE — fit cleanly, no harsh crop ═══ */
    .ed-hero-arch{overflow:hidden}
    .ed-hero-arch img{width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:inherit;display:block}

    /* ═══ FEATURED (Wine Bandhgala) — images fit, colours sync ═══ */
    .ed-feat-mainimg{overflow:hidden}
    .ed-feat-mainimg img{width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:inherit;display:block;transition:opacity .35s}
    .ed-feat-thumb{overflow:hidden}
    .ed-feat-thumb img{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;transition:opacity .35s}
    .ed-feat-colors .dot{cursor:pointer;width:22px;height:22px;border-radius:50%;display:inline-block;border:2px solid transparent;transition:transform .2s,border-color .2s;vertical-align:middle}
    .ed-feat-colors .dot:hover{transform:scale(1.15)}
    .ed-feat-colors .dot.on{border-color:var(--gold);transform:scale(1.15)}
    #feat-colourname{color:var(--gold);font-weight:600}

    /* ═══ CATEGORY TILES — image fills, dark overlay for readable text ═══ */
    .ed-cat{position:relative;overflow:hidden}
    .ed-cat-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;z-index:0;opacity:.6;transition:opacity .4s,transform .6s}
    .ed-cat:hover .ed-cat-img{opacity:.85;transform:scale(1.05)}
    .ed-cat::after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.7))}
    .ed-cat-num,.ed-cat-vert,.ed-cat-open{position:relative;z-index:2}

    /* ═══ REVIEWS — STAR REVEAL ANIMATION ═══ */
    .ed-reviews{position:relative;background:var(--bg2);padding:90px 4% 100px;overflow:hidden;text-align:center;min-height:520px}
    .ed-rev-inner{position:relative;z-index:1}
    /* The SVG overlay covers the section with a star-shaped hole.
       The star (hole) grows on scroll, uncovering the reviews behind it. */
    .ed-star-svg{position:absolute;inset:0;width:100%;height:100%;z-index:5;pointer-events:none}
    .ed-star-cover{fill:var(--bg2)}
    .ed-reviews.done .ed-star-svg{display:none} /* remove overlay once revealed */
    .ed-rev-rating{margin-top:18px;display:flex;flex-direction:column;align-items:center;gap:4px}
    .ed-rev-score{font-family:var(--font-display,serif);font-size:54px;line-height:1;color:var(--gold);font-weight:600}
    .ed-rev-stars-inline{color:var(--gold);letter-spacing:4px;font-size:20px}
    .ed-rev-count{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gray);margin-top:4px}
    .ed-rev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;max-width:1100px;margin:42px auto 0}
    .ed-rev-card{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:28px 26px;text-align:left}
    .ed-rev-st{color:var(--gold);letter-spacing:3px;font-size:15px;margin-bottom:14px}
    .ed-rev-tt{font-size:15px;line-height:1.75;color:var(--white);margin-bottom:22px;font-style:italic}
    .ed-rev-author{display:flex;align-items:center;gap:12px}
    .ed-rev-av{width:42px;height:42px;border-radius:50%;background:var(--gold);color:var(--bg);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;flex-shrink:0}
    .ed-rev-an{font-weight:600;font-size:14px;color:var(--white)}
    .ed-rev-loc{font-size:11px;color:var(--gray);letter-spacing:.5px;display:flex;align-items:center;gap:4px;margin-top:2px}

    /* ═══ NEW ARRIVALS / BEST SELLERS — ARCHED STAGGERED CARDS ═══ */
    .ed-prod-row{display:flex;gap:26px;overflow-x:auto;padding:30px 4px 40px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}
    .ed-prod-row::-webkit-scrollbar{height:6px}
    .ed-prod-row::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
    .ed-pcard{flex:0 0 auto;width:260px;scroll-snap-align:start;cursor:pointer;
      opacity:0;transform:translateY(36px);transition:opacity .6s ease,transform .6s ease}
    .ed-pcard.in{opacity:1;transform:translateY(0)}
    /* staggered heights: every 2nd card sits lower for a dynamic row */
    .ed-pcard:nth-child(even){margin-top:38px}
    .ed-pcard-img{position:relative;width:100%;height:360px;overflow:hidden;background:var(--bg2)}
    .ed-pcard-img img{width:100%;height:100%;object-fit:cover;object-position:center top;
      transition:transform .7s cubic-bezier(.2,.8,.2,1);display:block}
    .ed-pcard:hover{transform:translateY(-8px)}
    .ed-pcard:hover .ed-pcard-img img{transform:scale(1.07)}

    /* SHAPE 1 — NEW ARRIVALS: asymmetric arch (top-left corner rounded) */
    .ed-shape-arch .ed-pcard-img{border-radius:16px 120px 16px 16px}
    /* SHAPE 2 — BEST SELLERS: pill / capsule (fully rounded top & bottom) */
    .ed-shape-pill .ed-pcard-img{border-radius:16px 130px 16px 16px}

    /* badge BELOW the image now (never clipped by the shape) */
    .ed-pcard-wish{position:absolute;top:14px;right:14px;z-index:2;width:36px;height:36px;border-radius:50%;
      border:none;background:rgba(0,0,0,.4);color:#fff;cursor:pointer;backdrop-filter:blur(4px);
      display:flex;align-items:center;justify-content:center;transition:background .2s}
    .ed-pcard-wish:hover{background:var(--gold);color:var(--bg)}
    .ed-pcard-info{padding:18px 6px 0;text-align:center}
    .ed-pcard-badge{display:inline-block;background:var(--gold);color:var(--bg);
      font-size:10px;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;border-radius:20px;
      font-weight:600;margin-bottom:10px}
    .ed-pcard-cat{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
    .ed-pcard-name{font-size:15px;color:var(--white);margin-bottom:6px;font-weight:500}
    .ed-pcard-price{font-size:16px;color:var(--white);font-weight:600;font-family:var(--font-display,serif)}
    .ed-pcard-cta{margin-top:14px;width:100%;padding:11px;border:1px solid var(--gold);background:transparent;
      color:var(--gold);border-radius:30px;cursor:pointer;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
      transition:background .25s,color .25s}
    .ed-pcard-cta:hover{background:var(--gold);color:var(--bg)}


    @media (max-width:768px){
      /* product cards: smaller, less stagger on mobile */
      .ed-pcard{width:200px}
      .ed-pcard-img{height:280px}
      .ed-shape-arch .ed-pcard-img{border-radius:12px 90px 12px 12px}
      .ed-shape-pill .ed-pcard-img{border-radius:12px 100px 12px 12px}
      .ed-pcard:nth-child(even){margin-top:22px}
      /* Category tiles: stack vertically, fix overlapping fonts */
      .ed-cat-row{display:flex!important;flex-direction:column!important;gap:14px!important}
      .ed-cat{height:180px!important;width:100%!important;flex:none!important}
      .ed-cat-vert{writing-mode:horizontal-tb!important;transform:none!important;position:absolute!important;top:14px!important;left:16px!important;font-size:13px!important;letter-spacing:2px!important}
      .ed-cat-open{position:absolute!important;left:16px!important;bottom:16px!important;right:16px!important;opacity:1!important;max-height:none!important;transform:none!important}
      .ed-cat-num{top:14px!important;right:16px!important;left:auto!important}
      /* Featured: stack */
      .ed-feat-grid{grid-template-columns:1fr!important;gap:30px!important}
      .ed-feat-right{min-height:420px!important}
      /* Reviews */
      .ed-rev-score{font-size:44px}
      .ed-rev-grid{grid-template-columns:1fr!important}
    }
    @media (max-width:460px){
      .ed-rev-card{padding:22px 20px}
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
      <img src="${IMG_HERO}" alt="YANARA SS25 Collection" loading="eager">
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
        <h1 class="ed-feat-title">The <span id="feat-colourname">Wine</span><br>Bandhgala <em>Set</em></h1>
        <div class="ed-feat-rule"></div>
        <p class="ed-feat-desc">A regal statement in tailored heritage. Mandarin collar, structured silhouette, and premium fabric with a hand-finished sheen — crafted for the moments that matter.</p>
        <div class="ed-feat-details">
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-medal"></i></div>
            <div><div class="ed-feat-detail-t">Mandarin Collar</div><div class="ed-feat-detail-s">Classic regal stand</div></div>
          </div>
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-diamond"></i></div>
            <div><div class="ed-feat-detail-t">Premium Fabric</div><div class="ed-feat-detail-s">Rich structured finish</div></div>
          </div>
          <div class="ed-feat-detail">
            <div class="ed-feat-detail-ic"><i class="ti ti-sparkles"></i></div>
            <div><div class="ed-feat-detail-t">Hand Finished</div><div class="ed-feat-detail-s">Artisan craftsmanship</div></div>
          </div>
        </div>
        <div class="ed-feat-colors" id="feat-colors">
          <span class="lbl">Colour</span>
          <!-- colour dots injected by JS so they sync with the image -->
        </div>
      </div>
      <div class="ed-feat-right" id="feat-right" style="cursor:pointer">
        <div class="ed-feat-mainimg"><img id="feat-mainimg" src="" alt="Wine Bandhgala Set"></div>
        <div class="ed-feat-thumb t1"><img id="feat-t1" src="" alt="detail"></div>
        <div class="ed-feat-thumb t2"><img id="feat-t2" src="" alt="detail"></div>
        <div class="ed-feat-price">${FEAT_PRICE}</div>
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
  <section style="padding:0 0 80px;background:var(--bg2)">
    <div style="padding:50px 4% 40px;display:flex;align-items:flex-end;justify-content:space-between"><div><div class="stag">Just In</div><h2 class="stitle"><strong>New</strong> Arrivals</h2></div><a class="slink" onclick="go('shop')">View All →</a></div>
    <div style="padding:0 4%"><div class="ed-prod-row" id="new-arrivals"></div></div>
  </section>
  <section style="padding:0 0 80px">
    <div style="padding:50px 4% 40px;display:flex;align-items:flex-end;justify-content:space-between"><div><div class="stag">Most Loved</div><h2 class="stitle">Best <strong>Sellers</strong></h2></div><a class="slink" onclick="go('shop')">View All →</a></div>
    <div style="padding:0 4%"><div class="ed-prod-row" id="bestsellers"></div></div>
  </section>
  <div class="strip">
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-needle-thread"></i></div><div class="strip-title">Handcrafted</div><div class="strip-desc">Skilled artisans, premium fabrics</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-truck-delivery"></i></div><div class="strip-title">Free Delivery</div><div class="strip-desc">On orders above ₹2,999</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-refresh"></i></div><div class="strip-title">Easy Returns</div><div class="strip-desc">7-day hassle-free returns</div></div>
    <div class="strip-item"><div class="strip-icon"><i class="ti ti-lock"></i></div><div class="strip-title">Secure Payments</div><div class="strip-desc">Powered by Razorpay</div></div>
  </div>
  <section class="ed-reviews" id="ed-reviews">
    <div class="ed-rev-inner">
      <div class="sh" style="justify-content:center;text-align:center"><div><div class="stag">Customer Stories</div><h2 class="stitle">What People <strong>Say</strong></h2></div></div>
      <div class="ed-rev-rating">
        <span class="ed-rev-score">4.9</span>
        <span class="ed-rev-stars-inline">★★★★★</span>
        <span class="ed-rev-count">Based on 18 Google reviews</span>
      </div>
      <div class="ed-rev-grid">
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
    </div>
    <!-- STAR REVEAL OVERLAY: a full-cover layer with a star-shaped hole that grows -->
    <svg class="ed-star-svg" id="ed-star-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <mask id="starHoleMask">
          <rect x="0" y="0" width="100" height="100" fill="white"/>
          <!-- the star is BLACK = punches a hole; it scales up from center -->
          <path id="ed-star-path" fill="black"
            d="M50 50 C50 50 50 50 50 50 C50 50 50 50 50 50 C50 50 50 50 50 50 C50 50 50 50 50 50 Z"/>
        </mask>
      </defs>
      <rect x="0" y="0" width="100" height="100" class="ed-star-cover" mask="url(#starHoleMask)"/>
    </svg>
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
    setupFeaturedColors();
    setupReviewReveal();
  }
}

// ── FEATURED: build colour dots + sync image/name on click ──
function setupFeaturedColors(){
  var wrap = document.getElementById("feat-colors");
  var mainImg = document.getElementById("feat-mainimg");
  var t1 = document.getElementById("feat-t1");
  var t2 = document.getElementById("feat-t2");
  var nameEl = document.getElementById("feat-colourname");
  var right = document.getElementById("feat-right");
  if(!wrap || !mainImg) return;

  // Show a colour's images + name
  function applyColour(c){
    mainImg.src = homeImg(c.code, 1, 900);
    t1.src = homeImg(c.code, 2, 500);
    t2.src = homeImg(c.code, 3, 500);
    if(nameEl) nameEl.textContent = c.name;
    // mark active dot
    wrap.querySelectorAll(".dot").forEach(function(d){ d.classList.remove("on"); });
    var active = wrap.querySelector('.dot[data-code="'+c.code+'"]');
    if(active) active.classList.add("on");
    // clicking the image opens THIS colour's product
    right.onclick = function(){ if(typeof openP === "function") openP(c.id); };
  }

  // Build the dots
  FEAT_GROUP.forEach(function(c){
    var dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = c.hex;
    dot.title = c.name + " Bandhgala";
    dot.setAttribute("data-code", c.code);
    dot.onclick = function(){ applyColour(c); };
    wrap.appendChild(dot);
  });

  // Default to the first colour (Wine)
  applyColour(FEAT_GROUP[0]);
}

// ── REVIEWS: star-window reveal animation on scroll ──
// A 4-point concave star (the "hole" in the overlay) grows from the
// centre outward, uncovering the reviews behind it — matching the
// reference video.
function buildStarPath(scale){
  // centre of the 100x100 viewBox
  var cx = 50, cy = 50;
  // outer point distance and the concave control distance
  var R = 75 * scale;        // how far the 4 points reach
  var ctrl = 10 * scale;     // smaller = sharper concave pinch
  // 4 outer points: top, right, bottom, left
  var top   = [cx, cy - R];
  var right = [cx + R, cy];
  var bot   = [cx, cy + R];
  var left  = [cx - R, cy];
  // control points pull the edges INWARD toward centre (concave curve)
  var c = ctrl;
  // Build path: each side is a quadratic curve bowing toward the centre
  return "M " + top[0] + " " + top[1] +
    " Q " + (cx + c) + " " + (cy - c) + " " + right[0] + " " + right[1] +
    " Q " + (cx + c) + " " + (cy + c) + " " + bot[0] + " " + bot[1] +
    " Q " + (cx - c) + " " + (cy + c) + " " + left[0] + " " + left[1] +
    " Q " + (cx - c) + " " + (cy - c) + " " + top[0] + " " + top[1] + " Z";
}

function setupReviewReveal(){
  var section = document.getElementById("ed-reviews");
  var path = document.getElementById("ed-star-path");
  if(!section || !path){ if(section) section.classList.add("done"); return; }

  if(!("IntersectionObserver" in window)){ section.classList.add("done"); return; }

  var rafId = null;       // current animation frame (so we can cancel/restart)
  var isVisible = false;  // is the section currently in view

  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        if(!isVisible){
          isVisible = true;
          animateStar();      // re-play every time it re-enters view
        }
      } else {
        isVisible = false;
        // reset: cancel any running animation and re-cover for next time
        if(rafId) cancelAnimationFrame(rafId);
        section.classList.remove("done");
        path.setAttribute("d", buildStarPath(0.02)); // closed star = covered
      }
    });
  }, { threshold: 0.4 });   // trigger when ~40% visible (so you're looking at it)
  obs.observe(section);

  function animateStar(){
    var dur = 1500;          // 1.5 seconds
    var start = null;
    section.classList.remove("done");

    // smooth easing: ease-in-out cubic (gentle start, gentle finish)
    function easeInOutCubic(t){
      return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    }

    function frame(ts){
      if(!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var e = easeInOutCubic(t);
      // grow from a tiny star to large enough to fully cover the section
      var scale = 0.02 + e * 2.3;
      path.setAttribute("d", buildStarPath(scale));
      if(t < 1){
        rafId = requestAnimationFrame(frame);
      } else {
        rafId = null;
        section.classList.add("done"); // clean reviews after reveal
      }
    }
    if(rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(frame);
  }
}

// Build one product card for the home rows.
// shapeClass = "ed-shape-arch" (New Arrivals) or "ed-shape-pill" (Best Sellers)
function homeCard(p, shapeClass){
  // use the lighter card-optimized image (cardImg from shop.js)
  var imgUrl = (p.imgs && p.imgs.length) ? cardImg(p.imgs[0]) : "";
  var img = imgUrl
    ? '<img src="'+imgUrl+'" alt="'+p.name+'" loading="lazy" onerror="this.parentElement.innerHTML=\'<div style=&quot;display:flex;align-items:center;justify-content:center;height:100%;font-size:40px&quot;>👔</div>\'">'
    : '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px">👔</div>';
  // badge now sits in the info area BELOW the image — never clipped by the shape
  var badge = p.badge ? '<div class="ed-pcard-badge">'+p.badge+'</div>' : '';
  return '<div class="ed-pcard '+(shapeClass||"")+'" onclick="openP('+p.id+')">'+
    '<div class="ed-pcard-img">'+img+
    '</div>'+
    '<div class="ed-pcard-info">'+badge+
      '<div class="ed-pcard-cat">'+p.cat+'</div>'+
      '<div class="ed-pcard-name">'+p.name+'</div>'+
      '<div class="ed-pcard-price">₹'+p.price.toLocaleString()+'</div>'+
      '<button class="ed-pcard-cta" onclick="event.stopPropagation();addCart('+p.id+')">Add to Cart</button>'+
    '</div>'+
  '</div>';
}

// Reveal the arched cards (fade + rise) as they scroll into view.
function setupCardReveal(){
  var cards = document.querySelectorAll(".ed-pcard");
  if(!cards.length) return;
  if(!("IntersectionObserver" in window)){
    cards.forEach(function(c){ c.classList.add("in"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(function(c){ obs.observe(c); });
}

// Render product rows (New Arrivals / Best Sellers)
function renderHome(){
  buildHome();
  const na=document.getElementById("new-arrivals");
  const bs=document.getElementById("bestsellers");
  // New Arrivals = asymmetric arch shape; Best Sellers = pill/capsule shape
  if(na)na.innerHTML=products.slice(0,6).map(p=>homeCard(p,"ed-shape-arch")).join("");
  if(bs)bs.innerHTML=products.slice(4,10).map(p=>homeCard(p,"ed-shape-pill")).join("");
  setupCardReveal();
}

// Build immediately on load so the home page shows even before renderHome is called
document.addEventListener("DOMContentLoaded", buildHome);
