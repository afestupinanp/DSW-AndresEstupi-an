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
    const listados = document.querySelectorAll(dropdowns);
    listados.forEach((elemento) => {
        const iniciador = elemento.querySelector(iniciadorDropdown);
        iniciador.addEventListener("click", function () {
            elemento.querySelector("ul").classList.toggle("display-none");
        });
    });

    document.addEventListener("click", function (evt) {
        const target = evt.target;
        const valores = listados.values();
        let continuar = true;
        for (let elemento of valores) {
            if (elemento.contains(target)) {
                continuar = false;
            }
        }
        if (continuar) {
            document.querySelectorAll(`${dropdowns} ul`).forEach((elemento) => elemento.classList.add("display-none"));
        }
    });

    // al dar clic en el botón de desplegar el menu en celulares.
    document.querySelector(btnDespliegue).addEventListener("click", function () {
        document.querySelector(seccionResponsive).classList.toggle("display-none-celulares");
    });

    // cargar el año actual.
    const fecha = new Date();
    document.querySelector(seccionAnio).innerHTML = `&copy; ${fecha.getFullYear()}`;
}

window.addEventListener("load", iniciarComponentes);