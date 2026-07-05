// modificar el estado es un error, lo correcto sería crear un nuevo objeto sin modificar el anterior

const persona = {
    nombre:"Juan",
    edad:20
};

//error
persona.edad = 21;

//correcto
//toma el valor de persona , pero a la vez otra objeto sin modificar el anterior y producir efectos colaterales
const nuevaPersona = {
    ...persona,
    edad:21
};

