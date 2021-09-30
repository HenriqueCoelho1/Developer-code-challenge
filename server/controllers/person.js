const pool = require('../db')


exports.create = async (req, res) => {
    try {
        const { name, email, cpf } = req.body
        const createPerson = await
            pool.query("INSERT INTO person (name, email, cpf) VALUES($1, $2, $3)",
                [name, email, cpf])

    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }
}