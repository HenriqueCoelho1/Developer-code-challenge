const jwt = require('jsonwebtoken')

const jwtTokens = ({ id, name, email }) => {

    const user = { id, name, email }
    const accessToken = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "30d" })


    return ({ accessToken })
}

module.exports = { jwtTokens }