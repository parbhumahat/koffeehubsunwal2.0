/**
 * ==========================================================================
 * KOFFEE HUB SUNWAL - MAIN ACTIONS ENGINE
 * Technology: Pure Vanilla JavaScript (ES6+)
 * Quality: Highly structured, documented, type-safe validations
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. GLOBAL COURSE DATA STORE
     ========================================================================== */
  const coursesData = {
    'basic-barista': {
      id: 'basic-barista',
      name: 'Basic Barista Course',
      level: 'Beginner',
      levelClass: 'level-beginner',
      duration: '20 Days',
      price: 'Contact Now',
      image: 'images/lucky.jpg',
      shortDesc: 'Perfect for beginners wanting to learn fundamental coffee concepts and essential espresso operations over an extensive 20-day practical curriculum.',
      longDesc: 'Our comprehensive 20-Day Basic Barista Course is the ultimate springboard for individuals who want to start their journey in the specialty coffee universe with solid foundational skills. Designed for coffee enthusiasts, aspiring cafe professionals, and prospective baristas, this hands-on course covers everything from coffee beans botany to commercial espresso machine operations.',
      objectives: [
        'Understand coffee beans, roasting profiles, and botanical origins.',
        'Master the calibration of commercial espresso grinders.',
        'Perfect milk texturing chemistry for consistent velvety micro-foam.',
        'Implement food safety protocols and daily machine backwashing cleaning cycles.'
      ],
      whoCanJoin: 'Absolute beginners, home enthusiasts, students looking for job-ready skills, or anyone wanting a foundation in hospitality.',
      certification: 'Certified Basic Barista Certificate of Completion by Koffee Hub Sunwal.',
      benefits: [
        'Over 90% hands-on practice time directly on professional commercial stations.',
        'Access to practice labs post-completion for self-improvement and speed building.',
        'Lifetime support and refresher guidance sessions.'
      ],
      practicalSessions: 'Espresso extraction tests, milk steaming calibration, espresso machine cleaning, barista safety practices.',
      opportunities: 'Junior Barista, Home Espresso Operator, Domestic Coffee Shop Associate.'
    },
    'special-advance-barista': {
      id: 'special-advance-barista',
      name: 'Special Advance Barista Course',
      level: 'Intermediate',
      levelClass: 'level-intermediate',
      duration: '45 Days',
      price: 'Contact Now',
      image: 'images/kazol.jpg',
      shortDesc: 'The ultimate 45-day program to master elite brewing, advanced latte art, cafe operations, and customer experience. Labelled as our Most Popular choice!',
      longDesc: 'Elevate your coffee skills to the absolute peak. The 45-Day Special Advance Barista Course is a rigorous syllabus designed to turn passionate learners into highly qualified professional baristas. With extensive hands-on practice, this course focuses deeply on advanced brewing variables, latte art symmetry, workflow optimization, and creative recipe formulation.',
      objectives: [
        'Calibrate espresso extractions with professional precision using TDS and refractometers.',
        'Pour beautiful, symmetrical latte art patterns (Hearts, Tulips, Rosettas, and Swans).',
        'Handle high-volume cafe workflows and rush-hour order management.',
        'Develop signature beverages and curate unique seasonal cafe menus.'
      ],
      whoCanJoin: 'Baristas seeking to advance, cafe professionals wanting international career placement, and individuals aiming for overseas hospitality roles.',
      certification: 'Advanced Professional Barista Credentials by Koffee Hub Sunwal.',
      benefits: [
        'Individually assigned espresso station during intensive practical runs.',
        'Extensive latte art pouring masterclasses and workshops.',
        'Resume drafting, mock interview sessions, and global job application guidance.'
      ],
      practicalSessions: 'High-speed recipe execution, advanced milk texturing, intricate latte art symmetry, grinder recalibrations.',
      opportunities: 'Senior Head Barista, Lead Latte Artist, Coffee Trainer, Quality Control Manager.'
    },
    'diploma-excellence': {
      id: 'diploma-excellence',
      name: 'AHA Prof. Diploma in Excellence',
      level: 'Diploma',
      levelClass: 'level-advanced',
      duration: '3 Months',
      price: 'Contact Now',
      image: 'images/card4.jpg',
      shortDesc: 'An elite 3-month hospitality and coffee operations diploma offering a salaried internship in outer countries! Terms and conditions apply.',
      longDesc: 'Our flagship program: the 3-Month AHA Prof. Diploma in Excellence Course is a prestigious qualification combining advanced specialty coffee craftsmanship, hospitality administration, and international operational training. Crucially, this program offers a guaranteed paid internship option in overseas countries, giving you real-world, global hospitality experience (Terms & Conditions Apply).',
      objectives: [
        'Master advanced cafe operations, commercial management, and F&B administrative functions.',
        'Acquire global standards of guest relations and high-end hospitality service.',
        'Coordinate kitchen, inventory, supply chain, and retail coffee operations.',
        'Understand global food safety certifications and audit preparations.'
      ],
      whoCanJoin: 'Aspiring international baristas, hospitality management students, future cafe owners, and individuals seeking global hospitality career pathways.',
      certification: 'AHA Professional Diploma in Excellence & Global Barista Certification.',
      benefits: [
        'Salaried internship placement program in overseas hospitality venues (T&C apply).',
        'Direct mentorship from international hospitality and coffee industry leaders.',
        'Comprehensive cross-training in operations, brewing, and guest communications.'
      ],
      practicalSessions: 'Simulated high-end restaurant service, advanced bar diagnostics, operational cost auditing, multi-station team management.',
      opportunities: 'International F&B Executive, Assistant Cafe Manager, Global Barista Representative, Hospitality Operations Consultant.'
    },
    'latte-art': {
      id: 'latte-art',
      name: 'Latte Art Training Course',
      level: 'Specialist',
      levelClass: 'level-expert',
      duration: '7 Days',
      price: 'Contact Now',
      image: 'images/card2.jpg',
      shortDesc: 'A dedicated 7-day intensive hands-on course to master milk texturing and pour beautiful symmetrical latte art patterns.',
      longDesc: 'Turn coffee cups into canvases! The 7-Day Latte Art Training Course is a fully practical specialty class focused 100% on milk chemistry, steaming precision, and pouring design. From getting the perfect glossy microfoam to mastering consistent pours, you will study physics and visual balance to elevate your presentation.',
      objectives: [
        'Understand the chemistry of milk proteins and fats at different temperatures.',
        'Control milk steam volume and angles to achieve ultra-smooth micro-foam.',
        'Master the art of freepour techniques: Hearts, Tulips, Rosettas, and Swans.',
        'Use etching methods and chocolate dustings for unique creative designs.'
      ],
      whoCanJoin: 'Working baristas wanting a major skill upgrade, previous Basic Barista graduates, and serious coffee enthusiasts.',
      certification: 'Specialty Latte Art Certificate of Completion by Koffee Hub Sunwal.',
      benefits: [
        'Unlimited milk supply provided for practical pouring sessions.',
        'Step-by-step visual feedback and video analysis of your pouring posture.',
        'Access to latte art practice hours with professional trainers.'
      ],
      practicalSessions: 'Steaming marathons, freepour pattern practice, milk texturing troubleshooting, speed latte art challenge.',
      opportunities: 'Latte Art Specialist, Senior Barista, Creative Beverage Designer, Visual Coffee Content Creator.'
    },
    'customize-barista': {
      id: 'customize-barista',
      name: 'Customize Course Barista Training',
      level: 'Tailored',
      levelClass: 'level-beginner',
      duration: 'Flexible',
      price: 'Contact Us',
      image: 'images/card5.jpg',
      shortDesc: 'Build your own customized barista training syllabus on flexible dates to suit your specific goals. Terms & Conditions apply.',
      longDesc: 'Can\'t fit a standard schedule? Our Customize Course Barista Training is designed to revolve entirely around your unique requirements. Whether you have limited hours, want to focus on a specific technique like roasting, or need a bespoke fast-track setup, we tailor the curriculum and timeline to you (Terms & Conditions Apply).',
      objectives: [
        'Define a tailored learning plan built around your exact skillset needs.',
        'Learn on a highly flexible schedule designed around your availability.',
        'Receive exclusive one-on-one private coaching from our head trainer.',
        'Focus intensely on specific modules (such as roasting, espresso troubleshooting, or café design).'
      ],
      whoCanJoin: 'Busy professionals, international travelers with short layovers, café startups looking for direct staff coaching, or advanced baristas looking for custom focus.',
      certification: 'Customized Barista Training Certificate of Completion by Koffee Hub Sunwal.',
      benefits: [
        'Fully personalized training calendar and adjustable session pacing.',
        '1-on-1 private attention from a dedicated coffee instructor.',
        'Option to bring your own coffee beans or practice on your specific cafe machinery.'
      ],
      practicalSessions: 'Personalized diagnostic labs, specific technique drills, custom beverage creation, personalized operations advisory.',
      opportunities: 'Tailored according to your individual or corporate cafe training goals.'
    }
  };


  /* ==========================================================================
     2. STICKY HEADER SCROLL ANIMATION
     ========================================================================== */
  const mainHeader = document.getElementById('mainHeader');
  
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    });
  }


  /* ==========================================================================
     3. MOBILE NAV DROP-DOWN HAMBURGER
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  if (hamburgerBtn && mobileNavOverlay) {
    function toggleMobileMenu() {
      const isOpened = hamburgerBtn.classList.contains('active');
      if (isOpened) {
        hamburgerBtn.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        hamburgerBtn.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background body scroll
      }
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close Mobile Menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-item');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close Mobile Menu on overlay background click
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        toggleMobileMenu();
      }
    });
  }


  /* ==========================================================================
     4. SMOOTH SCROLLING FOR NAVIGATION LINKS
     ========================================================================== */
  const allScrollLinks = document.querySelectorAll('a[href^="#"]');
  allScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // If it is just '#', do nothing
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Remove active class from other navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class if it is a desktop navigation link
        if (this.classList.contains('nav-item')) {
          this.classList.add('active');
        }

        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  /* ==========================================================================
     5. DYNAMIC "VIEW COURSE DETAILS" MODAL
     ========================================================================== */
  const viewCourseModal = document.getElementById('viewCourseModal');
  const closeViewModalBtn = document.getElementById('closeViewModalBtn');
  const viewModalBody = document.getElementById('viewModalBody');

  // Open Details Modal on Clicking View Course Button
  const viewBtns = document.querySelectorAll('.view-course-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-target');
      const data = coursesData[courseId];
      if (data) {
        openViewCourseModal(data);
      }
    });
  });

  function openViewCourseModal(course) {
    // Show skeleton screen first
    viewModalBody.innerHTML = `
      <div class="modal-skeleton">
        <div class="skeleton-img"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text-half"></div>
      </div>
    `;
    
    viewCourseModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Simulate 400ms loading delay for ultra premium user experience
    setTimeout(() => {
      renderCourseDetailsInModal(course);
      lucide.createIcons(); // refresh dynamically rendered icons
    }, 400);
  }

  function renderCourseDetailsInModal(course) {
    let objectivesHTML = '';
    course.objectives.forEach(obj => {
      objectivesHTML += `<li><span class="bullet">✔</span> <span>${obj}</span></li>`;
    });

    let benefitsHTML = '';
    course.benefits.forEach(ben => {
      benefitsHTML += `<li><span class="bullet">✔</span> <span>${ben}</span></li>`;
    });

    viewModalBody.innerHTML = `
      <div class="view-course-details-wrapper">
        <!-- Hero Header Card -->
        <div class="view-course-hero">
          <img src="${course.image}" alt="${course.name}" class="view-course-hero-img">
          <div class="view-course-hero-overlay">
            <div class="view-course-hero-content">
              <div class="view-course-duration-level">
                <span class="view-course-dur"><i data-lucide="calendar"></i> ${course.duration}</span>
                <span class="view-course-dot">•</span>
                <span class="view-course-level">${course.level} Level</span>
              </div>
              <h2 class="view-course-title">${course.name}</h2>
            </div>
          </div>
        </div>

        <!-- 2 Column Body Grid -->
        <div class="view-course-body-grid">
          <!-- Main Content column -->
          <div class="details-main-info">
            <div class="details-section-block">
              <h4>Course Overview</h4>
              <p>${course.longDesc}</p>
            </div>

            <div class="details-section-block">
              <h4>Learning Objectives</h4>
              <ul class="modal-check-list">
                ${objectivesHTML}
              </ul>
            </div>

            <div class="details-section-block">
              <h4>Who Can Join?</h4>
              <p>${course.whoCanJoin}</p>
            </div>

            <div class="details-section-block">
              <h4>Practical Sessions Included</h4>
              <p>${course.practicalSessions}</p>
            </div>

            <div class="details-section-block">
              <h4>Career Opportunities</h4>
              <p>${course.opportunities}</p>
            </div>

            <div class="details-section-block">
              <h4>Benefits of Training</h4>
              <ul class="modal-check-list">
                ${benefitsHTML}
              </ul>
            </div>
          </div>

          <!-- Sidebar summary details column -->
          <div class="details-sidebar-panel">
            <div class="sidebar-cost-tag">
              <h3>${course.price}</h3>
            </div>

            <div class="sidebar-info-row">
              <span class="sidebar-info-label">Duration:</span>
              <span class="sidebar-info-value">${course.duration}</span>
            </div>

            <div class="sidebar-info-row">
              <span class="sidebar-info-label">Skill Level:</span>
              <span class="sidebar-info-value">${course.level}</span>
            </div>

            <div class="sidebar-info-row">
              <span class="sidebar-info-label">Certification:</span>
              <span class="sidebar-info-value">Certified</span>
            </div>

            <div class="sidebar-info-row">
              <span class="sidebar-info-label">Pacing:</span>
              <span class="sidebar-info-value">100% Practical Focus</span>
            </div>

            <div class="sidebar-info-row">
              <span class="sidebar-info-label">Lab Practice:</span>
              <span class="sidebar-info-value">Lifetime Support</span>
            </div>

            <button class="btn btn-primary btn-full mt-2 modal-trigger-booking-btn" data-course-id="${course.id}">Book This Course</button>
          </div>
        </div>
      </div>
    `;

    // Attach immediate booking trigger logic within this dynamically-loaded modal
    const innerBookingBtn = viewModalBody.querySelector('.modal-trigger-booking-btn');
    innerBookingBtn.addEventListener('click', () => {
      const courseId = innerBookingBtn.getAttribute('data-course-id');
      viewCourseModal.classList.remove('active');
      openBookingModal(courseId);
    });
  }

  // Close Views
  closeViewModalBtn.addEventListener('click', () => {
    viewCourseModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  viewCourseModal.addEventListener('click', (e) => {
    if (e.target === viewCourseModal) {
      viewCourseModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });


  /* ==========================================================================
     6. BOOKING FORM MODAL FLOW & VALIDATION
     ========================================================================== */
  const bookCourseModal = document.getElementById('bookCourseModal');
  const closeBookModalBtn = document.getElementById('closeBookModalBtn');
  const bookingForm = document.getElementById('bookingForm');
  const interestedCourseSelect = document.getElementById('interestedCourse');

  // Trigger from global CTA elements or custom triggers
  const generalBookingBtns = document.querySelectorAll('.open-booking-btn');
  generalBookingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = btn.getAttribute('data-preset-course') || 'all';
      openBookingModal(presetId);
    });
  });

  function openBookingModal(courseId = 'all') {
    // Reset any error boundaries before open
    clearFormValidationState();
    bookingForm.reset();

    // Set preset dropdown state
    if (courseId && courseId !== 'all' && coursesData[courseId]) {
      interestedCourseSelect.value = courseId;
    } else {
      interestedCourseSelect.value = '';
    }

    bookCourseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeBookModalBtn.addEventListener('click', () => {
    bookCourseModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  bookCourseModal.addEventListener('click', (e) => {
    if (e.target === bookCourseModal) {
      bookCourseModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Real-time input corrections and error removals
  const inputsToTrack = bookingForm.querySelectorAll('input, select');
  inputsToTrack.forEach(element => {
    element.addEventListener('input', () => {
      element.classList.remove('invalid');
      const errBox = document.getElementById(`${element.id}Error`);
      if (errBox) errBox.style.display = 'none';
    });
    element.addEventListener('change', () => {
      element.classList.remove('invalid');
      const errBox = document.getElementById(`${element.id}Error`);
      if (errBox) errBox.style.display = 'none';
    });
  });

  function clearFormValidationState() {
    inputsToTrack.forEach(input => {
      input.classList.remove('invalid');
      const errBox = document.getElementById(`${input.id}Error`);
      if (errBox) errBox.style.display = 'none';
    });
  }


  /* ==========================================================================
     7. FORM VALIDATION LOGIC
     ========================================================================== */
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullNameVal = document.getElementById('fullName').value.trim();
    const phoneNumberVal = document.getElementById('phoneNumber').value.trim();
    const emailVal = document.getElementById('email').value.trim();
    const addressVal = document.getElementById('address').value.trim();
    const courseVal = interestedCourseSelect.value;

    let formHasErrors = false;

    // Name Validate
    if (fullNameVal.length < 2) {
      setErrorForInput('fullName', 'Please enter your full name (at least 2 letters).');
      formHasErrors = true;
    }

    // Phone Validate (Realistic Nepal formatting check)
    // Nepal mobile numbers generally are 10 digits starting with 98 or 97, landlines are 9 digits
    const cleanPhone = phoneNumberVal.replace(/[^0-9]/g, '');
    const phonePattern = /^(98|97|96|0)[0-9]{7,8}$/;
    if (cleanPhone.length < 9 || cleanPhone.length > 10 || !phonePattern.test(cleanPhone)) {
      setErrorForInput('phoneNumber', 'Enter a valid Nepalese phone number (10 digits starting with 98/97).');
      formHasErrors = true;
    }

    // Email Validate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setErrorForInput('email', 'Please provide a valid, structured email address.');
      formHasErrors = true;
    }

    // Address Validate
    if (addressVal.length < 3) {
      setErrorForInput('address', 'Please provide your full current city or location.');
      formHasErrors = true;
    }

    // Selected Course Validate
    if (!courseVal) {
      setErrorForInput('interestedCourse', 'Please select a training program from the options.');
      formHasErrors = true;
    }

    if (formHasErrors) {
      // Find the first invalid element and scroll it gently into view inside modal
      const firstInvalid = bookingForm.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // SUCCESS CASE - PREPARE RESPONSE DATA
    const selectedCourseLabel = interestedCourseSelect.options[interestedCourseSelect.selectedIndex].text;

    const successSummary = {
      name: fullNameVal,
      phone: cleanPhone,
      email: emailVal,
      address: addressVal,
      courseName: selectedCourseLabel
    };

    // Close Booking Input modal
    bookCourseModal.classList.remove('active');
    
    // Launch successful transition
    triggerSuccessfulFormSubmission(successSummary);
  });

  function setErrorForInput(id, message) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('invalid');
      const errBox = document.getElementById(`${id}Error`);
      if (errBox) {
        errBox.textContent = message;
        errBox.style.display = 'block';
      }
    }
  }


  /* ==========================================================================
     8. EMAILJS INTEGRATION PLACEHOLDER & SUCCESS FEEDBACK MODAL
     ========================================================================== */
  const successModal = document.getElementById('successModal');
  const closeSuccessModalBtn = document.getElementById('closeSuccessModalBtn');
  const bookingSummaryBox = document.getElementById('bookingSummaryBox');

  function triggerSuccessfulFormSubmission(summary) {
    
    /* ==========================================================================
       // EmailJS Integration Here
       // ------------------------------------------------------------------------
       // To bind with an active EmailJS client, use this blueprint structure:
       //
       // emailjs.init("YOUR_PUBLIC_KEY");
       // const templateParams = {
       //    to_name: "Koffee Hub Sunwal Training team",
       //    student_name: summary.name,
       //    student_phone: summary.phone,
       //    student_email: summary.email,
       //    student_address: summary.address,
       //    course_selected: summary.courseName,
       //    preferred_start_date: summary.date
       // };
       // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
       //    .then(response => {
       //       console.log('Email successfully sent!', response.status, response.text);
       //    }, error => {
       //       console.error('Email transmission failed...', error);
       //    });
       ========================================================================== */

    console.log("Booking Form submitted perfectly! Summary details:", summary);

    // Render beautiful dynamic success invoice summary inside the success modal
    bookingSummaryBox.innerHTML = `
      <div class="summary-heading">Reservation Receipt</div>
      <div class="booking-summary-row">
        <span class="summary-label">Student Name:</span>
        <span class="summary-value">${summary.name}</span>
      </div>
      <div class="booking-summary-row">
        <span class="summary-label">Mobile Contact:</span>
        <span class="summary-value">+977-${summary.phone}</span>
      </div>
      <div class="booking-summary-row">
        <span class="summary-label">Registered For:</span>
        <span class="summary-value">${summary.courseName}</span>
      </div>
      <div class="booking-summary-row">
        <span class="summary-label">Location:</span>
        <span class="summary-value">${summary.address}</span>
      </div>
    `;

    // Trigger open
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Refresh Lucide in the newly loaded modal
    lucide.createIcons();
  }

  // Close success modal
  closeSuccessModalBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });


  /* ==========================================================================
     9. TESTIMONIALS AUTO-SLIDING CAROUSEL
     ========================================================================== */
  const slides = document.querySelectorAll('.testimonial-slide');
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');
  const sliderDotsContainer = document.getElementById('sliderDots');
  let currentSlideIndex = 0;
  let autoplayInterval;

  // Initialize navigation dots
  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('data-slide-to', index);
    sliderDotsContainer.appendChild(dot);
    
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoplay();
    });
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    // Range protection
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Transition elements
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');

    currentSlideIndex = index;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  // Action listeners
  sliderNext.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  sliderPrev.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  // Autoplay function
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // Transitions slide every 5 seconds
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Start sliding
  startAutoplay();


  /* ==========================================================================
     10. FAQ INTERACTIVE ACCORDION (SMOOTH TRANSITIONS)
     ========================================================================== */
  const faqHeaders = document.querySelectorAll('.faq-header');
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const faqItem = header.parentElement;
      const bodyWrapper = faqItem.querySelector('.faq-body-wrapper');
      const isAlreadyActive = faqItem.classList.contains('active');

      // Collapse all other accordion segments for a neat premium look
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-body-wrapper').style.maxHeight = '0px';
      });

      if (!isAlreadyActive) {
        faqItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        // Set height exactly to content scrollheight to trigger smooth transition
        bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + 'px';
      }
    });
  });


  /* ==========================================================================
     11. GALLERY VIEW FULL POPUP SIMULATOR
     ========================================================================== */
  const galleryViewBtn = document.getElementById('galleryViewBtn');
  if (galleryViewBtn) {
    galleryViewBtn.addEventListener('click', () => {
      // Instantly pre-populate booking dropdown with "all" and guide them to register
      openBookingModal('all');
    });
  }


  /* ==========================================================================
     12. RENDER LUCIDE ICONS ON PAGE MOUNT
     ========================================================================== */
  lucide.createIcons();
});

