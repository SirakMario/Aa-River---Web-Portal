// zoom to layer
$('.zoom-to-layer').click(function(){
  map.setView([51.944754,7.572074], 17)
})

// Full screen map view 
var mapId = document.getElementById('map');

function fullScreenView () {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else {
    mapId.requestFullscreen();
  }
}

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
}).addTo(map)

// Map print
L.control.browserPrint({position: 'topright' }).addTo(map);