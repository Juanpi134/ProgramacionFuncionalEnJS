//Ejemplo de un array de objetos
const productos = [
    {nombre:"Mouse",precio:100},
    {nombre:"Teclado",precio:200}
];

//obtenemos solo los nombres
const nombres = productos.map(producto => producto.nombre);

console.log(nombres);

//o los productos que filtren determinado precio
const caros = productos.filter(producto => producto.precio > 150);

//o el precio total
const total = productos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
);