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
