const express = require('express');

const cors = require('cors');

const routes = require('./routes/index')

require('dotenv').config();

require('./models/dbConfig')

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port;

app.use('/', routes)

app.listen(port, ()=> {
    console.log(`le serveur est lancé sur le port ${port}`);
})

