// ── YANARA FASHION — SHOP & PRODUCTS ──

// ── IMAGEKIT IMAGE SYSTEM ──
// All product images are hosted on ImageKit, named CODE-1.jpg, CODE-2.jpg ...
// We auto-build the URLs from the product code + image count.
//
// IMPORTANT: The original photos are very high-resolution (~32MP, 18MB).
// ImageKit cannot serve images that large raw (returns "Bad Request"),
// AND raw images would be far too slow. So every URL includes a
// transformation that resizes + optimizes on delivery:
//   tr=w-1400  -> max 1400px wide (sharp on any screen, zoomable)
//   q-90       -> 90% quality (visually identical to original)
//   f-auto     -> auto WebP/AVIF for the browser (smaller, same quality)
// The full-resolution master stays safe in ImageKit; ImageKit just
// serves a perfectly-sized, high-quality version. This is the whole
// point of ImageKit: full visual quality, a fraction of the file size.

const IK_BASE = "https://ik.imagekit.io/megharaj";

// Default high-quality transform for the main/detail images.
const IK_TR_DETAIL = "tr=w-1400,q-90,f-auto";
// Lighter transform for grid cards (smaller display = smaller download).
const IK_TR_CARD   = "tr=w-900,q-90,f-auto";

// Builds an array of HIGH-QUALITY image URLs for a product code.
// e.g. imgUrls("BZ01BL", 5) -> [".../BZ01BL-1.jpg?tr=w-1400,q-90,f-auto", ...]
function imgUrls(code, count, cat){
  var arr = [];
  var folder = encodeURIComponent(cat || "Blazers");
  for(var i=1; i<=count; i++){
    arr.push(IK_BASE + "/Men/" + folder + "/" + code + "/" + code + "-" + i + ".jpg?" + IK_TR_DETAIL);
  }
  return arr;
}

// Blouse images live in subfolders: Blouse/CODE/CODE-N.png
function blouseImgs(code, count, cover){
  var arr = [];
  cover = cover || 1;
  arr.push(IK_BASE + "/Women/Blouse/" + code + "/" + code + "-" + cover + ".jpg?" + IK_TR_DETAIL);
  for(var i=1; i<=count; i++){
    if(i!==cover){
      arr.push(IK_BASE + "/Women/Blouse/" + code + "/" + code + "-" + i + ".jpg?" + IK_TR_DETAIL);
    }
  }
  return arr;
}
// Returns a smaller, card-optimized version of an image URL.
// Returns a smaller, card-optimized version of an image URL.
// Used for grid thumbnails so the listing loads fast.
function cardImg(url){
  if(!url) return url;
  // Swap the detail transform for the lighter card transform.
  return url.replace(IK_TR_DETAIL, IK_TR_CARD);
}

