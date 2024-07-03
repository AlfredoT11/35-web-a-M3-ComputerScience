/*
    Autos usados
        - Modelo
        - Color
        - Tipo de vehículo
        - Año
        - Precio
        - Kilometraje

    Autos en prototipo para una fábrica de autos
        - Versión del prototipo
        - Diseño 
        - Las partes de vehículo
        - Materiales
*/

/*
    Queremos representar una persona dentro de un sistema
    - nombre
    - edad
    - genero
    - mejorAmigo
    - mascotas
*/

//1. Crear la clase
// Para nombrar clases utilizamos PascalCase
class Persona{

    //2. Definir sus atributos.
    constructor(nombreDePersona, edad, genero){
        // Del lado izquierdo tenemos el atributo y del lado derecho el valor del atributo.
        this.nombre = nombreDePersona;
        this.edad = edad;
        this.genero = genero;
        this.mejorAmigo = null;
        this.mascotas = [];
    }

    //3. Definir los métodos
    saludar(){
        console.log(`Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años`);
    }

    saludarASuMejorAmigo(){
        if(this.mejorAmigo != null){
            console.log(`Hola ${this.mejorAmigo.nombre}, ¿cómo va todo?`);
        }else{
            console.log(`No tengo un mejor amigo. ):`);
        }
    }

    saludarPersona(persona){
        console.log(`Hola ${persona.nombre}, ¿cómo va todo?`);
    }

    conocerMejorAmigo(persona){
        this.mejorAmigo = persona;
    }

    adoptarMascota(mascota){
        this.mascotas.push(mascota);
    }

    mostrarMascotas(){
        return this.mascotas;
    }
}

class Mascota{
    constructor(nombre, animal, edad){
        this.nombre = nombre;
        this.animal = animal;
        this.edad = edad;
    }
}

function generarEdad(){
    return 17;
}

//4. Crear objetos
let nombre = 'Tona';
let persona1 = new Persona(nombre, generarEdad(), 'Masculino');

// Para acceder a las métodos de un objeto utilizamos el punto .
// de manera general sería
// <nombreDelObjecto>.<nombreDelMetodo>(<parámetrosAEnviar>);
persona1.saludar();
persona1.saludarASuMejorAmigo();

let mascota1 = new Mascota('Tigrillo', 'Gato', 7);
let mascota2 = new Mascota('Bowie', 'Gato', 1);
persona1.adoptarMascota(mascota1);
persona1.adoptarMascota(mascota2);

console.log(persona1.mascotas);

let persona2 = new Persona('Malinali', 25, 'Femenino');
persona1.conocerMejorAmigo(persona2);

persona1.saludarASuMejorAmigo();

// En JavaScript no es muy común proteger la información con encapsulamiento, sin embargo,
// sí existen los mecanismos para hacerlo. Los atributos pueden ser públicos, privados o protegidos.

/*
Ejercicio:

Crea una clase llamada CarritoDeCompras que represente un carrito de compras simple. 
El carrito debe tener las siguientes características:

    Debe tener una propiedad llamada items que sea un array para almacenar los productos en el carrito.
    Debe tener un método llamado agregarProducto(producto) que permita agregar un producto al carrito.
    Debe tener un método llamado obtenerTotal() que calcule y devuelva el precio total de todos los productos en el carrito.
    Debe tener un método llamado mostrarCarrito() que muestre en la consola la lista de productos en el carrito junto con sus precios individuales y el precio total.

    Los productos deben ser objetos simples (objetos literales) con propiedades nombre y precio.

Ejemplo de Uso:

const miCarrito = new CarritoDeCompras();

miCarrito.agregarProducto({ nombre: "Camiseta", precio: 20 });
miCarrito.agregarProducto({ nombre: "Zapatos", precio: 50 });

miCarrito.mostrarCarrito();
// Output esperado:
// - Camiseta: $20
// - Zapatos: $50
// Total: $70
*/

