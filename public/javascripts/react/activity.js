class ActivityUI extends React.Component {
	constructor(props) {
		super(props)
		this.callsForHelp = [ {title:'Title',description:'description', id:'12390'},{title:'Title',description:'description', id:'12391'},
							{title:'Title',description:'description', id:'12393'},{title:'Title',description:'description', id:'12392'},
							{title:'Title',description:'description', id:'12394'},{title:'Title',description:'description', id:'12395'}];
		this.currentCallForHelp = this.callsForHelp[0];
	}
	render() {
		return (
			<div className='col-md-12 content'>
				<div className='col-md-4' id='list'>
					<CallForHelpList callsForHelp={this.callsForHelp} />
				</div>
				<div className='col-md-8' id='details'>
					<CallForHelpDetails currentCallForHelp={this.currentCallForHelp}/>
				</div>
			</div>
		)
	}
}

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

class CallForHelpDetails extends React.Component {
	constructor(props) {
		super(props)
		this.currentCallForHelp = props.currentCallForHelp;
	}
	render() {
		return (
			<div>
				<h1>Title</h1>
				<p>Description</p>
				<p>Time</p>
				<div>

				</div>
			</div>
		)
	}
}

class HelpingUser extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

	}
}

