/* ============================================================
   WEB VIBE @KK - PREMIUM CLASSIC PORTFOLIO WEBSITE ENGINE
   ============================================================ */

// ------------------------------------------------------------
// 1. SCROLL & BACK TO TOP HANDLER WITH NAV HIGHLIGHTER
// ------------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    // Back to top button toggle
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
      if (window.scrollY > 350) backBtn.style.display = 'flex';
      else backBtn.style.display = 'none';
    }

    // Active nav link highlight on scroll
    let currentSection = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ------------------------------------------------------------
// 2. PRICING SELECTION & WHATSAPP PROPOSAL
// ------------------------------------------------------------
window.selectPricingTier = function(tierName, cost, days) {
  const message = `Hello WEB VIBE @KK! I would like to inquire about the ${tierName} plan:
💰 Price: ${cost}
⏱️ Timeline: ${days}
📞 Direct Phone: 7780660803

Let me know how we can get started!`;

  window.open(`https://wa.me/917780660803?text=${encodeURIComponent(message)}`, '_blank');
};

// ------------------------------------------------------------
// 3. PROJECT DETAIL MODAL POPUP
// ------------------------------------------------------------
// 3. PROJECT DETAIL MODAL POPUP & CLIENT DATA
// ------------------------------------------------------------
const projectData = {
  edvanta: {
    title: 'Edvanta - Educational Networking & Career Transition Platform',
    category: 'EdTech & Career Platform',
    tech: 'React.js, Node.js, Express, Tailwind CSS, EdTech APIs',
    desc: 'Comprehensive educational networking and career transition guidance platform enabling students to connect with mentors, upskill, and transition into modern tech roles.',
    live: 'https://edvanta-edu.in/',
    role: 'Lead Frontend Developer & System Architect',
    timeline: '4 Weeks'
  },
  garuda: {
    title: 'Member Entry | GARUDA Luxury',
    category: 'Luxury E-Commerce',
    tech: 'Vite JS, Real-Time Market API, CSS3, Animations',
    desc: 'Bespoke luxury e-commerce platform featuring live gold market price ticker, custom jewelry visualizer, payment gateway, and member entry dashboard.',
    live: 'https://koushik0623.github.io/garuda/',
    role: 'Full-Stack Developer & UI Architect',
    timeline: '4 Weeks'
  },
  online: {
    title: 'Sparkle @kkv - Luxury Fashion & Accessories Store',
    category: 'Luxury E-Commerce & Retail',
    tech: 'React.js, Vite, Tailwind CSS, Framer Motion, Cart Engine',
    desc: 'A modern, high-converting e-commerce web application with interactive cart drawer, wishlist functionality, quick view product modal, pincode delivery estimator, coupon discount calculator, verified customer reviews, and dedicated admin portal.',
    live: 'https://sparklekkv.com/',
    role: 'Lead Full-Stack Developer & Storefront Architect',
    timeline: '3 Weeks'
  },
  graincraft: {
    title: 'GrainCraft - Handcrafted Furniture & Woodworking Studio',
    category: 'Woodworking & Craft Studio',
    tech: 'HTML5, CSS3, ES6 Modules, WCAG 2.1 AA',
    desc: 'Bespoke handcrafted furniture and woodworking studio platform with custom catalog showcases, multi-language RTL support, and dynamic theme switching.',
    live: 'https://koushik0623.github.io/GrainCraft/',
    role: 'Frontend Engineer & UI Architect',
    timeline: '2 Weeks'
  },
  masterpublish: {
    title: 'Master Publish - Research & Academic Publication Consultancy',
    category: 'Academic & Research Platform',
    tech: 'HTML5, Modern CSS, JavaScript, Academic Publication APIs',
    desc: 'A dedicated Research & Publication Consultancy portal designed for authors and academic scholars. Supports streamlined manuscript submission, consulting workflows, and publication management for Scopus, SCI, Web of Science, and UGC-CARE indexed journals.',
    live: 'https://masterpublisher.org/',
    role: 'Full-Stack Developer & Publishing Systems Consultant',
    timeline: '2.5 Weeks'
  },
  insurance: {
    title: 'Finance Company | InsurShield',
    category: 'InsurTech & Finance',
    tech: 'Node.js, Express API, REST Services',
    desc: 'Comprehensive InsurTech & Finance system providing interactive policy estimation algorithms, claim filing workflows, and dynamic premium calculators.',
    live: 'https://koushik0623.github.io/insurance/',
    role: 'Backend Architect & Full-Stack Developer',
    timeline: '2.5 Weeks'
  }
};

