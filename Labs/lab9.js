// ejercicio 1

const arreglo = [1,2,3,4,5,6,7,8,9];
let suma = arreglo.reduce((previous, current) => current += previous);
let prom = suma / arreglo.length;
console.log(arreglo);
console.log('Promedio de estos numeros:');
console.log(prom);

// ejercicio 2
const file_system = require('fs');

file_system.writeFileSync("Lab9-ejercicio2.txt", "Hola Mundo, ejercicio 2");

// ejercicio 3

const number = 9;
let n1 = 0, n2 = 1, nextTerm;

console.log('Serie de Fibonacci:');
console.log(n1); 
console.log(n2); 

nextTerm = n1 + n2;

while (nextTerm <= number) {

    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

// ejercicio 4

const http = require('http');
const { url } = require('inspector');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    file_system.readFile('./Lab1.html',null, function(error,data){
        if(error){
            response.writeHead(404);
            response.write('Archivo no encontrado');
        } else{
            response.write(data);
        }
        response.end();
    });
});

server.listen(3000);