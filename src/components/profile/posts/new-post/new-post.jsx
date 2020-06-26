import React from 'react';
import s from './new-post.module.css';

const NewPost =()=> {
	return (
	<div>
		<p className = {s.title}></p>
		<div className = {s.container}>
			<textarea className = {s.input_newPost} placeholder = 'Text something'></textarea>
			<div>
				<button className = {s.btn}>Send new post</button>
			</div>
		</div>
	</div>
	)
}

export default NewPost;