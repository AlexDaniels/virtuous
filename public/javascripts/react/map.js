class MapUI extends React.Component {
	constructor(props) {
		super(props)
		this.markers = [];
	}
	componentDidMount() {
		if (loaded === true)
			this.initMap();
	}
	initMap() {
		var options = {
			zoom: 10,
			center: {lat:49.2827, lng:-123.1207}
		}
		map = new google.maps.Map(document.getElementById('map'), options);
		this.renderMap();
	}
	renderMap() {
		let self = this;
		document.getElementById('map').addEventListener('click', function() {
			console.log(self)
			for (let i = 0; i < self.markers.length; i++){
				self.markers[i].infoWindow.close();
			}
		})

		this.addMarker({lat:49.2827, lng:-123.1207, content:'Hello'})
		this.addMarker({lat:49.1044, lng:-122.8011, content:'Bye'})
		this.addMarker({lat:49.2488, lng:-122.9805,content:'Hello Part 2'})
		this.addMarker({lat:49.1666, lng:-123.1336, content:'Hello and Goodbye'})
	}
	addMarker(coords) {
		var marker = new google.maps.Marker({icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',position:{lat:coords.lat, lng:coords.lng}, map:map});
		marker.infoWindow = new google.maps.InfoWindow({content:'<h1>'+coords.content+'</h1>'})
		let self = this;
		marker.addListener('click',function(){
			setTimeout(function() {
				marker.infoWindow.open(self.map,marker);
			},1)
		});
		this.markers.push(marker)
	}
	render() {
		return (
			<div id='map' className='col-md-12 content'></div>
		)
	}
}