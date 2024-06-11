// Map initialization (For The First Map)
var map1 = L.map("map1").setView([51.944754,7.572074], 17);
map1.zoomControl.setPosition('topright');

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

// Map coordinate
map1.on ("mousemove", function (e) {
  $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map1)



var wmsLayer = L.Geoserver.wms('http://localhost:8080/geoserver/TEST/wms',{
  layers:'NDVI',
});
wmsLayer.addTo(map1);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'NDVI': wmsLayer,
}

L.control.layers(baseMap, overlayerMaps).addTo(map1);


/////////////////////////////////////////////////////////
// Map initialization (Second map)
var map2 = L.map("map2").setView([51.944754,7.572074], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

/////////////////////////////////////////////////////////
// Map initialization (Third map)
var map3 = L.map("map3").setView([51.944754,7.572074], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);