const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 100,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      profilePicture: {
        type: String,
        default: "",
      },
      coverPicture: {
        type: String,
        default: "",
      },
      followers: {
        type: Array,
        default: [],
      },
      followings: {
        type: Array,
        default: [],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      desc: {
        type: String,
        max: 50,
      },
      details: {
        type: Object,
        default: {},
      },
      about: {
        type: Object,
        default: {},
      },
    },
    { timestamps: true }
);

const User = mongoose.model('User', user, 'users');

module.exports = { User };