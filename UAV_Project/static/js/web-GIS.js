// Full screen map view 
var mapId = document.getElementById('map');
function fullScreenView () {
  mapId.requestFullscreen();
}

// Map print
L.control.browserPrint().addTo(map);

//Leaflet measure
L.control.measure({
  primaryLengthUnit: 'kilometers',
  secondaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: undefined,
}).addTo(map)

// zoom to layer
$('.zoom-to-layer').click(function(){
    map.setView([51.944754,7.572074], 17)
  })