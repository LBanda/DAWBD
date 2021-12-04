const db = require('../util/database');

module.exports = class Zombie {

    constructor(znombre, zestado) {

        this.nombre = znombre;
        this.estado = zestado;
        this.fecha = null;
        
    }

    save() {
        return db.execute('INSERT INTO zombie (Nombre_Zombie, Estado_Zombie, Fecha) VALUES ( ?, ?, ?)',
        [ this.nombre, this.estado, this.fecha]);
    }

    static fetchAll(ID_Estado) {
        if (ID_Estado) {
            return db.execute('SELECT zombie.Nombre_Zombie, estados.fecha, estados.Estado_Zombie FROM zombie INNER JOIN estados ON zombie.Estado_Zombie = estados.ID_Estado');
        } else{
            return db.execute('SELECT zombie.Nombre_Zombie, estados.fecha, estados.Estado_Zombie FROM zombie INNER JOIN estados ON zombie.Estado_Zombie = estados.ID_Estado  WHERE ID_Estado = ?', [ID_Estado]);

        }
    
    }

}