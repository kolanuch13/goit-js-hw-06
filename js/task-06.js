const input = document.querySelector("#validation-input");
const length = Number(input.getAttribute('data-length'));

input.addEventListener('blur', (event) => {
    if (event.target.value.length === length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});
