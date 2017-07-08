class CallForHelpList extends React.Component {
	constructor(props) {
		super(props)
		this.callsForHelp = props.callsForHelp;
	}
	eachCallForHelp(results, i) {
		return (
			<CallForHelpListItem id={results.id} key={i} title={results.title} description={results.description} setCallForHelp={this.props.setCallForHelp}/>
		)
	}
	render() {
		return (
				<div>
					{this.callsForHelp.map(this.eachCallForHelp.bind(this))}
				</div>
		)
	}
}

class CallForHelpListItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div id={this.props.id} className='call-list-item' onClick={this.props.setCallForHelp.bind(this)}>
				<h3 className='listItem-title'>{this.props.title}</h3>
				<p className='listItem-description'>{this.props.description}</p>
			</div>
		)
	}
}