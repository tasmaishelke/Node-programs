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
const start = async() => 
{
    try 
    {
        const firstFile = await funcPromise1('./test/first.txt')
        console.log(firstFile)
    
        const secondFile = await funcPromise1('./test/second.txt')
        console.log(secondFile)
        fileSystem.writeFile('./test/async-await.txt', `${firstFile}\n${secondFile}`, (error, read) =>
        {
            if (error)
            {
                console.log(error);
            }
            else
            {
                console.log("file is created");
                console.log(fileSystem.readFile('./test/async-await.txt', 'utf8', (error, read) =>
                {
                    if (error)
                    {
                        console.log(error);
                    }
                    else
                    {
                        console.log(read);              
                    }
                }))
            }
        })
    } 
    catch (error) 
    {
        console.log(error, "this is error");
    }
}
start();

