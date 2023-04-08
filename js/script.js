<<<<<<< HEAD
let przycisk = document.querySelector(".przycisk");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

przycisk.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

});
=======
let przycisk = document.querySelector(".przycisk");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

przycisk.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

});
>>>>>>> f27654633005332bc320d79a59c47c80ba8692f3
