import React from 'react';
import s from './new-post.module.css';

const NewPost =(props)=> {
	const inputRef = React.createRef();

	const addPost = () => {
		
		const post = inputRef.current.value;
		props.addPost(post);
		inputRef.current.value=``;
	}

	return (
	<div>
		<p className = {s.title}></p>
		<div className = {s.container}>
			<textarea className = {s.input_newPost} placeholder = 'Text something' ref={inputRef}></textarea>
			<div>
				<button onClick={addPost} className = {s.btn}>Send new post</button>
			</div>
		</div>
	</div>
	)
}

export default NewPost;