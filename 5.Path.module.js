const path = require('path');

console.log(path.sep);

const pathJoin = path.join('test', 'test2', 'test3.txt');
console.log(pathJoin);

const baseFile = path.basename(pathJoin);
console.log(baseFile);

const absolute = path.resolve(__dirname, pathJoin);
console.log(absolute);