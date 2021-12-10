const { Student } = require('../models/student')

// récupérer tous les étudiants
const getAllStudents = async (req, res) => {
    const students = await Student.find();
    
    res.send(students);
}

// enregistrer un nouvel étudiant
const addStudent = async (req, res) => {
    const {matricule, nomComplet, classe, createdAt} = req.body; 
    const student = new Student({matricule, nomComplet, classe, createdAt});

    const result = await student.save();

    res.send(result);
}

module.exports = {
    getAllStudents,
    addStudent,
}