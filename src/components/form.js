import React from 'react';

const Form = ({user, submit}) => (
	<div className="location-form">
		<h2>Check when ISS will be passing by you!</h2>
		<div className="form-inline">
			<div className="form-group">
	    		<label htmlFor="lat">Latitude:</label>
	    		<input defaultValue={user.latitude} type="number" step="0.0000001" className="form-control" id="lat" disabled/>
	  		</div>
	  		<div className="form-group">
	    		<label htmlFor="log">Longitude:</label>
	    		<input defaultValue={user.longitude} type="number" step="0.0000001" className="form-control" id="log" disabled/>
	  		</div>
	  		<div className="form-group">
	  			<button onClick={()=> submit(user)} type="submit" className="btn btn-success">Submit</button>
	  		</div>
		</div>
	</div>
);

export default Form;