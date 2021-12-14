const express = require('express');

const cors = require('cors');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

require('dotenv').config();

require('./models/dbConfig')

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port;

app.use('/auth', authRoute);
app.use('/users', userRoute);

app.listen(port, ()=> {
    console.log(`le serveur est en écoute sur le PORT ${port}`);
})

