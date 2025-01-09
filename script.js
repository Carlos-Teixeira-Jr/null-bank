const pageName = document.location.pathname;
const nameInputElement = document.getElementById("name");
const lastNameInputElement = document.getElementById("lastName");
const messageInputElement = document.getElementById("message");
const emailInputElement = document.getElementById("email");
const submitButtonElement = document.getElementById("form-button");
const newsLetterInputElement = document.getElementById("newsletter-input");
const sendEmailButtonElement = document.getElementById("send-email-icon");

if (pageName === "/index.html") {
  const menuOptions = document.getElementsByClassName("home");
  menuOptions[0].style.color = "#6729FF";
} else if (pageName === "/contact.html") {
  const menuOptions = document.getElementsByClassName("contact");
  menuOptions[0].style.color = "#6729FF";
}

function validateName(name) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  const nameIsValid = nameRegex.test(name);
  return nameIsValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailIsValid = emailRegex.test(email);
  return emailIsValid;
}

function successMessage(elementId) {
  const submitBtnElement = document.getElementById(elementId);
  const successMsgElement = document.createElement("span");
  successMsgElement.classList.add("success-msg");
  successMsgElement.textContent = "Dados enviados com sucesso!";
  submitBtnElement.parentNode.appendChild(successMsgElement);

  setTimeout(() => {
    successMsgElement.remove();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
  const buttonsComponent = document.getElementById("buttons");
  const navMenuComponent = document.getElementById("menu");
  const headerComponent = document.getElementById("header");


  if (mobileMenuBtnElement) {
    let mobileMenuIsOpen = mobileMenuBtnElement.src.includes("menu");

    mobileMenuBtnElement.addEventListener("click", () => {
      mobileMenuIsOpen = !mobileMenuIsOpen;
      if (!mobileMenuIsOpen) {
        mobileMenuBtnElement.src = "assets/icons/close-icon.svg";
        buttonsComponent.style.display = "block";
        navMenuComponent.style.display = "flex";
        headerComponent.style.height = "18rem";
      } else {
        mobileMenuBtnElement.src = "assets/icons/mobile-menu.svg";
        buttonsComponent.style.display = "none";
        navMenuComponent.style.display = "none";
        headerComponent.style.height = "4rem";
      }
    });
  }
});

sendEmailButtonElement.addEventListener("click", () => {
  const value = newsLetterInputElement.value;
  let errorMsg = "";

  if (!value) {
    errorMsg = "Por favor, insira seu email";
  }

  if (value && !validateEmail(value)) {
    errorMsg = "O email informado não é válido";
  }

  const errorElementExists =
    newsLetterInputElement.parentNode.querySelector(".error-msg");

  if (errorElementExists) {
    errorElementExists.remove();
    newsLetterInputElement.style.border = "#94A3B8 1px solid";
  }

  if (errorMsg !== "") {
    newsLetterInputElement.style.border = "1px solid red";
    const errorMsgElement = document.createElement("p");
    errorMsgElement.classList.add("error-msg");
    errorMsgElement.textContent = errorMsg;
    newsLetterInputElement.parentNode.appendChild(errorMsgElement);

    const emailContainerElement = document.querySelector(
      ".send-email-icon-container"
    );

    emailContainerElement.style.bottom = "53%";

    setTimeout(() => {
      newsLetterInputElement.style.border = "#94A3B8 1px solid";
      errorMsgElement.remove();
      emailContainerElement.style.bottom = "22%";
    }, 5000);
  } else {
    successMessage("send-email-icon-container");
  }
});

submitButtonElement.addEventListener("click", () => {
  const name = nameInputElement.value;
  const lastName = lastNameInputElement.value;
  const email = emailInputElement.value;
  const message = messageInputElement.value;

  let formDataErrors = {
    name: "",
    lastName: "",
    email: "",
    message: "",
  };

  if (!name) {
    formDataErrors.name = "Por favor, insira seu nome";
  }
  if (name && !validateName(name)) {
    formDataErrors.name = "O nome informado não é válido";
  }

  if (!lastName) {
    formDataErrors.lastName = "Por favor, insira seu sobrenome";
  }
  if (lastName && !validateName(lastName)) {
    formDataErrors.lastName = "O sobrenome informado não é válido";
  }

  if (!email) {
    formDataErrors.email = "Por favor, insira seu email";
  }
  if (email && !validateEmail(email)) {
    formDataErrors.email = "O email informado não é válido";
  }

  if (!message) {
    formDataErrors.message = "Por favor, insira sua mensagem";
  }

  Object.keys(formDataErrors).forEach((key) => {
    const element = document.getElementById(key);
    const errorMsg = element.parentNode.querySelector(".error-msg");
    if (errorMsg) {
      errorMsg.remove();
    }
    element.style.border = "#94A3B8 1px solid";
  });

  Object.entries(formDataErrors).forEach(([key, value]) => {
    if (value !== "") {
      const element = document.getElementById(key);
      element.style.border = "1px solid red";
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-msg");
      errorMsg.textContent = value;
      element.parentNode.appendChild(errorMsg);
    }
  });

  if (!Object.values(formDataErrors).some((value) => value)) {
    const formData = {
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };
    console.log(
      "🚀 ~ submitButtonElement.addEventListener ~ formData:",
      formData
    );

    localStorage.setItem("formData", JSON.stringify(formData));

    successMessage("form-button");
  }
});
