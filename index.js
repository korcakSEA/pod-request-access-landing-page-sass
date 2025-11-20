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
    if (el) el.textContent = errorMessage;
  }

});

// Manages validation functions, for now just email but can be expand
const validateForm = (data) => {
  return {
    email: validateEmail(data.email)
  }
}

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