// ── PRODUCTS DATA — images auto-load from ImageKit via imgUrls(code, count) ──
const products=[
  {id:1,code:"BZ01BL",name:"Black Draped Collar Blazer Set",cat:"Blazers",price:24900,sizes:["S","M","L","XL"],badge:"Featured",imgs:imgUrls("BZ01BL",5,"Blazers"),desc:"Elegant black blazer with draped collar detailing. Perfect for wedding receptions and evening events."},
  {id:2,code:"BZ02MR",name:"Maroon Zari Embroidery Blazer Set",cat:"Blazers",price:28900,sizes:["S","M","L","XL","XXL"],badge:"New",imgs:imgUrls("BZ02MR",5,"Blazers"),desc:"Rich maroon blazer with traditional Zari embroidery. A classic choice for wedding ceremonies."},
  {id:3,code:"BZ05BL",name:"Black Cutdana Work Blazer Set",cat:"Blazers",price:26500,sizes:["M","L","XL"],imgs:imgUrls("BZ05BL",4,"Blazers"),desc:"Premium black blazer with intricate Cutdana embellishments."},
  {id:4,code:"BZ06DB",name:"Dark Blue Sequin Blazer Set",cat:"Blazers",price:27900,sizes:["S","M","L","XL"],imgs:imgUrls("BZ06DB",4,"Blazers"),desc:"Deep blue blazer with shimmering sequin work for a festive look."},
  {id:5,code:"BZ07WI",name:"Wine Velvet Blazer Set",cat:"Blazers",price:31900,sizes:["M","L","XL","XXL"],imgs:imgUrls("BZ07WI",4,"Blazers"),desc:"Luxurious wine-coloured velvet blazer. Exudes old-world charm."},
  {id:6,code:"BZ08GY",name:"Grey Structured Blazer Set",cat:"Blazers",price:22900,sizes:["S","M","L","XL"],imgs:imgUrls("BZ08GY",4,"Blazers"),desc:"Classic grey blazer with structured shoulders. Versatile for all occasions."},
  {id:7,code:"BZ09DG",name:"Dark Green Zari Blazer Set",cat:"Blazers",price:29500,sizes:["M","L","XL"],imgs:imgUrls("BZ09DG",4,"Blazers"),desc:"Deep forest green with Zari border detailing. Perfect for festive celebrations."},
  {id:8,code:"BZ10BL",name:"Hand Painted Art Blazer Set",cat:"Blazers",price:38900,sizes:["S","M","L","XL"],imgs:imgUrls("BZ10BL",7,"Blazers"),desc:"One-of-a-kind hand painted blazer. Wearable art by designer Ramya."},
  {id:9,code:"BZ12OP",name:"Onion Pink Embroidered Blazer Set",cat:"Blazers",price:25900,sizes:["S","M","L","XL"],imgs:imgUrls("BZ12OP",4,"Blazers"),desc:"Soft onion pink with delicate embroidery — a contemporary take on ethnic wear."},
  {id:10,code:"BG01BL",name:"Black Classic Bandhgala Set",cat:"Jodhpuri Bandhgala",price:29000,sizes:["38","40","42","44"],imgs:imgUrls("BG01BL",5,"Jodhpuri Bandhgala"),desc:"Timeless black Bandhgala with clean lines. The perfect formal ethnic suit."},
  {id:11,code:"BG05BL",name:"Black Bandhgala Set",cat:"Jodhpuri Bandhgala",price:32000,sizes:["38","40","42","44","46"],imgs:imgUrls("BG05BL",5,"Jodhpuri Bandhgala"),desc:"Navy blue Bandhgala with subtle gold embroidery along the collar and buttons."},
  {id:12,code:"BG06MR",name:"Maroon Bandhgala Set",cat:"Jodhpuri Bandhgala",price:34500,sizes:["38","40","42"],imgs:imgUrls("BG06MR",5,"Jodhpuri Bandhgala"),desc:"Ivory cream silk Bandhgala — luxurious and understated elegance."},
  {id:13,code:"BG09NB",name:"Navy Blue Bandhgala Set",cat:"Jodhpuri Bandhgala",price:36900,sizes:["38","40","42","44"],imgs:imgUrls("BG09NB",5,"Jodhpuri Bandhgala"),desc:"Royal maroon velvet Bandhgala — perfect for winter weddings."},
  {id:14,code:"BG10BL",name:"Black Velvet Bandhgala Set",cat:"Jodhpuri Bandhgala",price:36900,sizes:["38","40","42","44"],imgs:imgUrls("BG10BL",4,"Jodhpuri Bandhgala"),desc:"Black velvet Bandhgala — timeless and sophisticated."},
  {id:15,code:"BG13BL",name:"Black Embroidered Bandhgala Set",cat:"Jodhpuri Bandhgala",price:38000,sizes:["38","40","42","44"],imgs:imgUrls("BG13BL",5,"Jodhpuri Bandhgala"),desc:"Black Bandhgala with intricate embroidery detailing."},
  {id:16,code:"BG14DB",name:"Dark Blue Bandhgala Set",cat:"Jodhpuri Bandhgala",price:38000,sizes:["38","40","42","44"],imgs:imgUrls("BG14DB",5,"Jodhpuri Bandhgala"),desc:"Deep blue Bandhgala with refined craftsmanship."},
  {id:17,code:"BG15PK",name:"Pink Bandhgala Set",cat:"Jodhpuri Bandhgala",price:38000,sizes:["38","40","42","44"],imgs:imgUrls("BG15PK",5,"Jodhpuri Bandhgala"),desc:"Elegant pink Bandhgala for festive celebrations."},
  {id:18,code:"BG16GY",name:"Grey Bandhgala Set",cat:"Jodhpuri Bandhgala",price:38000,sizes:["38","40","42","44"],imgs:imgUrls("BG16GY",5,"Jodhpuri Bandhgala"),desc:"Sophisticated grey Bandhgala — perfect for receptions."},
  {id:19,code:"BG17WI",name:"Wine Bandhgala Set",cat:"Jodhpuri Bandhgala",price:38000,sizes:["38","40","42","44"],imgs:imgUrls("BG17WI",5,"Jodhpuri Bandhgala"),desc:"Rich wine Bandhgala with premium fabric and finish."},
  {id:20,code:"BG19WI",name:"Wine Classic Bandhgala Set",cat:"Jodhpuri Bandhgala",price:31000,sizes:["38","40","42","44"],imgs:imgUrls("BG19WI",6,"Jodhpuri Bandhgala"),desc:"Classic wine Bandhgala — elegant and timeless."},
  {id:21,code:"BG20PC",name:"Peach Bandhgala Set",cat:"Jodhpuri Bandhgala",price:31000,sizes:["38","40","42","44"],imgs:imgUrls("BG20PC",1,"Jodhpuri Bandhgala"),desc:"Soft peach Bandhgala — a fresh and modern take on ethnic wear."},
  {id:22,code:"IW01BL",name:"Black Indo Western Co-ord Set",cat:"Indo Western",price:21900,sizes:["S","M","L","XL"],imgs:imgUrls("IW01BL",7,"Indo Western"),desc:"Modern Indo Western set blending kurta and pants in premium black fabric."},
  {id:23,code:"IW02GR",name:"Green Indo Western Co-ord Set",cat:"Indo Western",price:21900,sizes:["S","M","L","XL"],imgs:imgUrls("IW02GR",5,"Indo Western"),desc:"Fresh green Indo Western set — vibrant and contemporary."},
  {id:24,code:"IW03DB",name:"Dark Blue Indo Western Co-ord Set",cat:"Indo Western",price:21900,sizes:["S","M","L","XL"],imgs:imgUrls("IW03DB",7,"Indo Western"),desc:"Deep blue Indo Western — refined and versatile."},
  {id:25,code:"IW05WI",name:"Wine Indo Western Set",cat:"Indo Western",price:19900,sizes:["S","M","L","XL","XXL"],imgs:imgUrls("IW05WI",8,"Indo Western"),desc:"Breathable wine Indo Western set — effortless and elegant."},
  {id:26,code:"IW06BL",name:"Black Printed Indo Western Set",cat:"Indo Western",price:19900,sizes:["M","L","XL"],imgs:imgUrls("IW06BL",8,"Indo Western"),desc:"Contemporary black with block print detailing."},
  {id:27,code:"IW07DB",name:"Dark Blue Printed Indo Western Set",cat:"Indo Western",price:19900,sizes:["M","L","XL"],imgs:imgUrls("IW07DB",8,"Indo Western"),desc:"Dark blue Indo Western with modern print. Perfect for daytime events."},
  {id:28,code:"IW09PC",name:"Peach Indo Western Set",cat:"Indo Western",price:18500,sizes:["S","M","L","XL"],imgs:imgUrls("IW09PC",5,"Indo Western"),desc:"Soft peach Indo Western — light and festive."},
  {id:29,code:"IW10WI",name:"Wine Indo Western Classic Set",cat:"Indo Western",price:18500,sizes:["S","M","L","XL"],imgs:imgUrls("IW10WI",3,"Indo Western"),desc:"Classic wine Indo Western — rich colour, clean silhouette."},
  {id:30,code:"IW11DG",name:"Dark Green Indo Western Set",cat:"Indo Western",price:18500,sizes:["S","M","L","XL"],imgs:imgUrls("IW11DG",6,"Indo Western"),desc:"Forest green Indo Western with premium fabric and craftsmanship."},
  {id:31,code:"SH01WH",name:"White Leopard Hand Painted Shirt",cat:"Shirts",price:12900,sizes:["S","M","L","XL"],imgs:imgUrls("SH01WH",5,"Shirts"),desc:"White shirt with hand painted leopard motif by designer Ramya. A true collector's piece."},
  {id:32,code:"SH04WH",name:"White Eagle Hand Painted Shirt",cat:"Shirts",price:13900,sizes:["S","M","L","XL"],imgs:imgUrls("SH04WH",4,"Shirts"),desc:"White shirt featuring a majestic hand painted eagle. Wearable art for the bold."},
  {id:33,code:"BL01DG",name:"Dark Green Floral Zardosi Blouse",cat:"Blouse",section:"Women",price:8499,sizes:["Custom"],imgs:blouseImgs("BL01DG",6,5),desc:"Dark green blouse with intricate floral Zardosi embroidery. Custom-tailored to your measurements."},
  {id:34,code:"BL02RD",name:"Red Floral Zardosi Blouse",cat:"Blouse",section:"Women",price:7799,sizes:["Custom"],imgs:blouseImgs("BL02RD",6,2),desc:"Rich red blouse with delicate floral Zardosi work. Custom-tailored to your measurements."},
  {id:35,code:"BL03G",name:"Green Floral Zardosi Net Blouse",cat:"Blouse",section:"Women",price:9199,sizes:["Custom"],imgs:blouseImgs("BL03G",7,7),desc:"Green blouse with floral Zardosi embroidery on a net base. Custom-tailored to your measurements."},
  {id:36,code:"BL04WI",name:"Wine Beads Blouse",cat:"Blouse",section:"Women",price:4499,sizes:["Custom"],imgs:blouseImgs("BL04WI",7,7),desc:"Wine-toned blouse adorned with elegant beadwork. Custom-tailored to your measurements."},
  {id:37,code:"BL05BL",name:"Black Copper Zardosi Blouse",cat:"Blouse",section:"Women",price:7499,sizes:["Custom"],imgs:blouseImgs("BL05BL",10,8),desc:"Black blouse with striking copper Zardosi embroidery. Custom-tailored to your measurements."}
];
// If a .png image fails, retry as .jpg (handles mixed-extension uploads)
function imgFallback(el){
  // If a .png fails, retry as .jpg. If that also fails, leave it
  // (don't wipe the container — important for the detail page).
  if(el.src.indexOf(".png")>-1 && !el.dataset.tried){
    el.dataset.tried="1";
    el.src = el.src.replace(".png?", ".jpg?").replace(/\.png$/, ".jpg");
  } else if(el.classList.contains("pimg-img") || el.closest(".pimg")){
    // only on grid cards: show placeholder if both fail
    if(el.parentElement) el.parentElement.innerHTML='<div class=pimg-ph>👔</div>';
  }
}

