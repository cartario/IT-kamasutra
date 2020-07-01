import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './nav.module.css';
import Sidebar from '../sidebar/sidebar.jsx';


const Nav = (props) => {

	const {sidebar, dispatch} = props;
	return (
		<nav className={s.nav}>
			<ul className = {s.list}>
				<li className = {s.item}>
					<NavLink to ="/profile" className = {s.link} activeClassName = {s.active}>Profile</NavLink>
				</li>
				<li className = {s.item}>
					<NavLink to ="/messages" className = {s.link} activeClassName = {s.active}>Messages</NavLink>
				</li>
				<li className = {s.item}>
					<NavLink to ="/music" className = {s.link} activeClassName = {s.active}>Music</NavLink>
				</li>
				<li className = {s.item}>
					<NavLink to ="/news" className = {s.link} activeClassName = {s.active}>News</NavLink>
				</li>
				<li className = {s.item}>
					<NavLink to ="/settings" className = {s.link} activeClassName = {s.active}>Settings</NavLink>
				</li>
			</ul>
			<Sidebar friends={sidebar.friends} dispatch={dispatch}/>			
		</nav>
	);
}

export default Nav;