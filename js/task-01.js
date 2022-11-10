const categoryList = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(function (element){
    console.log(`Category: ${element.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${element.querySelectorAll(`li`).length}`);
});
 

