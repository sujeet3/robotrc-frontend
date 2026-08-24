/**
 * Robotrac eCommerce Cart & Wishlist System
 * Manages localStorage state, Cart Drawer UI, Wishlist, Coupons, and Toast notifications
 */

class CartManager {
  constructor() {
    this.cartKey = "robotrac_cart_v1";
    this.wishlistKey = "robotrac_wishlist_v1";
    this.currency = "INR";
    this.exchangeRate = 1; // Default INR. For USD, ~0.012
    this.appliedCoupon = null;
    this.coupons = {
      "KISAN2026": { discountType: "fixed", value: 10000, desc: "₹10,000 Special Kisan Launch Discount" },
      "MAHAFARM": { discountType: "percent", value: 5, desc: "5% Off Implements & Machinery" },
      "SUBSIDY50": { discountType: "subsidy", value: 40, desc: "Estimated 40% Govt Subsidy Calculation" }
    };

    this.init();
  }

  init() {
    this.renderCartDrawer();
    this.updateCounters();
    this.setupEventListeners();
  }

  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.cartKey)) || [];
    } catch (e) {
      return [];
    }
  }

  saveCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.updateCounters();
    this.renderCartDrawer();
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: cart }));
  }

  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(this.wishlistKey)) || [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist(list) {
    localStorage.setItem(this.wishlistKey, JSON.stringify(list));
    this.updateCounters();
    window.dispatchEvent(new CustomEvent("wishlist-updated", { detail: list }));
  }

  addToCart(productId, qty = 1, selectedOptions = {}) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) {
      this.showToast("Product not found", "error");
      return;
    }

    let cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === productId && JSON.stringify(item.options) === JSON.stringify(selectedOptions));

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        priceFormatted: product.priceFormatted,
        image: product.image,
        type: product.type,
        category: product.category,
        qty: qty,
        options: selectedOptions
      });
    }

    this.saveCart(cart);
    this.showToast(`Added ${product.shortName} to Cart!`, "success");
    this.openCartDrawer();
  }

  removeFromCart(index) {
    let cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      const removed = cart.splice(index, 1);
      this.saveCart(cart);
      this.showToast(`Removed ${removed[0].shortName} from Cart`, "info");
    }
  }

  updateQuantity(index, newQty) {
    let cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      if (newQty <= 0) {
        this.removeFromCart(index);
      } else {
        cart[index].qty = newQty;
        this.saveCart(cart);
      }
    }
  }

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const index = wishlist.indexOf(productId);
    const product = PRODUCTS_DATA.find(p => p.id === productId);

    if (index > -1) {
      wishlist.splice(index, 1);
      this.saveWishlist(wishlist);
      this.showToast(`Removed from Wishlist`, "info");
    } else {
      wishlist.push(productId);
      this.saveWishlist(wishlist);
      this.showToast(`Added ${product ? product.shortName : 'item'} to Wishlist!`, "success");
    }
    this.updateCounters();
  }

  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  }

  applyCoupon(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (this.coupons[cleanCode]) {
      this.appliedCoupon = { code: cleanCode, ...this.coupons[cleanCode] };
      this.showToast(`Coupon applied: ${this.coupons[cleanCode].desc}`, "success");
      this.renderCartDrawer();
      window.dispatchEvent(new CustomEvent("coupon-applied", { detail: this.appliedCoupon }));
      return true;
    } else {
      this.showToast("Invalid Coupon Code. Try KISAN2026", "error");
      return false;
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.renderCartDrawer();
    window.dispatchEvent(new CustomEvent("coupon-removed"));
    this.showToast("Coupon removed", "info");
  }

  getTotals() {
    const cart = this.getCart();
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discount = 0;

    if (this.appliedCoupon) {
      if (this.appliedCoupon.discountType === "fixed") {
        discount = Math.min(this.appliedCoupon.value, subtotal);
      } else if (this.appliedCoupon.discountType === "percent" || this.appliedCoupon.discountType === "subsidy") {
        discount = (subtotal * this.appliedCoupon.value) / 100;
      }
    }

    // GST (agricultural machinery standard 12% in India, embedded in target price or detailed)
    const netTotal = Math.max(0, subtotal - discount);
    return {
      subtotal,
      discount,
      netTotal,
      itemsCount: cart.reduce((sum, item) => sum + item.qty, 0)
    };
  }

  formatPrice(amount) {
    if (isNaN(amount)) return "₹ 0";
    if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${amount.toLocaleString('en-IN')}`;
  }

  updateCounters() {
    const cart = this.getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const wishlist = this.getWishlist();

    document.querySelectorAll(".cart-count-badge").forEach(el => {
      el.textContent = totalItems;
      el.style.display = totalItems > 0 ? "inline-flex" : "none";
    });

    document.querySelectorAll(".wishlist-count-badge").forEach(el => {
      el.textContent = wishlist.length;
      el.style.display = wishlist.length > 0 ? "inline-flex" : "none";
    });
  }

  openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.classList.add("drawer-open");
  }

  closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }

  renderCartDrawer() {
    const drawerBody = document.getElementById("cartDrawerItems");
    const drawerFooter = document.getElementById("cartDrawerFooter");
    if (!drawerBody || !drawerFooter) return;

    const cart = this.getCart();
    const totals = this.getTotals();

    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-cart-icon"><i class="fa-solid fa-tractor"></i></div>
          <h4>Your Machinery Cart is Empty</h4>
          <p>Explore our RT Series smart tractors and high-performance agricultural implements.</p>
          <a href="shop.html" class="btn btn-primary" onclick="cartManager.closeCartDrawer()">Explore Products</a>
        </div>
      `;
      drawerFooter.style.display = "none";
      return;
    }

    drawerFooter.style.display = "block";

    let itemsHtml = cart.map((item, index) => `
      <div class="cart-drawer-item">
        <img src="${item.image}" alt="${item.shortName}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-head">
            <h5 class="cart-item-title"><a href="product-details.html?id=${item.id}">${item.shortName}</a></h5>
            <button class="cart-item-remove" onclick="cartManager.removeFromCart(${index})" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          ${item.options && item.options.trackWidth ? `<span class="cart-item-opt">Track: ${item.options.trackWidth}</span>` : ''}
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button onclick="cartManager.updateQuantity(${index}, ${item.qty - 1})">-</button>
              <span>${item.qty}</span>
              <button onclick="cartManager.updateQuantity(${index}, ${item.qty + 1})">+</button>
            </div>
            <div class="cart-item-price">${this.formatPrice(item.price * item.qty)}</div>
          </div>
        </div>
      </div>
    `).join("");

    drawerBody.innerHTML = itemsHtml;

    drawerFooter.innerHTML = `
      <div class="cart-drawer-totals">
        <div class="totals-row">
          <span>Items Total (${totals.itemsCount}):</span>
          <strong>${this.formatPrice(totals.subtotal)}</strong>
        </div>
        ${totals.discount > 0 ? `
          <div class="totals-row discount-row">
            <span>Discount (${this.appliedCoupon ? this.appliedCoupon.code : ''}):</span>
            <span class="discount-val">- ${this.formatPrice(totals.discount)}</span>
          </div>
        ` : ''}
        <div class="totals-row net-row">
          <span>Target Ex-Factory Total:</span>
          <span class="net-val">${this.formatPrice(totals.netTotal)}</span>
        </div>
      </div>
      
      <div class="cart-drawer-coupon">
        <div class="coupon-input-group">
          <input type="text" id="drawerCouponInput" placeholder="Promo / Subsidy Code" value="${this.appliedCoupon ? this.appliedCoupon.code : ''}">
          <button class="btn btn-sm btn-dark" onclick="cartManager.handleApplyDrawerCoupon()">
            ${this.appliedCoupon ? 'Applied' : 'Apply'}
          </button>
        </div>
        <small class="coupon-hint">Tip: Use <code>KISAN2026</code> for ₹10,000 off</small>
      </div>

      <div class="cart-drawer-actions">
        <a href="cart.html" class="btn btn-outline w-100" onclick="cartManager.closeCartDrawer()">View Full Cart</a>
        <a href="checkout.html" class="btn btn-primary w-100" onclick="cartManager.closeCartDrawer()">
          Proceed to Booking / Finance <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;
  }

  handleApplyDrawerCoupon() {
    const input = document.getElementById("drawerCouponInput");
    if (input) {
      this.applyCoupon(input.value);
    }
  }

  showToast(message, type = "success") {
    let toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.id = "toastContainer";
      toastContainer.className = "toast-container";
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    
    let icon = "fa-check-circle";
    if (type === "error") icon = "fa-triangle-exclamation";
    if (type === "info") icon = "fa-circle-info";

    toast.innerHTML = `
      <i class="fa-solid ${icon} toast-icon"></i>
      <span class="toast-msg">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  setupEventListeners() {
    document.addEventListener("click", (e) => {
      const cartTrigger = e.target.closest(".cart-toggle-btn");
      if (cartTrigger) {
        e.preventDefault();
        this.openCartDrawer();
      }

      const closeBtn = e.target.closest(".cart-close-btn") || e.target.closest("#cartOverlay");
      if (closeBtn) {
        this.closeCartDrawer();
      }

      const addBtn = e.target.closest("[data-add-cart]");
      if (addBtn) {
        e.preventDefault();
        const pid = addBtn.getAttribute("data-add-cart");
        const qty = parseInt(addBtn.getAttribute("data-qty") || "1", 10);
        this.addToCart(pid, qty);
      }

      const wishBtn = e.target.closest("[data-add-wishlist]");
      if (wishBtn) {
        e.preventDefault();
        const pid = wishBtn.getAttribute("data-add-wishlist");
        this.toggleWishlist(pid);
        wishBtn.classList.toggle("active", this.isInWishlist(pid));
      }
    });
  }
}

// Instantiate global cart manager
const cartManager = new CartManager();
