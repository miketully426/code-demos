const title = document.getElementById("title");

title.textContent = "CHUMBAWAMBA SUCKS!";

const picture = document.getElementById("image");

picture.addEventListener("mouseover", () => {
  picture.innerHTML = `<img src="https://www.treblezine.com/wp-content/uploads/2014/06/chumbawamba2010_1-754455-1024x805.jpg.webp"></img>`;
});

picture.addEventListener("mouseout", () => {
  picture.innerHTML =
    '<img src="https://cdn.craft.cloud/26ed9c78-feb7-4ee6-8ddf-262fd7bafb2d/assets/tco/images/Huck/chumbawambabiography.jpg?width=800&quality=75&format=webp&fit=crop&s=okfRvOAylSwCMBiWgw3zgSAMdpx8Tq-jaRSaGyq1tZQ" alt="The band having fun" />';
});
