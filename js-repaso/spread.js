const fn = (a, b, c) => console.log(a + b + c)

const arr = [1,2,3]

// fn(arr[0], arr[1], arr[2])
//fn(...arr)

const obj1 = { a: 1, b: 2}
const obj2 = { b: 5, c: 'chancito feliz...'}

const obj3 = { ...obj1 }
obj1.a = 10
// console.log(obj3, obj1);

const obj4 = { ...obj1, ...obj2 }