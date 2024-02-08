const fileSystem = require('fs')

// default 64kb = 64000 bytes
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = fileSystem.createReadStream('./test/big.txt', {highWaterMark:100000, encoding:'utf8'})
stream.on('data', (result) => 
{
  console.log(result)
})
stream.on('error', (err) => 
{
    console.log(err)
})