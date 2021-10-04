

exports.getlogin = (request, response, next) => {
    response.render('login',{
        titulo: "Iniciar sesion",
    });
};
