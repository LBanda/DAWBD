

exports.getlogin = (request, response, next) => {
    response.render('login',{
        titulo: "Iiniciar sesion",
    });
};
