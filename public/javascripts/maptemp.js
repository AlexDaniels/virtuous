var markers = [];
let loaded = false;
var map;

function mapReady() {
	loaded = true;
}

function initMap() {
	var options = {
		zoom: 10,
		center: {lat:49.2827, lng:-123.1207}
	}
	map = new google.maps.Map(document.getElementById('map'), options);
	renderMap();
}

function addMarker(coords) {
	var marker = new google.maps.Marker({icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',position:{lat:coords.lat, lng:coords.lng}, map:map});
	marker.infoWindow = new google.maps.InfoWindow({content:'<h1>'+coords.content+'</h1>'})
	marker.addListener('click',function(){
		setTimeout(function() {
			marker.infoWindow.open(map,marker);
		},1)
	});
	markers.push(marker)
}

function renderMap() {
	document.getElementById('map').addEventListener('click', function() {
		for (i in markers){
			markers[i].infoWindow.close();
		}
	})

	addMarker({lat:49.2827, lng:-123.1207, content:'Hello'})
	addMarker({lat:49.1044, lng:-122.8011, content:'Bye'})
	addMarker({lat:49.2488, lng:-122.9805,content:'Hello Part 2'})
	addMarker({lat:49.1666, lng:-123.1336, content:'Hello and Goodbye'})
}

function datePickerSetup() {
	$('#expire').datepicker();
}