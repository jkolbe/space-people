import React, { Component } from 'react';
import $ from 'jquery';


import Crafts from '../components/craft-list';

export default class CraftContainer extends Component {

	constructor() {
		super();
		this.state = {
			uniqueCrafts: [],
			people: [],
			number: 0,
			favoriteSpacePerson: "Michael Collins",
		};	

		this.selectFavoriteSpacePerson = this.selectFavoriteSpacePerson.bind(this);	
	}

	getDistintCrafts(listOfCrafts, key) {
		return [...(new Set(listOfCrafts.map(item => item[key])))];
	}

	selectFavoriteSpacePerson(person) {
		this.setState({favoriteSpacePerson: person});
	}

	componentDidMount() {
		$.get('//api.open-notify.org/astros.json').then(
			(res) => { 
				this.setState({
					people:res.people, 
					number:res.number,
					uniqueCrafts: this.getDistintCrafts(res.people, 'craft')
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
	            			<h2>Currently there are {this.state.number} people in space:</h2>
	            			<Crafts crafts={this.state.uniqueCrafts} people={this.state.people} selectFavorite={this.selectFavoriteSpacePerson} />
	            		</div>
	            	</div>
	            	<div className="row">
	            		<div className="col-xs-12">
	            			<p>Select your favorite Space Person by clicking on one of the names above!</p>
	            			<h2><span className="glyphicon glyphicon-heart"></span> <span className="favorite">{this.state.favoriteSpacePerson}</span> <span className="glyphicon glyphicon-heart"></span> is the best Space Person EEEVVEERRR!!</h2>
	            		</div>
	            	</div>
	            </div>
			</div>
		);
	}
}