window.openProjectModal = function(key) {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-project-title');
  const content = document.getElementById('modal-project-content');
  const data = projectData[key];

  if (!modal || !title || !content || !data) return;

  title.innerText = data.title;
  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem;">${data.desc}</p>
      
      <div style="background:var(--bg-light); border:1px solid var(--soft-gray); border-radius:8px; padding:1.25rem; display:grid; grid-template-columns:1fr 1fr; gap:1rem; font-size:0.88rem;">
        <div><strong>Category:</strong> <span style="color:var(--deep-blue); display:block; margin-top:2px;">${data.category}</span></div>
        <div><strong>My Role:</strong> <span style="display:block; margin-top:2px;">${data.role}</span></div>
        <div><strong>Timeline:</strong> <span style="color:var(--warm-gold); font-weight:600; display:block; margin-top:2px;">${data.timeline}</span></div>
        <div><strong>Tech Stack:</strong> <span style="display:block; margin-top:2px;">${data.tech}</span></div>
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.5rem;">
        ${data.live ? `<a href="${data.live}" target="_blank" rel="noopener" class="btn-classic-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Demo</a>` : ''}
        <button class="btn-classic-outline" onclick="closeProjectModal()">Close</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

window.closeProjectModal = function() {
  document.getElementById('project-modal')?.classList.add('hidden');
};

// ------------------------------------------------------------
// 3B. ARCHITECTURAL BLUEPRINTS & SOLUTIONS MODAL DATA & HANDLER
// ------------------------------------------------------------
const blueprintData = {
  business: {
    title: 'Corporate Business Website',
    category: 'Professional Company Website',
    icon: 'fa-solid fa-building-columns',
    color: '#0a66c2',
    price: '₹28,000 / $340',
    timeline: '8 Days Delivery',
    summary: 'A clean, modern website designed to showcase your company, explain your services, build client trust, and bring customer inquiries directly to your WhatsApp and email. Fast-loading, mobile-friendly, and easy for customers to navigate.',
    pipeline: [
      { step: '01. Planning', icon: 'fa-solid fa-pen-ruler', title: 'Layout & Pages' },
      { step: '02. Development', icon: 'fa-brands fa-react', title: 'Clean Modern UI' },
      { step: '03. WhatsApp Setup', icon: 'fa-brands fa-whatsapp', title: 'Instant Lead Buttons' },
      { step: '04. Launch', icon: 'fa-solid fa-cloud-arrow-up', title: 'Live on Your Domain' }
    ],
    specs: [
      { title: 'Fast Mobile Loading', desc: 'Loads in less than 1 second on all smartphones, tablets, and computers.' },
      { title: 'Google Search Setup', desc: 'Proper business setup with Google tags so clients find you easily when searching.' },
      { title: 'Direct WhatsApp Leads', desc: 'Instant one-click button connects clients straight to your WhatsApp (7780660803).' },
      { title: '1-Year Support & Security', desc: 'Free SSL certificate, weekly backups, and dedicated technical help.' }
    ],
    phases: [
      { phase: 'Phase 1 (Day 1-2)', desc: 'Design draft, page structure, and gathering your text and images.' },
      { phase: 'Phase 2 (Day 3-5)', desc: 'Coding responsive pages, animations, contact forms, and mobile testing.' },
      { phase: 'Phase 3 (Day 6-7)', desc: 'Google search tags, speed optimization, and preview walkthrough.' },
      { phase: 'Phase 4 (Day 8)', desc: 'Domain connection, live deployment, and staff walkthrough.' }
    ],
    stack: ['HTML5 & Modern CSS', 'Responsive Layout', 'JavaScript ES6+', 'WhatsApp Integration', 'Google SEO Setup']
  },
  ecommerce: {
    title: 'Online Store & E-Commerce Website',
    category: 'Online Shopping & Retail Store',
    icon: 'fa-solid fa-gem',
    color: '#c5a059',
    price: '₹45,000 / $550',
    timeline: '12 Days Delivery',
    summary: 'A complete online shopping website built to sell your products online. Includes an easy product catalog, quick slide-out cart, secure online payment gateway, and instant order alerts on WhatsApp.',
    pipeline: [
      { step: '01. Catalog Setup', icon: 'fa-solid fa-cart-shopping', title: 'Products & Categories' },
      { step: '02. Shopping UI', icon: 'fa-brands fa-react', title: 'Smooth Cart Drawer' },
      { step: '03. Payments', icon: 'fa-solid fa-credit-card', title: 'Razorpay / UPI / Cards' },
      { step: '04. Store Opening', icon: 'fa-solid fa-shield-halved', title: 'Secure Live Launch' }
    ],
    specs: [
      { title: 'Easy Shopping Cart', desc: 'Slide-out cart drawer, quick product views, and wishlist so customers shop easily.' },
      { title: 'Secure Online Payments', desc: 'Accept customer payments with UPI (PhonePe, GPay, Paytm), Cards, and Net Banking.' },
      { title: 'Product Sizes & Colors', desc: 'Simple options for size, color, metal purity, and real-time stock levels.' },
      { title: 'Instant Order Alerts', desc: 'Automatic WhatsApp and email alerts whenever a customer places an order.' }
    ],
    phases: [
      { phase: 'Phase 1 (Day 1-3)', desc: 'Catalog structure, category planning, and product page design.' },
      { phase: 'Phase 2 (Day 4-8)', desc: 'Shopping cart engine, product filters, photo gallery, and checkout setup.' },
      { phase: 'Phase 3 (Day 9-11)', desc: 'Payment gateway testing in sandbox mode, speed tuning, and mobile check.' },
      { phase: 'Phase 4 (Day 12)', desc: 'Live payment activation, domain launch, and order management tutorial.' }
    ],
    stack: ['React 18 / Vite', 'Tailwind CSS', 'Razorpay / Stripe', 'UPI Gateway', 'Order Notification Webhooks']
  },
  webapp: {
    title: 'Custom Web Applications & AI Software',
    category: 'Custom Business Software & Smart Tools',
    icon: 'fa-solid fa-brain',
    color: '#9333ea',
    price: '₹58,000 / $700',
    timeline: '16 Days Delivery',
    summary: 'Custom web software built specifically for your business operations. Includes private user logins, client dashboards, automated calculation tools, custom databases, and smart AI features.',
    pipeline: [
      { step: '01. Database Design', icon: 'fa-solid fa-database', title: 'Custom Database' },
      { step: '02. Backend API', icon: 'fa-brands fa-node-js', title: 'Secure User Logins' },
      { step: '03. Smart Tools', icon: 'fa-brands fa-python', title: 'AI & Automations' },
      { step: '04. Cloud Launch', icon: 'fa-solid fa-server', title: 'Fast Cloud Hosting' }
    ],
    specs: [
      { title: 'Private Member Logins', desc: 'Secure accounts with encrypted passwords, staff roles, and admin permissions.' },
      { title: 'Smart AI & Automation', desc: 'Integrated deep learning models, smart data processing, and automated tools.' },
      { title: 'Dedicated Business Database', desc: 'Secure, fast database to store all your orders, customers, and business data safely.' },
      { title: 'Interactive Dashboards', desc: 'Visual charts, custom calculators, live analytics, and reports.' }
    ],
    phases: [
      { phase: 'Phase 1 (Day 1-4)', desc: 'Business requirements, database design, and screen wireframes.' },
      { phase: 'Phase 2 (Day 5-10)', desc: 'Backend development, user logins, and AI feature implementation.' },
      { phase: 'Phase 3 (Day 11-14)', desc: 'Frontend dashboard, live data testing, and security checks.' },
      { phase: 'Phase 4 (Day 15-16)', desc: 'Cloud deployment, testing with your team, and full handover.' }
    ],
    stack: ['Node.js & Express', 'Python / AI Models', 'MySQL / PostgreSQL', 'React.js Dashboard', 'Encrypted Security']
  },
  publishing: {
    title: 'Scholarly Publishing & Research Platform',
    category: 'Academic Journals & Research Hub',
    icon: 'fa-solid fa-book-journal-whills',
    color: '#16a34a',
    price: '₹38,000 / $460',
    timeline: '10 Days Delivery',
    summary: 'A dedicated publishing platform for academic journals, research consultancies, and conference proceedings. Features an easy paper intake form for authors and fast PDF reading.',
    pipeline: [
      { step: '01. Intake Design', icon: 'fa-solid fa-feather-pointed', title: 'Author Submissions' },
      { step: '02. Paper Catalog', icon: 'fa-solid fa-book-open', title: 'Article Archive' },
      { step: '03. Multi-Language', icon: 'fa-solid fa-globe', title: 'English & RTL Arabic' },
      { step: '04. Fast Server', icon: 'fa-solid fa-bolt', title: 'Quick PDF Downloads' }
    ],
    specs: [
      { title: 'Online Author Submissions', desc: 'Simple submission form for researchers to upload papers and track review status.' },
      { title: 'Google Scholar & Indexing Ready', desc: 'Formatted paper details structured for Google Scholar and academic indexing.' },
      { title: 'Fast Document Downloads', desc: 'Instant document reading and fast PDF downloads for readers worldwide.' },
      { title: 'Multiple Languages Supported', desc: 'Clean layout support for both English and Right-to-Left (Arabic) text.' }
    ],
    phases: [
      { phase: 'Phase 1 (Day 1-2)', desc: 'Journal taxonomy, author intake workflow, and article archive design.' },
      { phase: 'Phase 2 (Day 3-6)', desc: 'Paper submission forms, journal issue grids, and search filters.' },
      { phase: 'Phase 3 (Day 7-9)', desc: 'Multi-language layout testing, PDF download speed checks, and SEO tags.' },
      { phase: 'Phase 4 (Day 10)', desc: 'Live launch, staff training on publishing new papers, and indexing verification.' }
    ],
    stack: ['HTML5 & Modern CSS', 'Fast Document CDN', 'Article SEO Schema', 'WhatsApp Consultation', 'Multi-Language Layout']
  },
  portfolio: {
    title: 'Personal Brand & Agency Portfolio',
    category: 'Creative Showcase & Personal Brand',
    icon: 'fa-solid fa-crown',
    color: '#0a66c2',
    price: '₹20,000 / $240',
    timeline: '5 Days Delivery',
    summary: 'A modern showcase website for professionals, executives, and agencies to present their past projects, skills, resume, and booking contact.',
    pipeline: [
      { step: '01. Brand Story', icon: 'fa-solid fa-palette', title: 'Colors & Style' },
      { step: '02. Animations', icon: 'fa-solid fa-wand-magic-sparkles', title: 'Interactive Canvas' },
      { step: '03. Work Gallery', icon: 'fa-solid fa-images', title: 'Project Details' },
      { step: '04. Launch', icon: 'fa-solid fa-rocket', title: 'Live on Domain' }
    ],
    specs: [
      { title: 'Interactive Project Showcases', desc: 'Popup modals with live website links and project scope breakdowns.' },
      { title: 'Direct WhatsApp Contact', desc: 'One-click WhatsApp booking with pre-filled messages and fast response.' },
      { title: 'Superfast Loading Speed', desc: 'Loads in under 1 second on all devices with smooth animations.' },
      { title: 'Resume & Social Sync', desc: 'Downloadable resume, LinkedIn linking, and full contact details.' }
    ],
    phases: [
      { phase: 'Phase 1 (Day 1-2)', desc: 'Curating your project assets, resume details, and brand style.' },
      { phase: 'Phase 2 (Day 3-4)', desc: 'Interactive gallery, contact channels, and mobile optimization.' },
      { phase: 'Phase 3 (Day 5)', desc: 'Cross-browser testing, domain linking, and live launch.' }
    ],
    stack: ['HTML5 & CSS3', 'JavaScript ES6+', 'Interactive Canvas', 'Vite Bundler', 'WhatsApp Sync']
  },
  custom: {
    title: 'Customized Customer Solutions',
    category: 'Custom Project & Flexible Scope',
    icon: 'fa-solid fa-wand-magic-sparkles',
    color: '#c5a059',
    price: 'Custom Budget / ₹25k – ₹60k',
    timeline: 'Flexible Agile Sprints',
    summary: 'Have a specific requirement, unique feature, or set budget? We will design a custom plan and build your website to match your exact vision, timeline, and budget.',
    pipeline: [
      { step: '01. Discovery', icon: 'fa-solid fa-comments', title: 'Discuss Your Needs' },
      { step: '02. Custom Plan', icon: 'fa-solid fa-diagram-project', title: 'Feature Blueprint' },
      { step: '03. Sprints', icon: 'fa-solid fa-code-branch', title: 'Milestone Delivery' },
      { step: '04. Launch', icon: 'fa-solid fa-cloud-arrow-up', title: 'Live SLA Support' }
    ],
    specs: [
      { title: 'Built Exactly to Your Needs', desc: '100% custom website design and features created specifically for your business.' },
      { title: 'Fits Your Desired Budget', desc: 'We adjust features and delivery phases to match your budget (from ₹20,000 to ₹60,000).' },
      { title: 'Direct Developer Contact', desc: 'Direct 1-on-1 access to Chenchu Koushik on WhatsApp (7780660803) with regular demos.' },
      { title: 'Complete Site Ownership', desc: 'Full ownership of your website, clean code, domain setup, and ongoing technical support.' }
    ],
    phases: [
      { phase: 'Phase 1: Planning', desc: 'Detailed feature discussion, page wireframes, and agreeing on milestones.' },
      { phase: 'Phase 2: Core Development', desc: 'Building custom features, user interface, database, and integrations.' },
      { phase: 'Phase 3: Testing & Feedback', desc: 'Reviewing progress together, making revisions, and performance checks.' },
      { phase: 'Phase 4: Launch & Handover', desc: 'Domain launch, training your team, and providing 1-year technical help.' }
    ],
    stack: ['React / Next.js', 'Node.js / Express', 'Python / AI Models', 'PostgreSQL / MySQL', 'Cloud Hosting']
  }
};

window.currentBlueprintKey = 'business';

window.openBlueprintModal = function(key) {
  const modal = document.getElementById('blueprint-modal');
  const title = document.getElementById('modal-blueprint-title');
  const cat = document.getElementById('modal-blueprint-category');
  const iconBox = document.getElementById('modal-blueprint-icon');
  const content = document.getElementById('modal-blueprint-content');
  const data = blueprintData[key] || blueprintData.business;

  if (!modal || !title || !content || !data) return;

  window.currentBlueprintKey = key || 'business';

  title.innerText = data.title;
  if (cat) cat.innerText = data.category;
  if (iconBox) {
    iconBox.style.background = `${data.color}15`;
    iconBox.style.borderColor = `${data.color}40`;
    iconBox.style.color = data.color;
    iconBox.innerHTML = `<i class="${data.icon}"></i>`;
  }

  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <!-- TOP EXECUTIVE META -->
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-light); border:1px solid var(--soft-gray); border-radius:8px; padding:1rem 1.25rem; flex-wrap:wrap; gap:0.75rem;">
        <div>
          <span style="font-size:0.72rem; color:var(--text-muted); font-family:var(--font-mono); text-transform:uppercase; display:block;">Production SLA Turnaround</span>
          <strong style="color:var(--text-dark); font-size:0.95rem;"><i class="fa-regular fa-clock text-gold"></i> ${data.timeline}</strong>
        </div>
        <div>
          <span style="font-size:0.72rem; color:var(--text-muted); font-family:var(--font-mono); text-transform:uppercase; display:block;">Estimated Total Investment</span>
          <strong style="color:var(--deep-blue); font-size:1.2rem; font-family:var(--font-serif);">${data.price}</strong>
        </div>
      </div>

      <!-- ARCHITECTURAL NARRATIVE -->
      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.6; margin:0;">
        ${data.summary}
      </p>

      <!-- INTERACTIVE TAB NAVIGATION -->
      <div class="blueprint-tabs-nav">
        <button class="bp-tab-btn active" onclick="switchBlueprintTab('pipeline')">
          <i class="fa-solid fa-network-wired"></i> Architecture Pipeline
        </button>
        <button class="bp-tab-btn" onclick="switchBlueprintTab('specs')">
          <i class="fa-solid fa-list-check"></i> Deliverables & SLA
        </button>
        <button class="bp-tab-btn" onclick="switchBlueprintTab('roadmap')">
          <i class="fa-solid fa-timeline"></i> Milestone Roadmap
        </button>
        <button class="bp-tab-btn" onclick="switchBlueprintTab('stack')">
          <i class="fa-solid fa-cubes"></i> Production Stack
        </button>
      </div>

      <!-- TAB 1: PIPELINE -->
      <div id="bp-pane-pipeline" class="bp-tab-pane active">
        <div class="blueprint-pipeline-box">
          <h5 class="pipeline-title"><i class="fa-solid fa-diagram-project" style="margin-right:0.4rem;"></i> 4-Stage System Engineering Lifecycle:</h5>
          <div class="pipeline-steps">
            ${data.pipeline.map(step => `
              <div class="p-step">
                <i class="${step.icon}"></i>
                <small style="color:var(--warm-gold); font-family:var(--font-mono); font-size:0.68rem; font-weight:700; display:block;">${step.step}</small>
                <span>${step.title}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="background:var(--bg-light); border:1px solid var(--soft-gray); border-radius:8px; padding:1rem; font-size:0.86rem; color:var(--text-muted); line-height:1.55;">
          <strong style="color:var(--deep-blue);"><i class="fa-solid fa-shield-halved" style="margin-right:0.35rem;"></i> Engineering Standard:</strong> Each stage undergoes continuous verification to guarantee zero runtime crashes, WCAG 2.1 AA accessibility compliance, and sub-400ms initial response time across all global networks.
        </div>
      </div>

      <!-- TAB 2: DELIVERABLES & SPECS -->
      <div id="bp-pane-specs" class="bp-tab-pane">
        <div class="blueprint-grid-specs">
          ${data.specs.map(s => `
            <div class="spec-card">
              <h5><i class="fa-solid fa-circle-check text-blue" style="margin-right:0.35rem;"></i> ${s.title}</h5>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TAB 3: MILESTONE ROADMAP -->
      <div id="bp-pane-roadmap" class="bp-tab-pane">
        <div class="blueprint-phases">
          ${data.phases.map(p => `
            <div class="phase-row">
              <span class="phase-tag">${p.phase}:</span>
              <span class="phase-desc">${p.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TAB 4: TECH STACK BREAKDOWN -->
      <div id="bp-pane-stack" class="bp-tab-pane">
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div>
            <h5 style="font-family:var(--font-serif); font-size:0.92rem; margin-bottom:0.4rem; color:var(--text-dark);">
              <i class="fa-solid fa-layer-group text-blue" style="margin-right:0.4rem;"></i> Core Frameworks & Tooling:
            </h5>
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
              ${data.stack.map(tech => `<span style="font-size:0.8rem; background:var(--bg-light); border:1px solid var(--soft-gray); padding:0.3rem 0.75rem; border-radius:15px; font-weight:600; color:var(--text-dark);">${tech}</span>`).join('')}
            </div>
          </div>
          <div style="background:var(--bg-light); border:1px solid var(--soft-gray); border-radius:8px; padding:0.85rem 1rem; font-size:0.85rem; color:var(--text-muted); line-height:1.5;">
            <i class="fa-solid fa-check text-gold" style="margin-right:0.35rem;"></i> Built using strict, modern industry standards ensuring zero technical debt, rapid code maintainability, and seamless future scalability.
          </div>
        </div>
      </div>

      <!-- DIRECT ACTION BUTTONS -->
      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.5rem; align-items:center;">
        <a href="https://wa.me/917780660803?text=${encodeURIComponent('Hello Chenchu Koushik! I want to order the ' + data.title + ' (' + data.price + ', ' + data.timeline + '). Please share the onboarding details.')}" target="_blank" rel="noopener" class="btn-classic-primary">
          <i class="fa-brands fa-whatsapp"></i> Order Blueprint on WhatsApp (7780660803)
        </a>
        <button class="btn-classic-outline" onclick="copyBlueprintSpec()">
          <i class="fa-regular fa-copy"></i> Copy Specification
        </button>
        <button class="btn-classic-outline" onclick="closeBlueprintModal()">Close</button>
      </div>
      <div id="copy-spec-toast" style="display:none; color:#137333; font-size:0.84rem; font-weight:600; margin-top:-0.5rem;">
        <i class="fa-solid fa-circle-check"></i> Specification summary copied to clipboard!
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

window.switchBlueprintTab = function(tabName) {
  const buttons = document.querySelectorAll('.bp-tab-btn');
  const panes = document.querySelectorAll('.bp-tab-pane');

  buttons.forEach(btn => btn.classList.remove('active'));
  panes.forEach(pane => pane.classList.remove('active'));

  const targetPane = document.getElementById(`bp-pane-${tabName}`);
  if (targetPane) targetPane.classList.add('active');

  const btnIndex = ['pipeline', 'specs', 'roadmap', 'stack'].indexOf(tabName);
  if (btnIndex >= 0 && buttons[btnIndex]) {
    buttons[btnIndex].classList.add('active');
  }
};

window.copyBlueprintSpec = function() {
  const data = blueprintData[window.currentBlueprintKey] || blueprintData.business;
  const specText = `=== WEB VIBE @KK ARCHITECTURAL BLUEPRINT ===\nSolution: ${data.title}\nCategory: ${data.category}\nTurnaround SLA: ${data.timeline}\nEstimated Investment: ${data.price}\n\nSummary:\n${data.summary}\n\nDeliverables:\n${data.specs.map(s => `- ${s.title}: ${s.desc}`).join('\n')}\n\nRoadmap:\n${data.phases.map(p => `- ${p.phase}: ${p.desc}`).join('\n')}\n\nRecommended Stack:\n${data.stack.join(', ')}\n\nContact Developer: WhatsApp 7780660803 / chenchukoushik@gmail.com`;

  navigator.clipboard.writeText(specText).then(() => {
    const toast = document.getElementById('copy-spec-toast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
  }).catch(() => {
    alert('Specification copied!');
  });
};

window.closeBlueprintModal = function() {
  document.getElementById('blueprint-modal')?.classList.add('hidden');
};

// ------------------------------------------------------------
// 3C. ENTERPRISE CRM DATABASE ENGINE & PERSISTENCE
// ------------------------------------------------------------
const CRM_STORAGE_KEY = 'webvibe_crm_leads';

window.CRMDatabase = {
  db: null,

  async init() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      const request = window.indexedDB.open('WebVibeCRM_DB', 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('inquiries')) {
          db.createObjectStore('inquiries', { keyPath: 'id' });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };
      request.onerror = () => {
        resolve(null);
      };
    });
  },

  async save(data) {
    const timestamp = new Date();
    const leadId = 'KK-LEAD-' + timestamp.getTime().toString(36).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
    const newRecord = {
      id: leadId,
      createdAt: timestamp.toISOString(),
      formattedDate: timestamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }),
      status: 'New Inquiry',
      name: data.name || 'Anonymous Client',
      phone: data.phone || 'N/A',
      email: data.email || 'N/A',
      projectType: data.projectType || 'Customized Bespoke Customer Plan',
      budget: data.budget || 'Custom / Flexible',
      timeline: data.timeline || 'Flexible Milestones',
      details: data.details || data.message || 'No additional specifications provided.',
      source: data.source || 'Website Contact Form'
    };

    // 1. Save to LocalStorage Backup
    try {
      const local = JSON.parse(localStorage.getItem(CRM_STORAGE_KEY) || '[]');
      local.unshift(newRecord);
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(local));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    // 2. Save to IndexedDB
    try {
      if (!this.db) await this.init();
      if (this.db) {
        const tx = this.db.transaction('inquiries', 'readwrite');
        const store = tx.objectStore('inquiries');
        store.put(newRecord);
      }
    } catch (e) {
      console.warn('IndexedDB save error:', e);
    }

    // 3. Post to Backend Server (/api/inquiries) if active
    try {
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      }).catch(() => {});
    } catch (e) {}

    // Update UI badge
    window.updateLeadCountBadge();

    return newRecord;
  },

  async getAll() {
    let records = [];

    // 1. Try server fetch first
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const json = await res.json();
        if (json.leads && Array.isArray(json.leads)) {
          records = json.leads;
        }
      }
    } catch (e) {}

    // 2. Merge with IndexedDB
    try {
      if (!this.db) await this.init();
      if (this.db) {
        const idbRecords = await new Promise((resolve) => {
          const tx = this.db.transaction('inquiries', 'readonly');
          const store = tx.objectStore('inquiries');
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        });
        if (idbRecords.length) {
          const ids = new Set(records.map(r => r.id));
          idbRecords.forEach(r => {
            if (!ids.has(r.id)) records.push(r);
          });
        }
      }
    } catch (e) {}

    // 3. Merge with LocalStorage
    try {
      const local = JSON.parse(localStorage.getItem(CRM_STORAGE_KEY) || '[]');
      const ids = new Set(records.map(r => r.id));
      local.forEach(r => {
        if (!ids.has(r.id)) records.push(r);
      });
    } catch (e) {}

    // Sort newest first
    records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return records;
  },

  async delete(id) {
    try {
      const local = JSON.parse(localStorage.getItem(CRM_STORAGE_KEY) || '[]');
      const filtered = local.filter(r => r.id !== id);
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(filtered));
    } catch (e) {}

    try {
      if (this.db) {
        const tx = this.db.transaction('inquiries', 'readwrite');
        tx.objectStore('inquiries').delete(id);
      }
    } catch (e) {}

    try {
      fetch('/api/inquiries', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      }).catch(() => {});
    } catch (e) {}

    window.updateLeadCountBadge();
  },

  async clearAll() {
    localStorage.removeItem(CRM_STORAGE_KEY);
    try {
      if (this.db) {
        const tx = this.db.transaction('inquiries', 'readwrite');
        tx.objectStore('inquiries').clear();
      }
    } catch (e) {}

    try {
      fetch('/api/inquiries', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clearAll: true })
      }).catch(() => {});
    } catch (e) {}

    window.updateLeadCountBadge();
  }
};

window.updateLeadCountBadge = async function() {
  const records = await window.CRMDatabase.getAll();
  const count = records.length;
  const badge1 = document.getElementById('lead-count-badge');
  const badge2 = document.getElementById('lead-count-badge-mobile');
  if (badge1) badge1.textContent = count;
  if (badge2) badge2.textContent = count;
};

// ------------------------------------------------------------
// 3D. CRM MODAL CONTROLLERS & DATA EXPORT
// ------------------------------------------------------------
window.openDatabaseModal = async function() {
  const modal = document.getElementById('database-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  await window.refreshDatabaseUI();
};

window.closeDatabaseModal = function() {
  document.getElementById('database-modal')?.classList.add('hidden');
};

window.openConfirmationModal = function(record) {
  const modal = document.getElementById('lead-confirmation-modal');
  const idEl = document.getElementById('confirm-lead-id');
  const descEl = document.getElementById('confirm-lead-desc');
  const waBtn = document.getElementById('confirm-whatsapp-btn');
  const emailBtn = document.getElementById('confirm-email-btn');

  if (idEl) idEl.textContent = record.id;
  if (descEl) {
    descEl.innerHTML = `Inquiry for <strong>${record.projectType}</strong> successfully received. Connect directly below for an instant consultation with Chenchu Koushik.`;
  }

  const waText = `Hello Chenchu Koushik!\n\nI just submitted a project inquiry on your website.\n- Database Ref: ${record.id}\n- Name: ${record.name}\n- Contact: ${record.phone} / ${record.email}\n- Architecture: ${record.projectType}\n- Target Budget: ${record.budget}\n- Timeline: ${record.timeline}\n- Requirements: ${record.details}\n\nPlease share availability for an onboarding consultation!`;

  if (waBtn) {
    waBtn.href = `https://wa.me/917780660803?text=${encodeURIComponent(waText)}`;
  }

  if (emailBtn) {
    emailBtn.href = `mailto:chenchukoushik@gmail.com?subject=${encodeURIComponent(`New Client Lead [${record.id}]: ${record.name}`)}&body=${encodeURIComponent(waText)}`;
  }

  if (modal) modal.classList.remove('hidden');
};

window.closeConfirmationModal = function() {
  document.getElementById('lead-confirmation-modal')?.classList.add('hidden');
};

window.refreshDatabaseUI = async function() {
  const tbody = document.getElementById('db-table-body');
  const emptyState = document.getElementById('db-empty-state');
  const statTotal = document.getElementById('db-stat-total');
  const statCustom = document.getElementById('db-stat-custom');

  const records = await window.CRMDatabase.getAll();

  if (statTotal) statTotal.textContent = records.length;
  if (statCustom) {
    const customCount = records.filter(r => (r.projectType || '').toLowerCase().includes('custom')).length;
    statCustom.textContent = customCount;
  }

  if (!records.length) {
    if (tbody) tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  if (tbody) {
    tbody.innerHTML = records.map(r => {
      const waMsg = `Hello ${r.name}! This is Chenchu Koushik following up on your project inquiry (${r.id}) regarding ${r.projectType}.`;
      return `
        <tr>
          <td><span class="lead-id-tag">${r.id}</span></td>
          <td style="color:var(--text-muted); font-size:0.78rem; white-space:nowrap;">${r.formattedDate || 'Just now'}</td>
          <td><strong>${r.name}</strong></td>
          <td>
            <div style="font-size:0.8rem;">
              <div><i class="fa-solid fa-phone text-gold" style="font-size:0.75rem;"></i> ${r.phone}</div>
              <div style="color:var(--text-muted);"><i class="fa-solid fa-envelope text-blue" style="font-size:0.75rem;"></i> ${r.email}</div>
            </div>
          </td>
          <td><span style="font-weight:600; color:var(--deep-blue);">${r.projectType}</span></td>
          <td>
            <div style="font-size:0.78rem;">
              <div><strong>${r.budget}</strong></div>
              <div style="color:var(--text-muted);">${r.timeline}</div>
            </div>
          </td>
          <td style="max-width:220px; font-size:0.78rem; line-height:1.4; color:var(--text-dark);">
            <div style="overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">
              ${r.details}
            </div>
          </td>
          <td>
            <div class="db-action-btn-group">
              <a href="https://wa.me/917780660803?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="db-mini-btn wa" title="Chat on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:${r.email}?subject=${encodeURIComponent(`WEB VIBE @KK - Proposal for ${r.name}`)}&body=${encodeURIComponent(waMsg)}" class="db-mini-btn mail" title="Send Email">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <button onclick="deleteRecord('${r.id}')" class="db-mini-btn del" title="Delete Inquiry">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
};

window.filterDatabaseTable = function() {
  const query = (document.getElementById('db-search-input')?.value || '').toLowerCase().trim();
  const rows = document.querySelectorAll('#db-table-body tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
};

window.deleteRecord = async function(id) {
  if (confirm(`Delete inquiry record ${id}?`)) {
    await window.CRMDatabase.delete(id);
    await window.refreshDatabaseUI();
  }
};

window.clearDatabaseRecords = async function() {
  if (confirm('Are you sure you want to clear all inquiries from the database? This cannot be undone.')) {
    await window.CRMDatabase.clearAll();
    await window.refreshDatabaseUI();
  }
};

window.exportDatabaseCSV = async function() {
  const records = await window.CRMDatabase.getAll();
  if (!records.length) {
    alert('No records available to export.');
    return;
  }

  const headers = ['Lead ID', 'Date & Time', 'Name', 'Email', 'Phone', 'Architecture / Plan', 'Budget', 'Timeline', 'Details'];
  const csvRows = [headers.join(',')];

  records.forEach(r => {
    const row = [
      `"${r.id}"`,
      `"${r.formattedDate || r.createdAt}"`,
      `"${(r.name || '').replace(/"/g, '""')}"`,
      `"${(r.email || '').replace(/"/g, '""')}"`,
      `"${(r.phone || '').replace(/"/g, '""')}"`,
      `"${(r.projectType || '').replace(/"/g, '""')}"`,
      `"${(r.budget || '').replace(/"/g, '""')}"`,
      `"${(r.timeline || '').replace(/"/g, '""')}"`,
      `"${(r.details || '').replace(/"/g, '""')}"`
    ];
    csvRows.push(row.join(','));
  });

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `webvibe_crm_leads_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ------------------------------------------------------------
// 3E. INTERACTIVE SCOPE ESTIMATOR HANDLERS
// ------------------------------------------------------------
window.updateCustomScope = function() {
  const typeSelect = document.getElementById('scope-type-select');
  const speedSelect = document.getElementById('scope-speed-select');
  const totalDisplay = document.getElementById('scope-total-display');
  const timelineDisplay = document.getElementById('scope-timeline-display');
  const waBtn = document.getElementById('scope-direct-wa-btn');

  if (!typeSelect || !speedSelect || !totalDisplay || !timelineDisplay) return;

  const selectedOption = typeSelect.options[typeSelect.selectedIndex];
  const typeVal = selectedOption.value;

  // Add-ons
  const addons = [
    document.getElementById('addon-particles'),
    document.getElementById('addon-admin'),
    document.getElementById('addon-api')
  ];

  let addOnPrice = 0;
  let addOnDays = 0;
  let selectedAddons = [];

  addons.forEach(box => {
    if (box && box.checked) {
      addOnPrice += parseInt(box.getAttribute('data-price') || '0', 10);
      addOnDays += parseInt(box.getAttribute('data-days') || '0', 10);
      selectedAddons.push(box.parentElement.innerText.trim());
    }
  });

  if (typeVal === 'custom') {
    totalDisplay.textContent = 'Custom Quotation';
    timelineDisplay.innerHTML = '<i class="fa-regular fa-clock"></i> Flexible Sprints';
    if (waBtn) {
      const waText = `Hello WEB VIBE @KK!\nI configured a Customized Bespoke Architecture:\n- Scope: 100% Tailored Customer Blueprint\n- Add-ons: ${selectedAddons.length ? selectedAddons.join(', ') : 'Custom Architecture & Requirements'}\n- Budget: Flexible / Tailored\nPlease share onboarding timeline!`;
      waBtn.href = `https://wa.me/917780660803?text=${encodeURIComponent(waText)}`;
    }
    return;
  }

  let basePrice = parseInt(selectedOption.getAttribute('data-price') || '28000', 10);
  let baseDays = parseInt(selectedOption.getAttribute('data-days') || '8', 10);
  const typeTitle = selectedOption.text.split('(')[0].trim();

  // Speed multiplier
  const speedOption = speedSelect.options[speedSelect.selectedIndex];
  const mult = parseFloat(speedOption.getAttribute('data-mult') || '1');
  const dayDiff = parseInt(speedOption.getAttribute('data-daydiff') || '0', 10);

  let finalPrice = Math.round((basePrice + addOnPrice) * mult);
  let finalDays = Math.max(3, baseDays + addOnDays + dayDiff);

  totalDisplay.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
  timelineDisplay.innerHTML = `<i class="fa-regular fa-clock"></i> ${finalDays} Days Delivery`;

  if (waBtn) {
    const waText = `Hello WEB VIBE @KK!\nI configured a project scope:\n- Architecture: ${typeTitle}\n- Velocity: ${speedOption.text.split('(')[0].trim()}\n- Add-ons: ${selectedAddons.length ? selectedAddons.join(', ') : 'Standard package'}\n- Estimated Total: ₹${finalPrice.toLocaleString('en-IN')} (${finalDays} Days Delivery)\nPlease share onboarding timeline!`;
    waBtn.href = `https://wa.me/917780660803?text=${encodeURIComponent(waText)}`;
  }
};

