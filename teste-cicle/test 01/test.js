const assert = require('assert')
const {
    obterPessoas
} = require('./service')

const nock = require('nock')

describe('Star Wars Tests', function () {
    this.beforeAll(() => {
        const response = {
            "name": "edi",
            "phone": "442343423",
            "email": "edi@edi.com.br",
            "cpf": "53453353", 
            "password": "fdsjoifdsfjsfsdfsa"
        }

        nock('https://swapi.co/api/people')
            .get('/...')
            .reply(200, response)
    })

    it('deve buscar o r2d2 com o formato correto', async () => {
        const expected = [{ nome: 'R2-D2', peso: '96' }]
        const nomeBase = `r2-d2`
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)
    })
})
