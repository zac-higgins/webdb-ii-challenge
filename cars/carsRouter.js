const express = require('express');
const carsDB = require('../data/helpers/carModel');
const router = express.Router();

router.get('/', (req, res) => {
    carsDB.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log("Error on GET from /api/cars", err);
            res.status(500).json({ errorMessage: "The Cars list could not be retrieved" })
        })
})

router.post('/', (req, res) => {
    carData = req.body;
    carsDB.insert(carData)
        .then(() => {
            carsDB.get()
                .then(cars => {
                    res.status(201).json(cars)
                })
        })
        .catch(err => {
            console.log('error on POST /api/cars', err);
            res.status(500).json({ error: "There was an error while saving the car to the database" })
        })
})

module.exports = router;