const express = require('express')
const pool = require('../db')
const router = express.Router()
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')

router.post("/user", [
    check('name').isAlpha().isLength({ min: 2, max: 200 }).trim(),
    check('email').isEmail().isLength({ min: 3, max: 200 }).trim(),
    check('password').isLength({ min: 6, max: 50 }).trim(),
    check('cpf').isNumeric().isLength({ min: 11, max: 11 }).trim()
],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                // console.log(errors)
                return res.status(422).json({ errors: errors.array() })
            }

            const { name, email, password, cpf } = req.body

            const hashedPassword = await bcrypt.hash(password, 10)

            const nameUpper = name.toUpperCase()
            const createUser = await
                pool.query("INSERT INTO usr (name, email, password, cpf) VALUES($1, $2, $3, $4) RETURNING *",
                    [nameUpper, email, hashedPassword, cpf])
            res.json(createUser.rows[0])

        } catch (err) {
            console.log("CREATE ERROR", err.message)
        }

    })

// router.post("/user", [
//     check('name').isAlpha().isLength({ min: 2, max: 200 }).trim(),
//     check('email').isEmail().isLength({ min: 3, max: 200 }).trim(),
//     check('password').isLength({ min: 6, max: 50 }).trim(),
//     check('cpf').isNumeric().isLength({ min: 11, max: 11 }).trim()


// ],
//     async (req, res, next) => {
//         try {
//             const errors = validationResult(req)
//             if (!errors.isEmpty()) {
//                 // console.log(errors)
//                 return res.status(422).json({ errors: errors.array() })
//             }

//             const { name, email, cpf } = req.body

//             const nameUpper = name.toUpperCase()
//             const createUser = await
//                 pool.query("INSERT INTO usr (name, email, cpf) VALUES($1, $2, $3) RETURNING *",
//                     [nameUpper, email, cpf])
//             res.json(createUser.rows[0])

//         } catch (err) {
//             // console.log("CREATE ERROR", err.message)
//             next(err)

//         }

//     })

router.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const listOne = await pool.query("SELECT * FROM usr WHERE id = $1", [id])

        res.json(listOne.rows[0])


    } catch (err) {
        // console.log("CREATE ERROR", err.message)

    }
})

router.get("/user", async (req, res) => {
    try {
        const listAll = await pool.query("SELECT * FROM usr ORDER BY id ASC")

        res.json(listAll.rows)


    } catch (err) {
        // console.log("CREATE ERROR", err.message)

    }
})

router.put("/user/:id",
    check('email').isEmail().isLength({ min: 3, max: 200 }).trim(),
    check('name').isString().isLength({ min: 2, max: 200 }).trim(),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                // console.log(errors)
                return res.status(422).json({ errors: errors.array() })
            }
            const { id } = req.params
            const { name, email } = req.body
            const nameUpper = name.toUpperCase()
            const updateOne =
                await pool.query("UPDATE usr SET name = $1, email = $2 WHERE id = $3", [nameUpper, email, id])

            res.json("User updated!")

        } catch (err) {
            // console.log("UPDATE ERROR", err.message)

        }
    })


router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteOne = await pool.query("DELETE FROM usr WHERE id = $1", [id])

        res.json("This user was deleted!")

    } catch (error) {
        // console.log("REMOVE ERROR", err.message)

    }
})

module.exports = router
