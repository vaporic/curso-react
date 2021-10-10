const test = ['test1', 'test2', 'test3']
const test2 = ['test3', 'test4', 'test5']
const test3 = []

//export const test2 = ['test3', 'test4', 'test5']
//export const test3 = []

/*module.exports = {
    test,
    test2
}*/
const fn1 = () => {
    console.log('soy la función 1');
}

function fn2() {
    console.log('soy la función 2');
}

export { test2, test3, fn1, fn2 }
export default test