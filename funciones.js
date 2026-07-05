// en javascript una funcion es un valor
/*  

const saludar = function(){
    console.log("Hola");
}

o esto


const saludar = () => {
    console.log("Hola");
}

y luego se la llama

saludar();

se puedne guardar variables en funciones
const sumar = (a,b) => a+b;

se pueden poner funciones dentro de un array

const operaciones = [
    (a,b)=>a+b,
    (a,b)=>a-b
];

o dentro de un objeto

const calculadora = {
    sumar:(a,b)=>a+b,
    restar:(a,b)=>a-b
}

*/



// segundo concepto funciones de orden superior
// funciones que reciben o devuelven funciones
/* 
una funcion que ejecuta una funcion
function ejecutar(funcion){
    funcion();
}


y despues la ejecuta cuando se llama
ejecutar(()=>{
    console.log("Hola");
});

*/