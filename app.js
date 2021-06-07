const express = require('express');
const userRoute = require('./routes/user');
const config = require('./config');

const app = express();

//Config
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
userRoute(app);

//Server init
app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`);
});