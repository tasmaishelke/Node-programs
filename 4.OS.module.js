const os = require('os');

// info about user 
const user = os.userInfo();
console.log(user);

//info about uptime of pc

console.log(`The uptime is ${os.uptime()}`);

const systemInfo = 
{
    name : os.type(),
    version : os.version(),
    freeMemory : os.freemem()/1000/1000,
    totalMemory : os.totalmem(),

};
console.log(systemInfo);