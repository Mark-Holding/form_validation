import './styles.css';
import checkPostalCode from './check-postcode';
import { showMailError } from './check-email';
import checkPassword from './check-password';


window.onload = () => {
    document.getElementById("country").onchange = checkPostalCode;
    document.getElementById("zip").oninput = checkPostalCode;
    document.getElementById("email").oninput = showMailError;
    document.getElementById("password").oninput = checkPassword;
    document.getElementById("confirm-password").oninput = checkPassword;

  };
