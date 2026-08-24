/**
 * Robotrac Interactive Tractor Customizer & Farm EMI Calculator Engine
 */

class TractorCustomizer {
  constructor() {
    this.models = {
      "rt-120": { name: "Robotrac RT 120", basePrice: 492000, hp: "25 HP", defaultTrack: "2.5 ft", image: "images/tractor-rt120.jpg" },
      "rt-180": { name: "Robotrac RT 180", basePrice: 670000, hp: "38 HP", defaultTrack: "3.0 ft", image: "images/tractor-rt180.jpg" },
      "rt-270": { name: "Robotrac RT 270", basePrice: 925000, hp: "52 HP", defaultTrack: "3.5 ft", image: "images/tractor-rt270.jpg" },
      "rt-270-ev": { name: "Robotrac RT 270 EV", basePrice: 1450000, hp: "45 HP Eq.", defaultTrack: "3.2 ft", image: "images/rt270ev.jpg" }
    };

    this.selectedModel = "rt-180";
    this.selectedTrack = "3.0 ft";
    this.selectedImplements = ["rotary-tiller"];
    this.downPaymentPercent = 20; // 20%
    this.loanTenureYears = 5; // 5 years
    this.interestRate = 8.5; // 8.5% annual
    this.applySubsidy = true;
    this.subsidyPercent = 40; // 40% typical SMAM / MahaDBT subsidy

    this.init();
  }

  init() {
    const container = document.getElementById("tractorCustomizerRoot");
    if (!container) return;
    this.render();
    this.attachEvents();
  }

  calculate() {
    const model = this.models[this.selectedModel];
    let tractorPrice = model.basePrice;
    
    // Implements price calculation
    let implementsTotal = 0;
    let implementsList = [];
    this.selectedImplements.forEach(impId => {
      const imp = PRODUCTS_DATA.find(p => p.id === impId);
      if (imp) {
        implementsTotal += imp.price;
        implementsList.push(imp);
      }
    });

    let grossTotal = tractorPrice + implementsTotal;
    
    // Govt Subsidy estimation (approx 40% on base machine for eligible category)
    let estimatedSubsidy = this.applySubsidy ? Math.round(tractorPrice * 0.40) : 0;
    let effectiveCost = Math.max(0, grossTotal - estimatedSubsidy);

    // Down payment calculation
    let downPaymentAmount = Math.round(effectiveCost * (this.downPaymentPercent / 100));
    let loanPrincipal = Math.max(0, effectiveCost - downPaymentAmount);

    // EMI Calculation Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    let monthlyRate = (this.interestRate / 100) / 12;
    let totalMonths = this.loanTenureYears * 12;
    let monthlyEmi = 0;
    
    if (loanPrincipal > 0 && monthlyRate > 0) {
      monthlyEmi = Math.round((loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1));
    }

    return {
      model,
      tractorPrice,
      implementsTotal,
      implementsList,
      grossTotal,
      estimatedSubsidy,
      effectiveCost,
      downPaymentAmount,
      loanPrincipal,
      monthlyEmi,
      totalMonths
    };
  }

  formatPrice(val) {
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString("en-IN")}`;
  }

  render() {
    const container = document.getElementById("tractorCustomizerRoot");
    if (!container) return;

    const data = this.calculate();

    // Implements options
    const popularImplements = [
      { id: "rotary-tiller", name: "Rotary Tiller (Rotavator)", price: 145000 },
      { id: "plough", name: "2-Bottom Reversible MB Plough", price: 35000 },
      { id: "disc-harrow", name: "Offset Disc Harrow", price: 58000 },
      { id: "reaper", name: "Multi-Crop Reaper", price: 98000 },
      { id: "sprayer", name: "400L Air-Assisted Boom Sprayer", price: 82000 },
      { id: "trailer", name: "3-Ton Hydraulic Tipping Trailer", price: 125000 },
      { id: "front-loader", name: "Hydraulic Front End Loader", price: 225000 }
    ];

    container.innerHTML = `
      <div class="customizer-card">
        <div class="customizer-header">
          <div class="customizer-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> Interactive Farm Machine Studio</div>
          <h3>Build & Finance Your Smart Tractor</h3>
          <p>Configure track width, select companion implements, estimate government mechanization subsidies, and calculate instant monthly EMI.</p>
        </div>

