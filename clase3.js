//DEESTRUCTURAR

const [a,b] = [10,20]

const {name: university, city} = {name: 'Autonoma', city: 'Cali'}

console.log(a)
console.log(university)

const obj = {x:10, y:20, z:30}

//puedo escribir funciones regulares de dos formas

function oldRegularFunction (a,b){
    return a + b 
}

const newRegularFunction = function  (a,b) {
    return a + b
}

//puedo reemplazar una funcióon por una constante

//Otra forma de escribir una función

const arrowFunction = (a, b) => {
    return a + b
}

console.log (oldRegularFunction(2, 3))
console.log( newRegularFunction(2,3))
console.log(arrowFunction(2,3))

//ejercicio

const nuevaFuncion = function  (a) {
    if (a % 2 == 0) {
        return "true"
    } else { return "false"}
}

console.log (nuevaFuncion(2))

//puedo reemplazar una funcióon por una constante

//Otra forma de escribir una función

const funcionFlecha = (a) => {
    if (a % 2 == 0) {
        return "true"
    } else { return "false"}
}

console.log(funcionFlecha(3))

///

/* 
diferencias flecha y normal*/

//IMPORTAR

import {animals} from "./animals";
console.log (animals)

//animals.js

/* 
PROMMESA
algo que se puede cumplir // es una premisa

si la promesa se cumple tenemos un then
si no se cumple es un catch

*/

//ESTO ES PARA CREAR LA PROMESA
const promesa = new Promise ((resolve, reject) => {
    //  TFOFO
    resolve();
    reject();


})

promesa.then((data) =>{console.log(data)}).catch ( err => {
    console.log(err)
})

/// PROMESAS ASINCRONAS 
/* 
Is a function declared with the async keyword, and the
await keyword is permitted within it.
The async and await keywords enable asynchronous,
promise-based behavior to be written in a cleaner style,
avoiding the need to explicitly configure promise chains.

sincronia = secuencial
await = asincrona = espere que traiga la respuesta para seguir trabajando

switch - un caso para cada vez


*/



