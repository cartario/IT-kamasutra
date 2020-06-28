import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './profile-info/profile-info.jsx';
import Posts from './posts/posts.jsx';

function Profile(props) {	
	const {profilePageState, addPost} = props;
	return (
			<section className={s.profile}>
				<div>
					<img className={s.profile_bg} src = "https://avatars.mds.yandex.net/get-pdb/1356247/63ee5ae6-2520-4006-9f10-cacb5f702ea8/s1200?webp=false" alt='profileBg'/>
				</div>
				<ProfileInfo {...profilePageState.profileInfo}/>
				<Posts users={profilePageState.users} addPost={addPost}/>			
			</section>
	);
}

export default Profile;