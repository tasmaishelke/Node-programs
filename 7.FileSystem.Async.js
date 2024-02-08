// this whole code is an example of event loop and callback hell

// const {readFile, writeFile} = require('fs');
const fileSystem = require('fs');

console.log("1");
fileSystem.readFile('./test/first.txt', 'utf8', (error, read) => 
{
    console.log("1st calstart");
    if (error)
    {
        console.log(error);
        //return; // if we write return then we dont need to write the code in else part. it will return from here itself if 'if statement' triggers
    }
    else
    {
        console.log(read);
        const first = read;
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
                const second = read;
                fileSystem.writeFile('./test/result-async.txt', `the two file are :  ${first}, ${second}\n`, (error, write) =>
                {
                    console.log("3rd calstart");
                    if(error)
                    {
                        console.log(error);
                        //return;
                    }
                    else 
                    {
                        console.log("Done with creating txt");                
                    }
                });
                console.log("end of 2nd read");
            }
        });
        console.log("end of 1st read");

    }
});
console.log("end");

