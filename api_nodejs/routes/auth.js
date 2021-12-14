const express = require('express');
const router = express.Router();

const { saveUser, loginUser } = require('../controllers/userController');

// route pour l'enregistrement
router.post('/register', saveUser);

// route pour le login
router.post('/login', loginUser);


module.exports = router;