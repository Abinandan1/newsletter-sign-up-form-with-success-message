// ELEMENTS
const form = document.querySelector("form");
const formInput = document.querySelector(".form-input");
const newsletterMain = document.querySelector(".newsletter-main");
const successMessageMain = document.querySelector(".success-main");
const emailSpan = document.querySelector(".email");
const dismissBtn = document.querySelector(".dismiss-btn");
const errorMessage = document.querySelector(".error-message");

// DISMISS BUTTON
dismissBtn.addEventListener("click", () => {
  newsletterMain.classList.add("show-main");
  successMessageMain.classList.remove("show-main");
  form.reset();
});

// SUBMIT FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const { email } = Object.fromEntries(formData);
  // VALIDATE EMAIL
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regex = new RegExp(regexPattern);
  // RESET ERROR MESSAGES & STYLES
  formInput.classList.remove("error-form-input");
  errorMessage.classList.remove("show-message");
  if (regex.test(email)) {
    newsletterMain.classList.remove("show-main");
    successMessageMain.classList.add("show-main");
    emailSpan.textContent = email;
  } else {
    // SET ERROR MESSAGES & STYLES
    formInput.classList.add("error-form-input");
    errorMessage.classList.add("show-message");
  }
});
