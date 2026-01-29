const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  form.innerHTML = `<h1>Welcome to Chumbawamba Fans of the Universe, ${name}</h1>
  <h2>Your password is ${password}</h2>`;
});
