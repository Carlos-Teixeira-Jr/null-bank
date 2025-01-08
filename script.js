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

  let formDataErrors = {
    name: '',
    lastName: '',
    email: '',
    message: ''
  };

  if (!name) {
    formDataErrors.name = "Por favor, insira seu nome";
  }

  if (!lastName) {
    formDataErrors.lastName = "Por favor, insira seu sobrenome"
  }
  if (!email) {
    formDataErrors.email = "Por favor, insira seu email"
  }
  if (!message) {
    formDataErrors.message = "Por favor, insira sua mensagem";
  }

  Object.entries(formDataErrors).forEach(([key, value]) => {
      const element = document.getElementById(key);
      const errorMsg = element.parentNode.querySelector(".error-msg");
      if (errorMsg) {
        errorMsg.remove()
      }
      element.style.border = "#94A3B8 1px solid"
  })

  Object.entries(formDataErrors).forEach(([key, value]) => {
    if (value !== '') {
      const element = document.getElementById(key);
      element.style.border = "1px solid red";

      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-msg");
      errorMsg.textContent = value;

      element.parentNode.appendChild(errorMsg);
    }
  })

  if (!Object.values(formDataErrors).some((value) => value)) {
    const formData = {
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };

    console.log("Deu certo")

    // localStorage.setItem("formData", JSON.stringify(formData));
  }
});
