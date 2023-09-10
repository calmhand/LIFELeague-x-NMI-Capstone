const express = require("express")
const app = module.exports = express()
const jwt = require("jsonwebtoken")


app.get('/auth', (req, res) => {
    res.send("auth")
})

app.post('/login', (req, res) => {
    res.send("auth")
    const username = req.body.username
})