// ── YANARA FASHIONS — COLOR VARIANTS PATCH ──
// Add this AFTER yanara-fixes.js in index.html
// <script src="yanara-colors.js"></script>

// ── COLOR MAP — code suffix → display name + swatch color ──
var COLOR_MAP = {
  'BL':  { name: 'Black',      hex: '#1a1a1a' },
  'MR':  { name: 'Maroon',     hex: '#6d1a2a' },
  'DB':  { name: 'Dark Blue',  hex: '#1a2a4a' },
  'WI':  { name: 'Wine',       hex: '#5c1a2e' },
  'GY':  { name: 'Grey',       hex: '#6b6b6b' },
  'OP':  { name: 'Onion Pink', hex: '#c97d8a' },
  'DG':  { name: 'Dark Green', hex: '#1a3a2a' },
  'NB':  { name: 'Navy Blue',  hex: '#1a2050' },
  'PK':  { name: 'Pink',       hex: '#e8a0b0' },
  'PC':  { name: 'Peach',      hex: '#e8b090' },
  'GR':  { name: 'Green',      hex: '#2a6a3a' },
  'WH':  { name: 'White',      hex: '#f0f0f0' },
  'WI2': { name: 'White',      hex: '#f0f0f0' }
};

// ── VARIANT GROUPS — products that share the same style ──
var VARIANT_GROUPS = [
  // BLAZERS
  { codes: ['BZ01BL','BZ02MR'] },
  { codes: ['BZ05BL','BZ06DB','BZ07WI','BZ08GY','BZ12OP'] },
  { codes: ['BZ09DG'] },
  { codes: ['BZ10BL'] },
  // BANDHGALA
  { codes: ['BG01BL'] },
  { codes: ['BG05BL','BG06MR'] },
  { codes: ['BG09NB','BG10BL'] },
  { codes: ['BG13BL','BG14DB','BG15PK','BG16GY','BG17WI'] },
  { codes: ['BG19WI'] },
  { codes: ['BG20PC'] },
  // INDO WESTERN
  { codes: ['IW01BL','IW02GR','IW03DB'] },
  { codes: ['IW05WI','IW06BL','IW07DB'] },
  { codes: ['IW09PC'] },
  { codes: ['IW10WI'] },
  { codes: ['IW11DG'] },
  // SHIRTS
  { codes: ['SH01WH'] },
  { codes: ['SH04WH'] }
];

// ── BUILD LOOKUP: code → group ──
var codeToGroup = {};
VARIANT_GROUPS.forEach(function(g) {
  g.codes.forEach(function(c) { codeToGroup[c.toUpperCase()] = g; });
});

// ── HELPER: get color suffix from code ──
function getColorSuffix(code) {
  // Last 2 chars are the color suffix
  return code.slice(-2).toUpperCase();
}

// ── HELPER: get color info from code ──
function getColor(code) {
  var suffix = getColorSuffix(code);
  return COLOR_MAP[suffix] || { name: code, hex: '#888' };
}

// ── HELPER: get base name (remove color from end) ──
function getBaseName(name) {
  // Strip trailing color words
  var colors = ['Black','Maroon','Dark Blue','Wine','Grey','Onion Pink','Dark Green','Navy Blue','Navy','Pink','Peach','Green','White'];
  var n = name;
  colors.forEach(function(c) {
    n = n.replace(new RegExp('^' + c + '\\s*', 'i'), '');
    n = n.replace(new RegExp('\\s*' + c + '$', 'i'), '');
  });
  return n.trim() || name;
}

// ── INJECT CSS for color swatches ──
(function() {
  var s = document.createElement('style');
  s.textContent = `
    .color-swatches {
      display: flex;
      gap: 5px;
      margin-top: 8px;
      flex-wrap: wrap;
    }
    .cswatch {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all .2s;
      flex-shrink: 0;
    }
    .cswatch:hover, .cswatch.on {
      border-color: #c9a96e;
      transform: scale(1.2);
    }
    .cswatch[data-color="White"], .cswatch[style*="f0f0f0"] {
      border-color: #555;
    }
    /* Detail page color selector */
    .color-opts {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      align-items: center;
    }
    .color-opt {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      transition: all .2s;
      font-size: 11px;
      letter-spacing: 1px;
    }
    .color-opt:hover, .color-opt.on {
      border-color: #c9a96e;
      color: #c9a96e;
    }
    .color-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      flex-shrink: 0;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .color-label {
      font-size: 10px;
      color: #888;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-weight: 700;
    }
  `;
  document.head.appendChild(s);
})();

