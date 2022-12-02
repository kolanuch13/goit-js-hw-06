const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

const salad = ingredients.map(opt => {
  const item = document.createElement("li");
    item.textContent = opt;
    item.className = `item`;
    return item; 
})  

list.append(...salad)

