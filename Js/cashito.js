const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const mostrarCarrito = () => {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = '<p>Tu carrito está vacio</p>';
        actualizarResumen();
        return;
    }

    carrito.forEach((item, indice) => {
        const producto = document.createElement("article");
        producto.classList.add("producto");
        producto.innerHTML = `
            <h2>${item.nombre}</h2>
            <p class="precio">$${item.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        `;
        lista.appendChild(producto);
    });

    actualizarResumen();
};


const actualizarResumen = () => {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    document.getElementById("total-productos").textContent = carrito.length;
    document.getElementById("importe-total").textContent = total.toFixed(2);
};
