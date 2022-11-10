const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', (event) => {
    event.target.value.length === 0 ?
        output.textContent = "Anonymus" :
        output.textContent = event.target.value;
});
