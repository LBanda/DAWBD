const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const misRutas = require('./routes/nombre_archivo');

//Middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use('/modulo', misRutas);

app.use( (request,response,next) => {
    //Cuerpo del middleware
    next();
});

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    console.log(request.body);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
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
                   
