/* GALERÍA INDEX */

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
}


/* CARRUSELES GALERÍA */

const carruselesGaleria = document.querySelectorAll(".carrusel-galeria");

carruselesGaleria.forEach(function (carrusel) {

    const pista = carrusel.querySelector(".galeria-pista");
    const anterior = carrusel.querySelector(".anterior-galeria");
    const siguiente = carrusel.querySelector(".siguiente-galeria");
    const imagen = pista.querySelector("img");

    if (pista && anterior && siguiente && imagen) {

        siguiente.addEventListener("click", function () {
            const distancia = imagen.offsetWidth + 18;

            pista.scrollBy({
                left: distancia,
                behavior: "smooth"
            });
        });

        anterior.addEventListener("click", function () {
            const distancia = imagen.offsetWidth + 18;

            pista.scrollBy({
                left: -distancia,
                behavior: "smooth"
            });
        });
    }
});

/* IMAGEN AMPLIADA PERSONAJES */

const imagenesPersonajes = document.querySelectorAll(".liar-card img");

imagenesPersonajes.forEach(function (imagen) {

    imagen.addEventListener("click", function (event) {
        event.stopPropagation();

        imagenesPersonajes.forEach(function (otraImagen) {
            otraImagen.classList.remove("imagen-expandida");
        });

        imagen.classList.add("imagen-expandida");
    });

});

document.addEventListener("click", function () {

    imagenesPersonajes.forEach(function (imagen) {
        imagen.classList.remove("imagen-expandida");
    });

});

/* AMPLIAR IMÁGENES*/
const imagenesExpandibles = document.querySelectorAll(".expandible");

imagenesExpandibles.forEach(function (imagen) {

    imagen.addEventListener("click", function (event) {
        event.stopPropagation();

        document.querySelectorAll(".imagen-ampliada").forEach(function (img) {
            img.classList.remove("imagen-ampliada");
        });

        imagen.classList.add("imagen-ampliada");
    });

});

document.addEventListener("click", function () {

    document.querySelectorAll(".imagen-ampliada").forEach(function (imagen) {
        imagen.classList.remove("imagen-ampliada");
    });

});

/* FORMULARIOS ENVIADOS */

const formularios = document.querySelectorAll("form");
const mensajeFormulario = document.querySelector("#mensaje-formulario");
const textoMensaje = document.querySelector("#texto-mensaje");
const cerrarMensaje = document.querySelector("#cerrar-mensaje");

if (mensajeFormulario && textoMensaje && cerrarMensaje) {

    formularios.forEach(function(formulario) {

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            if (formulario.classList.contains("form-resena")) {
                textoMensaje.textContent = "¡Tu reseña fue enviada correctamente!";
            } else {
                textoMensaje.textContent = "¡Formulario enviado correctamente!";
            }

            mensajeFormulario.classList.add("activo");

            formulario.reset();
        });

    });

    cerrarMensaje.addEventListener("click", function() {
        mensajeFormulario.classList.remove("activo");
    });

}
/* LIGHTBOX GALERÍAS */

const lightbox = document.querySelector("#lightbox");

if (lightbox) {

    const imagenLightbox = lightbox.querySelector(".lightbox-imagen");
    const cerrarLightbox = lightbox.querySelector(".lightbox-cerrar");

    const imagenesGaleria = document.querySelectorAll(
        ".galeria-pista img, .gallery-track img"
    );

    imagenesGaleria.forEach(function(imagen) {

        imagen.addEventListener("click", function() {

            imagenLightbox.src = imagen.src;
            imagenLightbox.alt = imagen.alt;

            lightbox.classList.add("activo");
        });

    });

    cerrarLightbox.addEventListener("click", function(event) {
        event.stopPropagation();
        lightbox.classList.remove("activo");
    });

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {
            lightbox.classList.remove("activo");
        }

    });

}