// ================================
// EMAIL JS INITIALIZATION
// ================================

emailjs.init({
    publicKey: "G5Y2RpwRoANqJfNNS"
});

// ================================
// ELEMENTS
// ================================

const bookingForm = document.getElementById("bookingForm");
const submitBtn = document.getElementById("submitBookingBtn");

const successModal = document.getElementById("successModal");
const bookModal = document.getElementById("bookCourseModal");

const bookingSummaryBox = document.getElementById("bookingSummaryBox");

// ================================
// VALIDATION
// ================================

function validateForm() {

    let valid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const course = document.getElementById("interestedCourse").value;

    document.querySelectorAll(".error-msg").forEach(e => e.style.display = "none");

    if (fullName === "") {
        document.getElementById("fullNameError").style.display = "block";
        valid = false;
    }

    if (!/^98\d{8}$/.test(phone)) {
        document.getElementById("phoneNumberError").style.display = "block";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (address === "") {
        document.getElementById("addressError").style.display = "block";
        valid = false;
    }

    if (course === "") {
        document.getElementById("courseError").style.display = "block";
        valid = false;
    }

    return valid;
}

// ================================
// SUBMIT
// ================================

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!validateForm()) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const params = {

        full_name: document.getElementById("fullName").value,

        phone: document.getElementById("phoneNumber").value,

        email: document.getElementById("email").value,

        address: document.getElementById("address").value,

        course:
            document.getElementById("interestedCourse").options[
                document.getElementById("interestedCourse").selectedIndex
            ].text,

        message: document.getElementById("userMessage").value || "No Message",

        time: new Date().toLocaleString("en-NP")
    };

    emailjs.send(
        "service_89bzoeq",
        "template_ao9hh7u",
        params
    )

    .then(() => {

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit Booking";

        bookingSummaryBox.innerHTML = `

        <strong>Name:</strong> ${params.full_name}<br><br>

        <strong>Phone:</strong> ${params.phone}<br><br>

        <strong>Email:</strong> ${params.email}<br><br>

        <strong>Course:</strong> ${params.course}

        `;

        bookModal.classList.remove("active");
        successModal.classList.add("active");

        bookingForm.reset();

    })

    .catch((error) => {

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit Booking";

        console.error(error);

        alert("❌ Booking could not be sent.\nPlease try again.");

    });

});

// ================================
// CLOSE SUCCESS MODAL
// ================================

document.getElementById("closeSuccessModalBtn").addEventListener("click", function () {

    successModal.classList.remove("active");

});

// ================================
// RESET FORM
// ================================

document.getElementById("resetBookingBtn").addEventListener("click", function () {

    document.querySelectorAll(".error-msg").forEach(e => e.style.display = "none");

});