// ── PATCH renderShop / renderHome to show grouped products ──
// We wait for original functions then wrap them

document.addEventListener('DOMContentLoaded', function() {
  // Give original scripts time to define products & functions
  setTimeout(patchVariants, 300);
});

function patchVariants() {
  if (typeof products === 'undefined') {
    setTimeout(patchVariants, 200);
    return;
  }

  // Build grouped product list — one entry per group, using first product as base
  window.groupedProducts = buildGroupedProducts();

  // Patch card() function to show color swatches
  var _origCard = window.card;
  window.card = function(p, fn) {
    var group = getGroupForProduct(p);
    var html = _origCard(p, fn);

    if (group && group.codes.length > 1) {
      // Insert color swatches into card before closing .pinfo div
      var swatches = buildSwatchesHTML(group, p.code, fn);
      html = html.replace('</div>\n</div>', swatches + '</div>\n</div>');
      html = html.replace('</div></div>', swatches + '</div></div>');
    }
    return html;
  };

  // Patch renderShop to show only one card per group
  var _origRenderShop = window.renderShop;
  window.renderShop = function() {
    _origRenderShop();
    deduplicateGrid('shop-products');
  };

  // Patch renderHome
  var _origRenderHome = window.renderHome;
  window.renderHome = function() {
    _origRenderHome();
    setTimeout(function() {
      deduplicateGrid('new-arrivals');
      deduplicateGrid('bestsellers');
    }, 50);
  };

  // Patch openP to show color variants in detail page
  var _origOpenP = window.openP;
  window.openP = function(id) {
    _origOpenP(id);
    setTimeout(function() { injectColorPicker(id); }, 50);
  };

  // Initial render
  if (typeof renderShop === 'function' && document.getElementById('page-shop') && document.getElementById('page-shop').classList.contains('active')) {
    renderShop();
  }
  if (typeof renderHome === 'function') {
    renderHome();
  }
}

// ── Get group for a product ──
function getGroupForProduct(p) {
  var code = (p.code || '').toUpperCase();
  return codeToGroup[code] || null;
}

// ── Build swatch HTML for a card ──
function buildSwatchesHTML(group, activeCode, fn) {
  if (!group || group.codes.length <= 1) return '';
  var html = '<div class="color-swatches">';
  group.codes.forEach(function(code) {
    var c = getColor(code);
    var prod = products.find(function(p) { return p.code.toUpperCase() === code.toUpperCase(); });
    if (!prod) return;
    var isActive = code.toUpperCase() === activeCode.toUpperCase();
    html += '<div class="cswatch ' + (isActive ? 'on' : '') + '" '
      + 'style="background:' + c.hex + '" '
      + 'title="' + c.name + '" '
      + 'onclick="event.stopPropagation();swatchClick(' + prod.id + ',this,\'' + fn + '\')">'
      + '</div>';
  });
  html += '</div>';
  return html;
}

// ── Swatch click on card — switches card image + active swatch ──
window.swatchClick = function(productId, swatchEl, fn) {
  var prod = products.find(function(p) { return p.id === productId; });
  if (!prod) return;

  // Find the parent card
  var card = swatchEl.closest('.pcard');
  if (!card) return;

  // Update image
  var imgEl = card.querySelector('.pimg img');
  var imgPh = card.querySelector('.pimg-ph');
  if (prod.imgs && prod.imgs.length > 0) {
    if (imgEl) {
      imgEl.src = prod.imgs[0];
      imgEl.style.display = 'block';
    } else if (imgPh) {
      // Create img element
      var newImg = document.createElement('img');
      newImg.src = prod.imgs[0];
      imgPh.parentElement.insertBefore(newImg, imgPh);
      imgPh.style.display = 'none';
    }
  }

  // Update active swatch
  card.querySelectorAll('.cswatch').forEach(function(s) { s.classList.remove('on'); });
  swatchEl.classList.add('on');

  // Update onclick of card to open this product
  card.onclick = function() { window[fn](productId); };

  // Update Add to Cart button
  var atcBtn = card.querySelector('.atcb');
  if (atcBtn) {
    atcBtn.onclick = function(e) {
      e.stopPropagation();
      if (typeof addCart === 'function') addCart(productId);
    };
  }
};

