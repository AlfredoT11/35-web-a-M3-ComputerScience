// Repaso de arreglos
let frutas = ['Manzana', 'Aguacate', 'Naranja']; 
let verduras = Array();

// El método push nos permite agregar elementos AL FINAL de un arreglo.
verduras.push('Zanahoria');
verduras.push('Coliflor');
verduras.push('Hongos', 'Calabazas');
console.log(verduras);

// El método unshift nos permite agregar elementos AL INICIO de un arreglo.
verduras.unshift('Jitomate');
console.log(verduras);

// El método pop nos permite eliminar elementos AL FINAL de un arreglo.
verduras.pop();
console.log(verduras);

// El método shift nos permite eliminar elementos AL INICIO del arreglo.
verduras.shift();
console.log(verduras);

console.log('-------------------------');
// El operador ... genera una copia del arreglo.
let frutasYVerdurasCopia = [...frutas, ...verduras];

// Aquí se genera un arreglo a partir de 2 arreglos. Esto es un arreglo de 2 dimensiones.
let frutasYVerdurasReferencia = [frutas, verduras];

console.log(frutasYVerdurasCopia);
console.log(frutasYVerdurasReferencia);

frutas.push('Fresa');

console.log('-------------------------');
console.log(frutasYVerdurasCopia);
console.log(frutasYVerdurasReferencia);

// Esto no crea una copia del arreglo, crea una referencia.
let verdurasReferencia = verduras;
verdurasReferencia.push('Cebolla');

console.log(verdurasReferencia);
console.log(verduras);