let cart=[],disc=0,curProd=null,curImgIdx=0,shopFilter="All",occFilter="",qty=1,shopSection="Men";
let shopPage=0,shopPageSize=8,shopFiltered=[],shopAllLoaded=false;
try{cart=JSON.parse(localStorage.getItem("yanara-cart")||"[]");}catch(e){cart=[];}
setTimeout(()=>updCC(),500);
(function checkReturnToCheckout(){
  try{
    if(localStorage.getItem("yanara-redirect-after-login")==="checkout" && getCurrentUser()){
      localStorage.removeItem("yanara-redirect-after-login");
      setTimeout(()=>go("checkout"),600);
    }
  }catch(e){}
})();
// ── FIREBASE PRODUCTS ──
var firebaseProducts = [];

async function loadFirebaseProducts(){
  if(!window.db) return;
  try{
    const snap = await window.fsGetDocs(window.fsCollection(window.db, "products"));
    firebaseProducts = [];
    snap.forEach(d => {
      const p = d.data();
      p.firebaseId = d.id;
      // rebuild imgs array from ImageKit if stored as URL array
      if(!p.imgs) p.imgs = p.images || [];
      if(p.thumbnail) p.imgs = [p.thumbnail, ...(p.gallery || p.images || [])];
      const catMap = {"Blazer Sets":"Blazers","Bandhgala Sets":"Jodhpuri Bandhgala","Indo Western Sets":"Indo Western"};
      if(!p.cat) p.cat = catMap[p.category] || p.category || "Uncategorised";
      firebaseProducts.push(p);
    });
    if(firebaseProducts.length > 0){
    shopPage=0;shopFiltered=[];shopAllLoaded=false;
    renderShop();
    if(typeof renderHome==="function")renderHome();
  }
  }catch(e){
    console.error("Firebase load error:", e);
  }
}

function getAllProducts(){
  // Merge hardcoded + firebase products, firebase takes priority
  const fbIds = firebaseProducts.map(p => p.code);
  const hardcoded = products.filter(p => !fbIds.includes(p.code));
  return [...hardcoded, ...firebaseProducts];
}

function getStyleVariants(p){
  if(!p.styleName) return [];
  return getAllProducts().filter(x=>x.styleName===p.styleName && x.id!==p.id && x.colorHex);
}