// ── Deduplicate grid — hide duplicate products from same group ──
function deduplicateGrid(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;

  var seen = {};
  var cards = grid.querySelectorAll('.pcard');

  cards.forEach(function(card) {
    // Find product id from onclick
    var onclick = card.getAttribute('onclick') || card.onclick + '';
    var match = onclick.match(/\d+/);
    if (!match) return;
    var id = parseInt(match[0]);
    var prod = products.find(function(p) { return p.id === id; });
    if (!prod) return;

    var group = getGroupForProduct(prod);
    if (!group || group.codes.length <= 1) return;

    var groupKey = group.codes[0];
    if (seen[groupKey]) {
      card.style.display = 'none';
    } else {
      seen[groupKey] = true;
      // Make sure card shows first product of group with swatches
      // Add swatches if not already there
      if (!card.querySelector('.color-swatches')) {
        var swatchHTML = buildSwatchesHTML(group, prod.code, 'openP');
        var pinfo = card.querySelector('.pinfo');
        if (pinfo) {
          var div = document.createElement('div');
          div.innerHTML = swatchHTML;
          pinfo.appendChild(div.firstChild);
        }
      }
    }
  });
}

// ── Inject color picker into product detail page ──
function injectColorPicker(activeId) {
  var prod = products.find(function(p) { return p.id === activeId; });
  if (!prod) return;

  var group = getGroupForProduct(prod);
  if (!group || group.codes.length <= 1) return;

  // Remove existing color picker if any
  var existing = document.getElementById('color-picker-section');
  if (existing) existing.remove();

  // Build color picker HTML
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
    var c = getColor(code);
    var isActive = p.id === activeId;

    var opt = document.createElement('div');
    opt.className = 'color-opt' + (isActive ? ' on' : '');
    opt.innerHTML = '<div class="color-dot" style="background:' + c.hex + ';border-color:' + (c.hex === '#f0f0f0' ? '#888' : 'rgba(255,255,255,0.2)') + '"></div>' + c.name;
    opt.onclick = function() {
      // Switch to this color variant
      switchDetailColor(p.id);
      opts.querySelectorAll('.color-opt').forEach(function(o) { o.classList.remove('on'); });
      opt.classList.add('on');
    };
    opts.appendChild(opt);
  });

  section.appendChild(opts);

  // Insert before size section
  var sizeSection = document.querySelector('.sgrid');
  if (sizeSection) {
    var sizeDst = sizeSection.previousElementSibling;
    if (sizeDst) {
      sizeDst.parentNode.insertBefore(section, sizeDst);
    }
  }
}

// ── Switch color in detail page without full reload ──
function switchDetailColor(newId) {
  var prod = products.find(function(p) { return p.id === newId; });
  if (!prod) return;

  // Update global curProd
  window.curProd = prod;
  window.curImgIdx = 0;

  // Update name, price, code, desc
  var dname = document.getElementById('dname');
  var dprice = document.getElementById('dprice');
  var dcode = document.getElementById('dcode');
  var ddesc = document.getElementById('ddesc');
  var dcat = document.getElementById('dcat');

  if (dname) dname.textContent = prod.name;
  if (dprice) dprice.textContent = '₹' + prod.price.toLocaleString();
  if (dcode) dcode.textContent = prod.code;
  if (ddesc) ddesc.textContent = prod.desc || '';
  if (dcat) dcat.textContent = prod.cat;

  // Update images
  var imgs = prod.imgs || [];
  var mainEl = document.getElementById('detail-main');
  var thumbsEl = document.getElementById('detail-thumbs');
  var counter = document.getElementById('img-counter');

  if (imgs.length) {
    if (mainEl) { mainEl.src = imgs[0]; mainEl.style.display = 'block'; }
    if (counter) counter.textContent = '1 / ' + imgs.length;
    if (thumbsEl) {
      thumbsEl.innerHTML = imgs.map(function(img, i) {
        return '<img src="' + img + '" class="thumb' + (i === 0 ? ' on' : '') + '" onclick="switchImg(' + i + ')" alt="view ' + (i+1) + '">';
      }).join('');
    }
  } else {
    if (mainEl) { mainEl.src = ''; mainEl.style.display = 'none'; }
    if (thumbsEl) thumbsEl.innerHTML = '';
    if (counter) counter.textContent = '';
  }

  // Update sizes
  var sizeGrid = document.getElementById('size-grid');
  if (sizeGrid) {
    sizeGrid.innerHTML = (prod.sizes || ['S','M','L','XL']).map(function(s, i) {
      return '<div class="sopt' + (i === 0 ? ' on' : '') + '" onclick="selSz(this)">' + s + '</div>';
    }).join('');
  }

  // Update qty
  var qv = document.getElementById('qv');
  if (qv) qv.textContent = '1';
}
