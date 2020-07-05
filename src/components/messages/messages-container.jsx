import React from 'react';
import {addMessageAC, updateMessageAC} from '../../reducers/message-reducer.js';
import Messages from './messages.jsx';
import StoreContext from '../../context.js';

function MessagesContainer(){	
		
	return (
		<StoreContext.Consumer>
			{(store) =>	{
			const onChangeMessage = (value) => {
				store.dispatch(updateMessageAC(value));
			};

			const addMessageLocal = () => {		
				store.dispatch(addMessageAC());
			};
			return <Messages	messagesPageState = {store.getState().messagesPage} 
											addMessageLocal = {addMessageLocal} 
											onChangeMessage = {onChangeMessage}/>
				}			
			}
		</StoreContext.Consumer>
	)
}

export default MessagesContainer;