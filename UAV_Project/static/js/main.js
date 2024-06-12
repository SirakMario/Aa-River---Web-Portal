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

var wmsLayer_RGB_2023 = L.Geoserver.wms ('http://localhost:8080/geoserver/TEST/wms',{
  layers: 'NDVI',
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
/* var map2 = L.map("map2").setView([51.944754,7.572074], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
console.log("now lets check the issue");
var container = L.DomUtil.get('map2');
      if(container == null){
        console.log('map 2 is empty');
      } else {
        console.log('map 2 is NOT empty');
      }
 *//////////////////////////////////////////////////////////
// Map initialization (Third map)
//var map3 = L.map("map3").setView([51.944754,7.572074], 17);


/* L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3); */