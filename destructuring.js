//una forma de hacerlo de forma antigua es almacenar cada valor de su índice en una variable nueva

const numeros = [1,2,3];

// const uno = numeros[0];
// const dos = numeros[1];
// const tres = numeros[2];

//con destructuring lo ahcemos en una línea de código
const [uno,dos,tres] = numeros;

console.log(uno); //1

console.log(dos); //2

console.log(tres); //3


//con rest operator

const [...rest] = numeros;

console.log(...rest); //1 2 3


//desestrucutrando objetos
const camiseta = {
    talle: "XL",
    precio: 8200,
    marca: "Nike",
}


const talle = camiseta.talle;
const precio = camiseta.precio;
const marca = camiseta.marca;


const {...detalles} = camiseta;

console.log(detalles)