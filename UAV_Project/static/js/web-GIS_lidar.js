////////////////////////////For LiDAR///////////////////////
// zoom to layer
$('.zoom-to-layer').click(function(){
  map20.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId20 = document.getElementById('map20');

function fullScreenView1L () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId20.requestFullscreen();
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
}).addTo(map20);

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map20);