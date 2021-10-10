const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const { readdirSync } = require('fs')
require('dotenv').config()
const app = express();


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())



//routes
app.use('/api', userRoutes)
app.use('/api', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`TESTING SERVER ON PORT ${PORT}`)
})