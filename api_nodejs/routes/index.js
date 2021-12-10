const express = require('express');
const router = express.Router();

const {getAllStudents, addStudent} = require('../controllers/studentController');

router.get('/allStudents', getAllStudents);

router.post('/addStudent', addStudent);


module.exports = router
