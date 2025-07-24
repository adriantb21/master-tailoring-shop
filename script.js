document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const mainNav = document.getElementById('main-nav');
  
  if (mobileMenu && mainNav) {
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('#main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form submission feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out. We will contact you soon!');
      form.reset();
    });
  }

  // Modal logic
  const modal = document.getElementById("pricingModal");
  const openBtn = document.getElementById("openPricing");
  const closeBtn = document.getElementById("closeModal");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});