
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");


email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""; // Remove the message content
        emailError.className = "error"; // Removes the `active` class
    } else {
        // If there is still an error, show the correct error
        showMailError()
    }
});

export function showMailError() {
    if (email.validity.valueMissing) {
        // If empty
        emailError.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        // If it's not an email address,
        emailError.textContent = "Entered value needs to be an email address.";
      } else if (email.validity.tooShort) {
        // If the value is too short,
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      }

      // Add the `active` class
    emailError.className = "error active";
};
