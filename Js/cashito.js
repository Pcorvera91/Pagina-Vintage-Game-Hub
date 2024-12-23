// carrito.js
// Recuperar el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Muestra los productos en el carrito
const mostrarCarrito = () => {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = '<p>Tu carrito está vacío</p>';
        actualizarResumen();
        return;
    }

    carrito.forEach((item, indice) => {
        const producto = document.createElement("article");
        producto.classList.add("producto-carrito");
        producto.innerHTML = `
            <div class="carrito-product-image">
                <img src="${item.imagen}" alt="${item.nombre}"/>
            </div>
            <div class="carrito-product-info">
                <h2>${item.nombre}</h2>
                <p>${item.descripcion}</p>
                <p class="precio">$${item.precio}</p>
                <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
            </div>
        `;
        lista.appendChild(producto);
    });

    actualizarResumen();
};


// Actualiza el resumen del carrito
const actualizarResumen = () => {
    const totalProductos = document.getElementById("total-productos");
    const importeTotal = document.getElementById("importe-total");

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalProductos.textContent = carrito.length;
    importeTotal.textContent = total.toFixed(2);
};

// Elimina un producto del carrito
const eliminarDelCarrito = (indice) => {
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};


// Inicializa el carrito al cargar la página
mostrarCarrito();
