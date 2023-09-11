const jwt = require('jsonwebtoken')

/**
 * Player authentication with JWT middleware.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.authenticatePlayer = (req, res, next) => {
    const token = req.cookies.player_token

    try {
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = user
        next()
    } catch (err) { // Token expired or is invalid.
        res.clearCookie("player_token") 
        res.send(err)
    }
}

/**
 * Administrative authentication with JWT middleware.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.authenticateAdmin = (req, res, next) => {
    const token = req.cookies.admin_token

    try {
        const admin = jwt.verify(token, process.env.ADMIN_TOKEN_SECRET)
        req.user = admin
        next()
    } catch (err) { // Token expired or is invalid.
        res.clearCookie("admin_token") 
        res.send(err)
    }
}