import React from 'react';
import {addPostAC, updatePostAC} from '../../../../reducers/profile-reducer.js';
import NewPost from './new-post.jsx';


const NewPostContainer =(props)=> {
	const {profilePageState, dispatch} = props;

	const addPostLocal = () => {		
		dispatch(addPostAC());		
	}

	const handlerNewPost = (value) => {
		dispatch(updatePostAC(value));
	}

	return (
	<NewPost profilePageState={profilePageState} addPostLocal = {addPostLocal} handlerNewPost = {handlerNewPost}/>
	)
}

export default NewPostContainer;