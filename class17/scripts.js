const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const table = document.querySelector("table");
  table.style.visibility = "visible";
  const input = document.querySelector("input").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const name = document.getElementById("name");
      const image = document.getElementById("image");
      const type = document.getElementById("type");

      name.textContent = json.name;
      image.innerHTML = `<img src=${json.sprites.front_default} >`;
      type.textContent = json.types[0].type.name;
    });
});
