import React, { Component } from 'react';
import $ from 'jquery';

import People from '../components/people-list';

export default class PeopleContainer extends Component {

	constructor() {
		super();
		this.state = {
			people: [],
			number: 0
		};
	}

	componentDidMount() {
		$.get('http://api.open-notify.org/astros.json').then(
			(res) => { this.setState({people:res.people, number:res.number}) }
		);
	}

	render() {
		return (
			<div className="section">
				<div className="container">
	         		<div className="row">
	            		<div className="col-xs-12">
	            			<h2>people container</h2>
	            			<People people={this.state.people} />

							{
							//	this.state.people.map((p, i) => (<div key={i}>{p.name} {p.craft}</div>))
							}
	            		</div>
	            	</div>
	            </div>
			</div>
		);
	}
}














