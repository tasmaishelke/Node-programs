// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require('./3.1.name');
const hi = require('./3.2.function');
const variousData = require('./3.3.alternateshare');


// console.log(nameRequire);
// console.log(functionRequire);





hi.sayHi(name.name2);
hi.sayHi(name.name1);
hi.sayHi(name.name3);

a = variousData.fruits[1];
b = variousData.employee;
console.log(a);
console.log(b);




