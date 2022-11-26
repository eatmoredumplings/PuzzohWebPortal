const express = require("express");
const router = express.Router();
const { signUp, logIn, logOut } = require('../controllers/auth')

router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/logout', logOut)

module.exports = router;
