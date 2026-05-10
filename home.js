// ── YANARA FASHIONS — HOME PAGE ──

function renderHome(){
  const na=document.getElementById("new-arrivals");
  const bs=document.getElementById("bestsellers");
  if(na)na.innerHTML=products.slice(0,6).map(p=>card(p,"openP")).join("");
  if(bs)bs.innerHTML=products.slice(4,10).map(p=>card(p,"openP")).join("");
}
