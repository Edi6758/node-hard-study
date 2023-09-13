const axios = require('axios');
const URL = `https://swapi.co/api/people`

async function getPeoples(name) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.getAdapter(url)
    return response.data
}

module.exports = {
    getPeoples
}

getPeoples('r2')
    .then(function (result) {
        console.log('result', result)
    })
    .catch(function (error) {
        console.error('error', error)
    })