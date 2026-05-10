// ── YANARA FASHIONS — COLOR VARIANTS ──

// ── COLOR MAP ──
var COLOR_MAP = {
  'BL': { name: 'Black',      hex: '#1a1a1a' },
  'MR': { name: 'Maroon',     hex: '#6d1a2a' },
  'DB': { name: 'Dark Blue',  hex: '#1a2a4a' },
  'WI': { name: 'Wine',       hex: '#5c1a2e' },
  'GY': { name: 'Grey',       hex: '#6b6b6b' },
  'OP': { name: 'Onion Pink', hex: '#c97d8a' },
  'DG': { name: 'Dark Green', hex: '#1a3a2a' },
  'NB': { name: 'Navy Blue',  hex: '#1a2050' },
  'PK': { name: 'Pink',       hex: '#e8a0b0' },
  'PC': { name: 'Peach',      hex: '#e8b090' },
  'GR': { name: 'Green',      hex: '#2a6a3a' },
  'WH': { name: 'White',      hex: '#f0f0f0' }
};

// ── VARIANT GROUPS ──
var VARIANT_GROUPS = [
  { codes: ['BZ01BL','BZ02MR'] },
  { codes: ['BZ05BL','BZ06DB','BZ07WI','BZ08GY','BZ12OP'] },
  { codes: ['BZ09DG'] },
  { codes: ['BZ10BL'] },
  { codes: ['BG01BL'] },
  { codes: ['BG05BL','BG06MR'] },
  { codes: ['BG09NB','BG10BL'] },
  { codes: ['BG13BL','BG14DB','BG15PK','BG16GY','BG17WI'] },
  { codes: ['BG19WI'] },
  { codes: ['BG20PC'] },
  { codes: ['IW01BL','IW02GR','IW03DB'] },
  { codes: ['IW05WI','IW06BL','IW07DB'] },
  { codes: ['IW09PC'] },
  { codes: ['IW10WI'] },
  { codes: ['IW11DG'] },
  { codes: ['SH01WH'] },
  { codes: ['SH04WH'] }
];

// ── BUILD CODE → GROUP LOOKUP ──
var codeToGroup = {};
VARIANT_GROUPS.forEach(function(g) {
  g.codes.forEach(function(c) {
    codeToGroup[c.toUpperCase()] = g;
  });
});

// ── GET COLOR FROM CODE ──
function getColorFromCode(code) {
  var suffix = code.slice(-2).toUpperCase();
  return COLOR_MAP[suffix] || { name: code, hex: '#888' };
}

// ── GET GROUP FOR PRODUCT ──
function getGroupForProduct(p) {
  return codeToGroup[(p.code || '').toUpperCase()] || null;
}

// ── CSS ──
(function() {
  var s = document.createElement('style');
  s.textContent =
    '.color-swatches{display:flex;gap:5px;margin-top:8px;flex-wrap:wrap}' +
    '.cswatch{width:18px;height:18px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:all .2s;flex-shrink:0}' +
    '.cswatch:hover,.cswatch.on{border-color:#c9a96e;transform:scale(1.2)}' +
    '.color-opts{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;align-items:center}' +
    '.color-opt{display:flex;align-items:center;gap:6px;padding:6px 12px;border:1px solid rgba(255,255,255,0.1);cursor:pointer;transition:all .2s;font-size:11px;letter-spacing:1px}' +
    '.color-opt:hover,.color-opt.on{border-color:#c9a96e;color:#c9a96e}' +
    '.color-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;border:1px solid rgba(255,255,255,0.2)}';
  document.head.appendChild(s);
})();

// ── SWATCH CLICK ON CARD ──
window.swatchClick = function(productId, swatchEl, fn) {
  var prod = products.find(function(p) { return p.id === productId; });
  if (!prod) return;
  var card = swatchEl.closest('.pcard');
  if (!card) return;
  // Update image
  if (prod.imgs && prod.imgs.length > 0) {
    var imgEl = card.querySelector('.pimg img');
    if (imgEl) {
      imgEl.src = prod.imgs[0];
    } else {
      var ph = card.querySelector('.pimg-ph');
      if (ph) {
        var ni = document.createElement('img');
        ni.src = prod.imgs[0];
        ni.style.cssText = 'width:100%;height:100%;object-fit:cover';
        ph.parentElement.insertBefore(ni, ph);
        ph.style.display = 'none';
      }
    }
  }
  // Update swatches
  card.querySelectorAll('.cswatch').forEach(function(s) { s.classList.remove('on'); });
  swatchEl.classList.add('on');
  // Update card click
  card.onclick = function() { window[fn](productId); };
  // Update add to cart
  var atcBtn = card.querySelector('.atcb');
  if (atcBtn) {
    atcBtn.onclick = function(e) { e.stopPropagation(); if (typeof addCart === 'function') addCart(productId); };
  }
};

