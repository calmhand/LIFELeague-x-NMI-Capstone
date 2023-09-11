const express = require("express")
const app = module.exports = express()
const {authenticatePlayer} = require('../middleware/jwtAuth')

app.get('/player', authenticatePlayer, (req, res) => {
    res.send(`Authorized: GET /player accessed by ${req.user.username}.`)
})