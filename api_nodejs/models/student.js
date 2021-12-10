const mongoose = require('mongoose');

const student = new mongoose.Schema({
    matricule:{
        type: Number,
        required: true,
        unique: true
    },
    nomComplet: String,
    classe: String
},{
    timestamps: true
});

const Student = mongoose.model('Student', student, 'students');

module.exports = { Student };