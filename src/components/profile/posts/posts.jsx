import React from 'react';
import Post from './post/post.jsx';
import NewPostContainer from './new-post/new-post-container.jsx';
import s from './posts.module.css';

function Posts(props) {


	return (
		<div className = {s.container}>
			<h2 className ={s.title}>My posts</h2>
			<NewPostContainer dispatch={props.store.dispatch} profilePageState={props.store.getState().profilePage}/>
			
			{props.store.getState().profilePage.users.map((user,i) => 
				<Post user={user} key={i} />
			)}			
							
		</div>
	)
}

export default Posts;