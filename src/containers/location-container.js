import React, { Component } from 'react';
import $ from 'jquery';

import Form from '../components/form';

export default class LocationContainer extends Component {

	constructor() {
		super();
		this.state = {
			latitude: "",
			longitude: "",
			timestamp: 0,
			user: {
				latitude: 43.6691721,
				longitude: -79.3796620
			},
			passtimes: []	
		};
		this.getISSlocation = this.getISSlocation.bind(this);
	}

	getDateFromTimestamp(timestamp) {
		let d = new Date(timestamp * 1000);
		return `Date: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}   Time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} UTC`;
	}

	getISSlocation(p){
		$.get(`//api.open-notify.org/iss-pass.json?lat=${p.latitude}&lon=${p.longitude}`).then(
			(res) => {
				this.setState({passtimes:res.response});
			}
		);
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
					<div className="row">
						<div className="col-xs-12">
							<Form submit={this.getISSlocation} user={this.state.user}/>
							<ul className="passtimes">
								{this.state.passtimes.map((t,index) => <li key={index}>{this.getDateFromTimestamp(t.risetime)}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}