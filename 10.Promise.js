const fileSystem = require('fs');
const funcPromise1 = (path) =>
{
    return new Promise((resolve, reject) =>
    {
        fileSystem.readFile(path, 'utf8', (error, read) =>
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                resolve(read);              
            }
        })
    })    
}

funcPromise1('./test/first.txt')
.then((read)=>
{
    console.log(read)
    console.log("3");
    funcPromise1('./test/second.txt')
    .then((read)=>
    {
        console.log("1");
        console.log(read);
    })
    .catch((fail) =>
    {
        console.log("2");
        console.log(fail);
    })
})
.catch((fail) =>
{
    console.log("4");
    console.log(fail);
})

// chaining the .then and .catch is better cause the function doenst get called twice

// 1st
// 4st
// 2st
// 3st
// 6st
// 7st
// 8st
// 9st
// hello this is the first file
// 5st

// if function().catch is used 

// 1st
// 4st
// 2st
// 3st
// 6st
// 2st
// 3st
// 6sts
// 7st
// 8st
// 9st
// hello this is the first file
// 5st
// 8st
// 9st

