const jwt = require("jsonwebtoken")

function authorizeUser(payload) {
    jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)
}

module.exports = {authorizeUser}