/**
 * Andrés Felipe Estupiñán Peláez
 * Diseño web.
 * Universidad Nacional Abierta y a Distancia.
 */
"use strict";

const dropdowns = ".dropdown";
const iniciadorDropdown = ".dropdown-iniciador";

/**
 * Función que inicializa los componentes normalmente usados en la página.
 */
const iniciarComponentes = () => {
    document.querySelectorAll(dropdowns).forEach((elemento) => {
        const iniciador = elemento.querySelector(iniciadorDropdown);
        iniciador.addEventListener("click", function () {
            elemento.querySelector("ul").classList.toggle("display-none");
        });
        iniciador.addEventListener("focusout", function () {
            elemento.querySelector("ul").classList.add("display-none");
        });
    });
}

window.addEventListener("load", iniciarComponentes);