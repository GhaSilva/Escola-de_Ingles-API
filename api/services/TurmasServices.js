const TurmaController = require('../controllers/TurmaController')
const Services = require('./Services')

class TurmasServices extends Services{
    constructor(){
        super('Turmas')
    }
}

module.exports = TurmasServices