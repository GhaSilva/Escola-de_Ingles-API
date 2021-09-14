const NivelController = require('../controllers/NivelController')
const Services = require('./Services')

class NiveisServices extends Services{
    constructor(){
        super('Niveis')
    }
}

module.exports = NiveisServices