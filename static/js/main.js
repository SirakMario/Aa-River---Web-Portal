// Map initialization
var map = L.map("map").setView([51.944754,7.572074], 17);
map.zoomControl.setPosition('topright');

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Stadia_StamenTonerLite = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxZoom: 20,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'png'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map)



// Map coordinate
map.on ("mousemove", function (e) {
  $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});


var wmsLayer = L.Geoserver.wms('http://localhost:8080/geoserver/TEST/wms',{
  layers:'NDVI',
});
wmsLayer.addTo(map);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'NDVI': wmsLayer,
}

L.control.layers(baseMap, overlayerMaps).addTo(map);


