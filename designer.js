// ── YANARA FASHION — DESIGNER PAGE (Ramya) ──
// This file builds the ENTIRE designer page. index.html only has
// <div class="page" id="page-designer"></div>.
// Minimal, editorial, Chylak-style: full-screen photo first, then
// flowing content reveals on scroll.

// ── DESIGNER PHOTO ──
// TODO: when Ramya's real photo is ready, upload it to ImageKit and
// paste the URL here (replace the placeholder below). One line to change.
// Example: var DESIGNER_PHOTO = "https://ik.imagekit.io/megharaj/ramya-1.jpg?tr=w-1200,q-90,f-auto";
var DESIGNER_PHOTO = "https://ik.imagekit.io/megharaj/DESIGNER%20PHOTO/RAMYA%20-%20w_.png?updatedAt=1779790484166"; // empty = shows an elegant placeholder

var DESIGNER_HTML = `
  <style>
    /* ═══ DESIGNER PAGE — minimal editorial ═══ */
    .dz-wrap{background:var(--bg);color:var(--white)}

    /* ═══ SCROLL-OVERLAP HERO ═══
       The photo is PINNED (sticky) full-screen. The content below
       scrolls UP and overlaps it, eventually covering it completely.
       Uses position:sticky → works on ALL browsers incl. Safari/iPhone. */
    .dz-hero{position:sticky;top:0;height:100vh;min-height:560px;overflow:hidden;
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

    /* The content AFTER the hero sits on top and scrolls up over it.
       Solid background + rounded top edge + shadow = clean overlap. */
    .dz-content{position:relative;z-index:1;background:var(--bg);
      border-radius:28px 28px 0 0;margin-top:-40px;
      box-shadow:0 -30px 60px rgba(0,0,0,.5)}

    /* reveal-on-scroll utility */
    .dz-rev{opacity:0;transform:translateY(40px);transition:opacity 1s ease,transform 1s ease}
    .dz-rev.in{opacity:1;transform:translateY(0)}

    /* generic minimal section */
    .dz-section{max-width:820px;margin:0 auto;padding:90px 6%}
    .dz-tag{font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:22px;text-align:center}
    .dz-lead{font-family:var(--font-display);font-size:clamp(22px,3vw,34px);line-height:1.5;
      font-weight:400;text-align:center;color:var(--white)}
    .dz-body{font-size:15px;line-height:2;color:var(--gray);text-align:center;margin-top:26px}
    .dz-body strong{color:var(--white);font-weight:500}

    /* big pull quote */
    .dz-quote{background:var(--bg2);padding:100px 6%;text-align:center}
    .dz-quote-mark{font-family:var(--font-display);font-size:80px;line-height:.4;color:var(--gold);opacity:.5}
    .dz-quote-txt{font-family:var(--font-display);font-size:clamp(22px,3.2vw,38px);line-height:1.5;
      font-style:italic;color:var(--white);max-width:840px;margin:24px auto 0;font-weight:400}
    .dz-quote-by{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-top:30px}

    /* highlights — flowing, alternating, minimal (NO cards) */
    .dz-highlights{max-width:880px;margin:0 auto;padding:90px 6%}
    .dz-hl{padding:46px 0;border-bottom:1px solid var(--border)}
    .dz-hl:last-child{border-bottom:none}
    .dz-hl-yr{font-size:12px;letter-spacing:2px;color:var(--gold);margin-bottom:10px}
    .dz-hl-title{font-family:var(--font-display);font-size:clamp(22px,2.8vw,30px);color:var(--white);margin-bottom:14px;font-weight:500}
    .dz-hl-desc{font-size:14px;line-height:1.9;color:var(--gray);max-width:640px}

    /* selected-work video embed (responsive 16:9) */
    .dz-work-video{position:relative;width:100%;max-width:760px;margin:28px auto 0;
      aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:var(--bg2)}
    .dz-work-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
   
   /* selected-work photo grid (3 x 2) */
    .dz-work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}
    .dz-work-img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:6px;
      opacity:.92;transition:transform .4s,opacity .4s}
    .dz-work-img:hover{transform:scale(1.03);opacity:1}
    @media (max-width:768px){
      .dz-work-grid{grid-template-columns:repeat(2,1fr);gap:8px}
    }
    

    /* skills — minimal inline list */
    .dz-skills{max-width:820px;margin:0 auto;padding:20px 6% 90px;text-align:center}
    .dz-skill-row{display:flex;flex-wrap:wrap;justify-content:center;gap:14px 28px;margin-top:24px}
    .dz-skill{font-size:13px;letter-spacing:1px;color:var(--white);position:relative}
    .dz-skill::after{content:"·";position:absolute;right:-16px;color:var(--gold)}
    .dz-skill:last-child::after{display:none}

    /* CTA */
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
      .dz-hero{height:88vh}
      .dz-section,.dz-highlights,.dz-skills{padding-top:64px;padding-bottom:64px}
      .dz-quote,.dz-cta{padding:70px 6%}
    }
  </style>

  <div class="dz-wrap">

    <!-- HERO: full-screen designer photo -->
    <div class="dz-hero">
      ${DESIGNER_PHOTO
        ? `<img class="dz-hero-img" src="${DESIGNER_PHOTO}" alt="Designer Ramya">`
        : `<div class="dz-hero-ph"><i class="ti ti-camera"></i></div>`}
    
      <div class="dz-scroll-hint"><i class="ti ti-chevron-down"></i></div>
    </div>

    <!-- CONTENT — scrolls UP and overlaps the pinned hero photo -->
    <div class="dz-content">

    

    <!-- PULL QUOTE -->
    <div class="dz-quote dz-rev">
      <div class="dz-quote-mark">&ldquo;</div>
      <div class="dz-quote-txt">My main objective is to put my best effort and endeavour into the fashion industry — to create pieces that are both meaningful and timeless.</div>
      <div class="dz-quote-by">— Ramya, Founder of YANARA</div>
    </div>

    <!-- HIGHLIGHTS (flowing, minimal) -->
    <div class="dz-highlights">
      <div class="dz-tag">Selected Work</div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Awards</div>
        <div class="dz-hl-title">Best South Indian Fashion Designer</div>
        <div class="dz-hl-desc">Honoured at Tirupur Fashion Week 2022, where her collection walked the runway to critical acclaim — a recognition of her distinctive design voice in South Indian fashion.</div>
        <div class="dz-hl-title" style="margin-top:26px">SHUI — JD Design Awards 2022</div>
        <div class="dz-hl-desc">An eight-garment collection inspired by China's Yellow River, reflecting on the harmful effects of chemical waste — a statement on sustainability told through couture fusion-wear.</div>
        <div class="dz-work-grid">
          <img src="IMG_AWARDS_1?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_AWARDS_2?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_AWARDS_3?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_AWARDS_4?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_AWARDS_5?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_AWARDS_6?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
        </div>
      </div>

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Television</div>
        <div class="dz-hl-title">Bigg Boss Tamil — Season 6</div>
        <div class="dz-hl-desc">Designed garments for contestants of one of Tamil Nadu's most-watched reality shows, styling looks seen by millions across the season.</div>
        <div class="dz-work-grid">
          <img src="IMG_BB_1?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_BB_2?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_BB_3?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_BB_4?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_BB_5?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_BB_6?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
        </div>
      </div>
      
      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">2022 · International</div>
        <div class="dz-hl-title">Iykki Berry — London</div>
        <div class="dz-hl-desc">Created a garment for celebrity rapper and singer Iykki Berry's Diwali concert in London, fusing Tamil Nadu culture into the design — and later styled her Tamil album song <strong>MAMA</strong>, shot in London.</div>
        <div class="dz-work-video">
         <iframe src="https://www.youtube.com/embed/p6PGIWIg8Pw" title="Iykki Berry — MAMA" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

     <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Film</div>
        <div class="dz-hl-title">BCHH — Senior Stylist</div>
        <div class="dz-hl-desc">Worked as Senior Stylist for the Kannada feature film <em>Bili Chukki Halli Hakki</em>, shaping the on-screen wardrobe and character looks.</div>
        <div class="dz-work-video">
          <iframe src="https://www.youtube.com/embed/uT6Mm5fxwbE" title="Bili Chukki Halli Hakki" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      

      <div class="dz-hl dz-rev">
        <div class="dz-hl-yr">Industry</div>
        <div class="dz-hl-title">Fashion Designer · TheEthnic.Co</div>
        <div class="dz-hl-desc">Designed for the menswear ethnic brand TheEthnic.Co, sharpening a craft that now defines YANARA's signature men's silhouettes.</div>
        <div class="dz-work-grid">
          <img src="IMG_ETHNIC_1?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_ETHNIC_2?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_ETHNIC_3?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_ETHNIC_4?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_ETHNIC_5?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
          <img src="IMG_ETHNIC_6?tr=w-700,q-85,f-auto" alt="" loading="lazy" class="dz-work-img">
        </div>
      </div>

    
    <!-- SKILLS -->
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

    <!-- CTA -->
    <div class="dz-cta dz-rev">
      <h2>Work With <em>Ramya</em></h2>
      <p>For custom orders, celebrity styling, collaborations, or fashion-show participation.</p>
      <div class="dz-cta-row">
        <button class="dz-btn" onclick="openModal('modal-contact')">Get in Touch</button>
        <button class="dz-btn-ghost" onclick="go('shop')">View the Collection</button>
        <a class="dz-btn-ghost" href="https://www.instagram.com/artist__ramya" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none"><i class="ti ti-brand-instagram"></i> Follow Ramya</a>
      </div>
    </div>

    </div><!-- /dz-content -->

  </div>
`;

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
