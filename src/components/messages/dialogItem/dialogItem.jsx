import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogItem.module.css';

const DialogItem = (props) => {
	const path = `/messages/`+props.id;
	return (
		<li className={s.item}>
			<img className={s.avatar} src = {props.src}	alt="avatar"/>				
			<NavLink className={s.link} to={path}>	
			{props.name}			
			</NavLink>
		</li>
	);	
};

export default DialogItem;
