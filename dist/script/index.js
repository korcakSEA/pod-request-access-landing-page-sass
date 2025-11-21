const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  // prevent browser default behaviour, form is not sent before validation
  e.preventDefault()
  console.log(e.target);

  // retireived all data as an object, e.target used to make code reusable
  const formData = Object.fromEntries(new FormData(e.target));
  console.log(formData);

  // Validation of form data, calling validateForm function, and results receive as an object
  const renderError = validateForm(formData);
  console.log(renderError);

  // Rendering messages
  for (const key in renderError) {
    console.log(renderError[key]);
    const errorMessage = renderError[key];
    const el= document.getElementById(`${key}-error`);
    const jsEmailInput = document.getElementById(`${key}`);
    // Adding or removing error class based on validation
    if (errorMessage) {
      jsEmailInput.classList.add('outline');
    }else {
      jsEmailInput.classList.remove('outline');
    }
    if (el) el.textContent = errorMessage;
  }

});

// Manages validation functions, for now just email but can be expand
const validateForm = (data) => {
  return {
    email: validateEmail(data.email)
  }
}

/* 
  // ALternative validation with auto-loop, but at the moment we have only one validation
  function validateForm(data) {
    const errors = {};
    for (const key in validators) {
      errors[key] = validators[key](data[key]);
    }
    return errors;
  }

*/

// Email validation function
function validateEmail(email) {
  // Check if email is empty
  if (!email) return 'Oops! Please add your email';

  // checking email format
  const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!isValidEmail.test(email)) {
    return 'Oops! Please check your email';
  }
  return '';
}


