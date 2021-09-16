const { where } = require('sequelize/types')
const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }
    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id){
        return database[this.nomeDoModelo].findOne()
    }

    async criaRegistro(dados){

    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}){
        return database[this.nomeDoModelo].update(dadosAtualizados, where, transacao)
    }

    async atualizaRegistros(dadosAtualizados, id, transacao = {}){
        return database[this.nomeDoModelo].update(dadosAtualizados, {where: {...where}}, transacao)
    }

    async apagaRegistro(id){
        
    }
}

module.exports = Services