const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rutasMenu = require('./routes/menu');

const path = require('path');
const router = express.Router();

//Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret: 'cfgvhbjnhfdsedrftgyhhgfsdfghgdedrfghusdrftgyhertgrtvybuh', //mi string secreto que debe ser un string aleatorio muy largo, no como éste
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/menu', rutasMenu)

app.use((request, response, next) => {
    console.log('Primer middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta/nombres', (request, response, next) => {
    console.log('Tercer middleware!');
    response.send('Respuesta de la ruta "/ruta/nombres"'); 
});

app.use('/ruta/apellidos', (request, response, next) => {
    console.log('Tercer middleware!');
    response.send('Respuesta de la ruta "/ruta/apellidos"'); 
});

app.use('/ruta', (request, response, next) => {
    console.log('Segundo middleware!');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('Recurso no encontrado'); //Manda la respuesta
});

app.listen(3000);
                   
