import React from 'react';

import craftlogo from '../assets/images/craft.png';
import People from './people-list';

const Craft = ({craft, people, selectFavorite}) => (
	<div className="craf">
		<div className="craf-name">
			<img src={craftlogo} className="craft-logo img-responsive" alt={craft+ " logo"} />
			<span>{ craft }</span>
		</div>
		<People key={'people'+craft} people={people} selectFavorite={selectFavorite} />
	</div>
);
export default Craft;