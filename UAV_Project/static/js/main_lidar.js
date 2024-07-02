// Structure from Motion 3D comparison
/* import { createComparator } from "/static/js/PointCloudComparator.js";

// Comparison of DSM (Digital Surface Model) from the SfM (Structure from Motion)
createComparator(
  ".pcd-container2",
  ".slider2",
  "/static/js/Default-2022-georeferenced_model.pcd",
  "/static/js/Default-2024-Settings-georeferenced_model_subsampled.pcd"
);
 */
////////////////////For LiDAR///////////////////////////
// Map initialization (For The First Map)
var map20 = L.map("map20").setView([51.944754, 7.572074], 17);
map20.zoomControl.setPosition("topright");

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map20);

// Map coordinate
map20.on("mousemove", function (e) {
  $(".coordinate").html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`);
});

var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

// Adding map scale
L.control.scale().addTo(map20);

var DEM_2024 = L.Geoserver.wms ('http://localhost:8080/geoserver/UAV_Project/wms',{
  layers: 'DEM_24',
});
DEM_2024.addTo(map20);



//Leaflet layer control
var baseMap = {
  OSM: osm,
  "Esri World Imagery": Esri_WorldImagery,
};

var overlayerMaps = {
  'DEM_2024' : DEM_2024,
};

L.control.layers(baseMap, overlayerMaps).addTo(map20);
//L.control.sideBySide(DEM_2024, DSM_2024).addTo(map1L);
