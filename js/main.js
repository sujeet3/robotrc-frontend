/**
 * Robotrac Main Site JavaScript
 * Handles Header Sticky, Mobile Menu, Search Modal, Quick View, Filtering, Testimonials, FAQ
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSearchModal();
  initQuickViewModal();
  initCurrencySelector();
  initTestimonialSlider();
  initFaqAccordions();
  initCategoryTabs();
  initBackToTop();
  initActiveNavLink();
  initCustomCursor();
});

/* --- CUSTOM INTERACTIVE CURSOR & MOUSE HOVER --- */
function initCustomCursor() {
  if (window.innerWidth <= 1024) return;

  const dot = document.createElement("div");
  dot.className = "custom-cursor-dot";
  const ring = document.createElement("div");
  ring.className = "custom-cursor-ring";

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Hover triggers
  const hoverElements = "a, button, input, select, textarea, .product-card, .category-round-card, .service-box-card, .feature-card, .model-option-card, .track-pill, .implement-check-item";

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

/* --- NAVBAR & MOBILE MENU --- */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileMenu = document.getElementById("mobileNavMenu");
  const mobileOverlay = document.getElementById("mobileNavOverlay");
  const mobileClose = document.getElementById("mobileNavClose");

  // Sticky header with blur on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar && navbar.classList.add("scrolled");
    } else {
      navbar && navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  const openMenu = () => {
    mobileMenu && mobileMenu.classList.add("active");
    mobileOverlay && mobileOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    mobileMenu && mobileMenu.classList.remove("active");
    mobileOverlay && mobileOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  if (mobileToggle) mobileToggle.addEventListener("click", openMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  // Submenu toggles on mobile
  document.querySelectorAll(".mobile-has-submenu > .mobile-menu-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = btn.parentElement;
      parent.classList.toggle("open");
    });
  });
}

/* --- ACTIVE LINK HIGHLIGHTING --- */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link-item, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* --- SEARCH MODAL --- */
function initSearchModal() {
  const openBtns = document.querySelectorAll(".search-trigger-btn");
  const modal = document.getElementById("searchModal");
  const closeBtn = document.getElementById("searchModalClose");
  const input = document.getElementById("siteSearchInput");
  const resultsBox = document.getElementById("searchResultsBox");

  if (!modal) return;

  const openSearch = (e) => {
    e && e.preventDefault();
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
    setTimeout(() => input && input.focus(), 100);
  };

  const closeSearch = () => {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  openBtns.forEach(b => b.addEventListener("click", openSearch));
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch();
  });

  // Live filter results
  if (input && resultsBox) {
    input.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        resultsBox.innerHTML = `<div class="search-empty-hint">Start typing tractor model, implement, or specs (e.g. "RT 180", "plough", "subsidy", "rotary tiller")...</div>`;
        return;
      }

      const matchedProducts = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDesc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.hp && p.hp.toLowerCase().includes(q))
      );

      if (matchedProducts.length === 0) {
        resultsBox.innerHTML = `
          <div class="search-no-results">
            <i class="fa-solid fa-seedling"></i>
            <p>No agricultural machinery found for "<strong>${q}</strong>".</p>
            <small>Try searching "RT 120", "Rotary Tiller", "Reaper", "EV", or "Sprayer"</small>
          </div>
        `;
        return;
      }

      resultsBox.innerHTML = matchedProducts.map(p => `
        <a href="product-details.html?id=${p.id}" class="search-result-item" onclick="document.getElementById('searchModal').classList.remove('open')">
          <img src="${p.image}" alt="${p.name}">
          <div class="search-res-info">
            <span class="search-res-cat">${p.category.toUpperCase()} ${p.hp ? `• ${p.hp}` : ''}</span>
            <h6>${p.name}</h6>
            <div class="search-res-price">${p.priceFormatted}</div>
          </div>
          <i class="fa-solid fa-chevron-right search-res-arrow"></i>
        </a>
      `).join("");
    });
  }
}

