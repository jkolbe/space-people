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
			(res) => {
				this.setState({people:res.people, number:res.number})
				console.log(this.state);
			}
		);
	}

	render() {
		return (
			<div>
				<h2>people container</h2>
				{this.state.people.map((p) => (<div>{p.name}</div>))}
			</div>
		);
	}
}