const platillos = [
    {nombre:"sopes", descripcion:"tortilla frita con frijoles, queso y crema"},
    {nombre:"chilaquiles", descripcion:"tortilla cortada y frita con salsa"},
    {nombre:"taco", descripcion:"tortilla rellena de carne y salsa"},
    {nombre:"pambazo", descripcion:"bolillo remojado en salsa y relleno de carne"}
];

module.exports = class Platillo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,mi_descripcion) {
        this.descripcion = mi_descripcion;
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        platillos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return platillos;
    }

}
    