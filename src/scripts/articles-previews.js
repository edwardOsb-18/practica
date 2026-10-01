/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */

export class ArticlesPreviews {
  constructor(imagenes) {
    this.imagenes = imagenes;
  }

  getAparecer() {
    const cards = document.querySelectorAll(this.imagenes);
    cards.forEach((el) => {
      el.classList.remove("oculto");
      el.classList.add("visible");
    });
  }
}
