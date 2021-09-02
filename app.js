console.log("Hola Mundo!!!!");

console.info("Estamos usando JS en una pc");

let x = 5;
console.log(x);

const y = x + 4;

console.log(y);

console.log(x=y);

//fs es file system, prototipo de js que trabaja con el sistema de archivos
const file_system = require('fs');

file_system.writeFileSync("comida.txt", "gorditas");
file_system.writeFileSync("juegos.txt", "Rainbow Six");

// codigo asincrono

const arreglo = [1,5,365,4842,1,25,456,3234,199,1599];

for(let item of arreglo){
    setTimeout( () => (
        console.log(item)
        ), item);
}


// servidor web
const http = require('http');
const { url } = require('inspector');

const server = http.createServer( (request,response) => {
    console.log(request,url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hola Mundo!!!!, esta pagina no existe</h1>');
    response.end();

});

server.listen(3000);