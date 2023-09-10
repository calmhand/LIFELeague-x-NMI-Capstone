const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports.signUp_get = (req, res) => {
    
}

module.exports.login_get = (req, res) => {

}

module.exports.signUp_post = async (req, res, next) => {
    const { username, password } = req.body

    try {
        const createNewUser = await prisma.admin.create({
            data: req.body
        })
        res.json(createNewUser)
    } catch (err) {
        if (err.code === 'P2002') {
            res.send("User already exists. Change your username.")
        }
    }
}

module.exports.login_post = (req, res) => {
    const { username, password } = req.body
    console.log(username);
    console.log(password);
    res.send("new login")
}