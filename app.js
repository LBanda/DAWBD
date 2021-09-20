const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use( (request,response,next) => {
    //Cuerpo del middleware
    next();
});

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    console.log(request.body);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/menu/add', (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta += '<h1>Agregar platillo a Menu</h1>';
    respuesta += '<form action="/menu/add" method="POST">';
    respuesta +='<label for="nombre"> Nombre del platillo: </label>';
    respuesta +='<input type="text" id="nombre" name="nombre" placeholder="tacos" required>';
    respuesta +='<br>';
    respuesta +='<br>';
    respuesta +='<label for="descipcion"> Descripcion del platillo: </label>';
    respuesta +='<input type="text" id="descipcion" name="descipcion" placeholder="tortilla con carne">';
    respuesta +='<br>';
    respuesta +='<br>';
    respuesta +='<input type="submit" id="enviar" name="enviar" value="enviar">';
    respuesta +='</form>';
    response.send(respuesta);
});

app.use('/menu/add', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    response.send("Gracias por su contribucion"); 
});

app.use('/ruta/hola', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/hola"'); 
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);
                   
