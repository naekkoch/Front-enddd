const darkMode = () => {
  let body = document.querySelector("body");
  let footer = document.querySelector(".footer");
  let titulos = document.querySelectorAll("h2");
  let paragrafo = document.querySelectorAll("p");

  body.classList.toggle("light");
  footer.classList.toggle("light");

  titulos.forEach((element) => {
    element.classList.toggle("light");
  });

  titulo1.forEach((element) => {
    element.classList.toggle("light");
  });

  paragrafo.forEach((element) => {
    element.classList.toggle("light");
    element.classList.toggle("sobre-mim__text");
  });
};
