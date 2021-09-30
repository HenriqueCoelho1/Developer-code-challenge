const express = require('express')

const router = express.Router()

const { create } = require('../controllers/person')


router.post("/create", create)