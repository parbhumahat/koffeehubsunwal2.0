/**
 * Koffee HUB Sunwal - JavaScript Engine
 * Custom premium cinematic interactive controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initStickyHeader();
  initHamburgerMenu();
  initScrollReveal();
  initBackToTop();
  
  // Conditionally initialize page-specific features
  if (document.querySelector('.testimonials-wrapper')) {
    initTestimonials();
  }
  if (document.querySelector('.menu-items-grid')) {
    initMenuFilter();
  }
  if (document.querySelector('.gallery-layout')) {
    initGalleryLightbox();
  }
  if (document.getElementById('contactForm')) {
    initContactForm();
  }
});

/**
 * --- CINEMATIC LOADING ENGINE ---
 */
function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  const skipBtn = document.getElementById('skip-loader');
  
  if (!loader) return;

  // Replace loader inner content with clean, high-speed scattering coffee bean layout
  loader.innerHTML = `
    <div class="beans-scatter-container">
      <div class="scatter-bean bean-1"></div>
      <div class="scatter-bean bean-2"></div>
      <div class="scatter-bean bean-3"></div>
      <div class="scatter-bean bean-4"></div>
      <div class="scatter-bean bean-5"></div>
      <div class="scatter-bean bean-6"></div>
      <div class="scatter-bean bean-7"></div>
      <div class="scatter-bean bean-8"></div>
      <div class="loader-center-logo">
        <img src="/images/logo.png" alt="Koffee HUB Sunwal" class="loader-logo-flat">
      </div>
    </div>
    <div class="loader-subtitle">Koffee HUB Sunwal</div>
  `;

  // Prevent scroll during loading
  document.body.style.overflow = 'hidden';

  const fadeOutLoader = () => {
    loader.classList.add('fade-out');
    document.body.style.overflow = '';
    // After fade out transition finishes, remove from DOM or display none
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  };

  // Skip Button Trigger (if fallback requested)
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      fadeOutLoader();
    });
  }

  // Fast streamlined timeout of 1.5 seconds - "just that much" because now it's super fast!
  const autoFadeTimeout = setTimeout(fadeOutLoader, 1500);
}

/**
 * --- STICKY NAV ACTIONS ---
 */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Check on initial load
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
}

/**
 * --- RESPONSIVE HAMBURGER NAVIGATION ---
 */
function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/**
 * --- INTERSECTION OBSERVER GRADUAL REVEAL ---
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, disable further observation for that element
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(elem => {
      observer.observe(elem);
    });
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(elem => {
      elem.classList.add('revealed');
    });
  }
}

/**
 * --- BACK TO TOP AUTOMATION ---
 */
function initBackToTop() {
  const topBtn = document.getElementById('back-to-top');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * --- TESTIMONIAL CAROUSEL ENGINE ---
 */
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  
  if (slides.length === 0) return;
  
  let currentIndex = 0;
  let slideInterval;

  // Generate Dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    // Clean old states
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].classList.remove('prev');
    dots[currentIndex].classList.remove('active');

    // Handle index bounds
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function handleNext() {
    slides[currentIndex].classList.add('prev');
    goToSlide(currentIndex + 1);
  }

  function handlePrev() {
    goToSlide(currentIndex - 1);
  }

  // Listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleNext();
      resetAutoPlay();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      handlePrev();
      resetAutoPlay();
    });
  }

  // Autoplay
  function startAutoPlay() {
    slideInterval = setInterval(handleNext, 6000); // 6s rotation
  }

  function resetAutoPlay() {
    clearInterval(slideInterval);
    startAutoPlay();
  }

  startAutoPlay();
}

/**
 * --- DYNAMIC MENU DENSE FILTERING & KEYWORD SEARCH ---
 */
function initMenuFilter() {
  const searchInput = document.getElementById('menuSearch');
  const filterBtns = document.querySelectorAll('.capsule-btn');
  const menuItems = document.querySelectorAll('.menu-item-card');
  const noResults = document.querySelector('.menu-no-results');

  if (menuItems.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function filterMenu() {
    let visibleCount = 0;

    menuItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const itemTitle = item.querySelector('.menu-item-title').textContent.toLowerCase();
      const itemDesc = item.querySelector('.menu-item-desc').textContent.toLowerCase();
      
      const matchesCategory = (activeCategory === 'all' || itemCategory === activeCategory);
      const matchesSearch = itemTitle.includes(searchQuery) || itemDesc.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        item.style.display = 'flex';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        visibleCount++;
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        // Delay display none for smooth fade transition
        setTimeout(() => {
          if (item.style.opacity === '0') {
            item.style.display = 'none';
          }
        }, 300);
      }
    });

    if (visibleCount === 0) {
      if (noResults) noResults.style.display = 'block';
    } else {
      if (noResults) noResults.style.display = 'none';
    }
  }

  // Key search listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterMenu();
    });
  }

  // Category Selector
  filterBtns.forEach(button => {
    button.addEventListener('click', () => {
      filterBtns.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      activeCategory = button.getAttribute('data-filter');
      filterMenu();
    });
  });
}

/**
 * --- MASONRY GALLERY LIGHTBOX ENGINE ---
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (galleryItems.length === 0 || !lightbox) return;

  let galleryArray = [];
  let currentActiveIndex = 0;

  // Build temporary gallery array mapping metadata
  galleryItems.forEach((item, index) => {
    const imgElement = item.querySelector('img');
    const titleElement = item.querySelector('.gallery-title');
    const tagElement = item.querySelector('.gallery-tag');

    galleryArray.push({
      src: imgElement.getAttribute('src'),
      title: titleElement ? titleElement.textContent : '',
      desc: tagElement ? tagElement.textContent : 'Koffee HUB Sunwal Frame'
    });

    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    currentActiveIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryArray[currentActiveIndex];
    if (!item) return;

    lightboxImg.setAttribute('src', item.src);
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
  }

  function navigateNext() {
    currentActiveIndex = (currentActiveIndex + 1) % galleryArray.length;
    updateLightboxContent();
  }

  function navigatePrev() {
    currentActiveIndex = (currentActiveIndex - 1 + galleryArray.length) % galleryArray.length;
    updateLightboxContent();
  }

  // Action listeners
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', navigateNext);
  if (prevBtn) prevBtn.addEventListener('click', navigatePrev);

  // Click on background closes lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Handle keys (esc, arrow left, arrow right)
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateNext();
    if (e.key === 'ArrowLeft') navigatePrev();
  });
}

/**
 * --- LUXURY CONTACT FORM IMPLEMENTATION ---
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const banner = document.getElementById('formSuccessBanner');
  const submitBtn = form.querySelector('button[type="submit"]');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'BREWING SYSTEM DISPATCHING...';
    }

    // Simulate an API dispatch or successful delivery
    setTimeout(() => {
      form.reset();
      if (banner) {
        banner.style.display = 'block';
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'DISPATCH MESSAGE';
      }

      // Hide banner after 8 seconds
      setTimeout(() => {
        if (banner) banner.style.display = 'none';
      }, 8000);

    }, 2000);
  });
}