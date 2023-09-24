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
        .catch((err) => {
            throw (`Prisma Error\n ${err}`);
        })
        
        if (admin === null) {
            throw "Bad username."
        } else {
            // TODO: Describe the payload to be sent to frontend upon login here.
            const payload = {
                username: admin.username,
                adminID: admin.adminID,
                role: admin.role
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
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports.signUp_post = async (req, res, next) => {
    const { username, first_name, last_name, password, email, statusId, accountTypeId, accessKey } = req.body
    if (!req.body) {
        res.status(400).send('Fields must not be blank upon submission.')
    } else {
        const hash = await bcrypt.hash(password, 10)
        try {
            if (await verifyAccessKey(accessKey)) {
                const newUser = await prisma.players.create({
                    data: {
                        username: username,
                        first_name: first_name,
                        last_name: last_name,
                        password: hash,
                        email: email,
                        statusId: statusId,
                        accountTypeId: accountTypeId,
                        // TODO: Update with any new fields for future tables
                    }
                })
                res.status(201).json(newUser)
            } else {
                res.status(400).send("Err: Invalid access key.")
            }
        } catch (err) {
            if (err.code === 'P2002') {
                res.status(400).send("Err: User already exists. Change your username/email.")
            } else {
                res.status(400).send(err)
            }
        }
    }
}

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await prisma.players.findFirst({
            where: {username: username}
        })

        if (user === null) {
            throw {
                error: true,
                message: "User not found."
            }
        }

        // TODO: Describe the payload to be sent to frontend upon login here.
        const payload = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            userId: user.playerId,
            accountTypeId: user.accountTypeId,
            statusId: user.statusId
            // stats,
            // currency,
            // progress
        }

        if (await bcrypt.compare(password, user.password)) {
            // Take user object and sign it with JWT.
            const accessToken =  jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })

            // Creates cookie and stores on local storage (of server)
            res.cookie("player_token", accessToken, {
                httpOnly: true,
                secure: true
            })

            payload["token"] = accessToken
            
            // TODO: return a payload with all necessary info of user.
            res.json(payload)
        } else {
            throw {
                error: true,
                message: "Player login: Bad Password."
            }
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

async function verifyAccessKey(key) {
    try {
        const accessKey = await prisma.accessKeys.findFirst({
            where: {accessKey: key}
        })

        return accessKey ? true : false

    } catch(err) {
        console.log(err);
        return false
    }
}