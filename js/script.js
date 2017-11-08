var centerPointX = {
	lat: -28.024,
	lng: 140.887
}  

var markers = [];
var info = [];

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3, 
		center: centerPointX
	});
	
	// load markers & cluster them X-Team Start
	function loadMarkers() {
		$.getJSON('./js/locations.json', function(data) {
			markers = data.map(function(location, i) {
				return new google.maps.Marker({
					position: location,
					icon: "./images/pinkball.png", 
					animation: google.maps.Animation.BOUNCE,
				});
			});
			console.info(markers);
			
			// cluster markers X-Team Start
			var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
			// cluster markers X-Team end
		});
	}
	loadMarkers();
	// load markers & cluster them X-Team end
	
	
	
	// test marker X-Team Start
	var testMarker = new google.maps.Marker({
		position: centerPointX,
		icon: "./images/pinkball.png", 
		animation: google.maps.Animation.BOUNCE,
		map: map
	});
	// test marker X-Team end
	
	// info window X-Team start
	var infowindow = new google.maps.InfoWindow({
		content: '<img src="./images/ratingX.png">' + '<a href="#">Ford Mustang 2017</a>'
	});
	testMarker.addListener('click', function () {
		infowindow.open(map, testMarker);
	});
	// info window X-Team end
	
}