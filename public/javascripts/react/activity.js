class ActivityUI extends React.Component {
	constructor(props) {
		super(props)
		this.activities = [ {title:'Title',description:'description', id:'12390'},{title:'Title',description:'description', id:'12391'},
							{title:'Title',description:'description', id:'12393'},{title:'Title',description:'description', id:'12392'},
							{title:'Title',description:'description', id:'12394'},{title:'Title',description:'description', id:'12395'}];
		this.currentActivity = this.activities[0];
	}
	render() {
		return (
			<div className='col-md-12 content'>
				<div className='col-md-4' id='list'>
					<ActivityList activities={this.activities} />
				</div>
				<div className='col-md-8' id='details'>
					<ActivityDetails currentActivity={this.currentActivity}/>
				</div>
			</div>
		)
	}
}

class ActivityList extends React.Component {
	constructor(props) {
		super(props)
		this.activities = props.activities;
	}
	eachActivity(results, i) {
		return (
			<Activity key={i} title={results.title} description={results.description} />
		)
	}
	render() {
		return (
				<div>
					{this.activities.map(this.eachActivity)}
				</div>
		)
	}
}

class Activity extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='activity'>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

class ActivityDetails extends React.Component {
	constructor(props) {
		super(props)
		this.currentActivity = props.currentActivity;
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