const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/studDb",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) { console.log('Database connected')}
        else { console.log('connection error: ' + err); }
    }
);

