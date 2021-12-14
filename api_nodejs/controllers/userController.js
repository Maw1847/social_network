const { User } = require('../models/User');
const bcrypt = require('bcrypt');

// Enregistrer un utilisateur...
const saveUser = async(req, res)=> {
    

    try {
        // crypter le mot de passe
        const keygen = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, keygen);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });
        
        // enregistrer l'user et renvoyer une réponse
        const result = await newUser.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }

}


// Connection de l'user
const loginUser = async(req, res)=> {
    try {
        // chercher l'user grâce à son mail
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        // vérifier le mot de passe
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        // all good
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error);
    }

}

// modifier(compléter) les informations d'un utilisateur
const updateUser = async(req, res)=> {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
          try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
          } catch (err) {
            return res.status(500).json(err);
          }
        }
        try {
          const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json("Le compte a été mis à jour");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json("Vous pouvez seulement modifier votre compte");
      }
}

//supprimer un utilisateur
const deleteUser = async(req, res)=> {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("Le compte a été effacé");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json("Vous pouvez seulement supprimer votre compte");
      }
}

// retrouver un utilisateur
const getUser = async(req, res)=> {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getAllUsers = async(req, res)=> {
  const users = await User.find();

  res.send(users);
}

// retrouver les amis d'un utiisateur

// suivre un utilisateur

// ne plus suivre un utilisateur


module.exports = {
    saveUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
}




