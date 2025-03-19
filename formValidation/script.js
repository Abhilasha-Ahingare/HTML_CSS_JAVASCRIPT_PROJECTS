const nameEl = document.getElementById("name-input");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const buttonEl = document.querySelector("button");

// Create separate span elements for error messages
const nameErrorSpan = document.createElement("span");
const emailErrorSpan = document.createElement("span");
const passwordErrorSpan = document.createElement("span");

// Add error span elements to the DOM
document.querySelector("label[for='name-input']").appendChild(nameErrorSpan);
document.querySelector("label[for='email']").appendChild(emailErrorSpan);
document.querySelector("label[for='password']").appendChild(passwordErrorSpan);

const namevalidation = () => {
  if (!nameEl.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErrorSpan.innerText = "write full name";
    return false;
  }
  nameErrorSpan.innerText = "✅";
  return true;
};

function passwordValidation() {
  if (passwordEl.value.length < 8) {
    passwordErrorSpan.innerText = " password must be at least 8 character";
    return false;
  }
  if (!passwordEl.value.match(/[@/.;'!]/)) {
    passwordErrorSpan.innerText = "mixed some special chartacter (@/.;'!)";
    return false;
  }
  passwordErrorSpan.innerText = "✅";
  return true;
}

function emailValidation() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailEl.value.match(emailRegex)) {
    emailErrorSpan.innerText = "invalid email format .please use a valid";
    return false;
  }
  emailErrorSpan.innerText = "✅";
  return true;
}

nameEl.addEventListener("change", namevalidation);
passwordEl.addEventListener("change", passwordValidation);
emailEl.addEventListener("change", emailValidation);

buttonEl.addEventListener("click", () => {
  if (namevalidation() && passwordValidation() && emailValidation()) {
    alert("form is submiting");
  }
});
