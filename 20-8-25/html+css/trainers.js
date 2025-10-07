// Trainer contact form validation for FitZone Gym

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('trainerContactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    let valid = true;
    // Name validation
    const name = form.contactName.value.trim();
    const nameError = document.getElementById('contactNameError');
    if (name.length < 2) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    } else {
      nameError.textContent = '';
    }
    // Email validation
    const email = form.contactEmail.value.trim();
    const emailError = document.getElementById('contactEmailError');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = 'Enter a valid email address.';
      valid = false;
    } else {
      emailError.textContent = '';
    }
    // Message validation
    const message = form.contactMessage.value.trim();
    const messageError = document.getElementById('contactMessageError');
    if (message.length < 5) {
      messageError.textContent = 'Message must be at least 5 characters.';
      valid = false;
    } else {
      messageError.textContent = '';
    }
    if (!valid) {
      e.preventDefault();
    }
  });
});
