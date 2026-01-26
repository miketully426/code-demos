const title = document.getElementById("title");

title.textContent = "CHUMBAWAMBA SUCKS!";

const picture = document.getElementById("image");

picture.addEventListener("click", () => {
  picture.innerHTML = `<img src="https://www.treblezine.com/wp-content/uploads/2014/06/chumbawamba2010_1-754455-1024x805.jpg.webp"></img>`;
});
