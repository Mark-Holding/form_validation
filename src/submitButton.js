import { constraints } from "./check-postcode";

export default function submitButton() {


const form = document.getElementById("userForm");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");
const postcodeError = document.querySelector("#zip + span.error");
const country = document.getElementById("country");
const postalCodeField = document.getElementById("zip");


    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
  
      // Check if the form is valid
      if (form.checkValidity()) {
        console.log("Form submitted successfully!");
        // Optional: Show a success message or handle form data here
      } else {
        console.log("Form submission prevented due to errors.");
        // Trigger validation manually to ensure all errors are displayed
        if (!email.checkValidity()) {
          emailError.textContent = email.validity.typeMismatch
            ? "Please enter a valid email address."
            : "Email is required.";
          emailError.className = "error active";
        }
  
        if (!postalCodeField.checkValidity()) {
          postcodeError.textContent = constraints[country.value]?.[1] || "Invalid postal code.";
          postcodeError.className = "error active";
        }
  
        if (!passwordField.checkValidity() || confirmPasswordField.value !== passwordField.value) {
          if (!passwordField.checkValidity()) {
            passwordError.textContent = "Password must include at least one uppercase, one lowercase, one digit, and one special character.";
            passwordError.className = "error active";
          }
          if (confirmPasswordField.value !== passwordField.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.className = "error active";
          }
        }
      }
    });

};