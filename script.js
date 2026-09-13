/* GALERÍA-index */

const gallery = document.querySelector(".gallery-track");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

if (gallery && previous && next) {

    next.addEventListener("click", function () {
        gallery.scrollBy({
            left: 450,
            behavior: "smooth"
        });
    });

    previous.addEventListener("click", function () {
        gallery.scrollBy({
            left: -450,
            behavior: "smooth"
        });
    });
}


/* PERSONAJES SECUNDARIOS */

const trackPersonajes = document.querySelector(".secundarios-track");
const anteriorPersonajes = document.querySelector(".anterior");
const siguientePersonajes = document.querySelector(".siguiente");

if (trackPersonajes && anteriorPersonajes && siguientePersonajes) {

    const tarjetaPersonaje = document.querySelector(".secundario-card");

    siguientePersonajes.addEventListener("click", function () {
        trackPersonajes.scrollBy({
            left: tarjetaPersonaje.offsetWidth + 20,
            behavior: "smooth"
        });
    });

    anteriorPersonajes.addEventListener("click", function () {
        trackPersonajes.scrollBy({
            left: -(tarjetaPersonaje.offsetWidth + 20),
            behavior: "smooth"
        });
    });
}


/* VOTO FORM */

const votacion = document.querySelector(".votacion-form");
const mensajeVoto = document.querySelector(".mensaje-voto");

if (votacion && mensajeVoto) {

    votacion.addEventListener("submit", function (event) {
        event.preventDefault();

        const temporadaElegida =
            votacion.querySelector('input[type="radio"]:checked');

        if (temporadaElegida) {
            mensajeVoto.style.display = "block";
        }
    });

/* CARRUSELES GALERÍA */

const carruselesGaleria = document.querySelectorAll(".carrusel-galeria");

carruselesGaleria.forEach(function (carrusel) {

    const pista = carrusel.querySelector(".galeria-pista");
    const anterior = carrusel.querySelector(".anterior-galeria");
    const siguiente = carrusel.querySelector(".siguiente-galeria");

    if (pista && anterior && siguiente) {

        siguiente.addEventListener("click", function () {
            pista.scrollBy({
                left: 350,
                behavior: "smooth"
            });
        });

        anterior.addEventListener("click", function () {
            pista.scrollBy({
                left: -350,
                behavior: "smooth"
            });
        });
    }
});