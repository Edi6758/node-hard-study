/**
 * 0 - obter o endereço do usuário
 * 1 - preciso obter o número de telefone de um usuário a partir do ID
 * 2 - obter o endereco do usuário pelo ID
 */

function getUser(callback) {
    setTimeout(function () {
        callback(null, {
            id: 1,
            name: "Edi",
            dateBorn: new Date()
        });
    }, 1000);
}

function getPhone(idUser, callback) {
    setTimeout(() => {
        callback(null, {
            phone: '11231321',
            ddd: '48'
        });
    }, 2000);
}

function getAddress(idUser, callback) {
    // Suponhamos que esta função também tenha um código para obter o endereço pelo ID do usuário.
    // Aqui, você deve implementar a lógica para obter o endereço.
}

function resolveUser(erro, user) {
    if (erro) {
        console.error("ERROR", erro);
        return;
    }
    console.log("user", user);
    // Aqui você pode chamar a função getAddress se desejar.
}

function resolvePhone(erro, phone) {
    if (erro) {
        console.error("ERROR", erro);
        return;
    }
    console.log("phone", phone);
}

getUser(function (erro, user) {
    if (erro) {
        console.error("ERROR", erro);
        return;
    }
    resolveUser(null, user); // Chame resolveUser com o usuário obtido
    getPhone(user.id, resolvePhone); // Chame getPhone com o ID do usuário e o callback resolvePhone
});
