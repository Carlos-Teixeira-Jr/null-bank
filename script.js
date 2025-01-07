const userAvatares = [];
const featuresCards = [
  {
    icon: `/assets/images/cash.svg`,
    title: "Recompensas",
    text: "Acumule pontos em cada compra e troque por produtos, serviços, milhas aéreas e muito mais.",
  },
  {
    icon: `/assets/images/credit-card.svg`,
    title: "Descontos",
    text: "Taxas de juros e tarifas de serviços competitivas, oferecendo melhores condições.",
  },
  {
    icon: `/assets/images/credit-card.svg`,
    title: "Cashback",
    text: "Ganhe uma porcentagem do valor gasto de volta em todas as compras.",
  },
  {
    icon: `/assets/images/credit-card.svg`,
    title: "Cartão Internacional",
    text: "Geração de cartões virtuais para compras online, garantindo maior segurança e controle.",
  },
];

for (let i = 1; i <= 6; i++) {
  const imgPath = `assets/avatares/avatar-0${i}.png`;
  userAvatares.push(imgPath);
}

const avatarContainer = document.getElementById("avatar-container");

userAvatares.map((path, idx) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.classList.add("avatar");
  imgElement.style.left = `${(idx + 3.5) * 30}px`;
  avatarContainer.appendChild(imgElement);

  if (idx === userAvatares.length - 1) {
    const svgElement = document.createElement("svg");
    svgElement.classList.add("avatar");
    svgElement.style.left = `${(idx + 2.5) * 30}px`;
    svgElement.style.backgroundColor = "#EEE5FF";
    svgElement.style.display = "flex";
    svgElement.style.justifyContent = "center";
    svgElement.style.alignItems = "center";
    svgElement.style.marginBottom = "30px";
    svgElement.innerHTML = `<svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 11C11.7614 11 14 8.76142 14 6C14 3.23858 11.7614 1 9 1C6.23858 1 4 3.23858 4 6C4 8.76142 6.23858 11 9 11ZM9 11C11.1217 11 13.1566 11.8429 14.6569 13.3431C16.1571 14.8434 17 16.8783 17 19M9 11C6.87827 11 4.84344 11.8429 3.34315 13.3431C1.84285 14.8434 1 16.8783 1 19" stroke="#6729FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
    avatarContainer.appendChild(svgElement);
  }
});

const pageName = document.location.pathname;

if (pageName === "/index.html") {
  const menuOptions = document.getElementsByClassName("home");
  menuOptions[0].style.color = "#6729FF";
}

const benefitsContainer = document.getElementById("benefits-container");

document.addEventListener("DOMContentLoaded", () => {
  const benefitsContainer = document.querySelector(".benefits-container");

  featuresCards.map((card, idx) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("benefit-card");
    cardElement.innerHTML = `
      <div class="card-icon-container">
        <img src="${card.icon}" alt="${card.title}">
        <h3>${card.title}</h3>
      </div>
      <p>${card.text}</p>
    `;

    if (idx % 2 === 0) {
      cardElement.style.width = "382px";
    } else {
      cardElement.style.width = "330px";
    }
    benefitsContainer.appendChild(cardElement);
  });
});