// ── CARD ──
// ── COLOR GROUPS ──
const colorGroups = {
  "BG05BL":["BG05BL","BG06MR"],
  "BG06MR":["BG05BL","BG06MR"],
  "BG09NB":["BG09NB","BG10BL"],
  "BG10BL":["BG09NB","BG10BL"],
  "BG14DB":["BG14DB","BG15PK","BG16GY","BG17WI"],
  "BG15PK":["BG14DB","BG15PK","BG16GY","BG17WI"],
  "BG16GY":["BG14DB","BG15PK","BG16GY","BG17WI"],
  "BG17WI":["BG14DB","BG15PK","BG16GY","BG17WI"],
  "IW01BL":["IW01BL","IW02GR","IW03DB"],
  "IW02GR":["IW01BL","IW02GR","IW03DB"],
  "IW03DB":["IW01BL","IW02GR","IW03DB"],
  "IW06BL":["IW06BL","IW07DB"],
  "IW07DB":["IW06BL","IW07DB"]
};

const colorDots = {
  "BG05BL":"#1a1a1a","BG06MR":"#6b1a1a",
  "BG09NB":"#1a2a4a","BG10BL":"#0d0d0d",
  "BG14DB":"#1a2a5a","BG15PK":"#c47a8a","BG16GY":"#6b6b6b","BG17WI":"#4a1a2a",
  "IW01BL":"#1a1a1a","IW02GR":"#1a4a2a","IW03DB":"#1a2a4a",
  "IW06BL":"#1a1a1a","IW07DB":"#1a2a4a"
};

// ── CARD ──
function card(p,fn){
  const img=p.imgs&&p.imgs.length?`<img src="${cardImg(p.imgs[0])}" alt="${p.name}" loading="lazy" onerror="imgFallback(this)">`:`<div class="pimg-ph">👔</div>`;
  const badge=p.badge?`<div class="pbadge">${p.badge}</div>`:"";
  const group=colorGroups[p.code]||[];
  const variants=getStyleVariants(p);
  const swatches=group.length>1?`<div class="pswatches">${group.map(code=>`<div class="pswatch${code===p.code?' on':''}" style="background:${colorDots[code]||'#333'}" onclick="event.stopPropagation();${fn}('${code}')" title="${code}"></div>`).join("")}</div>`:variants.length>0?`<div class="pswatches">${p.colorHex?`<div class="pswatch on" style="background:${p.colorHex}" title="${p.color||''}"></div>`:""} ${variants.map(v=>`<div class="pswatch" style="background:${v.colorHex}" onclick="event.stopPropagation();${fn}('${v.id}')" title="${v.color||''}"></div>`).join("")}</div>`:p.colorHex?`<div class="pswatches"><div class="pswatch on" style="background:${p.colorHex}" title="${p.color||''}"></div></div>`:"";
  return`<div class="pcard" onclick="${fn}('${p.id}')">
    <div class="pimg">${badge}${img}<button class="pwish" onclick="event.stopPropagation();toggleWishlist('${p.id}')"><i class="ti ti-heart"></i></button></div>
    <div class="pinfo">
      <div class="pcode">${p.code}</div>
      <div class="pcat">${p.cat}</div>
      <div class="pname">${p.name}</div>
      <div class="pcur">₹${p.price.toLocaleString()}</div>
      <button class=\"atcb\" onclick=\"event.stopPropagation();addCart('${p.id}')\">Add to Cart</button>
    </div>
  </div>`;
}

// ── SHOP ──
function shopCat(cat,section){ shopFilter=cat; occFilter=""; if(section) shopSection=section; go("shop"); }
function shopOcc(occ){ occFilter=occ; shopFilter="All"; go("shop"); toast("Showing all "+occ+" styles 🎉"); }

var lastDynMax=null;

function getMaxPrice(){
  var prices=getAllProducts().map(p=>p.price).filter(p=>typeof p==="number"&&p>0);
  var highest=prices.length?Math.max(...prices):40000;
  return Math.ceil(highest/10000)*10000;
}

function paintPriceFill(){
  var smin=document.getElementById("price-slider-min");
  var smax=document.getElementById("price-slider-max");
  var fill=document.getElementById("price-range-fill");
  if(!smin||!smax||!fill)return;
  var max=parseInt(smin.max,10)||40000;
  var lo=parseInt(smin.value,10),hi=parseInt(smax.value,10);
  var pctMin=max?(lo/max)*100:0,pctMax=max?(hi/max)*100:100;
  fill.style.left=pctMin+"%";
  fill.style.width=(pctMax-pctMin)+"%";
}

function syncSliderToBoxes(){
  var smin=document.getElementById("price-slider-min");
  var smax=document.getElementById("price-slider-max");
  var nmin=document.getElementById("price-min");
  var nmax=document.getElementById("price-max");
  if(!smin||!smax||!nmin||!nmax)return;
  var step=parseInt(smin.step,10)||500;
  var lo=parseInt(smin.value,10),hi=parseInt(smax.value,10);
  if(lo>hi-step){lo=hi-step;smin.value=lo;}
  nmin.value=lo;nmax.value=hi;
  paintPriceFill();
  renderShop();
}

function syncBoxesToSlider(){
  var smin=document.getElementById("price-slider-min");
  var smax=document.getElementById("price-slider-max");
  var nmin=document.getElementById("price-min");
  var nmax=document.getElementById("price-max");
  if(!smin||!smax||!nmin||!nmax)return;
  var sliderMax=parseInt(smin.max,10)||40000;
  var lo=Math.max(0,Math.min(parseInt(nmin.value,10)||0,sliderMax));
  var hi=Math.max(lo,Math.min(parseInt(nmax.value,10)||sliderMax,sliderMax));
  smin.value=lo;smax.value=hi;
  paintPriceFill();
}

