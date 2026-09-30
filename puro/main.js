const $boton = document.getElementById("boton");
const $aparecer = document.getElementById("aparecer");
$boton.addEventListener("click", (e) => {
  e.preventDefault();
  $aparecer.classList.remove("oculto");
  $aparecer.classList.add("visible");
  $boton.classList.add("oculto");
});
