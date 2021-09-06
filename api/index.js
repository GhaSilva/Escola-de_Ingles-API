const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json)



app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'Boas-Vindas a API'})
)

app.listen(3000, () => console.log(`Servidor está rodando na porta 3000`))

module.exports = app