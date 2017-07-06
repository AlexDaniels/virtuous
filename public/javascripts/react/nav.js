class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.notificationsOpen = false;
	}
	render() {
		return (
			<div className='container visible-md visible-lg' id='nav'>
				<div className='row'>
					<img src='images/yy3.png' className='col-md-3 img-responsive'></img>
					<button id='mapBTN' type='button' onClick={this.props.navigate} className='btn btn-nav col-md-1 btn-circle glyphicon glyphicon-globe'></button>
					<button id='newBTN' onClick={this.props.navigate} className='btn btn-nav col-md-1 btn-circle col-md-offset-1 glyphicon glyphicon-plus'></button>
					<button id='actBTN' onClick={this.props.navigate} className='btn btn-nav col-md-1 btn-circle col-md-offset-1 fa fa-heartbeat' ></button>
					<button id='notBTN' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className='btn btn-nav col-md-1 btn-circle col-md-offset-1 glyphicon glyphicon-bell' ></button>
					<div className='col-md-1'></div>
					<p className='col-md-1 logout'>Logout</p>
				</div>
			</div>
		);
	}
}