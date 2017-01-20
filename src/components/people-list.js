import React from 'react';

import Person from './person-item';

const PersonList = ({people, selectFavorite}) => (
	<div className="craft-crew">
		
		{people.map((p, index) => <Person key={index} name={p.name} craft={p.craft} selectFavorite={selectFavorite} /> )}
	</div>
);
export default PersonList;