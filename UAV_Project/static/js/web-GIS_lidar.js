////////////////////////////For LiDAR///////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
    mapL1.setView([51.944754,7.572074], 17)
  })
  
  // Full screen map view 
  var mapIdL1 = document.getElementById('mapL1');
  
  function fullScreenViewL1 () {
    if (document.fullscreenElement){
      document.exitFullscreen()
    }else {
      mapIdL1.requestFullscreen();
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
  }).addTo(mapL1);
  
  // Map print
  L.control.browserPrint({position: 'topright' }).addTo(mapL1);
///////////////////////////////////////////////////////////////

// zoom to layer
$('.zoom-to-layer').click(function(){
  mapL2.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapIdL2 = document.getElementById('mapL2');

function fullScreenViewL2 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapIdL2.requestFullscreen();
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
}).addTo(mapL2);

// Map print
L.control.browserPrint({position: 'topright' }).addTo(mapL2);

///////////////////////////////////////////////////////////////

// zoom to layer
$('.zoom-to-layer').click(function(){
  mapL3.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapIdL3 = document.getElementById('mapL3');

function fullScreenViewL3 () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapIdL3.requestFullscreen();
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
}).addTo(mapL3);

// Map print
L.control.browserPrint({position: 'topright' }).addTo(mapL3);
