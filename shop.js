// ── YANARA FASHIONS — SHOP & PRODUCTS ──

// ── PRODUCTS DATA — add your images in the imgs:[] arrays ──
const products=[
  {id:1,code:"BZ01BL",name:"Black Draped Collar Blazer Set",cat:"Blazer Sets",price:24900,sizes:["S","M","L","XL"],badge:"Featured",imgs:[],desc:"Elegant black blazer with draped collar detailing. Perfect for wedding receptions and evening events."},
  {id:2,code:"BZ02MR",name:"Maroon Zari Embroidery Blazer Set",cat:"Blazer Sets",price:28900,sizes:["S","M","L","XL","XXL"],badge:"New",imgs:[],desc:"Rich maroon blazer with traditional Zari embroidery. A classic choice for wedding ceremonies."},
  {id:3,code:"BZ05BL",name:"Black Cutdana Work Blazer Set",cat:"Blazer Sets",price:26500,sizes:["M","L","XL"],imgs:[],desc:"Premium black blazer with intricate Cutdana embellishments."},
  {id:4,code:"BZ06DB",name:"Dark Blue Sequin Blazer Set",cat:"Blazer Sets",price:27900,sizes:["S","M","L","XL"],imgs:[],desc:"Deep blue blazer with shimmering sequin work for a festive look."},
  {id:5,code:"BZ07WI",name:"Wine Velvet Blazer Set",cat:"Blazer Sets",price:31900,sizes:["M","L","XL","XXL"],imgs:[],desc:"Luxurious wine-coloured velvet blazer. Exudes old-world charm."},
  {id:6,code:"BZ08GY",name:"Grey Structured Blazer Set",cat:"Blazer Sets",price:22900,sizes:["S","M","L","XL"],imgs:[],desc:"Classic grey blazer with structured shoulders. Versatile for all occasions."},
  {id:7,code:"BZ09DG",name:"Dark Green Zari Blazer Set",cat:"Blazer Sets",price:29500,sizes:["M","L","XL"],imgs:[],desc:"Deep forest green with Zari border detailing. Perfect for festive celebrations."},
  {id:8,code:"BZ10BL",name:"Hand Painted Art Blazer Set",cat:"Blazer Sets",price:38900,sizes:["S","M","L","XL"],imgs:[],desc:"One-of-a-kind hand painted blazer. Wearable art by designer Ramya."},
  {id:9,code:"BZ12OP",name:"Onion Pink Embroidered Blazer Set",cat:"Blazer Sets",price:25900,sizes:["S","M","L","XL"],imgs:[],desc:"Soft onion pink with delicate embroidery — a contemporary take on ethnic wear."},
  {id:10,code:"BG01BL",name:"Black Classic Bandhgala Set",cat:"Bandhgala Sets",price:29000,sizes:["38","40","42","44"],imgs:[],desc:"Timeless black Bandhgala with clean lines. The perfect formal ethnic suit."},
  {id:11,code:"BG05BL",name:"Black Bandhgala Set",cat:"Bandhgala Sets",price:32000,sizes:["38","40","42","44","46"],imgs:[],desc:"Navy blue Bandhgala with subtle gold embroidery along the collar and buttons."},
  {id:12,code:"BG06MR",name:"Maroon Bandhgala Set",cat:"Bandhgala Sets",price:34500,sizes:["38","40","42"],imgs:[],desc:"Ivory cream silk Bandhgala — luxurious and understated elegance."},
  {id:13,code:"BG09NB",name:"Navy Blue Bandhgala Set",cat:"Bandhgala Sets",price:36900,sizes:["38","40","42","44"],imgs:[],desc:"Royal maroon velvet Bandhgala — perfect for winter weddings."},
  {id:14,code:"BG10BL",name:"Black Velvet Bandhgala Set",cat:"Bandhgala Sets",price:36900,sizes:["38","40","42","44"],imgs:[],desc:"Black velvet Bandhgala — timeless and sophisticated."},
  {id:15,code:"BG13BL",name:"Black Embroidered Bandhgala Set",cat:"Bandhgala Sets",price:38000,sizes:["38","40","42","44"],imgs:[],desc:"Black Bandhgala with intricate embroidery detailing."},
  {id:16,code:"BG14DB",name:"Dark Blue Bandhgala Set",cat:"Bandhgala Sets",price:38000,sizes:["38","40","42","44"],imgs:[],desc:"Deep blue Bandhgala with refined craftsmanship."},
  {id:17,code:"BG15PK",name:"Pink Bandhgala Set",cat:"Bandhgala Sets",price:38000,sizes:["38","40","42","44"],imgs:[],desc:"Elegant pink Bandhgala for festive celebrations."},
  {id:18,code:"BG16GY",name:"Grey Bandhgala Set",cat:"Bandhgala Sets",price:38000,sizes:["38","40","42","44"],imgs:[],desc:"Sophisticated grey Bandhgala — perfect for receptions."},
  {id:19,code:"BG17WI",name:"Wine Bandhgala Set",cat:"Bandhgala Sets",price:38000,sizes:["38","40","42","44"],imgs:[],desc:"Rich wine Bandhgala with premium fabric and finish."},
  {id:20,code:"BG19WI",name:"Wine Classic Bandhgala Set",cat:"Bandhgala Sets",price:31000,sizes:["38","40","42","44"],imgs:[],desc:"Classic wine Bandhgala — elegant and timeless."},
  {id:21,code:"BG20PC",name:"Peach Bandhgala Set",cat:"Bandhgala Sets",price:31000,sizes:["38","40","42","44"],imgs:[],desc:"Soft peach Bandhgala — a fresh and modern take on ethnic wear."},
  {id:22,code:"IW01BL",name:"Black Indo Western Co-ord Set",cat:"Indo Western Sets",price:21900,sizes:["S","M","L","XL"],imgs:[],desc:"Modern Indo Western set blending kurta and pants in premium black fabric."},
  {id:23,code:"IW02GR",name:"Green Indo Western Co-ord Set",cat:"Indo Western Sets",price:21900,sizes:["S","M","L","XL"],imgs:[],desc:"Fresh green Indo Western set — vibrant and contemporary."},
  {id:24,code:"IW03DB",name:"Dark Blue Indo Western Co-ord Set",cat:"Indo Western Sets",price:21900,sizes:["S","M","L","XL"],imgs:[],desc:"Deep blue Indo Western — refined and versatile."},
  {id:25,code:"IW05WI",name:"Wine Indo Western Set",cat:"Indo Western Sets",price:19900,sizes:["S","M","L","XL","XXL"],imgs:[],desc:"Breathable wine Indo Western set — effortless and elegant."},
  {id:26,code:"IW06BL",name:"Black Printed Indo Western Set",cat:"Indo Western Sets",price:19900,sizes:["M","L","XL"],imgs:[],desc:"Contemporary black with block print detailing."},
  {id:27,code:"IW07DB",name:"Dark Blue Printed Indo Western Set",cat:"Indo Western Sets",price:19900,sizes:["M","L","XL"],imgs:[],desc:"Dark blue Indo Western with modern print. Perfect for daytime events."},
  {id:28,code:"IW09PC",name:"Peach Indo Western Set",cat:"Indo Western Sets",price:18500,sizes:["S","M","L","XL"],imgs:[],desc:"Soft peach Indo Western — light and festive."},
  {id:29,code:"IW10WI",name:"Wine Indo Western Classic Set",cat:"Indo Western Sets",price:18500,sizes:["S","M","L","XL"],imgs:[],desc:"Classic wine Indo Western — rich colour, clean silhouette."},
  {id:30,code:"IW11DG",name:"Dark Green Indo Western Set",cat:"Indo Western Sets",price:18500,sizes:["S","M","L","XL"],imgs:[],desc:"Forest green Indo Western with premium fabric and craftsmanship."},
  {id:31,code:"SH01WH",name:"White Leopard Hand Painted Shirt",cat:"Shirts",price:12900,sizes:["S","M","L","XL"],imgs:[],desc:"White shirt with hand painted leopard motif by designer Ramya. A true collector's piece."},
  {id:32,code:"SH04WH",name:"White Eagle Hand Painted Shirt",cat:"Shirts",price:13900,sizes:["S","M","L","XL"],imgs:[],desc:"White shirt featuring a majestic hand painted eagle. Wearable art for the bold."}
];

