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
    const hotels = Hotel.findAll({})
    const restaurants = Restaurant.findAll({})
    const activities = Activity.findAll({})

    Promise.all([places, hotels, restaurants, activities])
    .then(arr => {
        var result = [];
        arr.forEach(element => result.push(element));
        res.json(result);
    })
});
