
function Fn() {
    this.prop = 'propiedad'
    return 'Hola!'
}

Fn.prototype.lala = function FuncionDePrototipo(){}

const r = new Fn()
//console.log(r.__proto__);

//fat arrow function
const fatFn = () => { // no tienen contexto de this
    return "Hola hugo"
}

const r1 = fatFn()

//return implicito
const fnR = () => 2

console.log(fnR());