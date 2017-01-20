

var mymap = L.map('mapid').setView([50.0755, 14.4378], 30); //coordinates for the city

var markerPrague = L.marker([50.0755, 14.4378]).addTo(mymap); //marker for the city
var markerBudapest = L.marker([47.4979, 19.0402]).addTo(mymap); //marker for the city
var markerAmsterdam = L.marker([52.3702, 4.8952]).addTo(mymap); //marker for the city
var markerKenya = L.marker([1.2921, 36.8219]).addTo(mymap); //marker for the city
var markerCairo = L.marker([30.0444, 31.235]).addTo(mymap); //marker for the city
var markerSenegal = L.marker([14.4974, 14.4524]).addTo(mymap); //marker for the city
var markerMauritius = L.marker([20.3484, -57.5522]).addTo(mymap); //marker for the city
var markerChile = L.marker([-33.4489, -70.6693]).addTo(mymap); //marker for the city
var markerCharlotte = L.marker([35.2271, -80.8431]).addTo(mymap); //marker for the city
var markerMauritius = L.marker([-20.3484, 57.5522]).addTo(mymap); //marker for the city



//marker popups
markerPrague.bindPopup("<b>Prague is where I would like to live. Beer is the national drink of the Czech Republic!").openPopup();

markerBudapest.bindPopup("<b>The best parties at the ruin bars, and good beer").openPopup();

markerAmsterdam.bindPopup("<b>The most beautiful and romantical city...Famous for the snacks").openPopup();

markerKenya.bindPopup("<b>Safari was one of the best experiences of my life!").openPopup();

markerCairo.bindPopup("<b>Amazing, historical, legendary").openPopup();

markerSenegal.bindPopup("<b>One of the most memorable trips. The author of Roots took inspiration from here.").openPopup();

markerCharlotte.bindPopup("<b>HOME").openPopup();




L.tileLayer('https://api.mapbox.com/styles/v1/seasalt/ciy4q50u3001k2slig737u8i9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Vhc2FsdCIsImEiOiJjaXkzanV0c2UwMDEzMzNsamV1bmg0ZWVqIn0.mcvszUMDaLO4C8Ea9ytkOg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 11,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoic2Vhc2FsdCIsImEiOiJjaXkzanV0c2UwMDEzMzNsamV1bmg0ZWVqIn0.mcvszUMDaLO4C8Ea9ytkOg'
}).addTo(mymap);
