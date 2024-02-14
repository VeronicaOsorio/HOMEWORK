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

//ejercicio//////////////////////

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

//diferencias: alcance (local o global), forma de escribirla
//funciones de flecha tienen un contexto local, si invoco algo dentro, solo mira lo que se encuentre adentro
// no se puede invocar la super en flecha
// No tengo acceso a los parametros / argumentos
/* 

SOBRECARGA
Cambiar los parametros de una función (solo funciona con las regulares)
const nobre = (parrants)
nobre (1)
nobre(1,2)
nobre(1,2,3)- permite ir cambiando el numero de parametros

##PRINCIPIO DE RESPONSABILIDAD UNICA
*/