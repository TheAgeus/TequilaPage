const button = document.querySelector(".boton-tres-lineas")
const contenido = document.querySelector(".contenido")
const linea1 = button.querySelector(".linea1")
const linea2 = button.querySelector(".linea2")
const linea3 = button.querySelector(".linea3")
let estado = "tres lineas" // Puede ser tres lineas o equis

// Movimientos si es que esta en modo tres lineas
const line1movement = {
    transform: "rotate(45deg)",
};
const line3movement = {
    transform: "rotateZ(-45deg)",
}
const line2movement = {
    opacity: "0",
}

// Movimientos si es que esta en modo equis
const line1movement2 = {
    transform: "rotate(0deg)",
};
const line3movement2 = {
    transform: "rotateZ(0deg)",
}
const line2movement2 = {
    opacity: "1",
}

const time = {
    duration: 500,
    iteration: 1,
    fill: "forwards",
};

button.addEventListener("click", (event) => {
    if(estado === "tres lineas") {
        linea1.animate(line1movement, time)
        linea3.animate(line3movement, time)
        linea2.animate(line2movement, time)
        contenido.animate(line2movement2, time)
        estado = "equis"
    }
    else {
        linea1.animate(line1movement2, time)
        linea3.animate(line3movement2, time)
        linea2.animate(line2movement2, time)
        contenido.animate(line2movement, time)

        estado = "tres lineas"
    }
});