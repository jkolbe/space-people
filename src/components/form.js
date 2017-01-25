import React from 'react';

const Form = ({lat, log, submit, change}) => (
	<div className="location-form">
		<h2>Check when ISS will be passing by you!</h2>
		<form className="form-inline" onSubmit={submit}>
			<div className="form-group">
	    		<label htmlFor="lat">Latitude:</label>
	    		<input value={lat} onChange={change} name="userlatitude" type="number" step="0.0000001" className="form-control" id="lat"/>
	  		</div>
	  		<div className="form-group">
	    		<label htmlFor="log">Longitude:</label>
	    		<input value={log} onChange={change} name="userlongitude" type="number" step="0.0000001" className="form-control" id="log"/>
	  		</div>
	  		<div className="form-group">
	  			<button type="submit" value="submit" className="btn btn-success">Submit</button>
	  		</div>
		</form>
	</div>
);

export default Form;