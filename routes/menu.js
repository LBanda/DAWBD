const express = require('express');

const router = express.Router();

const platillos = [
    {nombre:"sopes", descripcion:"tortilla frita con frijoles, queso y crema"},
    {nombre:"chilaquiles", descripcion:"tortilla cortada y frita con salsa"},
    {nombre:"taco", descripcion:"tortilla rellena de carne y salsa"},
    {nombre:"pambazo", descripcion:"bolillo remojado en salsa y relleno de carne"}
];

router.get('/lista', (request,response,next) => {
    response.render('lista',{
        titulo: "Titulo dinamico",
        lista_platillos: platillos
    });
});

router.get('/add', (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta += '<h1>Agregar platillo al menú</h1>';
    respuesta += '<form action="/menu/add" method="POST">';
    respuesta += '<label for="nombre">Nombre de platillo: </label>';
    respuesta += '<input type="text" id="nombre" name="nombre" placeholder="tacos" required>';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<label for="descripcion">Descripción del platillo: </label>';
    respuesta += '<input type="text" id="descripcion" name="descripcion" placeholder="Este platillo es delicioso, lleva...">';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<input type="submit" id="enviar" name="enviar" value="Enviar">';
    respuesta +='</form>';
    response.send(respuesta);
});

router.post('/add', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    response.send("Gracias por contribuir con el menú");
});

module.exports = router;