window.generateCustomBlueprint = function() {
  const typeSelect = document.getElementById('scope-type-select');
  const key = typeSelect ? typeSelect.value : 'business';
  window.openBlueprintModal(key);
};

// ------------------------------------------------------------
// 3F. CONTACT FORM SUBMISSION WITH DATABASE & GUARANTEED DISPATCH
// ------------------------------------------------------------
window.submitClassicForm = async function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('form-submit-btn');
  const alertBox = document.getElementById('form-response-alert');

  const name = document.getElementById('form-name')?.value || 'Valued Client';
  const email = document.getElementById('form-email')?.value || '';
  const phone = document.getElementById('form-phone')?.value || '';
  const projectType = document.getElementById('form-project-type')?.value || 'Customized Bespoke Customer Plan';
  const budget = document.getElementById('form-budget')?.value || 'Custom / Flexible';
  const timeline = document.getElementById('form-timeline')?.value || 'Flexible Milestones';
  const details = document.getElementById('form-details')?.value || '';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...';
  }

  // 1. SAVE PERMANENTLY TO DATABASE (IndexedDB + LocalStorage + API)
  const savedLead = await window.CRMDatabase.save({
    name,
    email,
    phone,
    projectType,
    budget,
    timeline,
    details,
    source: 'Website Contact Form'
  });

  // 2. Fallback Background Dispatch to FormSubmit & EmailJS (Non-blocking)
  fetch('https://formsubmit.co/ajax/chenchukoushik@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      Agency: 'WEB VIBE @KK DIGITAL AGENCY',
      Lead_ID: savedLead.id,
      Name: name,
      Email: email,
      Phone: phone,
      Architecture: projectType,
      Target_Budget: budget,
      Timeline: timeline,
      Details: details,
      _subject: `New Lead [${savedLead.id}] - ${name} (${projectType})`
    })
  }).catch(() => {});

  if (window.emailjs) {
    emailjs.send('service_8qjyddj', 'template_1f3mpge', {
      to_name: 'Chenchu Koushik',
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: `[${savedLead.id}] ${projectType} | Budget: ${budget} | Timeline: ${timeline}\n\n${details}`,
      reply_to: email
    }, 'JfCV6CqZydOg3lwE5').catch(() => {});
  }

  // 3. SHOW DIRECT UNBLOCKABLE CONFIRMATION MODAL WITH 1-CLICK WHATSAPP & MAIL
  window.openConfirmationModal(savedLead);

  // 4. Also attempt automated window.open for WhatsApp
  const waText = `Hello Chenchu Koushik!\n\nI submitted an inquiry on your website.\n- Database Ref: ${savedLead.id}\n- Name: ${name}\n- Contact: ${phone} / ${email}\n- Architecture: ${projectType}\n- Budget: ${budget}\n- Timeline: ${timeline}\n- Requirements: ${details}\n\nPlease share availability for an onboarding consultation!`;
  const waUrl = `https://wa.me/917780660803?text=${encodeURIComponent(waText)}`;
  try {
    window.open(waUrl, '_blank');
  } catch (err) {}

  // 5. Success Banner on Form
  if (alertBox) {
    alertBox.style.display = 'block';
    alertBox.style.background = '#e6f4ea';
    alertBox.style.border = '1px solid #34a853';
    alertBox.style.color = '#137333';
    alertBox.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-right:0.5rem;"></i> <strong>Thank you ${name}!</strong> Your message has been sent successfully. We will get back to you shortly!`;
  }

  // Reset form
  document.getElementById('contact-form')?.reset();

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message';
  }
};

