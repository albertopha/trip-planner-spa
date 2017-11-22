const express = require('express');
const router = express.Router();
const db = require('../models');
const Place = db.Place;
const Hotel = db.Hotel;
const Restaurant = db.Restaurant;
const Activity = db.Activity;


router.get('/', (req, res, next) => {
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
    })
});


module.exports = router;