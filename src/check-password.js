export default function checkPassword() {


const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");


// Validate password strength

passwordField.addEventListener("input", () => {
    const password = passwordField.value;

    const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordPattern.test(password)) {
        passwordError.textContent = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        passwordError.className = "error active";
    } else {
        passwordError.textContent = "";
        passwordError.className = "error";
    }


});


// Validate confirm password

confirmPasswordField.addEventListener("input", () => {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.className = "error active";
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordError.className = "error";
    }
  });

};