// ------------------------------------------------------------
// 4. SERVICE DETAIL MODAL POPUP
// ------------------------------------------------------------
const serviceData = {
  business: {
    title: 'Business Websites',
    subtitle: 'Clean, modern business websites that bring you clients and build trust.',
    desc: 'We design and build fast, mobile-friendly websites for companies, clinics, consultancies, and stores to showcase their services and convert visitors into inquiries.',
    features: [
      '5 to 8 Custom Mobile-Friendly Pages',
      'Google Search Ranking & Maps Setup',
      'Direct WhatsApp Chat & Inquiry Forms',
      'Super Fast Page Loading Speed',
      'Free Updates & Technical Support'
    ],
    timeline: '8 Days Delivery',
    pricing: 'Starting at ₹28,000 / $340'
  },
  portfolio: {
    title: 'Portfolio & Personal Websites',
    subtitle: 'Showcase your work, projects, and skills with elegance.',
    desc: 'Personal websites and agency portfolios designed to showcase your accomplishments, client projects, photo galleries, and resume with instant contact buttons.',
    features: [
      'Interactive Project Showcase & Gallery',
      'Clickable Demo Links & Case Studies',
      'Skill Badges & Experience Timeline',
      'Downloadable Resume / CV Button',
      '100% Mobile & Tablet Optimized'
    ],
    timeline: '6 Days Delivery',
    pricing: 'Starting at ₹20,000 / $240'
  },
  landing: {
    title: 'High-Converting Landing Pages',
    subtitle: 'Single-page websites built to get you leads and sales.',
    desc: 'High-speed, single-page websites made specifically for marketing campaigns, advertisements, or launching a new product with immediate call-to-actions.',
    features: [
      'Clean Layout Focused on Customer Actions',
      'Direct WhatsApp Click-to-Chat Button',
      'Fast Contact & Lead Capture Forms',
      'Loads in under 1 Second on Mobile',
      'Google Analytics & Ad Tracking Setup'
    ],
    timeline: '3-4 Days Delivery',
    pricing: 'Starting at ₹15,000 / $180'
  },
  ecommerce: {
    title: 'Online Stores & E-Commerce Websites',
    subtitle: 'Complete shopping websites ready to sell products online.',
    desc: 'Fully functional online store with product listings, shopping cart, online payment options (UPI, Cards, Net Banking), and simple order management.',
    features: [
      'Product Catalog with Categories & Search',
      'Shopping Cart & One-Click Checkout',
      'Secure UPI & Card Payments (Razorpay/Stripe)',
      'Live Price Updates & Stock Management',
      'Customer Order Inquiries via WhatsApp & Email'
    ],
    timeline: '12 Days Delivery',
    pricing: 'Starting at ₹45,000 / $550'
  },
  custom: {
    title: 'Custom Web Apps & Smart Systems',
    subtitle: 'Tailored software tools, portals, and AI systems built for your business.',
    desc: 'Custom web software created specifically for your company workflow—such as client booking portals, smart diagnostic tools, estimation calculators, and secure admin control panels.',
    features: [
      'Tailored Database & User Accounts',
      'Smart Automation & Calculation Tools',
      'Role-Based Admin & Staff Access',
      'Secure Data Storage & Export Options',
      'Dedicated Developer Handover & Training'
    ],
    timeline: '16 Days Delivery',
    pricing: 'Starting at ₹58,000 / $700 (Max ₹60,000)'
  },
  customapp: {
    title: 'Custom Web Apps & Smart Systems',
    subtitle: 'Tailored software tools, portals, and AI systems built for your business.',
    desc: 'Custom web software created specifically for your company workflow—such as client booking portals, smart diagnostic tools, estimation calculators, and secure admin control panels.',
    features: [
      'Tailored Database & User Accounts',
      'Smart Automation & Calculation Tools',
      'Role-Based Admin & Staff Access',
      'Secure Data Storage & Export Options',
      'Dedicated Developer Handover & Training'
    ],
    timeline: '16 Days Delivery',
    pricing: 'Starting at ₹58,000 / $700 (Max ₹60,000)'
  },
  maintenance: {
    title: 'Website Care & Monthly Support',
    subtitle: 'Keeping your website safe, fast, and updated round the clock.',
    desc: 'Continuous website support including routine security checks, regular backups, speed tune-ups, and adding new content whenever you need.',
    features: [
      '24/7 Uptime & Security Monitoring',
      'Weekly Full Website Backups',
      'Speed Tuning & Quick Bug Fixes',
      'Regular Text & Image Updates',
      'Direct WhatsApp & Call Support'
    ],
    timeline: 'Monthly Ongoing Care',
    pricing: 'Starting at ₹5,000 / month ($60/mo)'
  }
};

