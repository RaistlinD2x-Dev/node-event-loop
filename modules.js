// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
const { add, multiply, divide, subtract } = require('./test-module-2');
// console.log(calc2.add(2, 5));
// console.log(calc2.multiply(2, 5));
console.log(multiply(2, 5));

// caching
// only loaded once showing Hello from the module
// function is ran 3 times
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
