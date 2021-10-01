const express = require('express')
const pool = require('../db')
const router = express.Router()
const { check, validationResult } = require('express-validator')

router.post("/user", [
    check('email').isEmail().isLength({ min: 3, max: 200 }).isEmpty(),
    check('cpf').isNumeric().isLength({ min: 11, max: 11 }).isEmpty(),
    check('name').isString().isLength({ min: 2, max: 200 }).isEmpty()

],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                console.log(errors)
                return res.status(422).json({ errors: errors.array() })
            }
            else {
                const { name, email, cpf } = req.body
                const nameUpper = name.toUpperCase()
                const createPerson = await
                    pool.query("INSERT INTO person (name, email, cpf) VALUES($1, $2, $3) RETURNING *",
                        [nameUpper, email, cpf])
                res.json(createPerson.rows[0])

            }


        } catch (err) {
            console.log("CREATE ERROR", err.message)

        }

    })

router.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const listOne = await pool.query("SELECT * FROM person WHERE id = $1", [id])

        res.json(listOne.rows[0])


    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }
})

router.get("/user", async (req, res) => {
    try {
        const listAll = await pool.query("SELECT * FROM person ORDER BY id ASC")

        res.json(listAll.rows)


    } catch (err) {
        console.log("CREATE ERROR", err.message)

    }
})

router.put("/user/:id",
    check('email').isEmail().isLength({ min: 3, max: 200 }).isEmpty(),
    check('name').isString().isLength({ min: 2, max: 200 }).isEmpty(),
    async (req, res) => {
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


router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteOne = await pool.query("DELETE FROM person WHERE id = $1", [id])

        res.json("This person was deleted!")

    } catch (error) {
        console.log("REMOVE ERROR", err.message)

    }
})

module.exports = router
