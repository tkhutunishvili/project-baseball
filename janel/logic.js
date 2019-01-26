// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


d3.json("baseball_coordinates.json", function(response) {
  // Once we get a response, send the data.features object to the createFeatures function
  console.log(response)
  // Create a new marker cluster group

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var lat = response[i].lat
    var lon = response[i].lon
    

    
    // Check for location property
    // Add a new marker to the cluster group and bind a pop-up
      L.circle([lat, lon], {
        color: "black",
        fillColor: "green",
        fillOpacity: 0.5,
        radius: (response[i].Win/ response[i].Loss) * 100000
      })
        .bindPopup("<h1>" + response[i].Team + "</h1> <hr> <h3>Win " + response[i].Win + "</h3> <hr> <h3>Loss " + response[i].Loss + "</h3>")
        .addTo(myMap);
    }
});