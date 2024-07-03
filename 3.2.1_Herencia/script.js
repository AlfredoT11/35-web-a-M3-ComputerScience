//1. Escribir la palabra reservara class seguida del nombre de la clase
class Pokemon{
    // 2. Definir los atributos, esto se hace dentro del constructor.
    constructor(nombre, nivelAtaque, nivelDeVida){
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.nivelDeVida = nivelDeVida;
    }

    // 3. Definir los métodos de la clase.
    // Cuando yo defino un método necesito pensar en las siguientes cosas:
    // - La acción a realizar.
    // - Qué información necesito para realizar esa acción.
    atacar(pokemon){
        console.log('--------COMENZANDO ATAQUE--------');
        console.log(`El ${this.nombre} está atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es: ${pokemon.nivelDeVida}`);
        console.log(`Atacando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUÉS del ataque es: ${pokemon.nivelDeVida}`);
    }
}

// Para crear una clase hija (subclase) necesitamos conocer la clase padre (superclase) y crear una 
// relación entre ellas. Esta relación se crea con la palabra reservada 'extends'.
class PokemonFuego extends Pokemon{
    constructor(nombre, nivelAtaque, nivelDeVida, colorDeFlama){
        // La clase hija debe mandar a llamar al constructor de la clase padre.
        // Esto se hace con el método super() que debe recibir los parámetros del constructor de la clase padre.
        super(nombre, nivelAtaque, nivelDeVida);
        this.colorDeFlama = colorDeFlama;
    }

    lanzarFuego(pokemon){
        console.log('--------COMENZANDO ATAQUE--------');
        console.log(`El ${this.nombre} está atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es: ${pokemon.nivelDeVida}`);
        console.log(`Quemando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque * 1.5;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUÉS del ataque es: ${pokemon.nivelDeVida}`);
    }
}

let pokemon1 = new Pokemon('Pikachu', 15, 200);
let pokemon2 = new PokemonFuego('Charmander', 10, 300, 'Azul');

pokemon1.atacar(pokemon2);
pokemon2.atacar(pokemon1);

pokemon1.atacar(pokemon2);
pokemon2.lanzarFuego(pokemon1);

// Ejercicio
// 1. Crear otros 2 tipos de Pokemon
// 2. Agregar un atributo y método específico a cada tipo de pokemon creado.
// 3. Van a crear una función que reciba como parámetros a 2 pokemones. 
//      Esta función debe detectar automáticamente el tipo de Pokemon que recibe como parámetro y atacar con su ataque especial.
//      Pista: Investigar la palabra reservada typeof
