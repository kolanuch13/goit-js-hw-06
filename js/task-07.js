const mana = document.querySelector('#font-size-control')
const magic = document.querySelector('#text')

mana.addEventListener('input', () => {
    magic.style.fontSize = `${mana.value}px`;
    magic.style.color = `hsl(2${mana.value}, ${mana.value}%, ${mana.value - 10}%)`
})