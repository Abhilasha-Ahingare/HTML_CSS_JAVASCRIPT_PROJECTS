// Select elements
const thankuEl = document.querySelector(".thank-you");
const textEl = document.querySelector(".text");
const toastBox = document.querySelector(".messges");

// Add event listener to thank you element

thankuEl.addEventListener("click", () => {
  // Show text element with animation

  textElement.style.display = "flex";
  textElement.style.animation = "anim 2s linear";
  // Hide toast box

  toastBoxElement.style.display = "none";
});

// Define message constants

let sucessMsg = "successfully submited";
let eorrorMsg = "please fix the error";
let invalidMsg = "invalid please checked";

// Function to show toast message
function showToast(msg) {
  // Create toast element

  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;

  // Append toast element to toast box
  toastBox.appendChild(toast);

  // Add class based on message type
  if (msg.includes("error")) {
    toast.classList.add("errorMsg");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }
  // Remove toast element after 4 seconds

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
