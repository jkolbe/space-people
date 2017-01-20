import React from 'react';

import Person from './person-item';

const PersonList = ({people}) => (
	<div>
		{console.log(people)}
		{people.map((p, index) => <Person key={index} name={p.name} craft={p.craft} /> )}
	</div>
);
export default PersonList;