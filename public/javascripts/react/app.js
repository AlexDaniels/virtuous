class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {'page':'activity'};
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
			this.setState({page:'notifications'})
		}
	}
	renderMap() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><MapUI /></div>)
	}
	renderNew() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><NewCallForHelpUI /></div>)
	}
	renderActivity() {
		return (<div><Nav navigate={this.navClicked.bind(this)}/><ActivityUI /></div>)
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