const myNumber = document.querySelector('#value');
const dedBtn = document.querySelector("[data-action='decrement']");
const addBtn = document.querySelector("[data-action='increment']");
let counterValue = 0

dedBtn.addEventListener('click', () => {
    counterValue -= 1;
    myNumber.textContent = counterValue;
    return counterValue;
});

addBtn.addEventListener('click', () => {
    counterValue += 1;
    myNumber.textContent = counterValue;
    return counterValue;
});
