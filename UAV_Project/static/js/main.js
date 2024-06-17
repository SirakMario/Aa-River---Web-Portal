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


//http://localhost:8080/geoserver/TEST/wms
var wmsLayer_RGB_2024 = L.Geoserver.wms('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers:'RGB_Orthomosaic_result',
});
wmsLayer_RGB_2024.addTo(map1);

var wmsLayer_RGB_2023 = L.Geoserver.wms ('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers: 'RGB_2023',
});
wmsLayer_RGB_2023.addTo(map1);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'RGB_2024': wmsLayer_RGB_2024,
  'RGB_2023': wmsLayer_RGB_2023,
}

L.control.layers(baseMap, overlayerMaps).addTo(map1);
L.control.sideBySide(wmsLayer_RGB_2024, wmsLayer_RGB_2023).addTo(map1);


/////////////////////////////////////////////////////////
// Map initialization (Second map)
var map2 = L.map("map2").setView([51.944754,7.572074], 17);
map2.zoomControl.setPosition('topright');

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// Map coordinate
map2.on ("mousemove", function (e) {
  $('.coordinate2').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map2)


//http://localhost:8080/geoserver/TEST/wms
var blue = L.Geoserver.wms('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers:'Mundus_Multispectal_transparent_mosaic_blue	',
});
blue.addTo(map2);

var green = L.Geoserver.wms('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers:'Mundus_Multispectal_transparent_mosaic_green',
});
green.addTo(map2);

var red = L.Geoserver.wms ('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers: 'Mundus_Multispectal_transparent_mosaic_red',
});
red.addTo(map2);

var red_edge = L.Geoserver.wms ('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers: 'Mundus_Multispectal_transparent_mosaicred edge',
});
red_edge.addTo(map2);

var nir = L.Geoserver.wms ('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers: 'Mundus_Multispectal_transparent_mosaic_nir',
});
nir.addTo(map2);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'Blue_2024' : blue,
  'Green_2024': green,
  'Red_2024': red,
  'Red_edge_2024' : red_edge,
  'NIR_2024': nir,
}

L.control.layers(baseMap, overlayerMaps).addTo(map2);
//L.control.sideBySide(wmsLayer_RGB_2024, wmsLayer_RGB_2023).addTo(map2);

 //////////////////////////////////////////////////////////
// Map initialization (Third map)
var map3 = L.map("map3").setView([51.944754,7.572074], 17);
map3.zoomControl.setPosition('topright');


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

// Map coordinate
map3.on ("mousemove", function (e) {
  $('.coordinate3').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map3)


//http://localhost:8080/geoserver/TEST/wms
var wmsLayer_RGB_2024 = L.Geoserver.wms('http://localhost:8080/geoserver/TEST/wms',{
  layers:'NDVI',
});
wmsLayer_RGB_2024.addTo(map3);

var wmsLayer_RGB_2023 = L.Geoserver.wms ('http://localhost:8080/geoserver/TEST/wms',{
  layers: 'NDVI',
});
wmsLayer_RGB_2023.addTo(map3);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'RGB_2024': wmsLayer_RGB_2024,
  'RGB_2023': wmsLayer_RGB_2023,
}

L.control.layers(baseMap, overlayerMaps).addTo(map3);
L.control.sideBySide(wmsLayer_RGB_2024, wmsLayer_RGB_2023).addTo(map3);
