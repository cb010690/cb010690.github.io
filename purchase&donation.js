const form = document.getElementById('form');

function validateName() {
  const name = document.getElementById("name");
  return name.value.trim() !== "";
}

function validateAddress() {
  const address = document.getElementById("address");
  return address.value.trim() !== "";
}

function validateCardNumber() {
  const cardNumberInput = document.getElementById('cardNumber');
  return cardNumberInput.value.length === 16;
}

function validateExpiryDate(date) {
  const now = new Date();
  const expiryDate = new Date(date);
  return expiryDate > now; // return true if expiry date is in the future
}

function validateCVV(cvv) {
  const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4 digits only
  return cvvRegex.test(cvv);
}

function validateForm(event) {  
  event.preventDefault();
  let isValid = true;
  const dateInput = document.getElementById('date');
  const cvvInput = document.getElementById('cvv');
  
  if (!validateName()) {
    isValid = false;
    alert('Please enter a valid name.');
    return isValid;
  }

  if (!validateAddress()) {
    isValid = false;
    alert('Please enter a valid address.');
    return isValid;
  }

  if (!validateCardNumber()) {
    isValid = false;
    alert('Please enter a valid credit card number.');
    return isValid;
  }

  if (!validateExpiryDate(dateInput.value)) {
    isValid = false;
    alert('Please enter a valid expiry date.');
    return isValid;
  }

  if (!validateCVV(cvvInput.value)) {
    isValid = false;
    alert('Please enter a valid CVV.');
    return isValid;
  }

  const amountInput = document.getElementById('amount');
  const nameInput = document.getElementById('name');
  const amount = amountInput.value;
  const name = nameInput.value;
  alert(`Thank you ${name}for donating ${amount} LKR`);
  
  return isValid;
}

function setValue(select) {
  const amountInput = document.getElementById('amount');
  amountInput.value = select.value; // set the selected value as the input value
}

form.addEventListener('submit', validateForm);
