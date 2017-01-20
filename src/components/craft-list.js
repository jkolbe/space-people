import React from 'react';

import Craft from './craft-item';

const Crafts = ({crafts, people}) => (
	<div>
		{crafts.map((c) => <Craft key={c} craft={c} people={people.filter(p=>p.craft===c)}/>)}

		{/*people.map((p, index) => <Person key={index} name={p.name} craft={p.craft} /> )*/}
	</div>
);
export default Crafts;