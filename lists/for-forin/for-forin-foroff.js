const service = require('./service')

async function main() {
    try {
        const result = await service.getPeoples('a')
        const names = []

        //for
        for(let i = 0 ; i <= result.results.length - 1; i++){
            const people = result.results[i]
            names.push(people.name)
        }

        //for in
        for(let i in result.results) {
            const people = result.results[i]
            names.push(people.name)
        }

        //for of
        for(people of result.results) {
            names.push(people.name)
        }

        console.log(names)

    }
    catch(error) {
        console.error(`error`, error)
    }
}