window.openServiceModal = function(key) {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-project-title');
  const content = document.getElementById('modal-project-content');
  const data = serviceData[key];

  if (!modal || !title || !content || !data) return;

  title.innerText = data.title;
  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <p style="font-weight:600; color:var(--deep-blue); font-size:1.05rem;">${data.subtitle}</p>
      <p style="color:var(--text-muted); line-height:1.6;">${data.desc}</p>
      
      <div style="background:var(--bg-light); border:1px solid var(--soft-gray); border-radius:8px; padding:1.25rem;">
        <h4 style="font-family:var(--font-serif); margin-bottom:0.75rem; color:var(--text-dark);">Key Features Included:</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem;">
          ${data.features.map(f => `<li><i class="fa-solid fa-check text-blue" style="margin-right:0.5rem;"></i> ${f}</li>`).join('')}
        </ul>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-white); border:1px solid var(--soft-gray); padding:1rem; border-radius:8px; font-size:0.9rem;">
        <div><strong>Timeline:</strong> <span style="color:var(--warm-gold); font-family:var(--font-mono);">${data.timeline}</span></div>
        <div><strong>Pricing:</strong> <span style="color:var(--deep-blue); font-weight:700;">${data.pricing}</span></div>
      </div>

      <div style="display:flex; gap:1rem; margin-top:0.5rem;">
        <a href="https://wa.me/917780660803?text=${encodeURIComponent('Hi WEB VIBE @KK! I want to get started with ' + data.title)}" target="_blank" class="btn-classic-primary w-100">
          <i class="fa-brands fa-whatsapp"></i> Get Quote on WhatsApp (7780660803)
        </a>
        <button class="btn-classic-outline" onclick="closeProjectModal()">Close</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

