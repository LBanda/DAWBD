// ejercicio 1

const arreglo = [1,2,3,4,5,6,7,8,9];
let suma = arreglo.reduce((previous, current) => current += previous);
let prom = suma / arreglo.length;
console.log(arreglo);
console.log('Promedio de estos numeros:');
console.log(prom);

// ejercicio 2
const file_system = require('fs');

var frase = prompt("Escribe una frase","Hola mundo!!");

file_system.writeFileSync("ejercicio2.txt", frase);
