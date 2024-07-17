class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        // Verificamos si el árbol está vacío.
        if(this.raiz == null){
            this.raiz = new Nodo(valor);
            return;
        }

        // Creamos un nodo auxiliar.
        let aux = this.raiz;
        // Empezamos a recorrer el árbol.
        while(true){
            // Verificar si el nuevo valor va a la izquierda o a la derecha.
            if(valor <= aux.valor){
                // El valor va a la izquierda.
                if(aux.izquierdo == null){
                    // Hay espacio para que el valor se guarde ahí.
                    let nuevoNodo = new Nodo(valor);
                    aux.izquierdo = nuevoNodo;
                    return;
                }else{
                    // Nos movemos a la izquierda.
                    aux = aux.izquierdo;
                }
            }else{
                // El valor va a la derecha.
                if(aux.derecho == null){
                    // Hay espacio para que el valor se guarde ahí.
                    let nuevoNodo = new Nodo(valor);
                    aux.derecho = nuevoNodo;
                    return;
                }else{
                    // Nos movemos a la derecha.
                    aux = aux.derecho;
                }
            }
        }
    }

    buscar(valorABuscar){
        // Verificar si el árbol está vacío.
        if(this.raiz == null){
            return null;
        }

        // Creamos un nodo auxiliar para movernos en el árbol.
        let aux = this.raiz;
        while(aux != null){
            if(aux.valor == valorABuscar){
                return aux;
            }

            if(valorABuscar <= aux.valor){
                //Nos movemos a la izquierda.
                aux = aux.izquierdo;
            }else{
                // Nos movemos a la derecha.
                aux = aux.derecho;
            }
        }
        // Si el while termina de ejecutarse, significa que no existe el valor buscado.
        return null;
    }

    inorden(nodo){
        // Condición de paro del método recursivo.
        if(nodo == null) return;

        this.inorden(nodo.izquierdo);
        console.log(nodo.valor);
        this.inorden(nodo.derecho);
    }

    preorden(nodo){
        if(nodo == null) return;

        console.log(nodo.valor);
        this.preorden(nodo.izquierdo);
        this.preorden(nodo.derecho);
    }

    postorden(nodo){
        if(nodo == null) return;

        this.postorden(nodo.izquierdo);
        this.postorden(nodo.derecho);
        console.log(nodo.valor);
    }

}

let arbolBinario = new ArbolBinario();
let valoresArbol = [5, 10, 21, 4, 8, 1, 5, 4];

for(let i = 0; i < valoresArbol.length; i++){
    arbolBinario.insertar(valoresArbol[i]);
}

let valoresABuscar = [5, 4, 1, 3, -1];
for(let i = 0; i < valoresABuscar.length; i++){
    let nodoEncontrado = arbolBinario.buscar(valoresABuscar[i]);
    if(nodoEncontrado != null){
        console.log(`El valor ${valoresABuscar[i]} SÍ existe`);
    }else{
        console.log(`El valor ${valoresABuscar[i]} NO existe`);
    }
}

// Recursividad: Mandar a llamar una función dentro de sí misma.
// Cualquier función recursiva NECESITA una condición de paro para evitar bucles infinitos.
// Dato curioso: Cualquier proceso que se pueda hacer con un ciclo (for, while) se puede hacer con recursividad.
// factorial -> x! = (x)*(x-1)*(x-2)*(x-3)*...*1
// 5! = 5 * 4 * 3 * 2 * 1 = 120
/*
    5! = 5 * 4!
             4! = 4 * 3!
                      3! = 3 * 2!
                               2! = 2 * 1!
                                        1! = 1
*/
// 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;

function factorial(x){
    if(x == 1){
        return 1;
    }
    return x * factorial(x - 1);
}

let factorialACalcular = 5;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);
factorialACalcular = 10;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);
factorialACalcular = 170;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);

arbolBinario.inorden(arbolBinario.raiz);
