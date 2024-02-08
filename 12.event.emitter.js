const eventEmitter = require('events');
const customEmitter = new eventEmitter();

customEmitter.on('response',(name, id) =>
{
    console.log(`event emitted by ${name} and id no. ${id}`)
})

customEmitter.emit('response', 'tasmai', 24)