function renderShop(){
  var dynMax=getMaxPrice();
  var smin=document.getElementById("price-slider-min");
  var smax=document.getElementById("price-slider-max");
  var nmaxEl=document.getElementById("price-max");
  if(smin&&smax){
    smin.max=dynMax;smax.max=dynMax;
    if(nmaxEl&&(lastDynMax===null||parseInt(nmaxEl.value,10)===lastDynMax)){
      nmaxEl.value=dynMax;
      smax.value=dynMax;
    }
    lastDynMax=dynMax;
    paintPriceFill();
  }
  const section = shopSection || "Men";
  // Get extra categories from Firebase products
  const fbMenCats = [...new Set(firebaseProducts.filter(p=>(p.section||"Men")==="Men").map(p=>p.cat||p.category).filter(Boolean))];
  const fbWomenCats = [...new Set(firebaseProducts.filter(p=>p.section==="Women").map(p=>p.cat||p.category).filter(Boolean))];
  const baseMen = ["All","Blazers","Jodhpuri Bandhgala","Indo Western","Shirts"];
  const baseWomen = ["All","Blouse"];
  const catsBySection = {
    Men: [...new Set([...baseMen, ...fbMenCats])],
    Women: [...new Set([...baseWomen, ...fbWomenCats])]
  };
  const cats = catsBySection[section];

  // Section toggle (Men | Women) + category buttons
  const cf=document.getElementById("cat-filters");
  if(cf)cf.innerHTML =
    `<div style="display:flex;gap:0;margin-bottom:16px;border-bottom:1px solid var(--border)">` +
    ["Men","Women"].map(s=>`<button onclick="shopSection='${s}';shopFilter='All';occFilter='';renderShop()" style="background:none;border:none;padding:10px 22px;font-size:13px;letter-spacing:1px;cursor:pointer;color:${section===s?'var(--white)':'var(--gray)'};border-bottom:2px solid ${section===s?'var(--gold)':'transparent'};font-weight:${section===s?'600':'400'}">${s}</button>`).join("") +
    `</div>` +
    cats.map(c=>`<button class="catbtn${shopFilter===c?" on":""}" onclick="shopFilter='${c}';occFilter='';renderShop()">${c}</button>`).join("");

  // Sidebar category checkboxes (for current section)
  const fc=document.getElementById("filter-cats");
  if(fc)fc.innerHTML=cats.filter(c=>c!=="All").map(c=>`
    <div class="fo" onclick="shopFilter='${c}';occFilter='';renderShop()">
      <input type="checkbox" ${shopFilter===c?"checked":""}><label>${c}</label>
    </div>`).join("");

  // Filter by section first, then category
  let filtered=getAllProducts().filter(p=>(p.section||"Men")===section);
  if(shopFilter&&shopFilter!=="All") filtered=filtered.filter(p=>p.cat===shopFilter);

  // Price range filter (synced with the dual slider)
  var minEl=document.getElementById("price-min");
  var maxEl=document.getElementById("price-max");
  if(minEl&&maxEl){
    var lo=parseInt(minEl.value,10)||0;
    var hi=parseInt(maxEl.value,10)||dynMax;
    if(lo<0)lo=0; if(hi<0)hi=0;
    if(lo>hi){var t=lo;lo=hi;hi=t;}
    filtered=filtered.filter(p=>p.price>=lo&&p.price<=hi);
  }

  const ct=document.getElementById("sct");
  if(ct)ct.textContent=`${filtered.length} product${filtered.length!==1?"s":""}${occFilter?" — "+occFilter+" Collection":""}`;
  shopPage=0;shopFiltered=filtered;shopAllLoaded=false;
  const grid=document.getElementById("shop-products");
  if(!grid)return;
  if(!filtered.length){grid.innerHTML="<div style='padding:60px;color:var(--gray);text-align:center;grid-column:1/-1'>No products found.</div>";return;}
  grid.innerHTML=filtered.slice(0,shopPageSize).map(p=>card(p,"openP")).join("");
  shopPage=1;
  shopAllLoaded=filtered.length<=shopPageSize;
  const sentinel=document.getElementById("shop-sentinel");
  if(sentinel)sentinel.style.display=shopAllLoaded?"none":"flex";
}

function loadMoreShop(){
  if(shopAllLoaded)return;
  const start=shopPage*shopPageSize;
  const next=shopFiltered.slice(start,start+shopPageSize);
  if(!next.length){shopAllLoaded=true;return;}
  const grid=document.getElementById("shop-products");
  if(grid)grid.innerHTML+=next.map(p=>card(p,"openP")).join("");
  shopPage++;
  shopAllLoaded=shopPage*shopPageSize>=shopFiltered.length;
  const sentinel=document.getElementById("shop-sentinel");
  if(sentinel)sentinel.style.display=shopAllLoaded?"none":"flex";
}

(function initShopScroll(){
  const observer=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&&!shopAllLoaded)loadMoreShop();
  },{threshold:0.1});
  function attachObserver(){
    const sentinel=document.getElementById("shop-sentinel");
    if(sentinel){observer.observe(sentinel);}
    else{setTimeout(attachObserver,300);}
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",attachObserver);
  }else{
    attachObserver();
  }
})();

function sortProducts(){
  const val=document.getElementById("sort-sel").value;
  const all=getAllProducts();
  if(val==="low")all.sort((a,b)=>a.price-b.price);
  else if(val==="high")all.sort((a,b)=>b.price-a.price);
  firebaseProducts=all.filter(p=>p.firebaseId);
  renderShop();
}

