const process = require('process')

process.stdout.on('data', (data) => {
    console.log(data.toString())
})