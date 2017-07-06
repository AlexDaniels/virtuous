class CallForHelpList extends React.Component {
	constructor(props) {
		super(props)
		this.callsForHelp = props.callsForHelp;
	}
	eachCallForHelp(results, i) {
		return (
			<CallForHelpListItem key={i} title={results.title} description={results.description} />
		)
	}
	render() {
		return (
				<div>
					{this.callsForHelp.map(this.eachCallForHelp)}
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
			<div className='call-list-item'>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
		)
	}
}