
   

    // For each country, defines the pattern that the postal code has to follow
    const constraints = {
      noSelect: [
        /^[0-9]{5}(?:-[0-9]{4})?$/,
        "You must select a country to begin",
      ],
      US: [
        /^[0-9]{5}(?:-[0-9]{4})?$/,
        "US postal codes must have 5-digit or 5+4-digit format (e.g., 12345 or 12345-6789)",
      ],
      CA: [
        /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
        "Canadian postal codes format is A1A 1A1 where A is a letter and 1 is a digit (e.g., K1A 0B1)",
      ],
      UK: [
        /^[A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2}$/,
        "UK postal codes are complex, valid UK postcodes (e.g., SW1A 1AA",
      ],
      AU: [
        /^\d{4}$/,
        "Australian postal codes are 4 digits (e.g., 4000)",
      ],
    };

    

// Default export function for postal code validation

export default function checkPostalCode() {
    
  const postcodeError = document.querySelector("#zip + span.error");
  const country = document.getElementById("country").value;
  const postalCodeField = document.getElementById("zip");


  postalCodeField.addEventListener("input", () => {
    const postcode = postalCodeField.value;

    const correctPattern = constraints[country][0];

    if (!correctPattern.test(postcode)) {
        postcodeError.textContent = constraints[country][1];
        postcodeError.className = "error active";
    } else {
        postcodeError.textContent = "";
        postcodeError.className = "error";
    }


});

}