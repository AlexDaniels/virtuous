class NotificationsUI extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.visible = false;
	}
	componentWillReceiveProps(e) {
		this.setState({visible:e.visible})
	}
	render() {
		if (this.state.visible === false) {
			return null;
		} else {
			return (
				<div id='notifications'>
					<div className='notifItem'>
						<p>DMSKLADMSLAKDMSKLADMSKLAMDSKLAMDSKLAMDKLSAMDKLSAMDKL</p>
					</div>
					<div className='notifItem'>
						<p>DMSKLADMSLAKDMSKLADMSKLAMDSKLAMDSKLAMDKLSAMDKLSAMDKL</p>
					</div>
					<div className='notifItem'>
						<p>DMSKLADMSLAKDMSKLADMSKLAMDSKLAMDSKLAMDKLSAMDKLSAMDKLSADMSKLDMSAKLDM</p>
					</div>
					<div className='notifItem'>
						<p>DMSKLADMSLAKDMSKLADMSKLAMDSKLAMDSKLAMDKLSAMDKLSAMDKLSADMSKLDMSAKL</p>
					</div>
				</div>
			)
		}
	}
}