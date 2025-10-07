// Registration form validation for FitZone Gym

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    let valid = true;
    // Name validation
    const name = form.name.value.trim();
    const nameError = document.getElementById('nameError');
    if (name.length < 2) {
      nameError.textContent = 'Please enter your full name.';
      valid = false;
    } else {
      nameError.textContent = '';
    }
    // Age validation
    const age = form.age.value;
    const ageError = document.getElementById('ageError');
    if (age < 12 || age > 100) {
      ageError.textContent = 'Age must be between 12 and 100.';
      valid = false;
    } else {
      ageError.textContent = '';
    }
    // Mobile validation
    const mobile = form.mobile.value.trim();
    const mobileError = document.getElementById('mobileError');
    if (!/^\d{10}$/.test(mobile)) {
      mobileError.textContent = 'Enter a valid 10-digit mobile number.';
      valid = false;
    } else {
      mobileError.textContent = '';
    }
    // Email validation
    const email = form.email.value.trim();
    const emailError = document.getElementById('emailError');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = 'Enter a valid email address.';
      valid = false;
    } else {
      emailError.textContent = '';
    }
    // Password validation
    const password = form.password.value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      valid = false;
    } else {
      passwordError.textContent = '';
    }
    if (!valid) {
      e.preventDefault();
    }
  });
});
