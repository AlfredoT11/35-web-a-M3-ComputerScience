console.log('Colas');
/*
['Lucía', 'Jesús', 'Mitzi', 'Román', 'Alejandra']
0           1       2       3         4
Primera persona en la fila              Última persona en la fila
*/
class Cola{

    constructor(){
        this.datos = [];
    }

    // Método enqueue (Se agrega un elemento al final de la cola)
    agregar(nuevoElemento){
        this.datos.push(nuevoElemento);
    }

    // Método dequeue (Se elimina el elemento al frente de la cola)
    eliminar(){
        if(this.datos.length == 0){
            return undefined;
        }
        return this.datos.shift();
    }

    // Método peek (Muestra el primer elemento de la cola)
    mostrarPrimerElemento(){
        if(this.datos.length == 0){
            return undefined;
        }
        return this.datos[0];
    }

    mostrarUltimoElemento(){
        if(this.datos.length == 0){
            return undefined;
        }
        return this.datos[this.datos.length - 1];
    }

}

let colaDeTortillas = new Cola();

'Lucía', 'Jesús', 'Mitzi', 'Román', 'Alejandra'
let nuevaPersonEnLaCola;

nuevaPersonEnLaCola = 'Lucía';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


nuevaPersonEnLaCola = 'Jesús';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


nuevaPersonEnLaCola = 'Mitzi';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


nuevaPersonEnLaCola = 'Román';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


nuevaPersonEnLaCola = 'Alejandra';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');

console.log(`Se entregan sus tortillas a: ${colaDeTortillas.eliminar()}`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


console.log(`Se entregan sus tortillas a: ${colaDeTortillas.eliminar()}`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


console.log(`Se entregan sus tortillas a: ${colaDeTortillas.eliminar()}`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');


console.log(`Se entregan sus tortillas a: ${colaDeTortillas.eliminar()}`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');

nuevaPersonEnLaCola = 'Edgar';
colaDeTortillas.agregar(nuevaPersonEnLaCola);
console.log(`${nuevaPersonEnLaCola} se acaba de formar`);
console.log(`La primera persona es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona es: ${colaDeTortillas.mostrarUltimoElemento()}`);
console.log('-------------------------------------------------------------');