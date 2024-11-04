export default function checkPostalCode() {
    // For each country, defines the pattern that the postal code has to follow
    const constraints = {
      US: [
        "/^[0-9]{5}(?:-[0-9]{4})?$/",
        "US postal codes must have 5-digit or 5+4-digit format (e.g., 12345 or 12345-6789)",
      ],
      CA: [
        "/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/",
        "Canadian postal codes format is A1A 1A1 where A is a letter and 1 is a digit (e.g., K1A 0B1)",
      ],
      UK: [
        "/^[A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2}$/",
        "UK postal codes are complex, valid UK postcodes (e.g., SW1A 1AA",
      ],
      AU: [
        "/^\d{4}$/",
        "Australian postal codes are 4 digits (e.g., 4000)",
      ],
    };
  
    // Read the country id
    const country = document.getElementById("country").value;

    // Get the NPA field
    const postalCodeField = document.getElementById("zip");
  
    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");

    // Check it!
    if (constraint.test(postalCodeField.value)) {
      // The postal code follows the constraint, we use the ConstraintAPI to tell it
      postalCodeField.setCustomValidity("");
    } else {
      // The postal code doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
      postalCodeField.setCustomValidity(constraints[country][1]);
    }
  }