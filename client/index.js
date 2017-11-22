const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
const api = require('./api');

mapboxgl.accessToken = "pk.eyJ1IjoiYW1hbmRhMTEyMzU4IiwiYSI6ImNqYTl0MDlkczBscXgzMm83Z3Rtb2p2dnoifQ.Haiov-Kx6pOYih0czIwhwA";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

const selectHotel = document.getElementById('hotels-choices');
const selectRest = document.getElementById('restaurants-choices');
const selectAct = document.getElementById('activities-choices');


api.fetchAttractions()
.then(results => {
  results.hotels.forEach(hotel => {
    const option = document.createElement('option');
    option.value = hotel;
    option.append(`${hotel.id}-${hotel.name}`);
    selectHotel.append(option);
  });
  results.restaurants.forEach(rest => {
    const option = document.createElement('option');
    option.value = rest;    
    option.append(`${rest.id}-${rest.name}`);
    selectRest.append(option);
  });
  results.activities.forEach(activity => {
    const option = document.createElement('option');
    option.value = activity;    
    option.append(`${activity.id}-${activity.name}`);
    selectAct.append(option);
  })
});

const buttonHotel = document.getElementById("hotels-add");
const buttonRest = document.getElementById("restaurants-add");
const buttonAct = document.getElementById("activities-add");

buttonHotel.addEventListener('click', (e) => {
  if(e.target === "hotels-add"){
    const select = document.getElementById(`hotels-choices`);
    const selectedId = select.value;    
  }
})