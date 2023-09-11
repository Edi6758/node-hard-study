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

const userPromise = getUser()
userPromise
    .then(function (result) {
        console.log("ok", result)
    })
    .catch(function (error) {
        console.log("error", error)
    })