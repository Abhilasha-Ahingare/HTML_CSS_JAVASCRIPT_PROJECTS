// Get the input elements
const inputValBill = document.getElementById("bill-amount");
const inputValTIP = document.getElementById("tip-percentage");

// Get the button and total elements
const buttonVal = document.querySelector("button");
const totalVal = document.querySelector(".total");

// Function to calculate the total amount
const calcFun = () => {
  // Get the input values
  const bill = parseFloat(inputValBill.value);
  const tip = parseFloat(inputValTIP.value);
  const amountCalc = bill * (1 + tip / 100);

  // Update the total value
  totalVal.innerText = ` total : $${amountCalc.toFixed(2)}`;

  // Clear the input fields
  inputValBill.value = "";
  inputValTIP.value = "";
};

// Add an event listener to the button
buttonVal.addEventListener("click", calcFun);