// ── PRODUCT DETAIL ──
function openP(id){
  const p=getAllProducts().find(x=>String(x.id)===String(id));if(!p)return;
  curProd=p;qty=1;curImgIdx=0;
  document.getElementById("dname").textContent=p.name;
  document.getElementById("dcat").textContent=p.cat;
  document.getElementById("dprice").textContent="₹"+p.price.toLocaleString();
  document.getElementById("dcode").textContent=p.code;
  document.getElementById("ddesc").textContent=p.desc||"Premium handcrafted ethnic wear by designer Ramya.";
  document.getElementById("size-grid").innerHTML=(p.sizes||["S","M","L","XL"]).map((s,i)=>`<div class="sopt${i===0?" on":""}" onclick="selSz(this)">${s}</div>`).join("");
  document.getElementById("qv").textContent=1;
  const imgs=p.imgs||[];
  const mainEl=document.getElementById("detail-main");
  const thumbsEl=document.getElementById("detail-thumbs");
  const counter=document.getElementById("img-counter");
  if(imgs.length){
    mainEl.src=imgs[0];mainEl.style.display="block";
    mainEl.setAttribute("onerror","imgFallback(this)");
    counter.textContent=`1 / ${imgs.length}`;
    thumbsEl.innerHTML=imgs.map((img,i)=>`<img src="${img}" class="thumb${i===0?" on":""}" onclick="switchImg(${i})" alt="view ${i+1}" onerror="imgFallback(this)">`).join("");
  }else{
    mainEl.src="";mainEl.style.display="none";
    thumbsEl.innerHTML="";counter.textContent="";
  }
  const group=colorGroups[p.code]||[];
  const variants=getStyleVariants(p);
  const detailSwatches=group.length>1?`<div class="pswatches" style="margin:16px 0">${group.map(code=>{const gp=getAllProducts().find(x=>x.code===code);return gp?`<div class="pswatch${code===p.code?' on':''}" style="background:${colorDots[code]||'#333'}" onclick="openP('${gp.id}')" title="${code}"></div>`:''}).join("")}</div>`:variants.length>0?`<div class="pswatches" style="margin:16px 0">${p.colorHex?`<div class="pswatch on" style="background:${p.colorHex}" title="${p.color||''}"></div>`:""} ${variants.map(v=>`<div class="pswatch" style="background:${v.colorHex}" onclick="openP('${v.id}')" title="${v.color||''}"></div>`).join("")}</div>`:p.colorHex?`<div class="pswatches" style="margin:16px 0"><div class="pswatch on" style="background:${p.colorHex}" title="${p.color||''}"></div></div>`:"";
  const swatchEl=document.getElementById("detail-swatches");
  if(swatchEl)swatchEl.innerHTML=detailSwatches;
  const related=getAllProducts().filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  document.getElementById("related-products").innerHTML=related.map(r=>card(r,"openP")).join("");
  go("detail");
  loadReviews(p.id);
}

function switchImg(idx){
  const p=curProd;if(!p||!p.imgs)return;
  curImgIdx=idx;
  const mainEl=document.getElementById("detail-main");
  mainEl.style.opacity="0";
  setTimeout(()=>{mainEl.src=p.imgs[idx];mainEl.setAttribute("onerror","imgFallback(this)");mainEl.style.opacity="1";},150);
  document.getElementById("img-counter").textContent=`${idx+1} / ${p.imgs.length}`;
  document.querySelectorAll(".thumb").forEach((t,i)=>t.classList.toggle("on",i===idx));
}

function toggleZoom(){
  const main=document.getElementById("detail-main");
  if(main.style.transform==="scale(1.5)"){main.style.transform="";main.style.cursor="";}
  else{main.style.transform="scale(1.5)";main.style.cursor="zoom-out";}
}

function selSz(el){el.closest(".sgrid").querySelectorAll(".sopt").forEach(s=>s.classList.remove("on"));el.classList.add("on");}
function chQ(d){qty=Math.max(1,qty+d);document.getElementById("qv").textContent=qty;}
function addCur(){if(curProd)addCart(curProd.id,qty);}

// ── CART ──
function addCart(id,q=1){
  const p=getAllProducts().find(x=>String(x.id)===String(id));if(!p)return;
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty+=q;else cart.push({...p,qty:q});
  updCC();toast(`${p.name.split(" ").slice(0,3).join(" ")}... added to cart!`);
}

function updCC(){
  const t=cart.reduce((a,b)=>a+b.qty,0);
  document.getElementById("cc").textContent=t;
  const el=document.getElementById("ctitcc");if(el)el.textContent=t?`(${t} items)`:"";
  try{localStorage.setItem("yanara-cart",JSON.stringify(cart));}catch(e){}
}

function removeCart(id){cart=cart.filter(x=>x.id!==id);updCC();renderCart();}

function renderCart(){
  const list=document.getElementById("citems");
  const empty=document.getElementById("cempty");
  if(!cart.length){list.innerHTML="";empty.style.display="block";return;}
  empty.style.display="none";
  list.innerHTML=cart.map(item=>`
    <div class="citem">
      <div class="ciimg">${item.imgs&&item.imgs.length?`<img src="${cardImg(item.imgs[0])}" alt="${item.name}">`:"&nbsp;"}</div>
      <div>
        <div class="cin">${item.name}</div>
        <div class="cim">${item.code} · Size: M · Qty: ${item.qty}</div>
        <div class="cip">₹${(item.price*item.qty).toLocaleString()}</div>
      </div>
      <button class="crm" onclick="removeCart('${item.id}')"><i class="ti ti-trash"></i></button>
    </div>`).join("");
  const sub=cart.reduce((a,b)=>a+(b.price*b.qty),0);
  document.getElementById("csub").textContent="₹"+sub.toLocaleString();
  document.getElementById("cdisc").textContent=disc?"−₹"+disc.toLocaleString():"−₹0";
  document.getElementById("ctot").textContent="₹"+(sub-disc).toLocaleString();
}

