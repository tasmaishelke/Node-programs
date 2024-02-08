const http = require('http');

const server = http.createServer((request, response) =>
{
    if(request.url === '/')
    {
        response.end("Hi this is a http response");
    }
    else if(request.url === '/about')
    {
        for (let i = 0; i < 1000; i++) {       // this is blocking code
            for (let j = 0; j < 1000; j++) {
              console.log(`${i} ${j}`)
            }
          }
        response.end("Here is history");
    }
    else
    {
        response.end(`<a href = "/">go back<a>`);
    }
});
server.listen(2000);
