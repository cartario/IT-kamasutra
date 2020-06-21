import React from 'react';
import s from './nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className = {s.list}>
				<li className = {s.item}>
					<a href ="/profile" className = {s.link}>Profile</a>
				</li>
				<li className = {s.item}>
					<a href ="/messages" className = {s.link}>Messages</a>
				</li>
				<li className = {s.item}>
					<a href ="/music" className = {s.link}>Music</a>
				</li>
				<li className = {s.item}>
					<a href ="/news" className = {s.link}>News</a>
				</li>
				<li className = {s.item}>
					<a href ="/settings" className = {s.link}>Settings</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;