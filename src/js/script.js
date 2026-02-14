/* ============================================
   Promptverse AI - Interactive Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.className = 'ri-close-fill';
      } else {
        icon.className = 'ri-menu-3-fill';
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.querySelector('i').className = 'ri-menu-3-fill';
      });
    });
  }

  // --- Scroll-based navbar background ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
      }
    });
  }

  // --- Intersection Observer for fade-in animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in to sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
