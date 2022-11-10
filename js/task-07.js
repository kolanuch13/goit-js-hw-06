const mana = document.querySelector('#font-size-control')
const magic = document.querySelector('#text')

mana.addEventListener('input', () => {
    magic.style.fontSize = `${mana.value}px`;
    magic.style.color = `hsl(2${mana.value}, ${mana.value}%, ${mana.value - 10}%)`
    // function getRandomHexColor() {
    //     return `#${Math.floor(Math.random() * 16777215)
    //     .toString(16)
    //     .padStart(6, 0)}`;
    // }
    // magic.style.color = getRandomHexColor()
})