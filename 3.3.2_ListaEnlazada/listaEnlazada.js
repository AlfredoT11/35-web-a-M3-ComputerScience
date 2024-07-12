class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null; // Esta es la referencia al siguiente nodo.
    }
}

class ListaEnlazada {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    insertarValor(nuevoValor) {
        // 1. Creamos el nuevo nodo.
        let nuevoNodo = new Nodo(nuevoValor);

        // 2. Verificar si la lista enlazada está vacía.
        if (this.inicio == null) {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    mostrar() {
        // 1. Verificar si la lista enlazada está vacía.
        if (this.inicio == null) {
            console.log('Lista enlazada vacía.');
            return;
        }

        // 2. Si la lista no está vacía, empezar a recorrerla.
        let aux = this.inicio;
        while (aux != null) {
            console.log(aux.valor);
            aux = aux.siguiente;
        }
    }

    buscar(valorABuscar) {
        // 1. Verificar si la lista enlazada está vacía.
        if (this.inicio == null) {
            return undefined;
        }

        // 2. Empezar a recorrer la lista enlazada.
        for (let aux = this.inicio; aux != null; aux = aux.siguiente) {
            if (aux.valor == valorABuscar) {
                return aux;
            }
        }
        return undefined;
    }

    borrarConVariablesAuxiliares(valorABuscar) {
        // 1. Verificar si la lista enlazada está vacía.
        if (this.inicio == null) {
            return;
        }

        // 2. Verificar si el valor que estoy buscando está al inicio.
        if (this.inicio.valor == valorABuscar) {
            this.inicio = this.inicio.siguiente;
            return;
        }

        // 3. Verificar si el valor que estoy buscando está al final.
        if (this.final.valor == valorABuscar) {
            let aux = this.inicio;
            while(aux.siguiente != this.final){
                aux = aux.siguiente;
            }
            this.final = aux;
            aux.siguiente = null;
        }

        let aux = this.inicio;
        let auxAnterior = this.inicio;
        aux = this.inicio.siguiente;
        let auxSiguiente = aux.siguiente;

        while (aux.siguiente != null) {
            if (aux.valor == valorABuscar) {
                auxAnterior.siguiente = auxSiguiente;
                return;
            }
            auxAnterior = aux;
            aux = aux.siguiente;
            auxSiguiente = aux.siguiente;
        }


    }

    borrarSiguiente(valorABuscar) {
        // 1. Verificar si la lista enlazada está vacía.
        if (this.inicio == null) {
            return;
        }

        // 2. Verificar si el valor que estoy buscando está al inicio.
        if (this.inicio.valor == valorABuscar) {
            this.inicio = this.inicio.siguiente;
            return;
        }

        // 3. Recorremos la lista en busca del valor a borrar.
        for (let aux = this.inicio; aux != null; aux = aux.siguiente) {
            if (aux.siguiente.valor == valorABuscar) {
                if(aux.siguiente == this.final){
                    this.final = aux;
                }
                aux.siguiente = aux.siguiente.siguiente;
                return;
            }
        }
    }
}

let listaDeComida = new ListaEnlazada();
listaDeComida.mostrar();

listaDeComida.insertarValor('Sopes');
listaDeComida.insertarValor({ nombre: 'Pizza', cantidad: 5 });
listaDeComida.insertarValor('Enchiladas');
listaDeComida.insertarValor('Tacos');
listaDeComida.insertarValor('Ensalada');
listaDeComida.insertarValor('Pastel');
listaDeComida.mostrar();

let valorABuscar;
valorABuscar = 'Pastel';
let valorEncontrado = listaDeComida.buscar(valorABuscar);
if (typeof valorEncontrado !== 'undefined') {
    console.log(`El valor ${valorABuscar} SÍ existe en la lista enlazada`);
} else {
    console.log(`El valor ${valorABuscar} NO existe en la lista enlazada`);
}

valorABuscar = 'Hamburguesa';
valorEncontrado = listaDeComida.buscar(valorABuscar);
if (valorEncontrado !== undefined) {
    console.log(`El valor ${valorABuscar} SÍ existe en la lista enlazada`);
} else {
    console.log(`El valor ${valorABuscar} NO existe en la lista enlazada`);
}

console.log('Lista antes de borrar');
listaDeComida.mostrar();
let valorABorrar = 'Tacos';
listaDeComida.borrarSiguiente(valorABorrar);
console.log('Lista después de borrar');
listaDeComida.mostrar();

valorABorrar = 'Pastel';
listaDeComida.borrarSiguiente(valorABorrar);
console.log('Lista después de borrar');
listaDeComida.mostrar();

valorABorrar = 'Sopes';
listaDeComida.borrarSiguiente(valorABorrar);
console.log('Lista después de borrar');
listaDeComida.mostrar();

let listaDeAnimales = new ListaEnlazada();
listaDeComida.mostrar();

listaDeAnimales.insertarValor('Gato');
listaDeAnimales.insertarValor('Perro');
listaDeAnimales.insertarValor('Loro');
listaDeAnimales.insertarValor('Pajaro');
listaDeAnimales.insertarValor('Delfín');
listaDeAnimales.insertarValor('Tigre');
listaDeAnimales.mostrar();

let animalABorrar;
animalABorrar = 'Gato';
console.log(`Después de borrar ${animalABorrar} `)
listaDeAnimales.borrarConVariablesAuxiliares(animalABorrar);
listaDeAnimales.mostrar();

animalABorrar = 'Pajaro';
console.log(`Después de borrar ${animalABorrar} `)
listaDeAnimales.borrarConVariablesAuxiliares(animalABorrar);
listaDeAnimales.mostrar();

animalABorrar = 'Tigre';
console.log(`Después de borrar ${animalABorrar} `)
listaDeAnimales.borrarConVariablesAuxiliares(animalABorrar);
listaDeAnimales.mostrar();

animalABorrar = 'Conejo';
console.log(`Después de borrar ${animalABorrar} `)
listaDeAnimales.borrarConVariablesAuxiliares(animalABorrar);
listaDeAnimales.mostrar();