function applyPromo(){
  const code=document.getElementById("promo").value.toUpperCase();
  const sub=cart.reduce((a,b)=>a+(b.price*b.qty),0);
  if(code==="YANARA10"){disc=Math.floor(sub*.1);toast("10% discount applied!");}
  else if(code==="FIRST15"){disc=Math.floor(sub*.15);toast("15% discount applied!");}
  else{toast("Invalid promo code");return;}
  renderCart();
}

// ── CHECKOUT ──
function renderCheckout(){
  const user=getCurrentUser();
   if(!user){
     try{localStorage.setItem("yanara-redirect-after-login","checkout");}catch(e){}
     window.location.href="login.html";
     return;
   }
  const nameParts=(user.name||"").trim().split(" ");
  const fnameEl=document.getElementById("ck-fname");
  const lnameEl=document.getElementById("ck-lname");
  const emailEl=document.getElementById("ck-email");
  if(fnameEl&&!fnameEl.value)fnameEl.value=nameParts[0]||"";
  if(lnameEl&&!lnameEl.value)lnameEl.value=nameParts.slice(1).join(" ")||"";
  if(emailEl&&!emailEl.value)emailEl.value=user.email||"";
  const sub=cart.reduce((a,b)=>a+(b.price*b.qty),0);
  document.getElementById("cksub").textContent="₹"+sub.toLocaleString();
  document.getElementById("cktot").textContent="₹"+(sub-disc).toLocaleString();
  document.getElementById("ckitems").innerHTML=cart.map(i=>`
    <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:7px;color:var(--gray)">
      <span>${i.name.split(" ").slice(0,4).join(" ")}... ×${i.qty}</span>
      <span style="color:var(--white)">₹${(i.price*i.qty).toLocaleString()}</span>
    </div>`).join("")||"<div style='font-size:11px;color:var(--gray)'>No items in cart</div>";
}

function selPay(el){document.querySelectorAll(".pm").forEach(m=>m.classList.remove("on"));el.classList.add("on");el.querySelector("input").checked=true;}

async function placeOrder(){
  const user=getCurrentUser();
   if(!user){
     try{localStorage.setItem("yanara-redirect-after-login","checkout");}catch(e){}
     window.location.href="login.html";
     return;
   }
  if(!cart.length){toast("Your cart is empty!");return;}

  const fname=document.getElementById("ck-fname").value.trim();
  const lname=document.getElementById("ck-lname").value.trim();
  const email=document.getElementById("ck-email").value.trim();
  const phone=document.getElementById("ck-phone").value.trim();
  const address=document.getElementById("ck-address").value.trim();
  const city=document.getElementById("ck-city").value.trim();
  const state=document.getElementById("ck-state").value;
  const pincode=document.getElementById("ck-pincode").value.trim();

  if(!fname||!lname||!email||!phone||!address||!city||!state||!pincode){
    toast("Please fill all required fields");return;
  }

  let phoneDigits=phone.replace(/\D/g,"");
  if(phoneDigits.length===12&&phoneDigits.startsWith("91"))phoneDigits=phoneDigits.slice(2);
  if(phoneDigits.length!==10){
    toast("Please enter a valid 10-digit phone number");return;
  }
  if(!/^\d{6}$/.test(pincode)){
    toast("Please enter a valid 6-digit pincode");return;
  }
  const sub=cart.reduce((a,b)=>a+(b.price*b.qty),0);
  const total=sub-disc;
  const isCOD=document.querySelector('.pm.on .pmn')?.textContent.includes("Cash on Delivery");
  const customer={fname,lname,email,phone,address,city,state,pincode,country:"India"};

  if(isCOD){
    await saveOrderToFirebase(customer,total,"COD","pending",null);
    return;
  }

  try{
    const createRes=await fetch("/api/razorpay-create-order",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({amount:total})
    });
    const order=await createRes.json();
    if(!createRes.ok){toast("Payment setup failed: "+(order.error||"Unknown error"));return;}

    const rzp=new Razorpay({
      key:order.keyId,
      amount:order.amount,
      currency:order.currency,
      order_id:order.orderId,
      name:"YANARA Fashion",
      description:"Order Payment",
      prefill:{name:fname+" "+lname,email:email,contact:phone},
      theme:{color:"#c9a96e"},
      handler:async function(response){
        try{
          const verifyRes=await fetch("/api/razorpay-verify",{
            method:"POST",headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              razorpay_order_id:response.razorpay_order_id,
              razorpay_payment_id:response.razorpay_payment_id,
              razorpay_signature:response.razorpay_signature
            })
          });
          const verify=await verifyRes.json();
          if(verify.verified){
            await saveOrderToFirebase(customer,total,"Razorpay","pending",response.razorpay_payment_id);
          }else{
            toast("Payment verification failed. Contact support.");
          }
        }catch(e){toast("Error verifying payment: "+e.message);}
      },
      modal:{
        ondismiss:function(){toast("Payment cancelled");}
      }
    });
    rzp.open();
  }catch(e){
    toast("Error: "+e.message);
  }
}

async function saveOrderToFirebase(customer,total,method,status,paymentId){
  if(!window.db){toast("Service unavailable");return;}
  try{
    const now=new Date();
    const orderId="YF"+now.getFullYear()+String(now.getMonth()+1).padStart(2,"0")+String(now.getDate()).padStart(2,"0")+"-"+Math.floor(1000+Math.random()*9000);
    const dateStr=now.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
    const order={
      orderId,date:dateStr,
      customer,items:cart.map(i=>({id:i.id,code:i.code,name:i.name,price:i.price,qty:i.qty})),
      total,paymentMethod:method,status,paymentId:paymentId||"",
      createdAt:Date.now()
    };
    let user;
    try{user=JSON.parse(localStorage.getItem("yanara-current-user")||"null");}catch(e){user=null;}
    if(user)order.userEmail=user.email||"";
    await window.fsAddDoc(window.fsCollection(window.db,"orders"),order);
    toast("Order placed! Thank you 🙏");
    cart=[];disc=0;updCC();
    setTimeout(()=>go("home"),2000);
  }catch(e){
    toast("Error saving order: "+e.message);
  }
}