/* --- QUICK VIEW MODAL --- */
function initQuickViewModal() {
  const modal = document.getElementById("quickViewModal");
  if (!modal) return;

  document.addEventListener("click", (e) => {
    const qvBtn = e.target.closest("[data-quick-view]");
    if (qvBtn) {
      e.preventDefault();
      const pid = qvBtn.getAttribute("data-quick-view");
      const product = PRODUCTS_DATA.find(p => p.id === pid);
      if (product) {
        renderQuickViewContent(product);
        modal.classList.add("open");
        document.body.classList.add("no-scroll");
      }
    }

    if (e.target.closest("#quickViewClose") || e.target === modal) {
      modal.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  });
}

function renderQuickViewContent(product) {
  const body = document.getElementById("quickViewBody");
  if (!body) return;

  body.innerHTML = `
    <div class="qv-product-grid">
      <div class="qv-gallery-col">
        <div class="qv-main-img-wrap">
          <img src="${product.image}" alt="${product.name}" id="qvMainImg">
          ${product.badge ? `<span class="product-badge badge-primary">${product.badge}</span>` : ''}
        </div>
      </div>
      <div class="qv-details-col">
        <div class="qv-brand-tag">ROBOTRAC RT SERIES • PAITHAN</div>
        <h2 class="qv-title">${product.name}</h2>
        <div class="qv-rating-row">
          <div class="stars-gold">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span class="qv-rating-num">${product.rating} (${product.reviewsCount} Verified Farmers)</span>
        </div>
        
        <div class="qv-price-box">
          <span class="qv-price-label">Target Ex-Factory:</span>
          <span class="qv-price">${product.priceFormatted}</span>
          <span class="qv-stock-badge in-stock"><i class="fa-solid fa-check"></i> Factory Booking Open</span>
        </div>

        <p class="qv-desc">${product.shortDesc}</p>

        <div class="qv-specs-summary">
          ${product.hp ? `<div class="qv-spec-pill"><i class="fa-solid fa-gauge-high"></i> Power: ${product.hp}</div>` : ''}
          ${product.trackWidth ? `<div class="qv-spec-pill"><i class="fa-solid fa-arrows-left-right"></i> Track: ${product.trackWidth}</div>` : ''}
          <div class="qv-spec-pill"><i class="fa-solid fa-shield-halved"></i> 2-Year Warranty Included</div>
        </div>

        <div class="qv-action-row">
          <div class="qv-qty-selector">
            <button onclick="this.nextElementSibling.stepDown()">-</button>
            <input type="number" value="1" min="1" max="10" id="qvQtyInput">
            <button onclick="this.previousElementSibling.stepUp()">+</button>
          </div>
          <button class="btn btn-primary btn-lg" onclick="cartManager.addToCart('${product.id}', parseInt(document.getElementById('qvQtyInput').value)); document.getElementById('quickViewModal').classList.remove('open');">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button class="btn btn-icon btn-outline" data-add-wishlist="${product.id}" title="Wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <div class="qv-footer-links">
          <a href="product-details.html?id=${product.id}" class="qv-full-link">View Full Technical Datasheet & Financing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `;
}

/* --- CURRENCY SELECTOR --- */
function initCurrencySelector() {
  document.querySelectorAll(".currency-selector").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const curr = e.target.value;
      if (window.cartManager) {
        window.cartManager.currency = curr;
        window.cartManager.showToast(`Currency set to ${curr}`, "info");
      }
    });
  });
}

/* --- FAQ ACCORDIONS --- */
function initFaqAccordions() {
  document.querySelectorAll(".faq-item-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      // Close siblings
      item.parentElement.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

/* --- TESTIMONIAL SLIDER --- */
function initTestimonialSlider() {
  const container = document.getElementById("testimonialsSlider");
  if (!container) return;

  let currentIndex = 0;
  const cards = container.querySelectorAll(".testimonial-card-slide");
  const prevBtn = document.getElementById("testimonialPrev");
  const nextBtn = document.getElementById("testimonialNext");
  const dotsContainer = document.getElementById("testimonialDots");

  if (cards.length === 0) return;

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from(cards).map((_, i) => `
      <button class="t-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
    `).join("");
  }

  const showSlide = (index) => {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    currentIndex = index;

    cards.forEach((c, i) => {
      c.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    if (dotsContainer) {
      dotsContainer.querySelectorAll(".t-dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentIndex);
      });
    }
  };

  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
  if (dotsContainer) {
    dotsContainer.addEventListener("click", (e) => {
      const dot = e.target.closest(".t-dot");
      if (dot) {
        showSlide(parseInt(dot.getAttribute("data-index"), 10));
      }
    });
  }

  // Auto slide every 6s
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 6500);
}

/* --- CATEGORY TABS FILTER ON HOMEPAGE & SHOP --- */
function initCategoryTabs() {
  document.querySelectorAll(".cat-tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      const targetCat = tab.getAttribute("data-category");
      const parentTabs = tab.parentElement;
      parentTabs.querySelectorAll(".cat-tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetGrid = document.querySelector(tab.getAttribute("data-target") || "#productsGrid");
      if (!targetGrid) return;

      targetGrid.querySelectorAll(".product-grid-item").forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (targetCat === "all" || cardCat === targetCat || card.getAttribute("data-type") === targetCat) {
          card.style.display = "block";
          card.classList.add("fade-in");
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* --- BACK TO TOP BUTTON --- */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --- PRODUCT CARD HTML HELPER --- */
function generateProductCardHtml(product) {
  const isWish = window.cartManager && window.cartManager.isInWishlist(product.id);
  return `
    <div class="product-grid-item" data-category="${product.category}" data-type="${product.type}">
      <div class="product-card">
        <div class="product-thumb-box">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          <div class="product-quick-actions">
            <button class="action-btn" data-quick-view="${product.id}" title="Quick View">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="action-btn ${isWish ? 'active' : ''}" data-add-wishlist="${product.id}" title="Wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
            <a href="compare.html?add=${product.id}" class="action-btn" title="Compare">
              <i class="fa-solid fa-code-compare"></i>
            </a>
          </div>
        </div>

        <div class="product-body">
          <div class="product-category-row">
            <span class="product-cat">${product.category.replace("-", " ").toUpperCase()}</span>
            <div class="product-stars">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
            </div>
          </div>

          <h4 class="product-title"><a href="product-details.html?id=${product.id}">${product.name}</a></h4>
          
          <div class="product-specs-pills">
            ${product.hp ? `<span class="spec-pill"><i class="fa-solid fa-gauge-high"></i> ${product.hp}</span>` : ''}
            ${product.trackWidth ? `<span class="spec-pill"><i class="fa-solid fa-arrows-left-right"></i> ${product.trackWidth}</span>` : ''}
            ${product.targetAudience ? `<span class="spec-pill"><i class="fa-solid fa-users"></i> ${product.targetAudience.split(" ")[0]}</span>` : ''}
          </div>

          <div class="product-footer-row">
            <div class="product-price-wrap">
              <span class="price-lbl">Target Ex-Showroom</span>
              <span class="price-val">${product.priceFormatted}</span>
            </div>
            <button class="btn btn-sm btn-primary add-cart-btn" data-add-cart="${product.id}">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
