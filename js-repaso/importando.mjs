//const ok = require('./importexport.js')
//console.log(ok)

import ok, { test2, test3, fn1, fn2 } from './importexport.mjs'

console.log(ok)
console.log(test2);
console.log(test3);
fn1()
fn2()