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
 
  // Validate lastname - must not be empty
  if (lastname === "") {
    alert("Please enter your last name.");
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