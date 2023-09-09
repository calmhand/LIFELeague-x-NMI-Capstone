/**
 * Initialize required modules for API, then launch to listen for requests.
 */

const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const port = 3333

app.use(favicon('./favicon.ico'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})