const { Router } = require('express')
const router = Router()

/* importando a função getUsers, creatUser, getUserById, deleteUser, updateUser */
const { getUsers, creatUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller')
/* pirmeira rota do tipo get */
router.get('/users', getUsers)
/* rota para listar um usuário específico */
router.get('/users/:id', getUserById)
/* rota para enviar os dados para o banco */
router.post('/users', creatUser)
/* rota pra deletar dados da tabela de usuários do banco */
router.delete('/users/:id', deleteUser)
/* rota para alterar os dados de usuário do banco */
router.put('/users/:id', updateUser)

module.exports = router