// ── SWITCH COLOR IN DETAIL PAGE ──
function switchDetailColor(newId) {
  var prod = products.find(function(p) { return p.id === newId; });
  if (!prod) return;
  window.curProd = prod;
  window.curImgIdx = 0;
  var el = function(id) { return document.getElementById(id); };
  if (el('dname'))  el('dname').textContent  = prod.name;
  if (el('dprice')) el('dprice').textContent = '₹' + prod.price.toLocaleString();
  if (el('dcode'))  el('dcode').textContent  = prod.code;
  if (el('ddesc'))  el('ddesc').textContent  = prod.desc || '';
  if (el('dcat'))   el('dcat').textContent   = prod.cat;
  var imgs = prod.imgs || [];
  if (imgs.length) {
    if (el('detail-main')) { el('detail-main').src = imgs[0]; el('detail-main').style.display = 'block'; }
    if (el('img-counter')) el('img-counter').textContent = '1 / ' + imgs.length;
    if (el('detail-thumbs')) {
      el('detail-thumbs').innerHTML = imgs.map(function(img, i) {
        return '<img src="' + img + '" class="thumb' + (i === 0 ? ' on' : '') + '" onclick="switchImg(' + i + ')" alt="">';
      }).join('');
    }
  } else {
    if (el('detail-main')) { el('detail-main').src = ''; el('detail-main').style.display = 'none'; }
    if (el('detail-thumbs')) el('detail-thumbs').innerHTML = '';
    if (el('img-counter')) el('img-counter').textContent = '';
  }
  if (el('size-grid')) {
    el('size-grid').innerHTML = (prod.sizes || ['S','M','L','XL']).map(function(s, i) {
      return '<div class="sopt' + (i === 0 ? ' on' : '') + '" onclick="selSz(this)">' + s + '</div>';
    }).join('');
  }
  if (el('qv')) el('qv').textContent = '1';
}

// ── INJECT COLOR PICKER INTO DETAIL PAGE ──
function injectColorPicker(activeId) {
  var prod = products.find(function(p) { return p.id === activeId; });
  if (!prod) return;
  var group = getGroupForProduct(prod);
  if (!group || group.codes.length <= 1) return;
  var existing = document.getElementById('color-picker-section');
  if (existing) existing.remove();
  var section = document.createElement('div');
  section.id = 'color-picker-section';
  section.style.marginBottom = '20px';
  var label = document.createElement('div');
  label.className = 'dst';
  label.textContent = 'Select Colour';
  section.appendChild(label);
  var opts = document.createElement('div');
  opts.className = 'color-opts';
  group.codes.forEach(function(code) {
    var p = products.find(function(x) { return x.code.toUpperCase() === code.toUpperCase(); });
    if (!p) return;
    var c = getColorFromCode(code);
    var isActive = p.id === activeId;
    var opt = document.createElement('div');
    opt.className = 'color-opt' + (isActive ? ' on' : '');
    opt.innerHTML = '<div class="color-dot" style="background:' + c.hex + '"></div>' + c.name;
    opt.onclick = function() {
      switchDetailColor(p.id);
      opts.querySelectorAll('.color-opt').forEach(function(o) { o.classList.remove('on'); });
      opt.classList.add('on');
    };
    opts.appendChild(opt);
  });
  section.appendChild(opts);
  var sizeDst = document.querySelector('#page-detail .dst');
  if (sizeDst) sizeDst.parentNode.insertBefore(section, sizeDst);
}

// ── PATCH FUNCTIONS AFTER DOM READY ──
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (typeof products === 'undefined') return;

    // ── Patch card() to add swatches ──
    var _origCard = window.card;
    window.card = function(p, fn) {
      var html = _origCard(p, fn);
      var group = getGroupForProduct(p);
      if (!group || group.codes.length <= 1) return html;
      // Build swatches
      var swatchHtml = '<div class="color-swatches">';
      group.codes.forEach(function(code) {
        var gp = products.find(function(x) { return x.code.toUpperCase() === code.toUpperCase(); });
        if (!gp) return;
        var c = getColorFromCode(code);
        var isOn = code.toUpperCase() === p.code.toUpperCase();
        swatchHtml += '<div class="cswatch ' + (isOn ? 'on' : '') + '" style="background:' + c.hex + '" title="' + c.name + '" onclick="event.stopPropagation();swatchClick(' + gp.id + ',this,\'' + fn + '\')"></div>';
      });
      swatchHtml += '</div>';
      // Insert before last </div></div>
      var idx = html.lastIndexOf('</div>');
      var idx2 = html.lastIndexOf('</div>', idx - 1);
      html = html.slice(0, idx2) + swatchHtml + html.slice(idx2);
      return html;
    };

    // ── Patch renderShop to deduplicate ──
    var _origRenderShop = window.renderShop;
    window.renderShop = function() {
      _origRenderShop();
      setTimeout(function() { deduplicateGrid('shop-products'); }, 50);
    };

    // ── Patch renderHome to deduplicate ──
    var _origRenderHome = window.renderHome;
    window.renderHome = function() {
      _origRenderHome();
      setTimeout(function() {
        deduplicateGrid('new-arrivals');
        deduplicateGrid('bestsellers');
      }, 50);
    };

    // ── Patch openP to inject color picker ──
    var _origOpenP = window.openP;
    window.openP = function(id) {
      _origOpenP(id);
      setTimeout(function() { injectColorPicker(id); }, 100);
    };

    // Trigger initial renders
    if (typeof renderHome === 'function') renderHome();
    if (document.getElementById('page-shop') && document.getElementById('page-shop').classList.contains('active')) {
      if (typeof renderShop === 'function') renderShop();
    }

  }, 400);
});

// ── DEDUPLICATE GRID — show only first product per group ──
function deduplicateGrid(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  var seen = {};
  grid.querySelectorAll('.pcard').forEach(function(card) {
    var oc = card.getAttribute('onclick') || '';
    var match = oc.match(/\d+/);
    if (!match) return;
    var id = parseInt(match[0]);
    var prod = products.find(function(p) { return p.id === id; });
    if (!prod) return;
    var group = getGroupForProduct(prod);
    if (!group || group.codes.length <= 1) return;
    var key = group.codes[0].toUpperCase();
    if (seen[key]) {
      card.style.display = 'none';
    } else {
      seen[key] = true;
    }
  });
}
