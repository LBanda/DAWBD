const Zombie = require('../models/registros');

exports.getList = (request, response) => {
    request.getConnection((err, conn) => {
        conn.query('SELECT zombie.Nombre_Zombie, estados.Fecha, estados.Tipo_Estado FROM zombie INNER JOIN estados ON zombie.Estado_Zombie = estados.ID_Estado', (err, zombies) =>{
            if(err){
                response.json(err);
            }
            console.log(zombies)
            response.render('lista_zombies', {
                titulo: "Lista de zombies",
                lista_zombie: zombies,
            })
        
    });
    
});
};

exports.getAdd = (request, response, next) => {
    response.render('registrar_estado',{
        titulo: "Registrar nuevo zombie:",
    });
};

exports.postAdd = (request, response) => {
    console.log(request.body);
    const zombie = new Zombie(request.body.nombre, request.body.estado, request.body.fecha );
    zombie.save()
    .then(() => {
        response.status(302).redirect('/');
        
    }).catch(err => {

        response.status(302).redirect('/error');
    });
    
};