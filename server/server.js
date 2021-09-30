const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pool = require('./db')
const { readdirSync } = require('fs')
require('dotenv').config()
const app = express();


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.post("/api/create", async (req, res) => {
    try {
        const { name, email, cpf } = req.body
        const createPerson = await
            pool.query("INSERT INTO person (name, email, cpf) VALUES($1, $2, $3) RETURNING *",
                [name, email, cpf])
        res.json(createPerson.rows[0])
    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }

})


//routes
// readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`TESTING SERVER ON PORT ${PORT}`)
})