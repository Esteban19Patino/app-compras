const productos = [
  { id: 1, nombre: 'Manzana', precio: 1200 },
  { id: 2, nombre: 'Leche', precio: 3500 }
];

function realizarCompra(productoId, cantidad) {
  const producto = productos.find(p => p.id === productoId);
  if (producto) {
    const total = producto.precio * cantidad;
    console.log(`Compra realizada: ${cantidad}x ${producto.nombre} - Total: $${total}`);
  } else {
    console.log("Producto no encontrado");
  }
}


realizarCompra(1, 3);