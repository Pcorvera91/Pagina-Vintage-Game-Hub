let carrito = [];

const agregarAlcarrito = (nombre, precio) => {
    carrito.push({ nombre, precio });
    actualizarContador();
    alert(`Agregaste : ${nombre} al carrito`);
};




document.addEventListener("DOMContentLoaded", actualizarContador);

window.addEventListener("beforeunload", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
});


