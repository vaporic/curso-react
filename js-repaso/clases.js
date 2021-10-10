//const Rectangulo = class R {

//}

// Clases declaradas con class no tienen hoisting
class Rectangulo {

}

// Hoisting
// Y esto es cuando tomamos variables definidas con var
// y funciones definidas con function

function Cuadrado() {

}

//console.log(Cuadrado, Rectangulo);

const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre
    static estatico = 42
    constructor(estado = 'feliz', hambre = false) {
        this.estado = estado
        this.#hambre = hambre
    }

    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`);
    }

    static comer() {
        console.log(this.estatico,'estoy comiendo!');
    }
}
Chancho.comer()
const feliz = new Chancho('Feliz...')
// feliz.hablar()
// console.log(feliz);
const triste = new Chancho('Triste...')
// triste.hablar()
const nose = new Chancho()
// nose.hablar()