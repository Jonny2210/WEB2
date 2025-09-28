var productos = [
    {nombre: "Camisa", precio: 300},
    {nombre: "Pantalón", precio: 200},
    {nombre: "Zapatos", precio: 400},
    {nombre: "Sombrero", precio: 150},
];

var carrito = [];

function agregarProducto(indice) {
    carrito.push(productos[indice]);
    alert(`${productos[indice].nombre} agregado al carrito.`);
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Productos en el carrito:\n";
        let total = 0;
        carrito.forEach((producto, index) => { 
            total += producto.precio;
        });
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

function mostrarMenu() {
    let option;
    do {
        option = prompt(`
            Elige un producto para agregar al carrito:
            1.- Camisa - $300
            2.- Pantalón - $200
            3.- Zapatos - $400
            4.- Sombrero - $150
            5.- Ver carrito y total
            6.- Salir
        `);

        switch (option) {
            case '1':
                agregarProducto(0);
                break;
            case '2':
                agregarProducto(1);
                break;
            case '3':
                agregarProducto(2);
                break;
            case '4':
                agregarProducto(3);
                break;
            case '5':
                mostrarCarrito();
                break;
            case '6':
                alert(`Saliendo del programa ....`);
                break;
            default:
                alert(`Opción no válida. Intente de nuevo`);
        }
    } while (option !== '6');
}

// iniciar programa
mostrarMenu();