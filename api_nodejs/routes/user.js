const express = require('express');
const router = express.Router();

const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/userController');

// route pour la modification
router.put('/:id', updateUser);

// route pour la suppression
router.delete('/:id', deleteUser);

// route pour récupérer un utilisateur
router.get('/allUsers', getAllUsers);

module.exports = router;
