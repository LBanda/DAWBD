const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');
const router = express.Router();

//Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.ejs'));
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404)
    response.send('Lo Sentimos, Página Inexistente.');
});

app.listen(3000);