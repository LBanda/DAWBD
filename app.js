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

const platillos = [
    {nombre:"sopes", descripcion:"tortilla frita con frijoles, queso y crema"},
    {nombre:"chilaquiles", descripcion:"tortilla cortada y frita con salsa"},
    {nombre:"taco", descripcion:"tortilla rellena de carne y salsa"},
    {nombre:"pambazo", descripcion:"bolillo remojado en salsa y relleno de carne"}
];
const { url } = require('inspector');

const server = http.createServer( (request,response) => {
    console.log(request,url);




// reaccionar de acuerdo a la ruta
if(request.url === "/hola"){
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hola Mundo!!!!</h1>');
    response.end();
} else if(request.url === "/menu"){
    // mostrar menu
    
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Menu</h1>');
    response.write("<ul>");
    for(let platillo of platillos){
        response.write("<li>" + platillo.nombre + ": " + platillo.descripcion + "</li>");
    }
    response.write("</ul>");
    response.write('<a href="/menu/add"> Agregar platillo</a>')
    response.end();
} else if(request.url === "/menu/add" && request.method === "GET"){
    console.log(request.method);
    // agregar comida a menu
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Agregar platillo a Menu</h1>');
    response.write('<form action="/menu/add" method="POST">');
    response.write('<label for="nombre"> Nombre del platillo: </label>');
    response.write('<input type="text" id="nombre" name="nombre" placeholder="tacos" required>');
    response.write('<br>');
    response.write('<br>');
    response.write('<label for="descipcion"> Descripcion del platillo: </label>');
    response.write('<input type="text" id="descipcion" name="descipcion" placeholder="tortilla con carne">');
    response.write('<br>');
    response.write('<br>');
    response.write('<input type="submit" id="enviar" name="enviar" value="enviar">');
    response.write('</form>');
    response.end();

} else if(request.url === "/menu/add" && request.method === "POST"){
    console.log(request.method);
    //recibir datos del cliente
    let datos = []; 
    request.on('data', (dato) => {
        //console.log(dato);
        datos.push(dato);
    });

    //procesa datos
    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos);
        console.log(datos_completos);
        const nombre = datos_completos.split('=')[1].split('&')[0];
        const descripcion = datos_completos.split('=')[2].split('&')[0];
        console.log(nombre);
        console.log(descripcion);

        // agregar nuevo platillo
        platillos.push({nombre: nombre, descripcion: descripcion});

        // manda a menu
        response.statusCode = 302;
        response.setHeader('Location', '/menu');
        response.end();
    });
    
    

    
} else if(request.url === "/adios"){
    // manda a cancion en youtube
}else{
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Esta pagina no existe!!!</h1>');
    response.end();
}

});

server.listen(3000);