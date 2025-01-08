const pageName = document.location.pathname;

if (pageName === "/index.html") {
  const menuOptions = document.getElementsByClassName("home");
  menuOptions[0].style.color = "#6729FF";
} else if (pageName === "/contact.html") {
  const menuOptions = document.getElementsByClassName("contact");
  menuOptions[0].style.color = "#6729FF";
}

const nameInputElement = document.getElementById("name");
const lastNameInputElement = document.getElementById("lastName");
const messageInputElement = document.getElementById("message");
const emailInputElement = document.getElementById("email");
const buttonElement = document.getElementById("form-button");

buttonElement.addEventListener("click", () => {
  const name = nameInputElement.value;
  const lastName = lastNameInputElement.value;
  const email = emailInputElement.value;
  const message = messageInputElement.value;

  const isOk = false;

  // Validations
  if (!name) {
    nameInputElement.style.border = "1px solid red";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Por favor, insira seu nome";
    nameInputElement.parentNode.appendChild(errorMsg);
  }
  if (!lastName) {
    lastNameInputElement.style.border = "1px solid red";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Por favor, insira seu sobrenome";
    lastNameInputElement.parentNode.appendChild(errorMsg);
  }
  if (!email) {
    emailInputElement.style.border = "1px solid red";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Por favor, insira seu email";
    emailInputElement.parentNode.appendChild(errorMsg);
  }
  if (!message) {
    messageInputElement.style.border = "1px solid red";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Por favor, insira sua mensagem";
    messageInputElement.parentNode.appendChild(errorMsg);
  }
  
  if (isOk) {
    const formData = {
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
  }
});
