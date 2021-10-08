/**
 * Andrés Felipe Estupiñán Peláez
 * Diseño web.
 * Universidad Nacional Abierta y a Distancia.
 */
"use strict";

const dropdowns = ".dropdown";
const iniciadorDropdown = ".dropdown-iniciador";
const seccionAnio = "#anio";
const btnDespliegue = ".seccion-responsive-iniciador";
const seccionResponsive = ".seccion-responsive";

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

    document.querySelector(btnDespliegue).addEventListener("click", function () {
        document.querySelector(seccionResponsive).classList.toggle("display-none-celulares");
    });

    const fecha = new Date();
    document.querySelector(seccionAnio).innerHTML = `&copy; ${fecha.getFullYear()}`;

}

window.addEventListener("load", iniciarComponentes);