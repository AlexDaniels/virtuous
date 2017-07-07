class NotificationsUI extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.visible = false;
	}
	componentWillReceiveProps(e) {
		this.setState({visible:e.visible})
	}
	eachNotification(results, i) {
		return (
			<div key={i} className='notifItem'>
				<p>{results.content}</p>
			</div>
		)
	}
	render() {
		if (this.state.visible === false) {
			return null;
		} else {
			return (
				<div id='notifications'>
					{this.props.notifications.map(this.eachNotification.bind(this))}
				</div>
			)
		}
	}
}

