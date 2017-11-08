var centerPointX = {
	lat: -28.024,
	lng: 140.887
}  

var markers = [];
var info = [];

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4, 
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
			
			//Draw logo X-Team start
			map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
			// Set the stroke width, and fill color for each polygon
			map.data.setStyle({
			  fillColor: 'green',
			  strokeWeight: 1
			});
			//Draw logo X-Team end
			
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
//		animation: google.maps.Animation.DROP,
		map: map
	});
	// test marker X-Team end
	
	// info window X-Team start
	var infowindow = new google.maps.InfoWindow({
		content:	'<h2>FriendyCar &#12484;</h1>' + 
					'<img src="./images/ratingX.png">' + 
					'<a href="#">Ford Mustang 2017</a>'
//		content: '<img src="./images/infoWindow.jpg">'
	});
	testMarker.addListener('click', function () {
		infowindow.open(map, testMarker);
	});
	// info window X-Team end
	
}