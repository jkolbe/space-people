import React, { Component } from 'react';
import $ from 'jquery';

export default class LocationContainer extends Component {

	constructor() {
		super();
		this.state = {
			latitude: "",
			longitude: "",
			timestamp: 0	
		};
	}

	getDateFromTimestamp(timestamp) {
		let d = new Date(timestamp * 1000);
		return `Date: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}   Time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} UTC`;
	}

	componentDidMount() {
		$.get('//api.open-notify.org/iss-now.json').then(
			(res) => {
				this.setState({
					latitude: res.iss_position.latitude,
					longitude: res.iss_position.longitude,
					timestamp: res.timestamp	
				});
			}
		);
	}

	render() {
		return (
			<div className="section">
				<div className="container">
	         		<div className="row">
	            		<div className="col-xs-12">
	            			<h2>International Space Station current location</h2>
	            			<p>{this.getDateFromTimestamp(this.state.timestamp)}</p>
	            			<br/>
	            			<p>Latitude: {this.state.latitude}</p>
	            			<p>Longitude: {this.state.longitude}</p>
	            			<br/>
	            			<a href={`https://www.google.ca/maps/place/${this.state.latitude},${this.state.longitude}`} className="btn btn-primary" role="button" target="_blank">Check on Google Maps</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}