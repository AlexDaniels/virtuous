class NewCallForHelpUI extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		datePickerSetup();
	}
	render() {
		return (
			<div className='col-md-12 content'>
				<h1 className='col-md-offset-4'>Ask Someone For Help</h1>
				<div className='container'>
					<div className='row'>
						<div className="form-group col-md-12">
							<label htmlFor="title">Title</label>
							<input type="text" className="form-control" id="title" />
						</div>
						<div className="form-group col-md-12">
							<label className='col-md-12' htmlFor="description">Description</label>
							 <textarea className="form-control col-md-12" rows="4" id="comment"></textarea>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="when">When</label>
							<input type="text" className="form-control" id="when" />
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="expire">Expiry Date</label>
							<input type="text" className="form-control" id="expire" />
						</div>
						<button className='btn btn-black col-md-6' id='submit'>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}