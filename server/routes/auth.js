const express = require('express')
const pool = require('../db')
const router = express.Router()
const bcrypt = require('bcrypt')
const { jwtTokens } = require('../utils/jwtHelpers')


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const users = await pool.query('SELECT * FROM usr WHERE email = $1', [email])

        if (users.rows.length === 0) return res.status(401).json({ error: "Email is incorrect" })

        const validPassword = await bcrypt.compare(password, users.rows[0].password)
        if (!validPassword) return res.status(401).json({ error: "This password is not correct" })

        let tokens = jwtTokens(users.rows[0])
        res.json(tokens)


    } catch (err) {
    }
})

router.get('/login', async (req, res) => {
    res.json({
        message: "Hello"
    })
})

module.exports = router