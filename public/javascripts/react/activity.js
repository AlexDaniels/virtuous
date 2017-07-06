class ActivityUI extends React.Component {
	constructor(props) {
		super(props)
		this.callsForHelp = callsForHelpData;
		this.state = {};
		this.state.currentCallForHelp = this.callsForHelp[0];
	}
	setCallForHelp(event) {
		let newCallForHelp = $.grep(this.callsForHelp, function(e){ return e.id == event.currentTarget.id; })[0];
		this.setState({currentCallForHelp:newCallForHelp})
	}
	render() {
		console.log(this.state.currentCallForHelp.description)
		return (
			<div className='col-md-12 content'>
				<div className='col-md-4' id='list'>
					<CallForHelpList callsForHelp={this.callsForHelp} setCallForHelp={this.setCallForHelp.bind(this)} />
				</div>
				<div className='col-md-8' id='details'>
					<CallForHelpDetails currentCallForHelp={this.state.currentCallForHelp}/>
				</div>
			</div>
		)
	}
}


//---------------Fake Data----------------------

var callsForHelpData = [
	{
		id: '12345',
		title: 'Title',
		description: 'Description fdsa fds aafsdfafsa fdsa fdasdfs asdfa asdfs asdadsaf afdsa Description fdsa fds aafsdfafsa fdsa fdasdfs asdfa asdfs asdadsaf afdsa Description fdsa fds aafsdfafsa fdsa fdasdfs asdfa asdfs asdadsaf afdsa Description fdsa fds aafsdfafsa fdsa fdasdfs asdfa asdfs asdadsaf afdsa Description fdsa fds aafsdfafsa fdsa fdasdfs asdfa asdfs asdadsaf afdsa ',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex111',helpAccepted:'true', karma:3},
			{username:'Alex2',helpAccepted:'false', karma:1},
			{username:'Alex3',helpAccepted:'false', karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	},
	{
		id: '12346',
		title: 'Title',
		description: 'Description',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex',helpAccepted:'true',karma:2},
			{username:'Alex2',helpAccepted:'false',karma:2},
			{username:'Alex3',helpAccepted:'false',karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	},
	{
		id: '12347',
		title: 'Title',
		description: 'Description',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex',helpAccepted:'true',karma:2},
			{username:'Alex2',helpAccepted:'false',karma:2},
			{username:'Alex3',helpAccepted:'false',karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	},
	{
		id: '12347',
		title: 'Title',
		description: 'Description',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex',helpAccepted:'true',karma:2},
			{username:'Alex2',helpAccepted:'false',karma:2},
			{username:'Alex3',helpAccepted:'false',karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	},
	{
		id: '12347',
		title: 'Title',
		description: 'Description',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex',helpAccepted:'true',karma:2},
			{username:'Alex2',helpAccepted:'false',karma:2},
			{username:'Alex3',helpAccepted:'false',karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	},
	{
		id: '12347',
		title: 'Title',
		description: 'Description',
		time: 'ASAP',
		expiryDate: '4/5/6',
		helpingUsers: [
			{username:'Alex',helpAccepted:'true',karma:2},
			{username:'Alex2',helpAccepted:'false',karma:2},
			{username:'Alex3',helpAccepted:'false',karma:2}
		],
		messages: [
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex2',timestamp:'4/5/6:12:32',content:'This is the message'},
			{username:'Alex',timestamp:'4/5/6:12:32',content:'This is the message'}
		]
	}
]