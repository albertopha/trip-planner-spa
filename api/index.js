const express = require('express');
const router = express.Router();
const db = require('../models');
const Place = db.Place;
const Hotel = db.Hotel;
const Restaurant = db.Restaurant;
const Activity = db.Activity;

module.exports = router;

router.get('/', (req, res, next) => {
    const places = Place.findAll({})
    const hotels = Hotel.findAll({ include: [{ all: true }] })
    const restaurants = Restaurant.findAll({ include: [{ all: true }] })
    const activities = Activity.findAll({ include: [{ all: true }] })

    Promise.all([hotels, restaurants, activities])
    .then(arr => {

        res.json({
            "hotels": arr[0],
            "restaurants": arr[1],
            "activities": arr[2]
        })

        // var result = [];
        // arr.forEach(element => result.push(element));
        // res.json(result);
    })
});
