const { Student } = require('../models/student')

const getAllStudents = async (req, res) => {
    const students = await Student.find();
    
    res.send(students);
}

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