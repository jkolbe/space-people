import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeContainer extends Component {
	render() {
		return (
			<div className="container">
         		<div className="row">
            		<div className="col-xs-12">
						<h2>home container</h2>

						<div>
							<Link to='/'>Home</Link>
							<Link to='/people'>People</Link>
							{this.props.children}
						</div>
					</div>
				</div>

			</div>
		);
	}
}