window.toggleMobileMenu = function() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
};

// ------------------------------------------------------------
// 5. CREATIVE ENGINE: DYNAMIC PARTICLE CONSTELLATION CANVAS
// ------------------------------------------------------------
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas || !canvas.parentElement) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas || !canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const count = Math.min(width > 768 ? 48 : 24, 50);

  const mouse = { x: null, y: null, radius: 120 };
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      size: Math.random() * 2 + 1.5,
      color: Math.random() > 0.4 ? 'rgba(10, 102, 194, 0.45)' : 'rgba(212, 160, 23, 0.5)'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          p.x -= (dx / dist) * 1.5;
          p.y -= (dy / dist) * 1.5;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(10, 102, 194, ${0.16 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }
  render();
}

// ------------------------------------------------------------
// 6. CREATIVE ENGINE: DYNAMIC TYPEWRITER HEADLINE
// ------------------------------------------------------------
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  const words = [
    'Modern Websites',
    'Luxury E-Commerce',
    'Full-Stack Web Apps',
    'High-Converting Stores',
    'Research & Tech Portals'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      el.textContent = current.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.substring(0, charIndex);
    }

    let delay = isDeleting ? 45 : 95;

    if (!isDeleting && charIndex === current.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }
    setTimeout(type, delay);
  }
  type();
}

