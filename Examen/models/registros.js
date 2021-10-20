const db = require('../util/database');

const zombies = [
    {nombre:"Luis Banda", estado:"transformación"},
];

module.exports = class zombie {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(znombre,zestado) {
        this.estado = zestado;
        this.nombre = znombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        zombies.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return zombies;
    }

}
    