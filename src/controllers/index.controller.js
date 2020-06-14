/* importando o banco de dados */
const { Pool } = require('pg')
const { query } = require('express')
/* criando a conexão com o banco */
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'firstapi',
    port: '5432'
})

/* listando os dados da tabela de usurários do banco */
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response.rows)
    res.status(200).json(response.rows)
}

/* listando os usuários pelo id */
const getUserById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows)
}

/* criando método para inserir dados no banco na tabela de usuários */
const creatUser = async (req, res) => {
    const { name, email } = req.body
    const response = await pool.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email])
    console.log(response)
    res.json({
        message: 'User Added Successfully!',
        body: {
            user: { name, email }
        }
    })
}

/* método para alterar dados na tabela de usuáros pelo id*/
const updateUser = async (req, res) => {
    const id = req.params.id
    const { name, email} = req.body
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name, email, id
    ])
    console.log(response)
    res.json(`User updated succefully!`)
}

/* método para deletar um dado da tabela de usuários pelo id */
const deleteUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response)
    res.json(`User ${id} deleted succefully!`)
}

/* exportando o getUsers como uma função */
module.exports = {
    getUsers,
    creatUser,
    getUserById,
    deleteUser,
    updateUser
}

/* parei ao 36:21 do vídeo de rest api com node e postgres */