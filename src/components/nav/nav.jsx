import React from 'react';

const Nav = () => {
	return (
		<nav className="nav">
			<ul className = "nav-list">
				<li className = "item">
					<a href ="/profile" className = "item-link">Profile</a>
				</li>
				<li className = "item">
					<a href ="/messages" className = "item-link">Messages</a>
				</li>
				<li className = "item">
					<a href ="/music" className = "item-link">Music</a>
				</li>
				<li className = "item">
					<a href ="/news" className = "item-link">News</a>
				</li>
				<li className = "item">
					<a href ="/settings" className = "item-link">Settings</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;