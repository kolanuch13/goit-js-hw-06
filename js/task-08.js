const form = document.querySelector(".login-form");
const value = form.querySelector("input")

form.addEventListener("submit", handleSubmit);
let data = {};

function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
     window.alert("Please fill in all the fields!");
  } else {
      data.email = email.value;
      data.password = password.value;
  }

  console.log(data);
  event.currentTarget.reset();
}
