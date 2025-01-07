const appFeatures = [
  {
    icon: `assets/images/cash-icon.svg`,
    title: "Cashback",
    text: "Receba parte do seu dinheiro de volta em todas as suas compras.",
  },
  {
    icon: `assets/images/gift-icon.svg`,
    title: "Ofertas",
    text: "Acesse promoções exclusivas diretamente no app.",
  },
  {
    icon: `assets/images/credit-card-icon.svg`,
    title: "Segurança",
    text: "Bloqueie e configure seu cartão com facilidade.",
  },
]

for (let i = 1; i <= 5; i++) {
  const imgPath = `assets/avatares/avatar-0${i}.png`;
  userAvatares.push(imgPath);
}

const pageName = document.location.pathname;

if (pageName === "/index.html") {
  const menuOptions = document.getElementsByClassName("home");
  menuOptions[0].style.color = "#6729FF";
}
