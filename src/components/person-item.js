import React from 'react';

const PersonItem = ({name, craft, selectFavorite}) => (
	<div className='craft-crew-person'>
		{console.log(selectFavorite)}
		<span onClick={ () => selectFavorite(name) }><span className="glyphicon glyphicon-user"></span> {name}</span>
	</div>
);
export default PersonItem;