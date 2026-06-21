/*
 * Validates the registration form on register.html
 * Checks: firstname, lastname, email format, password strength, password match, terms checkbox
 * Returns: true if all fields valid, false otherwise
 */
function validateRegisterForm() {
  // Get form input elements
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const terms = document.getElementById("terms").checked;
 
  // Validate firstname - must not be empty
  if (firstname === "") {
    alert("Please enter your first name.");
    return false;
  }
  
  // Validate firstname contains no numbers - names should only have letters
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(firstname)) {
    alert("First name must contain letters only (no numbers).");
    return false;
  }

  // Validate lastname - must not be empty
  if (lastname === "") {
    alert("Please enter your last name.");
    return false;
  }
  // Validate lastname contains no numbers - names should only have letters
  if (!nameRegex.test(lastname)) {
    alert("Last name must contain letters only (no numbers).");
    return false;
  }
  // Validate email - check format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  // Validate password - minimum 8 characters for security
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
 
  // Validate password match - both password fields must be identical
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please check and try again.");
    return false;
  }
 
  // Validate terms checkbox - user must agree to proceed
  if (!terms) {
    alert("Please agree to the terms of service and privacy policy.");
    return false;
  }
 
  // All validations passed
  alert("Registration successful! Welcome to Her Haven Studio.");
  return true;
}
/*
 * Validates the booking form on booking.html
 * Checks: programme selection, date, time slot, fullname, email format, health notes (optional)
 * Returns: true if all required fields valid, false otherwise
 */
function validateBookingForm() {
  // Get form input elements
  const programme = document.getElementById("programme").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
 
  // Validate programme selection - cannot be empty
  if (programme === "") {
    alert("Please select a programme.");
    return false;
  }
 
  // Validate date selection - cannot be empty
  if (date === "") {
    alert("Please select a date for your booking.");
    return false;
  }
 // Validate date is not in the past - reject dates before today
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to midnight for accurate comparison
  if (selectedDate < today) {
    alert("Please select a future date. Past dates cannot be booked.");
    return false;
  }
  // Validate time selection - cannot be empty
  if (time === "") {
    alert("Please select a time slot.");
    return false;
  }
 
  // Validate fullname - must not be empty
  if (fullname === "") {
    alert("Please enter your full name.");
    return false;
  }
  // Validate fullname contains no numbers - names should only have letters
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(fullname)) {
    alert("Please enter a valid name (letters and spaces only, no numbers).");
    return false;
  }
  // Validate email format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  // All required fields validated successfully
  alert("Booking confirmed! A confirmation email will be sent to " + email);
  return true;
}

/*
 * Validates the general enquiry form on community.html
 * Checks: name, email format, message content
 * Returns: true if all fields valid, false otherwise
 */
function validateEnquiryForm() {
  // Get form input elements
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
 
  // Validate name - must not be empty
  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }
// Validate name contains no numbers - names should only have letters
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters and spaces only, no numbers).");
    return false;
  } 
  // Validate email format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  // Validate message - must not be empty and have minimum length
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }
 
  if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return false;
  }
 
  // All validations passed
  alert("Thank you for reaching out! We will respond within 24 hours.");
  return true;
} 
/*
 * Validates the login form on login.html
 * Checks: email format, password not empty
 * Returns: true if all fields valid, false otherwise
 */
function validateLoginForm() {
  // Get form input elements
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
 
  // Validate email - must not be empty
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
 
  // Validate email format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  // Validate password - must not be empty
  if (password === "") {
    alert("Please enter your password.");
    return false;
  }
 
  // Validate password minimum length
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

 
  // All validations passed
  alert("Login successful! Welcome back to Her Haven Studio.");
  return true;
}

/*
 * Validates the contributor form on contributor.html
 * Checks: fullname (no numbers), email format, expertise area, message content
 * Returns: true if all fields valid, false otherwise
 */
function validateContributorForm() {
  // Get form input elements
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const expertise = document.getElementById("expertise").value;
  const message = document.getElementById("message").value.trim();
 
  // Validate fullname - must not be empty
  if (fullname === "") {
    alert("Please enter your full name.");
    return false;
  }
 
  // Validate fullname contains no numbers - names should only have letters
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(fullname)) {
    alert("Please enter a valid name (letters and spaces only, no numbers).");
    return false;
  }
 
  // Validate email format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
 
  // Validate expertise area selection - cannot be empty
  if (expertise === "") {
    alert("Please select your area of expertise.");
    return false;
  }
 
  // Validate message - must not be empty and have minimum length
  if (message === "") {
    alert("Please tell us how you'd like to contribute.");
    return false;
  }
 
  if (message.length < 20) {
    alert("Please provide a more detailed message (at least 20 characters).");
    return false;
  }
 
  // All validations passed
  alert("Thank you for your interest in contributing! We will review your application and be in touch soon.");
  return true;
}
/*
 * Initializes accordion functionality for FAQ section
 * Allows users to expand/collapse individual FAQ items
 * Automatically closes other open items when one is opened
 */
