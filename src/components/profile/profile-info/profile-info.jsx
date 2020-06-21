import React from 'react';
import s from './profile-info.module.css';

function ProfileInfo (props){
	
	const {date, city, edu, mail, username} = props;
	
	return (
		<div className={s.container_info}>
			<img className={s.profile_avatar} src="https://sun9-65.userapi.com/c854520/v854520291/9d3ae/nSlF5wWxr6c.jpg?ava=1" alt='profileAvatar'/>
			<div className = {s.description}>
				<h3 className= {s.name}>Name: {username}</h3>
				<p className={s.item_description}>Date of birth: {date}</p>
				<p className={s.item_description}>City: {city}</p>
				<p className={s.item_description}>Education: {edu}</p>
				<p className={s.item_description}>E-mail: {mail} </p>
			</div>
		</div>
	)
}

export default ProfileInfo;