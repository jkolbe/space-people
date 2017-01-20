import React from 'react';

import Craft from './craft-item';

const Crafts = ({crafts, people, selectFavorite}) => (
	<div className="crafts">
		{crafts.map((c) => <Craft key={c} craft={c} people={people.filter(p=>p.craft===c)} selectFavorite={selectFavorite} />)}
	</div>
);
export default Crafts;