const fileSystem = require('fs');
const readFirstFile = fileSystem.readFileSync('./test/first.txt', 'utf8');
const readSecondFile = fileSystem.readFileSync('./test/second.txt', 'utf8');
console.log(readFirstFile);
console.log(readSecondFile);


//second way is destructing here itself
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./test/first.txt', 'utf8');
const second = readFileSync('./test/second.txt', 'utf8');
console.log(`${first}\n${second}`);


const result = writeFileSync("./test/result-sync.txt", `the two file are :  ${first}, ${second}\n`, {flag : 'a'});
//                           this is path and         what to write                           flag object to 
//                           file name to be                                                  to append
//                            created


