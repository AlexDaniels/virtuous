	class CallForHelpDetails extends React.Component {
	constructor(props) {
		super(props)
		this.state = {currentView:'main', currentCallForHelp:props.currentCallForHelp}; // Main : Chat : Options : finalize : delete
	}
	componentWillReceiveProps(e) {
		this.setState({currentCallForHelp:e.currentCallForHelp})
	}
	eachUser(results, i) {
		return (<HelpingUser key={i} username={results.username} helpAccepted={results.helpAccepted} karma={results.karma}/>)
	} 
	eachMessage(results,i) {
		return (<ChatItem key={i} username={results.username} timestamp={results.timestamp} content={results.content} />)
	}
	eachAcceptedUser(results, i) {
		if (results.helpAccepted === 'true') {
			return (
				<p key={i}>{results.username}</p>
			)
		}
	}
	setView(event) {
		if (event.target.id === 'backToMain') {
			this.setState({currentView:'main'});
		} else if (event.target.id === 'toChat') {
			this.setState({currentView:'chat'})
		} else if (event.target.id === 'toOptions' || event.target.id === 'backToOptions') {
			this.setState({currentView:'options'})
		} else if (event.target.id === 'toDelete') {
			this.setState({currentView:'delete'})
		} else if (event.target.id === 'toFinalize') {
			this.setState({currentView:'finalize'})
		}
	}
	renderMain() {
		return (
			<div>
				<div id='top-half-details'>
					<h1 className='col-md-12'>Title</h1>
					<p className='col-md-12'>{this.state.currentCallForHelp.description}</p>
					<p className='text-center col-md-12'>I need help: {this.state.currentCallForHelp.time}</p>
					<button id='toChat' onClick={this.setView.bind(this)} className='btn col-md-3 col-md-offset-3 btn-black'>Chat</button>
					<button id='toOptions' onClick={this.setView.bind(this)} className='btn col-md-3 col-md-offset-1 btn-black'>Options</button>
				</div>
				<div id='bottom-half-details'>
					{this.state.currentCallForHelp.helpingUsers.map(this.eachUser)}
				</div>
			</div>
		)
	}
	renderChat() {
		return (
			<div>
				<button id='backToMain' onClick={this.setView.bind(this)} className='btn btn-sm glyphicon glyphicon-chevron-left'></button>
				{this.state.currentCallForHelp.messages.map(this.eachMessage)}
			</div>
		)
	}
	renderOptions() {
		return (
			<div>
				<div id='top-half-details'>
					<h1 className='col-md-6'>Title</h1>
					<button id='backToMain' onClick={this.setView.bind(this)} className='btn btn-sm glyphicon glyphicon-chevron-left'></button>
					<button id='toFinalize' onClick={this.setView.bind(this)} className='col-md-6'>Finalize</button>
					<button id='toDelete' onClick={this.setView.bind(this)} className='col-md-6'>Delete</button>
					<p>Revoke any user that was not helpful before finalizing</p>	
				</div>
				<div id='bottom-half-details'>
					{this.state.currentCallForHelp.helpingUsers.map(this.eachUser)}
				</div>
			</div>
		)
	}
	renderDelete() {
		return (
			<div>
				<h1 className='col-md-6'>Title</h1>
				<button id='backToOptions' onClick={this.setView.bind(this)} className='btn btn-sm glyphicon glyphicon-chevron-left'></button>
				<p className='col-md-12'>Are you sure you want to delete this Call for Help?</p>
				<button id='backToMain' onClick={this.setView.bind(this)} className='btn col-md-12'>Delete</button>
			</div>
		)
	}
	renderFinalized() {
		return (
			<div>
				<h1 className='col-md-6'>Title</h1>
				<button id='backToOptions' onClick={this.setView.bind(this)} className='btn btn-sm glyphicon glyphicon-chevron-left'></button>
				<p className='col-md-12'>You are about to finalize your call for help</p>
				<p>Did this person help you?</p>
				{this.state.currentCallForHelp.helpingUsers.map(this.eachAcceptedUser)}
				<p>If not click back and click revoke before finalizing</p>
				<button id='backToMain' onClick={this.setView.bind(this)} className='btn col-md-12'>Finalize</button>
			</div>

		)
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
		else if (this.state.currentView === 'delete') {
			return this.renderDelete();
		} 
		else if (this.state.currentView === 'finalize') {
			return this.renderFinalized();
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