let cart=[],disc=0,curProd=null,curImgIdx=0,shopFilter="All",occFilter="",qty=1;

// ── CARD ──
function card(p,fn){
  const img=p.imgs&&p.imgs.length?`<img src="${p.imgs[0]}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=pimg-ph>👔</div>'">`:`<div class="pimg-ph">👔</div>`;
  const badge=p.badge?`<div class="pbadge">${p.badge}</div>`:"";
  return`<div class="pcard" onclick="${fn}(${p.id})">
    <div class="pimg">${badge}${img}<button class="pwish" onclick="event.stopPropagation();toast('Saved to wishlist ♡')"><i class="ti ti-heart"></i></button></div>
    <div class="pinfo">
      <div class="pcode">${p.code}</div>
      <div class="pcat">${p.cat}</div>
      <div class="pname">${p.name}</div>
      <div class="pcur">₹${p.price.toLocaleString()}</div>
      <button class="atcb" onclick="event.stopPropagation();addCart(${p.id})">Add to Cart</button>
    </div>
  </div>`;
}

// ── SHOP ──
function shopCat(cat){ shopFilter=cat; occFilter=""; go("shop"); }
function shopOcc(occ){ occFilter=occ; shopFilter="All"; go("shop"); toast("Showing all "+occ+" styles 🎉"); }

