import React from 'react';
import {addPostAC, updatePostAC} from '../../../../reducers/profile-reducer.js';
import NewPost from './new-post.jsx';
import StoreContext from '../../../../context.js';


const NewPostContainer = () => {


	return (
		<StoreContext.Consumer> 
			{ (store) => {
					const addPostLocal = () => {		
						store.dispatch(addPostAC());		
					};
				
					const handlerNewPost = (value) => {
						store.dispatch(updatePostAC(value));
					};

				return <NewPost profilePageState={store.getState().profilePage}
				 addPostLocal = {addPostLocal} 
				 handlerNewPost = {handlerNewPost}/>;
				}
			}
			
		</StoreContext.Consumer>
	)
}

export default NewPostContainer;