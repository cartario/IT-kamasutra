import React from 'react';
import s from './new-post.module.css';
import {addPostAC, updatePostAC} from '../../../../reducers/profile-reducer.js';
import Post from '../post/post.jsx';

const NewPost =(props)=> {

	const {profilePageState, addPostLocal, handlerNewPost} = props;
	const inputRef = React.createRef();

	const onPostChange = () => {
		const elem = inputRef.current.value;
		handlerNewPost(elem);
	}

	return (
	<div>
		<p className = {s.title}></p>
		<div className = {s.container}>
			<textarea onChange = {onPostChange} className = {s.input_newPost} placeholder = 'Text something' ref={inputRef}	value={profilePageState.newPostMessage}		></textarea>
			<div>
				<button onClick={addPostLocal} className = {s.btn}>Send new post</button>
			</div>
		</div>

		{profilePageState.users.map((user,i) => 
		<Post user={user} key={i} />
		)}
		
	</div>
	
	)
}

export default NewPost;