// ── REVIEWS ──
var revStar=0;

function setRevStar(n){
  revStar=n;
  document.querySelectorAll("#rev-star-input span").forEach((s,i)=>s.classList.toggle("on",i<n));
}

function checkRevAuth(){
  const user=getCurrentUser();
  const prompt=document.getElementById("rev-login-prompt");
  const inner=document.getElementById("rev-form-inner");
  if(!prompt||!inner)return;
  if(user){
    prompt.style.display="none";
    inner.style.display="block";
    const nameEl=document.getElementById("rev-name");
    if(nameEl&&!nameEl.value)nameEl.value=user.name||"";
  }else{
    prompt.style.display="block";
    inner.style.display="none";
  }
}

function getCurrentUser(){
  try{return JSON.parse(localStorage.getItem("yanara-current-user")||"null");}catch(e){return null;}
}

function submitReview(){
  const user=getCurrentUser();
  if(!user){toast("Please login to write a review");return;}
  if(!curProd){return;}
  const name=document.getElementById("rev-name").value.trim();
  const comment=document.getElementById("rev-comment").value.trim();
  const file=document.getElementById("rev-photo").files[0];
  if(!name||!comment||!revStar){toast("Please fill name, stars and comment");return;}
  const date=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
  const rev={name,comment,star:revStar,date,photo:"",userId:user.email||"",userName:user.name||user.email||""};
  if(file){
    const reader=new FileReader();
    reader.onload=function(e){rev.photo=e.target.result;saveReview(rev);};
    reader.readAsDataURL(file);
  }else{saveReview(rev);}
}

async function saveReview(rev){
  if(!window.db){toast("Service unavailable");return;}
  try{
    await window.fsAddDoc(window.fsCollection(window.db,"reviews_"+curProd.id),rev);
    document.getElementById("rev-name").value="";
    document.getElementById("rev-comment").value="";
    document.getElementById("rev-photo").value="";
    revStar=0;setRevStar(0);
    toast("Review submitted! Thank you 🙏");
    loadReviews(curProd.id);
  }catch(e){toast("Error: "+e.message);}
}

async function deleteReview(pid,docId){
  if(!confirm("Delete this review?"))return;
  try{
    await window.fsDeleteDoc(window.fsDoc(window.db,"reviews_"+pid,docId));
    loadReviews(pid);
    toast("Review deleted");
  }catch(e){toast("Error deleting review");}
}

async function loadReviews(pid){
  const el=document.getElementById("review-list");
  if(!el)return;
  checkRevAuth();
  if(!window.db){el.innerHTML="<div style='font-size:12px;color:var(--gray);padding:20px 0'>Reviews unavailable.</div>";return;}
  try{
    el.innerHTML="<div style='font-size:12px;color:var(--gray);padding:20px 0'>Loading...</div>";
    const snap=await window.fsGetDocs(window.fsCollection(window.db,"reviews_"+pid));
    const user=getCurrentUser();
    const list=[];
    snap.forEach(d=>list.push({...d.data(),docId:d.id}));
    list.sort((a,b)=>new Date(b.date)-new Date(a.date));
    if(!list.length){el.innerHTML="<div style='font-size:12px;color:var(--gray);padding:20px 0'>No reviews yet. Be the first!</div>";return;}
    el.innerHTML=list.map(r=>`
      <div class="rev-card">
        ${r.photo?`<img class="rev-card-photo" src="${r.photo}" alt="review photo">`:`<div class="rev-card-photo" style="background:var(--bg2);display:flex;align-items:center;justify-content:center"><i class="ti ti-user" style="color:var(--gray);font-size:22px"></i></div>`}
        <div class="rev-card-body">
          <div class="rev-card-name">${r.name}</div>
          <div class="rev-card-stars">${"★".repeat(r.star)}${"☆".repeat(5-r.star)}</div>
          <div class="rev-card-comment">${r.comment}</div>
          <div class="rev-card-date">${r.date}</div>
          ${user&&user.email===r.userId?`<button onclick="deleteReview('${pid}','${r.docId}')" style="background:none;border:none;color:var(--gray);font-size:11px;cursor:pointer;margin-top:6px;padding:0">Delete my review</button>`:""}
        </div>
      </div>`).join("");
  }catch(e){
    el.innerHTML="<div style='font-size:12px;color:var(--gray);padding:20px 0'>Error loading reviews.</div>";
  }
}

async function toggleWishlist(pid){
  const p=getAllProducts().find(x=>x.id===pid||x.id===String(pid));
  if(!p)return;
  let user;
  try{user=JSON.parse(localStorage.getItem("yanara-current-user")||"null");}catch(e){user=null;}
  if(!user){toast("Please login to save to wishlist");return;}
  if(!window.db){toast("Service unavailable");return;}
  try{
    const col=window.fsCollection(window.db,"wishlists/"+user.email+"/items");
    const docRef=window.fsDoc(window.db,"wishlists/"+user.email+"/items/"+String(pid));
    const snap=await window.fsGetDocs(col);
    const exists=snap.docs.some(d=>d.id===String(pid));
    if(exists){
      await window.fsDeleteDoc(docRef);
      toast("Removed from wishlist");
    }else{
      await window.fsSetDoc(docRef,{
        id:p.id,name:p.name,price:p.price,
        img:p.imgs&&p.imgs[0]?p.imgs[0]:"",
        code:p.code,addedAt:Date.now()
      });
      toast("Saved to wishlist ♡");
    }
  }catch(e){toast("Error: "+e.message);}
}
