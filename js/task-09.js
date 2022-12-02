function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const magicWand = document.querySelector('button.change-color')
const spel = document.querySelector('span.color')

magicWand.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spel.textContent = color;
});