function renderShop(){
  const cats=["All","Blazer Sets","Bandhgala Sets","Indo Western Sets","Shirts"];
  const cf=document.getElementById("cat-filters");
  if(cf)cf.innerHTML=cats.map(c=>`<button class="catbtn${shopFilter===c?" on":""}" onclick="shopFilter='${c}';occFilter='';renderShop()">${c}</button>`).join("");
  const fc=document.getElementById("filter-cats");
  if(fc)fc.innerHTML=cats.filter(c=>c!=="All").map(c=>`
    <div class="fo" onclick="shopFilter='${c}';occFilter='';renderShop()">
      <input type="checkbox" ${shopFilter===c?"checked":""}><label>${c}</label>
    </div>`).join("");
  let filtered=products;
  if(shopFilter&&shopFilter!=="All") filtered=filtered.filter(p=>p.cat===shopFilter);
  const ct=document.getElementById("sct");
  if(ct)ct.textContent=`${filtered.length} product${filtered.length!==1?"s":""}${occFilter?" — "+occFilter+" Collection":""}`;
  const grid=document.getElementById("shop-products");
  if(grid)grid.innerHTML=filtered.length?filtered.map(p=>card(p,"openP")).join(""):"<div style='padding:60px;color:var(--gray);text-align:center;grid-column:1/-1'>No products found.</div>";
}

function sortProducts(){
  const val=document.getElementById("sort-sel").value;
  if(val==="low")products.sort((a,b)=>a.price-b.price);
  else if(val==="high")products.sort((a,b)=>b.price-a.price);
  renderShop();
}

// ── PRODUCT DETAIL ──
function openP(id){
  const p=products.find(x=>x.id===id);if(!p)return;
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
    counter.textContent=`1 / ${imgs.length}`;
    thumbsEl.innerHTML=imgs.map((img,i)=>`<img src="${img}" class="thumb${i===0?" on":""}" onclick="switchImg(${i})" alt="view ${i+1}">`).join("");
  }else{
    mainEl.src="";mainEl.style.display="none";
    thumbsEl.innerHTML="";counter.textContent="";
  }
  const related=products.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  document.getElementById("related-products").innerHTML=related.map(r=>card(r,"openP")).join("");
  go("detail");
}

function switchImg(idx){
  const p=curProd;if(!p||!p.imgs)return;
  curImgIdx=idx;
  const mainEl=document.getElementById("detail-main");
  mainEl.style.opacity="0";
  setTimeout(()=>{mainEl.src=p.imgs[idx];mainEl.style.opacity="1";},150);
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
  const p=products.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty+=q;else cart.push({...p,qty:q});
  updCC();toast(`${p.name.split(" ").slice(0,3).join(" ")}... added to cart!`);
}

function updCC(){
  const t=cart.reduce((a,b)=>a+b.qty,0);
  document.getElementById("cc").textContent=t;
  const el=document.getElementById("ctitcc");if(el)el.textContent=t?`(${t} items)`:"";
}

function removeCart(id){cart=cart.filter(x=>x.id!==id);updCC();renderCart();}

function renderCart(){
  const list=document.getElementById("citems");
  const empty=document.getElementById("cempty");
  if(!cart.length){list.innerHTML="";empty.style.display="block";return;}
  empty.style.display="none";
  list.innerHTML=cart.map(item=>`
    <div class="citem">
      <div class="ciimg">${item.imgs&&item.imgs.length?`<img src="${item.imgs[0]}" alt="${item.name}">`:"&nbsp;"}</div>
      <div>
        <div class="cin">${item.name}</div>
        <div class="cim">${item.code} · Size: M · Qty: ${item.qty}</div>
        <div class="cip">₹${(item.price*item.qty).toLocaleString()}</div>
      </div>
      <button class="crm" onclick="removeCart(${item.id})"><i class="ti ti-trash"></i></button>
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

function placeOrder(){
  if(!cart.length){toast("Your cart is empty!");return;}
  toast("Order placed! Thank you 🙏");
  cart=[];disc=0;updCC();
  setTimeout(()=>go("home"),2000);
}