function initializeAccordion() {
  // Get all accordion header elements
  const accordionHeaders = document.querySelectorAll(".accordion-header");
 
  // Add click event listener to each header
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      // Get the accordion content that follows this header
      const accordionContent = this.nextElementSibling;
      const accordionItem = this.parentElement;
 
      // Toggle active class on the item (for styling)
      accordionItem.classList.toggle("active");
 
      // Toggle display of content (slide animation)
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        // Close all other accordion items first
        const allItems = document.querySelectorAll(".accordion-item");
        allItems.forEach((item) => {
          item.classList.remove("active");
          const content = item.querySelector(".accordion-content");
          if (content) {
            content.style.display = "none";
          }
        });
 
        // Open the clicked accordion item
        accordionItem.classList.add("active");
        accordionContent.style.display = "block";
      }
    });
  });
}  
/*
 * Initializes image slideshow/carousel functionality
 * Rotates through images automatically
 * Allows manual navigation with previous/next buttons
 */
function initializeSlideshow() {
  // Get slideshow container and slide elements
  const slideshowContainer = document.querySelector(".slideshow-container");
  if (!slideshowContainer) return; // Exit if no slideshow on page
 
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
 
  let currentSlide = 0; // Track current slide index
 
  /*
   * Displays the slide at specified index
   * Hides all slides first, then shows only the active one
   */
  function showSlide(n) {
    // Wrap around if index exceeds number of slides
    if (n >= slides.length) {
      currentSlide = 0;
    }
    // Wrap around if index is negative
    if (n < 0) {
      currentSlide = slides.length - 1;
    }
 
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
 
    // Show current slide with fade-in effect
    slides[currentSlide].style.display = "block";
  }
 
  /*
   * Move to next slide
   * Called by next button
   */
  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }
 
  /*
   * Move to previous slide
   * Called by previous button
   */
  function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
  }
 
  // Add click event listeners to navigation buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
  }
 
  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
  }
 
  // Auto-advance slides every 5 seconds (5000 milliseconds)
  setInterval(nextSlide, 5000);
 
  // Display first slide on page load
  showSlide(currentSlide);
}
/*
 * Initializes modal functionality for class booking
 * Opens modal when "Book a class" button is clicked
 * Closes modal when X button or cancel button is clicked
 */
function initializeBookingModal() {
  // Get modal elements
  const modal = document.getElementById("bookingModal");
  if (!modal) return; // Exit if no modal on page
 
  const openModalBtn = document.querySelector(".open-modal-btn");
  const closeModalBtn = document.querySelector(".close-modal-btn");
  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
 
  /*
   * Opens the booking modal
   * Displays modal and prevents background scrolling
   */
  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  }
 
  /*
   * Closes the booking modal
   * Hides modal and restores background scrolling
   */
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  }
 
  // Add event listeners to open/close buttons
  if (openModalBtn) {
    openModalBtn.addEventListener("click", openModal);
  }
 
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }
 
  if (cancelModalBtn) {
    cancelModalBtn.addEventListener("click", closeModal);
  }
 
  /*
   * Close modal when user clicks outside of it
   * Allows dismissal by clicking the overlay
   */
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}
/*
 * Initializes class filter functionality on classes.html
 * Allows users to filter classes by category
 * Shows/hides class cards based on selected filter
 */
function initializeClassFilter() {
  // Get all filter pills and class cards
  const filterPills = document.querySelectorAll(".filter-pill");
  const classCards = document.querySelectorAll(".class-card");
 
  if (filterPills.length === 0) return; // Exit if no filters on page
 
  // Add click event listener to each filter pill
  filterPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      // Get the filter value from the pill's data attribute
      const filterValue = this.getAttribute("data-filter");
 
      // Remove active class from all pills
      filterPills.forEach((p) => {
        p.classList.remove("active");
      });
 
      // Add active class to clicked pill
      this.classList.add("active");
 
      // Show/hide class cards based on filter
      classCards.forEach((card) => {
        // Get the card's category from its data attribute
        const cardCategory = card.getAttribute("data-category");
 
        // Show card if filter is "all" or category matches
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
} 
/*
 * Attach validation to form submission buttons
 * This needs to be called on page load for each page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Register page - validate register form on button click
  const registerBtn = document.querySelector(".btn-register");
  if (registerBtn) {
    registerBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      validateRegisterForm();
    });
  }
 
  // Booking page - validate booking form on button click
  const bookingBtn = document.querySelector(".btn-confirm");
  if (bookingBtn) {
    bookingBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      validateBookingForm();
    });
  }
 
  // Community enquiry page - validate enquiry form on button click
  const enquiryBtn = document.querySelector(".btn-send");
  if (enquiryBtn) {
    enquiryBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      validateEnquiryForm();
    });
  }
 
  // Initialize accordions on pages that have them
  initializeAccordion();
 
  // Initialize slideshow on pages that have it
  initializeSlideshow();
 
  // Initialize booking modal on pages that have it
  initializeBookingModal();
 
  // Initialize class filter on classes page
  initializeClassFilter();
});
