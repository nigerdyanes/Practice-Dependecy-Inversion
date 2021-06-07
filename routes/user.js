const express = require('express');

const userRoute = (app) => {
    const router = express.Router();
    app.use('/api/user', router)

    router.get('/', (req, res) => {
        res.status(200).send('Hello World');
    });

    router.post('/', (req, res) => {

    });

    router.put('/:idUser', (req, res) => {

    });

    router.delete('/:idUser', (req, res) => {

    });

}

module.exports = userRoute;