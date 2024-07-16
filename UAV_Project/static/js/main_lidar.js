////////////////////For LiDAR///////////////////////////
// Map initialization (For The First Map)
var mapL1 = L.map("mapL1").setView([51.944754, 7.572074], 17);
mapL1.zoomControl.setPosition("topright");

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapL1);

// Map coordinate
mapL1.on("mousemove", function (e) {
  $(".coordinateL1").html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`);
});

var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

// Adding map scale
L.control.scale().addTo(mapL1);

var DEM_2024 = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'DEM_24',
});
DEM_2024.addTo(mapL1);

var DEM_2024_legend = L.control({position: 'bottomleft'});
DEM_2024_legend.onAdd = function (mapL1) {
  var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML +=
      '<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UAV_Project:DEM_24" alt="legend" width="70" height="100">';
  return div;
  };
  DEM_2024_legend.addTo(mapL1);

var DSM_2024 = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'DSM_24',
});
DSM_2024.addTo(mapL1);



//Leaflet layer control
var baseMap = {
  OSM: osm,
  "Esri World Imagery": Esri_WorldImagery,
};

var overlayerMaps = {
  'DEM 2024' : DEM_2024,
  'DSM 2024' : DSM_2024,
};

L.control.layers(baseMap, overlayerMaps).addTo(mapL1);
L.control.sideBySide(DEM_2024, DSM_2024).addTo(mapL1);
////////////////////////////////////////////////////////

////////////////////For LiDAR///////////////////////////
// Map initialization (For The Second Map)
var mapL2 = L.map("mapL2").setView([51.944754, 7.572074], 17);
mapL2.zoomControl.setPosition("topright");

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapL2);

// Map coordinate
mapL2.on("mousemove", function (e) {
  $(".coordinateL2").html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`);
});

var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

// Adding map scale
L.control.scale().addTo(mapL2);

var DEM_Diff = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Diff_DEM',
});
DEM_Diff.addTo(mapL2);

var DSM_Diff = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Diff_DSM',
});
DSM_Diff.addTo(mapL2);

var CV_Diff = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Diff_Canopy_Volume',
});
CV_Diff.addTo(mapL2);



//Leaflet layer control
var baseMap = {
  OSM: osm,
  "Esri World Imagery": Esri_WorldImagery,
};

var overlayerMaps2 = {
  'DEM Diff.' : DEM_Diff,
  'DSM Diff.' : DSM_Diff,
  'Canopy Volume Diff.': CV_Diff,
};

L.control.layers(baseMap, overlayerMaps2).addTo(mapL2);
///////////////////////////////////////////////////////////
// Map initialization (For The Second Map)
var mapL3 = L.map("mapL3").setView([51.944754, 7.572074], 17);
mapL3.zoomControl.setPosition("topright");

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapL3);

// Map coordinate
mapL3.on("mousemove", function (e) {
  $(".coordinateL3").html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`);
});

var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

// Adding map scale
L.control.scale().addTo(mapL3);

var Hillshade_24 = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Hillshade_24',
});
Hillshade_24.addTo(mapL3);

var Hillshade_24_legend = L.control({position: 'bottomleft'});
Hillshade_24_legend.onAdd = function (mapL3) {
  var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML +=
      '<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UAV_Project:Hillshade_24" alt="legend" width="70" height="100">';
  return div;
  };
  Hillshade_24_legend.addTo(mapL3);

var Slope_24 = L.Geoserver.wms ('http://10.6.4.12:8080/geoserver/UAV_Project/wms',{
  layers: 'Slope_24',
});
Slope_24.addTo(mapL3);

var Slope_24_legend = L.control({position: 'bottomright'});
Slope_24_legend.onAdd = function (mapL3) {
  var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML +=
      '<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UAV_Project:Slope_24" alt="legend" width="70" height="100">';
  return div;
  };
  Slope_24_legend.addTo(mapL3);




//Leaflet layer control
var baseMap = {
  OSM: osm,
  "Esri World Imagery": Esri_WorldImagery,
};

var overlayerMaps3 = {
  'Hillshade 2024' : Hillshade_24,
  'Slope 2024' : Slope_24,
};

L.control.layers(baseMap, overlayerMaps3).addTo(mapL3);
L.control.sideBySide( Hillshade_24, Slope_24).addTo(mapL3);