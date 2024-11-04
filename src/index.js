import './styles.css';
import checkPostalCode from './check-postcode';

window.onload = () => {
    document.getElementById("country").onchange = checkPostalCode;
    document.getElementById("zip").oninput = checkPostalCode;
  };