// ------------------------------------------------------------
// 7. CREATIVE ENGINE: INTERACTIVE PORTFOLIO FILTER TABS
// ------------------------------------------------------------
function initPortfolioFilters() {
  const buttons = document.querySelectorAll('.filter-tab-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ------------------------------------------------------------
// 8. CREATIVE ENGINE: 3D CARD HOVER TILT
// ------------------------------------------------------------
function initCardTilt() {
  const cards = document.querySelectorAll('.interactive-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ------------------------------------------------------------
// 9. CREATIVE ENGINE: ANIMATED STATS COUNTER ON SCROLL
// ------------------------------------------------------------
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  let started = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'), 10);
          let current = 0;
          const step = Math.max(1, Math.floor(target / 25));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            num.textContent = current + (target === 100 ? '%' : '+');
          }, 40);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.creative-stats-bar');
  if (statsSection) observer.observe(statsSection);
}

// ------------------------------------------------------------
// 10. ARCHITECTURAL BLUEPRINT & SCOPE ESTIMATOR INITIALIZER
// ------------------------------------------------------------
function initBlueprintEstimator() {
  if (typeof window.updateCustomScope === 'function') {
    window.updateCustomScope();
  }
}

// ------------------------------------------------------------
// 11. MODAL OVERLAY OUTSIDE-CLICK & ESCAPE DISMISSAL
// ------------------------------------------------------------
function initModalDismissals() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => modal.classList.add('hidden'));
    }
  });
}

// ------------------------------------------------------------
// DOM READY INITIALIZATION
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initHeroParticles();
  initTypewriter();
  initPortfolioFilters();
  initBlueprintEstimator();
  initCardTilt();
  initStatsCounter();
  initModalDismissals();
  if (typeof window.updateLeadCountBadge === 'function') {
    window.updateLeadCountBadge();
  }
});
