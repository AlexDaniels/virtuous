class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {'page':'activity','notifications':false};
	}
	navClicked(e) {
		let type = e.target.id;
		if (type === 'mapBTN') {
			this.setState({page:'map'})
		} else if (type === 'newBTN') {
			this.setState({page:'new'})
		} else if (type === 'actBTN') {
			this.setState({page:'activity'})
		} else if (type === 'notBTN') {
			this.setState({notifications:!this.state.notifications});
		}
	}
	renderMap() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><MapUI /><NotificationsUI visible={this.state.notifications}/></div>)
	}
	renderNew() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><NewCallForHelpUI /><NotificationsUI visible={this.state.notifications}/></div>)
	}
	renderActivity() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><ActivityUI /><NotificationsUI visible={this.state.notifications}/></div>)
	}
	render() {
		if (this.state.page === 'map') {
			return this.renderMap();
		} else if (this.state.page === 'new') {
			return this.renderNew()
		} else if (this.state.page === 'activity') {
			return this.renderActivity()
		}
	}
}

ReactDOM.render(<App/>,document.getElementById('app'))