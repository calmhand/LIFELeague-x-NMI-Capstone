const express = require("express")
const app = module.exports = express()
const bcrypt = require('bcrypt')
const db = require('../db/connection')

/**
 * Returns all Admins in DB
 */
app.get('/getAdmins', (req, res) => {
    db.getConnection((err, conn) => {
        conn.query('SELECT * FROM Admin', (err, rows) => {
            if (err) { throw err }
            res.json(rows)
        })
        conn.release()
    })
})

/**
 * Creates a new Admin.
 */
app.post('/create/admin', async (req, res) => {
    try {
        // Salt and hash password
        const hash = await bcrypt.hash(req.body.password, 10)
        const addAdmin = `INSERT INTO Admin (username, password) VALUES ('${req.body.username}', '${hash}')`
        
        // Insert information to Admin Table
        db.getConnection((err, conn) => {
            conn.query(addAdmin, (err, rows) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        res.status(500).send("Admin username in use.")
                        // TODO: Return proper response to handle in frontend.
                    }
                }
                res.status(201).send()
            })
            conn.release()
        })
    } catch {
        res.status(500).send()
    }
})

/**
 * Login procedure as Admin.
 */
app.post('/login/admin', (req, res) => {
    const findAdmin = `SELECT * FROM Admin WHERE username='${req.body.username}'`

    // TODO: Connect to frontend.
    db.getConnection((err, conn) => {
        conn.query(findAdmin, async (err, rows) => {
            if (err) throw err
            let admin = rows[0]

            // Check if admin exists.
            if (admin.username === null) {
                res.sendStatus(400).send("Admin login: Admin not found.")
                // TODO: Return proper response to handle in frontend.
            }

            // Compare password with stored hash in db.
            try {
                if (await bcrypt.compare(req.body.password, admin.password)) {
                    res.send("Admin login: Success.")
                } else {
                    res.send("Admin login: Bad Password.")
                }
            } catch {
                res.status(500).send()
            }
            conn.release()
        })
    })
})