class MapUI extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		if (loaded === true)
			initMap();
	}
	render() {
		return (
			<div id='map' className='col-md-12 content'></div>
		)
	}
}