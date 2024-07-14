// zoom to layer
$('#myid').click(function(){
  alert("zoom to layer one")
  map1.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapIdRGB = document.getElementById('map1');

function fullScreenView1 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId1.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map1)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map1);

////////////////////// Map2 ///////////////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map2.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId2 = document.getElementById('map2');

function fullScreenView2 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId2.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map2)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map2);

////////////////////// Map21 ///////////////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map21.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId21 = document.getElementById('map21');

function fullScreenView21 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId21.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map21)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map21);


//////////////// Map 3 Change detection //////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map3.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId3 = document.getElementById('map3');

function fullScreenView3 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId3.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map3)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map3);

//////////////// Map 31 DSM //////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map31.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId31 = document.getElementById('map3');

function fullScreenView31 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId31.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map31)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map31);
//////////////// Map 32 DTM //////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map32.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId32 = document.getElementById('map32');

function fullScreenView32 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId32.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map32)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map32);
//////////////// Map 33 CHM //////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map33.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId33 = document.getElementById('map33');

function fullScreenView33 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId33.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
  activeColor: 'red',
  completedColor: 'red',
}).addTo(map33)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map33);
