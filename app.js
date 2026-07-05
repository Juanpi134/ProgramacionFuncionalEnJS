// Forma imperativa de un arreglo
//en donde debería recorrer y almacenarlo en un nuevo array
const numeros = [1,2,3];

//const duplicados = [];
/*
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2
    duplicados.push(numeros[i]);
}
*/
//de esta forma es como uno tiene que hacer otro paso 

//console.log(duplicados)

const ul = document.querySelector("ul");

//utilizando map se puede hacer de otra forma
//no necesite de utilizar más pasos para mostrarlo
/*
const duplicados2 = numeros.map((numero) => {
    return numero * 2
})
*/

//console.log(duplicados2)

const elementos = numeros.map((elemento) => {
    const li = document.createElement("li");

    console.log(elemento); //1,2,3

    li.textContent = elemento;

    ul.appendChild(li);

    document.body.appendChild(ul);
})


