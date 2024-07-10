console.log('Pilas');

//1. Crear la clase
/*
Ejemplo visual de pila

Fondo de la pila                                                                          Tope de la pila
['google.com', 'youtube.com', 'youtube.com/TaylorSwift', 'youtube.com/TaylorSwift/Karma', 'facebook.com'];
    0           1               2                           3                               4

*/
class Pila {

    //2. Generar los atributos de la clase dentro del constructor.
    constructor() {
        this.datos = [];
    }

    //3. Generar los métodos de la clase.
    // Método push()
    agregar(nuevoValor) {
        this.datos.push(nuevoValor);
    }

    // Método pop()
    eliminarTope(){
        if(this.datos.length == 0){
            return undefined;
        }
        return this.datos.pop();
    }

    // Método peek()
    mostrarTope() {
        if(this.datos.length == 0){
            return undefined;
        }
        return this.datos[this.datos.length - 1];
    }

}


let pilaNavegacionWeb = new Pila();
pilaNavegacionWeb.agregar('google.com');
console.log(pilaNavegacionWeb.mostrarTope());
pilaNavegacionWeb.agregar('youtube.com');
console.log(pilaNavegacionWeb.mostrarTope());
pilaNavegacionWeb.agregar('youtube.com/TaylorSwift');
console.log(pilaNavegacionWeb.mostrarTope());
pilaNavegacionWeb.agregar('youtube.com/TaylorSwift/Karma');
console.log(pilaNavegacionWeb.mostrarTope());
pilaNavegacionWeb.agregar('facebook.com');
console.log(pilaNavegacionWeb.mostrarTope());


console.log('Última página visitada')
console.log(pilaNavegacionWeb.mostrarTope());
pilaNavegacionWeb.eliminarTope();

console.log('Página visitada previamente');
console.log(pilaNavegacionWeb.eliminarTope());

console.log('Página visitada previamente');
console.log(pilaNavegacionWeb.eliminarTope());

console.log('Página visitada previamente');
console.log(pilaNavegacionWeb.eliminarTope());

console.log('Página visitada previamente');
console.log(pilaNavegacionWeb.eliminarTope());

console.log('Página visitada previamente');
console.log(pilaNavegacionWeb.eliminarTope());
