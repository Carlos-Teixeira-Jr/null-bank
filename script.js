const userAvatares = [];
const featuresCards = [
  {
    icon: `assets/images/gift-icon.svg`,
    title: "Recompensas",
    text: "Acumule pontos em cada compra e troque por produtos, serviços, milhas aéreas e muito mais.",
  },
  {
    icon: `assets/images/percent-icon.svg`,
    title: "Descontos",
    text: "Taxas de juros e tarifas de serviços competitivas, oferecendo melhores condições.",
  },
  {
    icon: `assets/images/cash-icon.svg`,
    title: "Cashback",
    text: "Ganhe uma porcentagem do valor gasto de volta em todas as compras.",
  },
  {
    icon: `assets/images/credit-card-icon.svg`,
    title: "Cartão Internacional",
    text: "Geração de cartões virtuais para compras online, garantindo maior segurança e controle.",
  },
  {
    icon: `assets/images/credit-card-icon.svg`,
    title: "Carteiras Digitais",
    text: "Aceito em milhões de estabelecimentos ao redor do mundo, facilitando compras e viagens internacionais.",
  },
];

for (let i = 1; i <= 5; i++) {
  const imgPath = `assets/avatares/avatar-0${i}.png`;
  userAvatares.push(imgPath);
}

userAvatares.push(`assets/images/user-round.svg`);

const avatarContainer = document.getElementById("avatar-container");

userAvatares.map((path, idx) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.classList.add("avatar");
  imgElement.style.left = `${(idx + 3.5) * 30}px`;
  avatarContainer.appendChild(imgElement);

  if (idx === userAvatares.length - 1) {
    imgElement.style.backgroundColor = "#EEE5FF";
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

    cardElement.innerHTML = idx === featuresCards.length - 1 ? (
      `
      <div class="benefit-card-large">
        <div class="last-card-left">
          <div class="card-title-container">
            <img src="${card.icon}" alt="${card.title}" class="card-icon-container">
            <h3>${card.title}</h3>
          </div>
          <p>${card.text}</p>
        </div>
        <div class="last-card-right">
          <div class="card-ornamental-left"></div>
          <div class="card-ornamental-right"></div>
        </div>
      </div>
    `
    ) : (
      `
      <div class="benefit-card-common">
        <div class="card-title-container">
          <img src="${card.icon}" alt="${card.title}" class="card-icon-container">
          <h3>${card.title}</h3>
        </div>
        <p>${card.text}</p>
      </div>
    `
    );
    if (idx === featuresCards.length - 1) {
      cardElement.classList.add("last-benefit-card");
      cardElement.style.backgroundColor = "#F3F2FF";
    }

    cardElement.style.width = (idx === 1 || idx === 2) ? "382px" : idx === featuresCards.length - 1 ? "" : "300px";
    benefitsContainer.appendChild(cardElement);
  });
});
