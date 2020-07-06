import React from 'react';
import NewPostContainer from './new-post/new-post-container.jsx';
import s from './posts.module.css';


function Posts() {
	return (
		<div className = {s.container}>
			<h2 className ={s.title}>My posts</h2>

			<NewPostContainer />	
							
		</div>
	)
}

export default Posts;