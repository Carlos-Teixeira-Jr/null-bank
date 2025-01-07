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

for (let i = 1; i <= 5; i++) {
  const imgPath = `assets/avatares/avatar-0${i}.png`;
  userAvatares.push(imgPath);
}

userAvatares.push(`assets/images/user-round.svg`)

const avatarContainer = document.getElementById("avatar-container");

userAvatares.map((path, idx) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.classList.add("avatar");
  imgElement.style.left = `${(idx + 3.5) * 30}px`;
  avatarContainer.appendChild(imgElement);
  
  if (idx === userAvatares.length - 1) {
    imgElement.style.backgroundColor = '#EEE5FF'
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
