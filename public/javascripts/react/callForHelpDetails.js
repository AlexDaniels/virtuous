	class CallForHelpDetails extends React.Component {
	constructor(props) {
		super(props)
		this.currentCallForHelp = props.currentCallForHelp;
		this.state = {currentView:'chat'}; // Main : Chat : Options
	}
	eachUser(results, i) {
		return (<HelpingUser key={i} username={results.username} helpAccepted={results.helpAccepted} karma={results.karma}/>)
	} 
	eachMessage(results,i) {
		return (<ChatItem key={i} username={results.username} timestamp={results.timestamp} content={results.content} />)
	}
	setView(event) {
		if (event.target.id === 'backToMain') {
			this.setState({currentView:'main'});
		} else if (event.target.id === 'toChat') {
			this.setState({currentView:'chat'})
		} else if (event.target.id === 'toOptions') {
			this.setState({currentView:'options'})
		}
	}
	renderMain() {
		return (
			<div>
				<div id='top-half-details'>
					<h1 className='col-md-12'>Title</h1>
					<p className='col-md-12'>{this.currentCallForHelp.description}</p>
					<p className='text-center col-md-12'>I need help: {this.currentCallForHelp.time}</p>
					<button id='toChat' onClick={this.setView.bind(this)} className='btn col-md-3 col-md-offset-3 btn-black'>Chat</button>
					<button id='toOptions' onClick={this.setView.bind(this)} className='btn col-md-3 col-md-offset-1 btn-black'>Options</button>
				</div>
				<div id='bottom-half-details'>
					{this.currentCallForHelp.helpingUsers.map(this.eachUser)}
				</div>
			</div>
		)
	}
	renderChat() {
		return (
			<div>
				<button id='backToMain' onClick={this.setView.bind(this)} className='btn btn-sm glyphicon glyphicon-chevron-left'></button>
				{this.currentCallForHelp.messages.map(this.eachMessage)}
			</div>
		)
	}
	renderOptions() {
		return <div></div>
	}
	render() {
		if (this.state.currentView === 'main') {
			return this.renderMain();
		} 
		else if (this.state.currentView === 'chat') {
			return this.renderChat();
		}
		else if (this.state.currentView === 'options') {
			return this.renderOptions();
		}
	}
}


class ChatItem extends React.Component {
	constructor(props) {
		super(props)
		this.username = props.username
		this.timestamp = props.timestamp
		this.content = props.content
	}
	render() {
		return (
			<div>
				<div className='col-md-2'>
					{this.username}
				</div>
				<div className='col-md-8'>
					{this.content}
				</div>
				<div className='col-md-2'>
					{this.timestamp}
				</div>
			</div>
		)
	}
}


class HelpingUser extends React.Component {
	constructor(props) {
		super(props)
		this.username = props.username;
		this.helpAccepted = props.helpAccepted;
	}
	getButtonValue(helping) {
		return helping == 'true' ? 'Revoke' : 'Accept';
	}
	render() {
		return (
			<div className='col-md-12'> 
				<img className='col-md-1' src='images/yy.png'></img>
				<p className='col-md-1'>{this.props.karma}</p>
				<p className='col-md-4'>{this.username}</p>
				<button className='btn btn-black col-md-6'>{this.getButtonValue(this.helpAccepted)}</button>
			</div>
		)
	}
}