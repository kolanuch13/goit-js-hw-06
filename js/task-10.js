function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const field = document.querySelector('#boxes');
const squareAmount = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
let amountOfItems = 0;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newSquare = document.createElement("div.item");
    newSquare.style.display = "flex";
    newSquare.textContent = "";
    newSquare.style.width = `${30 + i * 10}px`;
    newSquare.style.height = `${30 + i * 10}px`;
    newSquare.style.backgroundColor = `${getRandomHexColor()}`;
    field.append(newSquare);
  }
}

create.addEventListener('click', () => {
  amountOfItems = squareAmount.valueAsNumber;
  createBoxes(amountOfItems);
})

destroy.addEventListener('click', () => {
  field.replaceChildren();
})
