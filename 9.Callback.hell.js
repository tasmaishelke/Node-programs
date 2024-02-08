const fileSystem = require('fs');

console.log("1");
fileSystem.readFile('./test/first.txt', 'utf8', (error, read) => 
{
    console.log("1st calstart");
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(read);
        fileSystem.readFile('./test/second.txt', 'utf8', (error, read) =>
        {
            console.log("2nd calstart");            
            if (error)
            {
                console.log(error);
                // return;
            }
            else
            {
                console.log(read);
            }
        })
    }
})