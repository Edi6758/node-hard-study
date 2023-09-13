function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                name: "edi",
                dateBorn: new Date()
            })
        })
    })
}

async function main() {
    try {
        const user = await getUser()
        console.log(user)
    } catch (error) {
        console.error("erro", error)
    }
}