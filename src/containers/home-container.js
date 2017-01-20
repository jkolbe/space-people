import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeContainer extends Component {
	render() {
		return (
			<div className="section main">
				<div className="container">
	         		<div className="row">
	            		<div className="col-xs-12">
	            			<h1>Space People presents... </h1>
							<h2>How Many People Are In Space Right Now?</h2>
							<p>Find out the current number of people in space. Get their names and spacecraft they are on. Curious where the space people are at the moment? Check out the location page!</p>
						</div>
						<div className="col-xs-12 col-sm-6">
							<div className="tile">
								<Link to='/people'>People</Link>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6">
							<div className="tile">
								<Link to='/location'>Location</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}