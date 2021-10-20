const zombie = require('../models/registros.js');

exports.get_registros = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.cookies);
    response.render('lista',{
        lista_platillos: zombie.fetchAll()
    });
};


exports.get_add = (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta += '<h1>Registrar nuevo zombie</h1>';
    respuesta += '<form action="/menu/add" method="POST">';
    respuesta += '<label for="nombre">Nombre del zombie: </label>';
    respuesta += '<input type="text" id="nombre" name="nombre" placeholder="Luis" required>';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<label for="estado>Estado del zombie: </label>';
    respuesta += '<input type="text" id="estado" name="estado" placeholder="transformación">';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<input type="submit" id="enviar" name="enviar" value="Enviar">';
    respuesta +='</form>';
    response.send(respuesta);
};

exports.post_add = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    console.log(request.body.estado);
    response.setHeader('Set-Cookie', 'ultimo_zombie='+request.body.nombre+';HttpOnly');
    const platillo = new zombie(request.body.nombre, request.body.estado);
    platillo.save();
    response.send("Gracias por contribuir con el menú");
};