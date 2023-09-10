const express = require("express")
const app = module.exports = express()

app.get('/player', (req, res) => {
    res.send("player")
})