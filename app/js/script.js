// **********************************************************************
// Menu navbar
const navBar = document.querySelector('#nav');
const closeBtn = document.querySelector('#close');
const menuBtn = document.querySelector('#menu');

// show menu
menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
});

// hide menu
closeBtn.addEventListener('click', () => {
  navBar.classList.remove('show');
});

// show year in footer section
const date = new Date();
const year = date.getFullYear();

const currentYear = document.querySelector('.year');
currentYear.innerText = year;

// *********************************************************************
// Contact Form Validation

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const title = document.querySelector('#title');
const message = document.querySelector('#message');

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Check email is valid
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, 'Email is not valid');
  }
}

// Check phone number
function checkPhone(phone) {
  const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (phone.value.match(re)) {
    showSuccess(phone);
  } else {
    showError(phone, 'Please, provide phone number in (+)09112312312 format');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check title
function checkTitle(input, min) {
  if (input.value === '' && input.value < min) {
    showError(
      input,
      `${getFieldName(input)} must be: Mr., Mrs., Ms., or Miss:`
    );
  } else {
    showSuccess(input);
  }
}

// Get field name first letter uppercase
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, phone, title, message]);

  checkLength(username, 3, 15);
  checkEmail(email);
  checkPhone(phone);
  checkTitle(title, 2);
  checkLength(message, 3, 260);
});
