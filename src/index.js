/* importando o express */
const express = require('express')
/* criando uma instância de app para rodar o servidor e as rotas */
const app = express()

/* configurando os middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

/* rotas */
app.use(require('./routes/index'))

/* configurando o servidor para rodar na porta 3000 */
app.listen(3000)
console.log('Server on port 3000')
