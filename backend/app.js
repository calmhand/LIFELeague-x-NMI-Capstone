/**
 * Initialize required modules for API, then launch to listen for requests.
 */

require('dotenv/config')
const express = require('express')
const favicon = require('serve-favicon')

const path = require('path')

const auth = require("./src/routes/auth")
const admin = require("./src/routes/admin")
const player = require("./src/routes/player")

const app = express()
const port = process.env.PORT

app.use(favicon('./src/public/images/favicon.ico'))
app.use(express.static('src/public'))
app.use(express.json())

app.use(auth)
app.use(admin)
app.use(player)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
  console.log(`Server running on Port ${port}. Enjoy! 🤍`)
})