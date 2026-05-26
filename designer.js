// ── YANARA FASHION — DESIGNER PAGE (Ramya) ──
// This file builds the ENTIRE designer page. index.html only has
// <div class="page" id="page-designer"></div>.
// Minimal, editorial, Chylak-style: full-screen photo first, then
// flowing content reveals on scroll.

// ── DESIGNER PHOTO ──
// TODO: when Ramya's real photo is ready, upload it to ImageKit and
// paste the URL here (replace the placeholder below). One line to change.
// Example: var DESIGNER_PHOTO = "https://ik.imagekit.io/megharaj/ramya-1.jpg?tr=w-1200,q-90,f-auto";
var DESIGNER_PHOTO = "https://ik.imagekit.io/megharaj/DESIGNER%20PHOTO/RAMYA%20-%20bw_.png"; // empty = shows an elegant placeholder

var DESIGNER_HTML = `
  <style>
    /* ═══ DESIGNER PAGE — minimal editorial ═══ */
    .dz-wrap{background:var(--bg);color:var(--white);padding-top:80px;}

    /* ═══ NEW MINIMAL HEADER & HAMBURGER SYSTEM ═══ */
    .yn-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: var(--bg, #0b0b0b);
      z-index: 999;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .yn-nav-container {
      max-width: 1440px;
      height: 100%;
      margin: 0 auto;
      padding: 0 4%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .yn-logo {
      text-decoration: none;
      font-family: var(--font-display, serif);
      font-size: 20px;
      letter-spacing: 4px;
      font-weight: 600;
      color: #fff;
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .yn-logo span {
      font-size: 11px;
      letter-spacing: 5px;
      color: var(--gold, #c5a880);
      font-weight: 400;
      margin-top: 2px;
    }
    .yn-menu-trigger {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 1001;
    }
    .yn-burger-lines {
      width: 26px;
      height: 14px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .yn-burger-lines span {
      display: block;
      width: 100%;
      height: 1.5px;
      background: #fff;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    /* Hamburger to X Morph */
    .menu-open .yn-burger-lines span:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    .menu-open .yn-burger-lines span:nth-child(2) {
      transform: translateY(-6px) rotate(-45deg);
    }
    /* Full Screen Overlay */
    .yn-overlay-menu {
      position: fixed;
      inset: 0;
      background: #0b0b0b;
      z-index: 998;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      padding-top: 80px;
    }
    .yn-overlay-menu.open {
      opacity: 1;
      pointer-events: auto;
    }
    .yn-menu-inner {
      text-align: center;
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
    .yn-menu-links {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .yn-link {
      font-family: var(--font-display, serif);
      font-size: clamp(26px, 4.5vw, 36px);
      color: rgba(255, 255, 255, 0.4);
      text-decoration: none;
      letter-spacing: 2px;
      transition: color 0.3s;
    }
    .yn-link:hover, .yn-link.active {
      color: #fff;
    }
    .yn-menu-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 35px;
    }
    .yn-action-btn {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      transition: color 0.3s;
    }
    .yn-action-btn i {
      font-size: 18px;
      color: var(--gold, #c5a880);
    }
    .yn-action-btn:hover {
      color: #fff;
    }
    .yn-cart-count {
      background: var(--gold, #c5a880);
      color: #000;
      font-size: 9px;
      font-weight: bold;
      padding: 1px 5px;
      border-radius: 10px;
    }

    /* ═══ SCROLL-OVERLAP HERO ═══ */
    .dz-hero{position:sticky;top:80px;height:calc(100vh - 80px);min-height:560px;overflow:hidden;
      display:flex;align-items:flex-end;z-index:0}
    .dz-hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 30%}
    .dz-hero-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
      background:radial-gradient(circle at 50% 40%,var(--bg3),var(--bg))}
    .dz-hero-ph i{font-size:90px;color:var(--gold);opacity:.35}
    .dz-hero::after{content:"";position:absolute;inset:0;z-index:1;
      background:linear-gradient(180deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,0) 35%,rgba(0,0,0,.85) 100%)}
    .dz-hero-cap{position:relative;z-index:2;width:100%;padding:0 6% 60px;text-align:center}
    .dz-hero-kick{font-size:11px;letter-spacing:6px;text-transform:uppercase;color:var(--gold);margin-bottom:18px}
    .dz-hero-name{font-family:var(--font-display);font-size:clamp(52px,11vw,150px);line-height:.9;
      font-weight:500;letter-spacing:2px;color:#fff}
    .dz-hero-role{font-size:clamp(12px,1.6vw,15px);letter-spacing:3px;text-transform:uppercase;
      color:var(--white);margin-top:16px;opacity:.85}
    .dz-scroll-hint{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);z-index:3;
      font-size:22px;color:var(--gold);animation:dzBounce 1.8s ease-in-out infinite}
    @keyframes dzBounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}

    .dz-content{position:relative;z-index:1;background:var(--bg);
      border-radius:28px 28px 0 0;margin-top:-40px;
      box-shadow:0 -30px 60px rgba(0,0,0,.5)}

    .dz-rev{opacity:0;transform:translateY(40px);transition:opacity 1s ease,transform 1s ease}
    .dz-rev.in{opacity:1;transform:translateY(0)}

    .dz-section{max-width:820px;margin:0 auto;padding:90px 6%}
    .dz-tag{font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:22px;text-align:center}
    .dz-lead{font-family:var(--font-display);font-size:clamp(22px,3vw,34px);line-height:1.5;
      font-weight:400;text-align:center;color:var(--white)}
    .dz-body{font-size:15px;line-height:2;color:var(--gray);text-align:center;margin-top:26px}
    .dz-body strong{color:var(--white);font-weight:500}

    .dz-quote{background:var(--bg2);padding:100px 6%;text-align:center}
    .dz-quote-mark{font-family:var(--font-display);font-size:80px;line-height:.4;color:var(--gold);opacity:.5}
    .dz-quote-txt{font-family:var(--font-display);font-size:clamp(22px,3.2vw,38px);line-height:1.5;
      font-style:italic;color:var(--white);max-width:840px;margin:24px auto 0;font-weight:400}
    .dz-quote-by{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-top:30px}

    .dz-highlights{max-width:880px;margin:0 auto;padding:90px 6%}
    .dz-hl{padding:46px 0;border-bottom:1px solid var(--border)}
    .dz-hl:last-child{border-bottom:none}
    .dz-hl-yr{font-size:12px;letter-spacing:2px;color:var(--gold);margin-bottom:10px}
    .dz-hl-title{font-family:var(--font-display);font-size:clamp(22px,2.8vw,30px);color:var(--white);margin-bottom:14px;font-weight:500}
    .dz-hl-desc{font-size:14px;line-height:1.9;color:var(--gray);max-width:640px}

    .dz-skills{max-width:820px;margin:0 auto;padding:20px 6% 90px;text-align:center}
    .dz-skill-row{display:flex;flex-wrap:wrap;justify-content:center;gap:14px 28px;margin-top:24px}
    .dz-skill{font-size:13px;letter-spacing:1px;color:var(--white);position:relative}
    .dz-skill::after{content:"·";position:absolute;right:-16px;color:var(--gold)}
    .dz-skill:last-child::after{display:none}

    .dz-cta{background:var(--bg2);text-align:center;padding:100px 6%}
    .dz-cta h2{font-family:var(--font-display);font-size:clamp(26px,3.5vw,42px);font-weight:400;margin-bottom:18px;color:var(--white)}
    .dz-cta p{font-size:14px;color:var(--gray);margin-bottom:32px;line-height:1.8}
    .dz-cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
    .dz-btn{background:var(--gold);color:var(--btn-text);border:none;padding:15px 38px;font-size:11px;
      letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;transition:all .3s;font-family:var(--font)}
    .dz-btn:hover{opacity:.88}
    .dz-btn-ghost{background:transparent;color:var(--white);border:1px solid var(--border);padding:15px 38px;
      font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;transition:all .3s;font-family:var(--font)}
    .dz-btn-ghost:hover{border-color:var(--gold);color:var(--gold)}

    @media (max-width:768px){
      .dz-wrap{padding-top:70px;}
      .yn-header{height:70px;}
      .dz-hero{height:calc(88vh - 70px);top:70px;}
      .dz-section,.dz-highlights,.dz-skills{padding-top:64px;padding-bottom:64px}
      .dz-quote,.dz-cta{padding:70px 6%}
    }
  </style>

  <div class="dz-wrap">

    <header class="yn-header" id="ynPageHeader">
      <div class="yn-nav-container">
        <a href="#" onclick="go('home')" class="yn-logo">
          YANARA<span>FASHION</span>
        </a>
        <button class="yn-menu-trigger" aria-label="Toggle Menu" onclick="toggleYnMenu()">
          <div class="yn-burger-lines">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>

    <div class="yn-overlay-menu" id="ynOverlayMenu">
      <div class="yn-menu-inner">
        <nav class="yn-menu-links">
          <a href="#" class="yn-link" onclick="handleYnNav('home')">Home</a>
          <a href="#" class="yn-link" onclick="handleYnNav('shop')">Shop</a>
          <a href="#" class="yn-link active" onclick="handleYnNav('designer')">Designer</a>
          <a href="#" class="yn-link" onclick="handleYnNav('about')">About</a>
        </nav>
        <div class="yn-menu-actions">
          <button class="yn-action-btn" onclick="openModal('modal-auth')">
            <i class="ti ti-user"></i><span>Sign In</span>
          </button>
          <button class="yn-action-btn" onclick="toggleTheme()">
            <i class="ti ti-moon"></i><span>Theme</span>
          </button>
          <button class="yn-action-btn" onclick="go('shop')">
            <i class="ti ti-shopping-bag"></i><span>Cart <span class="yn-cart-count">0</span></span>
          </button>
        </div>
      </div>
    </div>

    <div class="dz-hero">
      ${DESIGNER_PHOTO
        ? `<img class="dz-hero-img" src="${DESIGNER_PHOTO}" alt="Designer Ramya">`
        : `<div class="dz-hero-ph"><i class="ti ti-camera"></i></div>`}
      <div class="dz-hero-cap">
        <div class="dz-hero-kick">YANARA Fashion · Founder & Designer</div>
        <div class="dz-hero-name">Ramya</div>
        <div class="dz-hero-role">Fashion Designer · Bangalore</div>
      </div>
      <div class="dz-scroll-hint"><i class="ti ti-chevron-down"></i></div>
    </div>

    <div class="dz-content">

    <section class="dz-section dz-rev">
      <div class="dz-tag">About</div>
      <p class="dz-lead">A creative spirit with versatile skills — a fast learner and a hard worker, driven to give her very best to the world of fashion.</p>
      <p class="dz-body">Trained at the <strong>JD Institute of Fashion Technology</strong>, Ramya is the founder and designer behind <strong>YANARA Fashion</strong>. Her work blends traditional Indian craft with contemporary tailoring — from hand-painted art and intricate embroidery to sculptural, runway-ready silhouettes.</p>
    </section>

    <div class="dz-quote dz-rev">
      <div class="dz-quote-mark">&ldquo;</div>
      <div class="dz-quote-txt">My main objective is to put my best effort and endeavour into the fashion industry — to create pieces that are both meaningful and timeless.</div>
      <div class="dz-quote-by">— Ramya, Founder of YANARA</div>
    </div>

    <div class="dz-highlights">
      <div class="dz-tag">Selected Work</div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">2022 · Award</div>
        <div class="dz-hl-title">Best South Indian Fashion Designer</div>
        <div class="dz-hl-desc">Honoured at Tirupur Fashion Week 2022, where her collection walked the runway to critical acclaim — a recognition of her distinctive design voice in South Indian fashion.</div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Television</div>
        <div class="dz-hl-title">Bigg Boss Tamil — Season 6</div>
        <div class="dz-hl-desc">Designed garments for contestants of one of Tamil Nadu's most-watched reality shows, styling looks seen by millions across the season.</div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">2022 · International</div>
        <div class="dz-hl-title">Iykki Berry — London</div>
        <div class="dz-hl-desc">Created a garment for celebrity rapper and singer Iykki Berry's Diwali concert in London, fusing Tamil Nadu culture into the design — and later styled her Tamil album song <strong>MAMA</strong>, shot in London.</div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Film</div>
        <div class="dz-hl-title">BCHH — Senior Stylist</div>
        <div class="dz-hl-desc">Worked as Senior Stylist for the Kannada feature film <em>Bili Chukki Halli Hakki</em>, shaping the on-screen wardrobe and character looks.</div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Collection</div>
        <div class="dz-hl-title">SHUI — JD Design Awards 2022</div>
        <div class="dz-hl-desc">An eight-garment collection inspired by China's Yellow River, reflecting on the harmful effects of chemical waste — a statement on sustainability told through couture fusion-wear.</div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Industry</div>
        <div class="dz-hl-title">Fashion Designer · TheEthnic.Co</div>
        <div class="dz-hl-desc">Designed for the menswear ethnic brand TheEthnic.Co, sharpening a craft that now defines YANARA's signature men's silhouettes.</div>
      </div>
    </div>

    <div class="dz-skills dz-rev">
      <div class="dz-tag">Craft & Tools</div>
      <p class="dz-lead" style="font-size:clamp(18px,2.2vw,24px)">From hand to digital</p>
      <div class="dz-skill-row">
        <span class="dz-skill">Hand Painting</span>
        <span class="dz-skill">Embroidery</span>
        <span class="dz-skill">Garment Construction</span>
        <span class="dz-skill">Portrait Art</span>
        <span class="dz-skill">Adobe Photoshop</span>
        <span class="dz-skill">Adobe Illustrator</span>
        <span class="dz-skill">CLO 3D</span>
      </div>
    </div>

    <div class="dz-cta dz-rev">
      <h2>Work With <em>Ramya</em></h2>
      <p>For custom orders, celebrity styling, collaborations, or fashion-show participation.</p>
      <div class="dz-cta-row">
        <button class="dz-btn" onclick="openModal('modal-contact')">Get in Touch</button>
        <button class="dz-btn-ghost" onclick="go('shop')">View the Collection</button>
      </div>
    </div>

    </div></div>
`;

// Helper functions for menu state toggle securely isolated inside designer space
function toggleYnMenu() {
  var header = document.getElementById('ynPageHeader');
  var overlay = document.getElementById('ynOverlayMenu');
  if(!header || !overlay) return;
  
  header.classList.toggle('menu-open');
  overlay.classList.toggle('open');
  document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
}

function handleYnNav(pageId) {
  toggleYnMenu();
  if (typeof go === 'function') go(pageId);
}

// Inject the designer page into its shell
function buildDesigner(){
  var shell = document.getElementById("page-designer");
  if(shell && !shell.dataset.built){
    shell.innerHTML = DESIGNER_HTML;
    shell.dataset.built = "1";
    setupDesignerReveal();
  }
}

// Reveal sections (fade + rise) as they scroll into view
function setupDesignerReveal(){
  var items = document.querySelectorAll("#page-designer .dz-rev");
  if(!items.length) return;
  if(!("IntersectionObserver" in window)){
    items.forEach(function(el){ el.classList.add("in"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(function(el){ obs.observe(el); });
}

// Build on load
document.addEventListener("DOMContentLoaded", buildDesigner);
