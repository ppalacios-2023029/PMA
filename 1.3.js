inventario = [
    {
        id: 1,
        name: 'Teclado Razen',
        precio: 800,
        stock: 20
    },
    {
        id: 2,
        name: 'Pantalla LG',
        precio: 1500,
        stock: 20
    },
    {
        id: 3,
        name: 'Mouse logitech',
        precio: 500,
        stock: 20
    },
]
console.log('Inventario de Productos Disponibles')
console.log(inventario)

function buscarP(id) {
    let producto = inventario.find(item => item.id === id);
    if (producto) 
        console.log(`Producto encontrado:`, producto)

    return producto
}
console.log('Buscando el Producto')
buscarP(2)

function compra (id, cantidad) {
    let product = buscarP(id)
    if(product) {
        if(product.stock >= cantidad){
                        product.stock -= cantidad
        let costoTotal = product.precio * cantidad
        console.log(`Compre realizada del Producto ${product.name}, cantidad comprada ${cantidad},
            costo por unidad ${product.precio}, costo total ${costoTotal}`)
        }else{
            console.log(`No hay suficiente stock de ${product.name}. Stock disponible: ${product.stock}`)
        }
    }
}
compra(2, 30)

