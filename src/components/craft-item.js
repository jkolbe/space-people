import React from 'react';

import People from './people-list';

const Craft = ({craft, people}) => (
	<div>
		{ craft }
		<People key={'people'+craft} people={people} />
	</div>
);
export default Craft;