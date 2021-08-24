"use strict";

// traemos la sección de hola mundo.
const seccionHolaMundo = document.querySelector("#holaMundo");

//evento al dar click al botón.
document.querySelector("#btnHolaMundo").addEventListener("click", function () {
    this.classList.add("oculto");
    const clases = seccionHolaMundo.classList;
    clases.remove("oculto");
    clases.add("fadein");
});