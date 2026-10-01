import {ArticlesPreviews} from './articles-previews.js';
console.log("first")
const $boton = document.getElementById("boton");

$boton.addEventListener("click", (e) => {
  e.preventDefault();
 const ar= new ArticlesPreviews(".oculto")
ar.getAparecer()
  $boton.classList.add("oculto");
});
