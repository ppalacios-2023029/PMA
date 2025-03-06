carrito = [
    {
        name: 'Lentes de Sol',
        precio: 500,
        cantidad: 4
    },
    {
        name: 'Camisa de Seguridad',
        precio: 1500,
        cantidad: 8
    },
    {
        name: 'Teclado Razer',
        precio: 950,
        cantidad: 6
    }
]

function productos (){
    let totalGeneral = 0
    for(k = 0; k <carrito.length; k++){
        let precio = carrito[k].precio
        let cantidad = carrito[k].cantidad
        let totalP = precio * cantidad
        totalGeneral += totalP
        console.log(`El producto ${k + 1} tiene un precio de ${precio}, hay una cantidad de ${cantidad} y tienen un precio total de ${totalP}`)
        console.log(`La suma de los totales es ${totalGeneral}`)
    }
}
productos()
