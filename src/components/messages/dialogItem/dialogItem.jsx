import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	const path = `/messages/`+props.id;
	return (
		<li className='DialogItem'>
			<NavLink to={path}>{props.name}</NavLink>
		</li>
	);	
};

export default DialogItem;
