const express = require('express');

const router = express.Router();

app.get('/menu/add', (request, response, next) => {
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

app.post('/menu/add', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    response.send("Gracias por su contribucion"); 
});

module.exports = router;