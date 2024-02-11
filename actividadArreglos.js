//Esta es la actividad de arreglos


const arreglo1 = [0, 1, 2, 3];
const arreglo2 = [4, 5, 6, 7];

// Concatenar 
const arregloConcat = arreglo1.concat(arreglo2);
console.log("Concatenar:", arregloConcat);

// Encontrar el último elemento que cumple con la condición
const arregloLast = arreglo1.findLast(x => x < 3);
console.log("Encontrar el último elemento menor a 3:", arregloLast);

// Verificar si todos los elementos son menores a 6
const arregloEvery = arreglo2.every(x => x < 6);
console.log("Todos los elementos son menores a 6:", arregloEvery);

// Agregar un elemento al final del arreglo
arreglo1.push(10);
console.log("Agregar 10 al final del arreglo:", arreglo1);

// Eliminar el último elemento del arreglo
const arregloPop = arreglo1.pop();
console.log("Eliminar el último elemento del arreglo:", arregloPop);
console.log("arreglo después de eliminar el último elemento:", arreglo1);

const arregloCopyWithin = arreglo1.copyWithin(1, 0);
console.log("Copiar elementos dentro del arreglo:", arregloCopyWithin);

const arregloEntries = arreglo2.entries();
console.log("Obtener iterador de entradas del arreglo:", Array.from(arregloEntries));

const arregloFilter = arregloConcat.filter(x => x % 2 === 0);
console.log("Filtrar elementos pares del arrayConcat:", arregloFilter);

const arregloMap = arreglo2.map(x => x * 2);
console.log("Duplicar cada elemento del arreglo usando map:", arregloMap);

const arregloReduce = arreglo1.reduce((acc, val) => acc + val, 0);
console.log("Reducir arreglo sumando sus elementos:", arregloReduce);

const arregloReverse = arreglo2.reverse();
console.log("Revertir el orden del arreglo:", arregloReverse);

const arregloShift = arreglo1.shift();
console.log("Eliminar el primer elemento del arreglo:", arregloShift);
console.log("arreglo después de eliminar el primer elemento:", arreglo1);

const arregloSome = arreglo2.some(x => x > 5);
console.log("Al menos un elemento del arreglo 2  es mayor a 5:", arregloSome);

const arregloSort = arreglo2.sort((a, b) => a - b);
console.log("Ordenar el arreglo 2  de manera ascendente:", arregloSort);

const arregloUnshift = arreglo1.unshift(-1, -2);
console.log("Agregar elementos al inicio del arreglo:", arreglo1);

const arregloValues = arreglo2.values();
console.log("Obtener iterador de valores del arreglo 2:", Array.from(arregloValues));
  
  // Otras funciones mencionadas
const arregloFindLastIndex = arreglo2.reduceRight((acc, val, index) => (val > 5 && acc === -1) ? index : acc, -1);
console.log("Encontrar el índice del último elemento mayor a 5 en el arreglo 2:", arregloFindLastIndex);


arreglo1.forEach((element, index) => {
  console.log(`Elemento en la posición ${index} del arreglo 1: ${element}`);
});

const arregloIncludes = arreglo2.includes(5);
console.log("¿El arreglo 2 incluye el elemento 5?:", arregloIncludes);

const arregloIndexOf = arreglo1.indexOf(2);
console.log("Índice del elemento 2 en el  arreglo 1:", arregloIndexOf);

const arregloReduceRight = arreglo1.reduceRight((acc, val) => acc - val, 0);
console.log("Reducir arreglo 1 restando sus elementos de derecha a izquierda:", arregloReduceRight);

const arregloSplice = arreglo2.splice(2, 2, 8, 9);
console.log("Eliminar 2 elementos a partir de la posición 2 en array2 e insertar 8 y 9:", arreglo2);

  