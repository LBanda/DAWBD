const express = require('express');
const app = express();


const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const myConnection = require('express-myconnection');

const rutasZombies = require('./routes/zombies');

const path = require('path');
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'parcial2',
}, 'single'));

app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use('/', rutasZombies);

app.use('/error',(request, response, next) => {
    console.log('Segundo middleware!');
    response.status(500).send('Internal server error'); 
   
});


app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('Pagina no existente'); 
});

app.listen(3000);