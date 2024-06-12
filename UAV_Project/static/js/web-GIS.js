// zoom to layer
$('.zoom-to-layer').click(function(){
  map1.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId1 = document.getElementById('map1');

function fullScreenView () {
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
/* $('.zoom-to-layer').click(function(){
  map2.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId2 = document.getElementById('map2');

function fullScreenView () {
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
 */