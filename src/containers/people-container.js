import React, { Component } from 'react';
import $ from 'jquery';


import Crafts from '../components/craft-list';

export default class PeopleContainer extends Component {

	constructor() {
		super();
		this.state = {
			// people: [],
			// number: 0,
			// uniqueCrafts: []
			people: [{"craft": "ISS", "name": "Sergey Rizhikov"}, {"craft": "Some Other Craft", "name": "Joanna Kolbe"}, {"craft": "ISS", "name": "Andrey Borisenko"}, {"craft": "ISS", "name": "Shane Kimbrough"}, {"craft": "ISS", "name": "Oleg Novitskiy"}, {"craft": "ISS", "name": "Thomas Pesquet"}, {"craft": "ISS", "name": "Peggy Whitson"}], 
			uniqueCrafts: ["ISS", "Some Other Craft"]
		};		
	}

	getDistintCrafts(array, key) {
		return [...new Set(array.map(item => item[key]))];
	}

	componentDidMount() {
		$.get('http://api.open-notify.org/astros.json').then(
			(res) => { 
				// this.setState({
				// 	people:res.people, 
				// 	number:res.number,
				// 	uniqueCrafts: this.getDistintCrafts(res.people, 'craft')
				// });
			}
		);		
	}



	render() {
		return (
			<div className="section">
				<div className="container">
	         		<div className="row">
	            		<div className="col-xs-12">
	            			<h2>people container</h2>

	            			<Crafts crafts={this.state.uniqueCrafts} people={this.state.people} />

	            			{
	            				// this.state.uniqueCrafts.map((craft) => 
	            				// 		<div key={craft}>
		            			// 			<div >
		            			// 				{craft}
		            			// 				{console.log(this.state.people) }
		            			// 				<People key={'people'+craft} people={this.state.people.filter(p=>p.craft===craft)} />
		            			// 			</div>
		            						
		            			// 		</div>


	            				// 	)
	            			}
	            		</div>
	            	</div>
	            </div>
			</div>
		);
	}
}














