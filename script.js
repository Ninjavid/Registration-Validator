const form = document.getElementById("form");
const password1El = document.getElementById("password1El");
const password2El = document.getElementById("password2El");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

function processFormData(e) {
  console.log(e);
  e.preventDefault();
}

// Event Listener
form.addEventListener("submit", processFormData);