        <div class="customizer-grid">
          <!-- Left Column: Options Configuration -->
          <div class="customizer-options-col">
            <!-- Step 1: Select Model -->
            <div class="opt-group">
              <label class="opt-label"><span class="step-num">1</span> Select RT Series Model</label>
              <div class="model-select-grid">
                ${Object.keys(this.models).map(key => {
                  const m = this.models[key];
                  const isSel = this.selectedModel === key;
                  return `
                    <div class="model-option-card ${isSel ? 'active' : ''}" data-model="${key}">
                      <div class="model-opt-radio"><i class="fa-solid ${isSel ? 'fa-circle-check' : 'fa-circle'}"></i></div>
                      <div class="model-opt-info">
                        <strong>${m.name}</strong>
                        <div class="model-opt-meta">
                          <span><i class="fa-solid fa-gauge-high"></i> ${m.hp}</span>
                          <span><i class="fa-solid fa-arrows-left-right"></i> ${m.defaultTrack}</span>
                        </div>
                        <div class="model-opt-price">${this.formatPrice(m.basePrice)}</div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>

            <!-- Step 2: Track Width -->
            <div class="opt-group">
              <label class="opt-label"><span class="step-num">2</span> Farm Track-Width Setting</label>
              <div class="track-pills">
                <button class="track-pill ${this.selectedTrack === '2.5 ft' ? 'active' : ''}" data-track="2.5 ft">
                  <strong>2.5 ft Narrow Track</strong>
                  <small>Orchards, Vineyards, Vegetables</small>
                </button>
                <button class="track-pill ${this.selectedTrack === '3.0 ft' ? 'active' : ''}" data-track="3.0 ft">
                  <strong>3.0 ft Standard Multi-Crop</strong>
                  <small>Sugarcane, Cotton, Soybean, Pulses</small>
                </button>
                <button class="track-pill ${this.selectedTrack === '3.5 ft' ? 'active' : ''}" data-track="3.5 ft">
                  <strong>3.5 ft Broad Heavy Duty</strong>
                  <small>Deep Tillage, Commercial Haulage</small>
                </button>
              </div>
            </div>

            <!-- Step 3: Bundle Implements -->
            <div class="opt-group">
              <label class="opt-label"><span class="step-num">3</span> Select Companion Implements (Optional)</label>
              <div class="implements-checkbox-grid">
                ${popularImplements.map(imp => {
                  const isChecked = this.selectedImplements.includes(imp.id);
                  return `
                    <label class="implement-check-item ${isChecked ? 'checked' : ''}">
                      <input type="checkbox" value="${imp.id}" ${isChecked ? 'checked' : ''} class="custom-imp-cb">
                      <span class="custom-check-icon"><i class="fa-solid ${isChecked ? 'fa-square-check' : 'fa-square'}"></i></span>
                      <div class="imp-check-text">
                        <span class="imp-name">${imp.name}</span>
                        <span class="imp-cost">+ ${this.formatPrice(imp.price)}</span>
                      </div>
                    </label>
                  `;
                }).join("")}
              </div>
            </div>

            <!-- Step 4: Subsidy Option -->
            <div class="opt-group subsidy-opt-box">
              <label class="subsidy-toggle-label">
                <input type="checkbox" id="subsidyToggle" ${this.applySubsidy ? 'checked' : ''}>
                <span class="subsidy-toggle-text">
                  <strong>Apply Estimated Govt Farm Subsidy (SMAM / MahaDBT ~40%)</strong>
                  <small>Subsidies credited through Direct Benefit Transfer upon state approval</small>
                </span>
              </label>
            </div>
          </div>

          <!-- Right Column: Live Summary & EMI Calculator -->
          <div class="customizer-summary-col">
            <div class="customizer-preview-box">
              <div class="preview-thumb-wrap">
                <img src="${data.model.image}" alt="${data.model.name}" class="preview-tractor-img">
                <span class="preview-tag">${data.model.hp} • ${this.selectedTrack}</span>
              </div>

              <!-- Price Breakdown Table -->
              <div class="build-cost-breakdown">
                <div class="cost-row">
                  <span>Base Tractor (${data.model.name}):</span>
                  <strong>${this.formatPrice(data.tractorPrice)}</strong>
                </div>
                <div class="cost-row">
                  <span>Implements (${data.implementsList.length} items):</span>
                  <strong>${this.formatPrice(data.implementsTotal)}</strong>
                </div>
                <div class="cost-row gross-row">
                  <span>Total Equipment Value:</span>
                  <strong>${this.formatPrice(data.grossTotal)}</strong>
                </div>
                ${this.applySubsidy ? `
                  <div class="cost-row subsidy-row">
                    <span><i class="fa-solid fa-leaf"></i> Estimated Subsidy Benefit:</span>
                    <span class="subsidy-amount">- ${this.formatPrice(data.estimatedSubsidy)}</span>
                  </div>
                ` : ''}
                <div class="cost-row net-cost-row">
                  <span>Effective Farmer Investment:</span>
                  <span class="net-cost-val">${this.formatPrice(data.effectiveCost)}</span>
                </div>
              </div>

              <!-- Financing Sliders -->
              <div class="financing-controls">
                <h5 class="finance-title"><i class="fa-solid fa-calculator"></i> Farm Loan & EMI Planner</h5>
                
                <!-- Down Payment Slider -->
                <div class="slider-field">
                  <div class="slider-head">
                    <span>Down Payment (${this.downPaymentPercent}%):</span>
                    <strong>${this.formatPrice(data.downPaymentAmount)}</strong>
                  </div>
                  <input type="range" min="10" max="50" step="5" value="${this.downPaymentPercent}" id="downPaymentRange" class="finance-range">
                  <div class="slider-ticks">
                    <span>10% (Min)</span>
                    <span>20% (Std)</span>
                    <span>30%</span>
                    <span>50%</span>
                  </div>
                </div>

                <!-- Loan Tenure Slider -->
                <div class="slider-field">
                  <div class="slider-head">
                    <span>Loan Tenure:</span>
                    <strong>${this.loanTenureYears} Years (${data.totalMonths} EMIs)</strong>
                  </div>
                  <input type="range" min="1" max="7" step="1" value="${this.loanTenureYears}" id="tenureRange" class="finance-range">
                  <div class="slider-ticks">
                    <span>1 Yr</span>
                    <span>3 Yrs</span>
                    <span>5 Yrs</span>
                    <span>7 Yrs</span>
                  </div>
                </div>

                <!-- EMI Highlight Card -->
                <div class="emi-result-card">
                  <div class="emi-result-label">Estimated Monthly EMI</div>
                  <div class="emi-result-amount">₹ ${data.monthlyEmi.toLocaleString("en-IN")} <span class="emi-period">/ month*</span></div>
                  <small class="emi-footnote">*Calculated at 8.5% p.a. standard agricultural tractor financing.</small>
                </div>
              </div>

              <!-- Action CTAs -->
              <div class="customizer-actions">
                <button class="btn btn-primary btn-lg w-100" id="addCustomBuildBtn">
                  <i class="fa-solid fa-cart-plus"></i> Add Configured Tractor to Cart
                </button>
                <div class="action-btn-row">
                  <button class="btn btn-outline w-100" id="downloadQuotationBtn">
                    <i class="fa-solid fa-file-pdf"></i> Download Official Quote
                  </button>
                  <a href="contact.html?subject=test-drive&model=${this.selectedModel}" class="btn btn-secondary w-100">
                    <i class="fa-solid fa-calendar-check"></i> Book Paithan Test Drive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    const container = document.getElementById("tractorCustomizerRoot");
    if (!container) return;

    // Model select
    container.addEventListener("click", (e) => {
      const modelCard = e.target.closest(".model-option-card");
      if (modelCard) {
        this.selectedModel = modelCard.getAttribute("data-model");
        this.render();
      }

      const trackBtn = e.target.closest(".track-pill");
      if (trackBtn) {
        this.selectedTrack = trackBtn.getAttribute("data-track");
        this.render();
      }
    });

    // Implements checkboxes
    container.addEventListener("change", (e) => {
      if (e.target.classList.contains("custom-imp-cb")) {
        const val = e.target.value;
        if (e.target.checked) {
          if (!this.selectedImplements.includes(val)) this.selectedImplements.push(val);
        } else {
          this.selectedImplements = this.selectedImplements.filter(x => x !== val);
        }
        this.render();
      }

      if (e.target.id === "subsidyToggle") {
        this.applySubsidy = e.target.checked;
        this.render();
      }
    });

    // Range sliders
    container.addEventListener("input", (e) => {
      if (e.target.id === "downPaymentRange") {
        this.downPaymentPercent = parseInt(e.target.value, 10);
        this.render();
      }
      if (e.target.id === "tenureRange") {
        this.loanTenureYears = parseInt(e.target.value, 10);
        this.render();
      }
    });

    // Add to cart configured
    container.addEventListener("click", (e) => {
      if (e.target.closest("#addCustomBuildBtn")) {
        const product = PRODUCTS_DATA.find(p => p.id === this.selectedModel);
        if (product && window.cartManager) {
          window.cartManager.addToCart(this.selectedModel, 1, {
            trackWidth: this.selectedTrack,
            bundledImplements: this.selectedImplements
          });

          // Also add selected implements to cart
          this.selectedImplements.forEach(impId => {
            window.cartManager.addToCart(impId, 1);
          });
        }
      }

      if (e.target.closest("#downloadQuotationBtn")) {
        this.downloadQuotation();
      }
    });
  }

  downloadQuotation() {
    const data = this.calculate();
    const dateStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    
    let quoteWindow = window.open("", "_blank");
    if (!quoteWindow) {
      if (window.cartManager) window.cartManager.showToast("Please allow popups to print quotation", "info");
      return;
    }

    quoteWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Robotrac RT Series Official Quotation</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1e293b; background: #fff; }
          .header { display: flex; justify-content: space-between; border-bottom: 3px solid #1b4332; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { font-size: 28px; font-weight: 800; color: #1b4332; }
          .logo span { color: #e59819; }
          .quote-meta { text-align: right; font-size: 14px; }
          table { width: 100%; border-collapse: collapse; margin: 25px 0; }
          th, td { padding: 12px 16px; border: 1px solid #e2e8f0; text-align: left; }
          th { background: #f1f5f9; color: #0f172a; }
          .total-row { font-weight: bold; background: #f8fafc; }
          .highlight-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px; margin-top: 20px; }
          .footer { margin-top: 50px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 20px; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">ROBO<span>TRAC</span></div>
            <p><strong>Robotrac Tractor India Pvt Ltd</strong><br>MIDC Paithan, Maharashtra 431148<br>Email: ceo@robotrac.co.in | Phone: +91 98815 10419</p>
          </div>
          <div class="quote-meta">
            <h2>OFFICIAL PROFORMA QUOTATION</h2>
            <p><strong>Quote Ref:</strong> RT-EST-${Date.now().toString().slice(-6)}<br><strong>Date:</strong> ${dateStr}</p>
          </div>
        </div>

        <h3>1. Tractor Configuration</h3>
        <table>
          <tr>
            <th>Model & Specification</th>
            <th>Track Width</th>
            <th>Power Rating</th>
            <th>Ex-Factory Target Price</th>
          </tr>
          <tr>
            <td><strong>${data.model.name}</strong></td>
            <td>${this.selectedTrack}</td>
            <td>${data.model.hp}</td>
            <td>${this.formatPrice(data.tractorPrice)}</td>
          </tr>
        </table>

        <h3>2. Companion Agricultural Implements</h3>
        <table>
          <tr>
            <th>Implement Item</th>
            <th>Category</th>
            <th>Target Price</th>
          </tr>
          ${data.implementsList.length > 0 ? data.implementsList.map(imp => `
            <tr>
              <td>${imp.name}</td>
              <td>${imp.category}</td>
              <td>${this.formatPrice(imp.price)}</td>
            </tr>
          `).join("") : '<tr><td colspan="3">No additional implements selected in this quotation.</td></tr>'}
          <tr class="total-row">
            <td colspan="2">Total Equipment Value</td>
            <td>${this.formatPrice(data.grossTotal)}</td>
          </tr>
          ${this.applySubsidy ? `
            <tr style="color:#15803d; font-weight:600;">
              <td colspan="2">Estimated Govt Subsidy (SMAM / MahaDBT ~40%)</td>
              <td>- ${this.formatPrice(data.estimatedSubsidy)}</td>
            </tr>
            <tr class="total-row" style="background:#dcfce7;">
              <td colspan="2">Net Effective Farmer Investment</td>
              <td>${this.formatPrice(data.effectiveCost)}</td>
            </tr>
          ` : ''}
        </table>

        <div class="highlight-box">
          <h4>3. Indicative Financing & EMI Plan</h4>
          <p><strong>Down Payment (${this.downPaymentPercent}%):</strong> ${this.formatPrice(data.downPaymentAmount)} | <strong>Loan Amount:</strong> ${this.formatPrice(data.loanPrincipal)}</p>
          <p><strong>Estimated Monthly EMI:</strong> ₹ ${data.monthlyEmi.toLocaleString("en-IN")} / month for ${this.loanTenureYears} Years (${data.totalMonths} monthly installments at 8.5% p.a.).</p>
        </div>

        <div class="footer">
          <p><em>*Note: Prices are target ex-showroom Paithan figures inclusive of 2-year warranty provision. Final on-road prices vary based on state registration, local taxes, insurance, and subsidy disbursals.</em></p>
          <p>Generated automatically via Robotrac Online Farm Configurator.</p>
        </div>
        <br>
        <button onclick="window.print()" style="padding:10px 20px; background:#1b4332; color:#fff; border:none; border-radius:6px; cursor:pointer; font-weight:600;">Print / Save as PDF</button>
      </body>
      </html>
    `);
    quoteWindow.document.close();
  }
}

// Global Customizer
let tractorCustomizerInstance = null;
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("tractorCustomizerRoot")) {
    tractorCustomizerInstance = new TractorCustomizer();
  }
});
