/* FORM VALIDATION
 * Validates the rehistration form on register.html page
 * checks: firstname, lastname, email format, password strength, password match, terms checkbox
 * Returns: true if all validations pass, false otherwise
 * /
function validateRegistrationForm() { 
    // Get form input elements
    const firtname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('terms').checked;

    // Validate first name and last name (not empty)
    if (firtname === '' || lastname === '') {
        alert('Please enter your first name and last name.');
        return false;
    }

    // Validate email format using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate password strength (at least 8 characters, includes letters and numbers)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include both letters and numbers.');
        return false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // Validate terms checkbox
    if (!termsCheckbox) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    return true;
}
    