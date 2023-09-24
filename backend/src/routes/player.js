const express = require("express")
const app = module.exports = express()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const {authenticatePlayer} = require('../middleware/jwtAuth')

app.get('/player', authenticatePlayer, (req, res) => {
    res.send(`Authorized: GET /player accessed by ${req.user.username}.`)
})

app.get('/player/verify', (req, res) => {
    
})