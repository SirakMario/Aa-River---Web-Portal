// Map initialization (For The First Map)
var map1 = L.map("map1").setView([51.944754,7.572074], 17);
map1.zoomControl.setPosition('topright');

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

// Map coordinate
map1.on ("mousemove", function (e) {
  $('.coordinate1').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map1)

var wmsLayer_RGB_2024 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'Classify_Texture_Multi_24',
});
wmsLayer_RGB_2024.addTo(map1);

var wmsLayer_RGB_2023 = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Classify_Texture_Multi_23',
});
wmsLayer_RGB_2023.addTo(map1);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'RGB_2024': wmsLayer_RGB_2024,
  'RGB_2022': wmsLayer_RGB_2023,
}

L.control.layers(baseMap, overlayerMaps).addTo(map1);
L.control.sideBySide(wmsLayer_RGB_2024, wmsLayer_RGB_2023 ).addTo(map1);


/////////////////////////////////////////////////////////
// Map initialization (Second map NDVI)
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


//http://10.6.4.12:8080/geoserver/TEST/wms
var NDVI_2024 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'NDVI_2024',
});
NDVI_2024.addTo(map2);

var NDVI_2023 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'NDVI_2023',
});
NDVI_2023.addTo(map2);


//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'NDVI 2024' : NDVI_2024,
  'NDVI 2023': NDVI_2023,
}

L.control.layers(baseMap, overlayerMaps).addTo(map2);
L.control.sideBySide(NDVI_2024, NDVI_2023).addTo(map2);

// Map initialization (NDVI Change)
var map21 = L.map("map21").setView([51.944754,7.572074], 17);
map2.zoomControl.setPosition('topright');

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map21);

// Map coordinate
map21.on ("mousemove", function (e) {
  $('.coordinate21').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map21)


//http://10.6.4.12:8080/geoserver/TEST/wms
var NDVI_Change = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'NDVI_change_2',
});
NDVI_Change.addTo(map21);


//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'NDVI Change' : NDVI_Change,
}

L.control.layers(baseMap, overlayerMaps).addTo(map21);


 //////////////////////////////////////////////////////////
// Map initialization (Third map) Change detection
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


//http://10.6.4.12:8080/geoserver/TEST/wms
var Change_detect = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'Change_detection_2',
});
Change_detect.addTo(map3);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'Change Detection' : Change_detect,
}

L.control.layers(baseMap, overlayerMaps).addTo(map3);
///////////////////////////////////////////////////////////
// Map initialization (31) DSM
var map31 = L.map("map31").setView([51.944754,7.572074], 17);
map31.zoomControl.setPosition('topright');


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map31);

// Map coordinate
map31.on ("mousemove", function (e) {
  $('.coordinate31').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map31)


//http://10.6.4.12:8080/geoserver/TEST/wms
var DSM_24 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'DSM_24_Muguel',
});
DSM_24.addTo(map31);

var DSM_22 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'DSM_22_Muguel',
});
DSM_22.addTo(map31);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'DSM 24' : DSM_24,
  'DSM 22' : DSM_22,
}

L.control.layers(baseMap, overlayerMaps).addTo(map31);
L.control.sideBySide(DSM_24, DSM_22 ).addTo(map31);
///////////////////////////////////////////////////////////
// Map initialization (32) DTM
var map32 = L.map("map32").setView([51.944754,7.572074], 17);
map32.zoomControl.setPosition('topright');


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map32);

// Map coordinate
map32.on ("mousemove", function (e) {
  $('.coordinate33').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map32)


//http://10.6.4.12:8080/geoserver/TEST/wms
var DTM_24 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'DTM 2024',
});
DTM_24.addTo(map32);

var DTM_22 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'DTM 2022',
});
DTM_22.addTo(map32);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'DTM 24' : DTM_24,
  'DTM 22' : DTM_22,
}

L.control.layers(baseMap, overlayerMaps).addTo(map32);
L.control.sideBySide(DTM_24, DTM_22 ).addTo(map32);

///////////////////////////////////////////////////////////
// Map initialization (33) CHM
var map33 = L.map("map33").setView([51.944754,7.572074], 17);
map33.zoomControl.setPosition('topright');


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map33);

// Map coordinate
map33.on ("mousemove", function (e) {
  $('.coordinate33').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Adding map scale
L.control.scale().addTo(map33)


//http://10.6.4.12:8080/geoserver/TEST/wms
var CHM_24 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'CHM_24',
});
CHM_24.addTo(map33);

var CHM_22 = L.Geoserver.wms('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers:'CHM_22',
});
CHM_22.addTo(map33);

//Leaflet layer control
var baseMap = {
  'OSM': osm,
  'Esri World Imagery' : Esri_WorldImagery,
}

var overlayerMaps = {
  'CHM 24' : CHM_24,
  'CHM 22' : CHM_22,
}

L.control.layers(baseMap, overlayerMaps).addTo(map33);
L.control.sideBySide(CHM_24, CHM_22 ).addTo(map33);
