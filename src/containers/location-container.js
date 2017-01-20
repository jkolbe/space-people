import React, { Component } from 'react';
import $ from 'jquery';

export default class LocationContainer extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
		//https://www.google.ca/maps/place/41.40338, 2.17403.
	}

	render() {
		return (
			<div className="section">
				<div className="container">
	         		<div className="row">
	            		<div className="col-xs-12">
	            			<h2>Location container</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}