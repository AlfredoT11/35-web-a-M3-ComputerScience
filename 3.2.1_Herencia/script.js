//1. Escribir la palabra reservara class seguida del nombre de la clase
class Pokemon{
    // 2. Definir los atributos, esto se hace dentro del constructor.
    constructor(nombre, nivelAtaque, nivelDeVida, tipo='Básico'){
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.nivelDeVida = nivelDeVida;
        this.tipo = tipo;
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
        super(nombre, nivelAtaque, nivelDeVida, 'Fuego');
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

    // Sobreescritura -> Redefinir el comportamiento de un método de la clase padre en la clase hija.
    atacar(pokemon){
        this.lanzarFuego(pokemon);
    }
}

class PokemonElectricidad extends Pokemon{
    constructor(nombre, nivelAtaque, nivelDeVida, colorDeRayo){
        // La clase hija debe mandar a llamar al constructor de la clase padre.
        // Esto se hace con el método super() que debe recibir los parámetros del constructor de la clase padre.
        super(nombre, nivelAtaque, nivelDeVida, 'Electricidad');
        this.colorDeRayo = colorDeRayo;
    }

    electrocutar(pokemon){
        console.log('--------COMENZANDO ATAQUE--------');
        console.log(`El ${this.nombre} está atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es: ${pokemon.nivelDeVida}`);
        console.log(`Electrocutando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque * 1.8;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUÉS del ataque es: ${pokemon.nivelDeVida}`);
    }

    atacar(pokemon){
        this.electrocutar(pokemon);
    }
}

let pokemon1 = new Pokemon('Pikachu', 15, 200);
let pokemon2 = new PokemonFuego('Charmander', 10, 300, 'Azul');

pokemon1.atacar(pokemon2);
pokemon2.atacar(pokemon1);

pokemon1.atacar(pokemon2);
pokemon2.lanzarFuego(pokemon1);

let numero = 10;
let pokemonLiteral = {
    nombre: 'Raichu',
    nivelDeAtaque: 25
}

console.log(typeof numero);
console.log(typeof pokemon1);
console.log(typeof pokemonLiteral);

if(typeof pokemon2 == 'object'){
    if(pokemon2.tipo == 'Fuego'){
        console.log('Tipo fuego');
    }else{
        console.log('Tipo básico');
    }
}else{
    console.log('Lo que estás evaluando no es un objeto, por lo tanto, no tiene propiedades');
}


// Ejercicio
// 1. Crear otros 2 tipos de Pokemon
// 2. Agregar un atributo y método específico a cada tipo de pokemon creado.
// 3. Van a crear una función que reciba como parámetros a 2 pokemones. 
//      Esta función debe detectar automáticamente el tipo de Pokemon que recibe como parámetro y atacar con su ataque especial.
//      Pista: Investigar la palabra reservada typeof
//      Pista: alternativa: instanceof

function combatir(pokemonAtacante, pokemonAtacado){
    // instanceof -> <objecto> instanceof <La clase a revisar>
    if(pokemonAtacante instanceof PokemonFuego){
        pokemonAtacante.lanzarFuego(pokemonAtacado);
    }else if(pokemonAtacante instanceof PokemonElectricidad){
        pokemonAtacante.electrocutar(pokemonAtacado);
    }else{
        pokemonAtacante.atacar(pokemonAtacado);
    }
}

function combatirConPolimorfismo(pokemonAtacante, pokemonAtacado){
    pokemonAtacante.atacar(pokemonAtacado);
}

let pokemonElectricidad = new PokemonElectricidad('Raichu', 50, 170, 'Naranja');

combatir(pokemon2, pokemonElectricidad);
combatir(pokemonElectricidad, pokemon2);

pokemon2.atacar(pokemonElectricidad);
pokemonElectricidad.atacar(pokemon2);

console.log('---------------------------------');
console.log('Utilizando polimorfismo');
combatirConPolimorfismo(pokemon2, pokemonElectricidad);
combatirConPolimorfismo(pokemonElectricidad, pokemon2);

// Diferencias entre objecto literal y objeto de POO.
// Objecto literal es tipo de dato de JS que nos permite trabajar con el esquema clave-valor.
let pokemonAgua = {
    nombre: 'Tortoise',
    nivelAtaque: 50,
    nivelDeVida: 400,
    atacar: () => {
        console.log('Atacando con agua');
    }
}

pokemonAgua.nombre;
pokemonAgua.atacar();

// Objetos de POO.
// Tienen las siguientes características
/*
    - Se crean a partir de una clase.
    - Se deben instanciar.
    - La clase necesita un constructor para crearlos.
    - Podemos crear diferentes objetos de esa clase a diferencia de los objetos literal. 
*/
