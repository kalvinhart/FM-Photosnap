const cards = document.querySelectorAll(".pricing-card");
const buttons = document.querySelectorAll(".pricing-card__container a.btn");
const toggler = document.querySelector(".toggle-switch__checkbox");

const prices = document.querySelectorAll(".price");

const priceList = [19, 39, 99];
let isYearly= false;

function makeActive(e) {
    e.preventDefault();
    cards.forEach(card => card.classList.remove("active"));
    buttons.forEach((btn, i)=> {
        btn.classList.remove("btn-light");
        btn.classList.add("btn-dark")
        if (btn === e.target) {
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-light");
            cards[i].classList.add("active");
        }
    });
}

buttons.forEach(btn => btn.addEventListener("click", makeActive));

function handleToggle() {
    prices.forEach((price, i) => {
        price.textContent = isYearly ? `£${priceList[i].toFixed(2)}` : `£${(priceList[i] * 10).toFixed(2)}`;
    });
    isYearly = !isYearly;
}

toggler.addEventListener("click", handleToggle);