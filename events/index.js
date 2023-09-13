const { EventEmitter } = require('stream')

constEventEmitter = require('events')
class MeuEmissor extends EventEmitter{

} 

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clickou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de  rolagem')
meuEmissor.emit(nomeEvento, 'no ok')