const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


module.exports.signUp_get = (req, res) => {}

module.exports.login_get = (req, res) => {}

module.exports.adminSignUp_post = async (req, res) => {
    const { username, password } = req.body
    if (!username, !password) {
        res.status(400).send('Fields must not be blank upon submission.')
    } else {
        const hash = await bcrypt.hash(password, 10)
        try {
            const newAdmin = await prisma.admin.create({
                data: {
                    username: username,
                    password: hash
                }
            })
            res.status(201).json(newAdmin)
        } catch (err) {
            if (err.code === 'P2002') {
                res.status(400).send("User already exists. Change your username.")
            } else {
                res.status(400).send(err)
            }
        }
    }
}

module.exports.adminLogin_post = async (req, res) => {
    const { username, password } = req.body

    try {
        const admin = await prisma.admin.findFirst({
            where: {username: username}
        })
        
        if (admin === null) {
            throw "Bad username."
        }

        // TODO: Describe the payload to be sent to frontend upon login here.
        const payload = {
            username: admin.username,
            adminID: admin.adminID,
            // privilege level,
        }

        if (await bcrypt.compare(password, admin.password)) {
            // Take user object and sign it with JWT.
            const accessToken =  jwt.sign(payload, process.env.ADMIN_TOKEN_SECRET, { expiresIn: "1h" })

            // Creates cookie and stores on local storage
            res.cookie("admin_token", accessToken, {
                httpOnly: true,
                secure: true
            })

            // TODO: return a payload with all necessary info of admin.
            res.json(payload)
        } else {
            res.send("Admin login: Bad Password.")
        }
    } catch (err) {
        res.send(err)
    }
}

module.exports.signUp_post = async (req, res, next) => {
    const { username, password } = req.body
    if (!username, !password) {
        res.status(400).send('Fields must not be blank upon submission.')
    } else {
        const hash = await bcrypt.hash(password, 10)
        try {
            const newUser = await prisma.player.create({
                data: {
                    username: username,
                    password: hash
                }
            })
            res.status(201).json(newUser)
        } catch (err) {
            if (err.code === 'P2002') {
                res.status(400).send("User already exists. Change your username.")
            } else {
                res.status(400).send(err)
            }
        }
    }
}

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await prisma.player.findFirst({
            where: {username: username}
        })
        
        if (user === null) {
            throw "Bad username."
        }

        // TODO: Describe the payload to be sent to frontend upon login here.
        const payload = {
            username: user.username,
            playerID: user.playerID,
            // stats,
            // currency,
            // progress
        }

        if (await bcrypt.compare(password, user.password)) {
            // Take user object and sign it with JWT.
            const accessToken =  jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })

            // Creates cookie and stores on local storage
            res.cookie("player_token", accessToken, {
                httpOnly: true,
                secure: true
            })

            // TODO: return a payload with all necessary info of user.
            res.json(payload)
        } else {
            res.send("Player login: Bad Password.")
        }
    } catch (err) {
        res.send(err)
    }
}