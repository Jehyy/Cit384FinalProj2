let map;



function initMap() {
  const mapOptions = {
    center: { lat: 34.24003828995634, lng:-118.5257246411196 },
    zoom: 19,
    mapTypeId: 'satellite',
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    disableTilt: true,
    gestureHandling: "none",
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
  
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
initMap();