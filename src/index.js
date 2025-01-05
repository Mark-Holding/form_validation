import './styles.css';
import checkPostalCode from './check-postcode';
import { showMailError } from './check-email';
import checkPassword from './check-password';
import submitButton from './submitButton';


window.onload = () => {
    document.getElementById("country").onchange = checkPostalCode;
    document.getElementById("zip").oninput = checkPostalCode;
    document.getElementById("email").oninput = showMailError;
    document.getElementById("password").oninput = checkPassword;
    document.getElementById("confirm-password").oninput = checkPassword;
    document.getElementById("submit").onclick = submitButton;
    // Trigger the change event for the country selection manually on page load. This fixed the issue of the change event not firing on first selection because "" to "US" for example isn't considered change.
    country.dispatchEvent(new Event("change"));
    
  };
