"use strict";

// detectar automáticamente si debemos activar o inactivar el tema oscuro.
if (typeof(window.matchMedia) !== "undefined") {
    if (typeof(window.localStorage) !== "undefined") {
        // si tiene registrado en el localstorage, cargamos el valor guardado.
        if (window.localStorage.getItem("tema-oscuro") != null) {
            const esOscuro = window.localStorage.getItem("tema-oscuro") == '1';
            ajustarTemaOscuro(esOscuro);
            document.querySelector("#checkTemaOscuro").checked = esOscuro;
        }
    } else {
        // si no, detectamos automáticamente desde el usuario.
        const check = document.querySelector("#checkTemaOscuro");
        if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
            ajustarTemaOscuro(false);
            check.checked = false;
        }
    }
}

/**
 * Función que permite establecer si debemos activar el tema oscuro en la página.
 * @param {boolean} oscuro Boolean que indica si debemos activarlo.
 */
function ajustarTemaOscuro(oscuro = false) {
    const clasesBody = document.querySelector("body")?.classList ?? [];
    const clasesNavbar = document.querySelector("nav")?.classList ?? [];
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    const cards = document.querySelectorAll(".card");
    if (!oscuro) {
        // quitamos el tema oscuro.
        clasesBody.remove("bg-dark", "text-light");
        clasesBody.add("bg-light");
        if (clasesNavbar.length) {
            clasesNavbar.remove("navbar-dark", "bg-dark");
            clasesNavbar.add("navbar-light", "bg-light");
        }
        dropdowns.forEach((element) => element.classList.remove("dropdown-menu-dark"));
        cards.forEach((element) => element.classList.remove("text-white", "bg-dark"));
    } else {
        // habilitamos el tema oscuro.
        clasesBody.add("bg-dark", "text-light");
        clasesBody.remove("bg-light");
        if (clasesNavbar.length) {
            clasesNavbar.add("navbar-dark", "bg-dark");
            clasesNavbar.remove("navbar-light", "bg-light");
        }
        dropdowns.forEach((element) => element.classList.add("dropdown-menu-dark"));
        cards.forEach((element) => element.classList.add("text-white", "bg-dark"));
    }
}

// check para verificar si debemos activar el tema oscuro.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#checkTemaOscuro").addEventListener("change", function () {
        // guardamos en una variable del navegador para recordarlo en el resto del sitio.
        window.localStorage.setItem("tema-oscuro", this.checked ? 1 : 0);
        ajustarTemaOscuro(this.checked);
    });
});