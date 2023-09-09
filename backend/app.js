/**
 * Initialize required modules for API, then launch to listen for requests.
 */

require('dotenv/config')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')


const app = express()
const port = process.env.PORT

app.use(favicon('./favicon.ico'))
app.use(express.static('src/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
  console.log(`Server running on Port ${port}. Enjoy! 🤍`)
})