// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});
console.log("hello")
var baseMaps = {
  "Light Map": lightmap
};

var layer2013 = new L.layerGroup();
var layer2014 = new L.layerGroup();
var layer2015 = new L.layerGroup();
var layer2016 = new L.layerGroup();
var layer2017 = new L.layerGroup();
var layer2018 = new L.layerGroup();
var overlayMaps = {
    "2013": layer2013,
    "2014": layer2014,
    "2015": layer2015,
    "2016": layer2016,
    "2017": layer2017,
    "2018": layer2018
};

var myMap = L.map("map-id", {
  center: [39.50, -98.35],
  zoom: 5,
  layers: [ lightmap, layer2013]
});

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

d3.json("/samples-win_loss_results/2013", function(response) {
  console.log(response)
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2013 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2013 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2013</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2013.push(year2013)
      }
      console.log(markers2013)
      var firstLayer = new L.layerGroup(markers2013);
      firstLayer.addTo(layer2013);
      layer2013.addTo(myMap);

});

d3.json("/samples-win_loss_results/2014", function(response) {
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2014 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2014 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2014</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2014.push(year2014)
      }
      console.log(markers2014)
      var firstLayer = new L.layerGroup(markers2014);
      firstLayer.addTo(layer2014);
      // layer2014.addTo(myMap);

});

d3.json("/samples-win_loss_results/2015", function(response) {
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2015 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2015 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2015</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2015.push(year2015)
      }
      console.log(markers2015)
      var firstLayer = new L.layerGroup(markers2015);
      firstLayer.addTo(layer2015);
      // layer2015.addTo(myMap);

});

d3.json("/samples-win_loss_results/2016", function(response) {
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2016 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2016 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2016</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2016.push(year2016)
      }
      console.log(markers2016)
      var firstLayer = new L.layerGroup(markers2016);
      firstLayer.addTo(layer2016);
      // layer2016.addTo(myMap);

});

d3.json("/samples-win_loss_results/2017", function(response) {
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2017 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2017 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2017</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2017.push(year2017)
      }
      console.log(markers2017)
      var firstLayer = new L.layerGroup(markers2017);
      firstLayer.addTo(layer2017);
      // layer2017.addTo(myMap);

});

d3.json("/samples-win_loss_results/2018", function(response) {
  let arrLat = response.lats;
  let arrLon = response.lons;
  let arrWin = response.wins;
  let arrLoss = response.losss;
  let arrName = response.abbrs;

  var markers2018 = []
  for (var i = 0; i < arrLat.length; i++) {
    var lat = arrLat[i];
    var lon = arrLon[i];

    var color = "";
    if ((arrWin[i]/ arrLoss[i]) < 1.0) {
      color = "red";
    }
    else if ((arrWin[i]/ arrLoss[i]) >= 1.0) {
      color = "green";
    }
      var year2018 = L.circle([lat, lon], {
        color: "none",
        fillColor: color,
        fillOpacity: 0.7,
        radius: (arrWin[i]/ arrLoss[i]) * 100000
      })
        .bindPopup("<h1>" + arrName[i] + " - 2013</h1> <hr> <h3>Win " + arrWin[i] + "</h3> <hr> <h3>Loss " + arrLoss[i] + "</h3>")
      
      markers2018.push(year2018)
      }
      console.log(markers2018)
      var firstLayer = new L.layerGroup(markers2018);
      firstLayer.addTo(layer2018);
      // layer2018.addTo(myMap);

});
