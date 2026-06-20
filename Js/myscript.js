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
    