import React from 'react';
import s from './new-post.module.css';
import {addPostAC, updatePostAC} from '../../../../store.js';


const NewPost =(props)=> {

	const {profilePageState, dispatch, updateNewPost} = props;
	const inputRef = React.createRef();

	const addPostLocal = () => {		
		dispatch(addPostAC());		
	}

	const handlerNewPost = () => {
		dispatch(updatePostAC(inputRef.current.value));
	}

	return (
	<div>
		<p className = {s.title}></p>
		<div className = {s.container}>
			<textarea onChange = {handlerNewPost} className = {s.input_newPost} placeholder = 'Text something' ref={inputRef}	value={profilePageState.newPostMessage}		></textarea>
			<div>
				<button onClick={addPostLocal} className = {s.btn}>Send new post</button>
			</div>
		</div>
	</div>
	)
}

export default NewPost;