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

app.post("/api/user", async (req, res) => {
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

app.get("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const listOne = await pool.query("SELECT * FROM person WHERE id = $1", [id])

        res.json(listOne.rows[0])


    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }
})

app.get("/api/user", async (req, res) => {
    try {
        const listAll = await pool.query("SELECT * FROM person")

        res.json(listAll)


    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }
})

app.put("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        const updateOne =
            await pool.query("UPDATE person SET name = $1, email = $2 WHERE id = $3", [name, email, id])

        res.json("User updated!")

    } catch (err) {
        console.log("UPDATE ERROR", err.message)

    }
})


app.delete("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteOne = await pool.query("DELETE FROM person WHERE id = $1", [id])

        res.json("This person was deleted!")

    } catch (error) {
        console.log("REMOVE ERROR", err.message)

    }
})


//routes
// readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`TESTING SERVER ON PORT ${PORT}`)
})