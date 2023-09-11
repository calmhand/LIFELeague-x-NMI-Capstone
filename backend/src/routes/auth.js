const { Router } = require('express')
const router = Router()
const authController = require('../controllers/authController')
const {authenticateAdmin} = require('../middleware/jwtAuth')


// Not in use.
// router.get('/signup', authController.signUp_get)
// router.get('/login', authController.login_get)

// Login/Registration Routes for 'Player'.
router.post('/signup', authController.signUp_post)
router.post('/login', authController.login_post)

// Login/Registration Routes for 'Admin'.
router.post('/admin-login', authController.adminLogin_post)
router.post('/admin-signup', authenticateAdmin, authController.adminSignUp_post) // Only available to verified Admin.

module.exports = router