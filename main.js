const submitBtn = document.getElementById("submitBtn");
const selectEl = document.getElementById("validationOptions");
const userInput = document.getElementById("userInput");

submitBtn.addEventListener("click", () => validateInput());

selectEl.addEventListener("change", () => updatePlaceholder());

function updatePlaceholder() {
  userInput.value = "";

  const valid = document.getElementById("valid");
  const inValid = document.getElementById("invalid");

  if (!valid.classList.contains("hidden")) {
    valid.classList.add("hidden");
  }

  if (!inValid.classList.contains("hidden")) {
    inValid.classList.add("hidden");
  }

  const selectedOption = document.getElementById("validationOptions").value;

  // Define placeholder texts for each option
  const placeholderTexts = {
    Email: "ex. example@gmail.com",
    "Phone Number": "ex. 017*******4",
    "Post Code": "ex. 1234",
  };

  // Set the placeholder based on the selected option
  if (selectedOption in placeholderTexts) {
    userInput.placeholder = placeholderTexts[selectedOption];
  } else {
    userInput.placeholder = "Enter the input to validate";
  }
}

function validateInput() {
  const selectedOption = document.getElementById("validationOptions").value;
  const valid = document.getElementById("valid");
  const inValid = document.getElementById("invalid");

  const validationOptions = {
    Email: /^[\w\.-]+@[\w\.-]+\.\w+$/,
    "Phone Number": /^(\+\d{13}|\d{11})$/,
    "Post Code": /^\d{4}$/,
  };

  if (selectedOption in validationOptions) {
    const regexPattern = validationOptions[selectedOption];
    const isValid = regexPattern.test(userInput.value);

    valid.classList.toggle("hidden", !isValid);
    inValid.classList.toggle("hidden", isValid);
  } else {
    document.getElementById("validationResult").innerText = "Option not found";
  }
}
