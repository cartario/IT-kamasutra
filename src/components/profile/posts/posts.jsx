import React from 'react';
import Post from './post/post.jsx';
import NewPost from './new-post/new-post.jsx';
import s from './posts.module.css';

function Posts(props) {
	const {profilePageState, dispatch} = props;

	return (
		<div className = {s.container}>
			<h2 className ={s.title}>My posts</h2>
			<NewPost dispatch={dispatch} profilePageState={profilePageState}/>
			
			{profilePageState.users.map((user,i) => 
				<Post user={user} key={i} />
			)}			
							
		</div>
	)
}

export default Posts;