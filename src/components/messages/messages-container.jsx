import React from 'react';
import {addMessageAC, updateMessageAC} from '../../reducers/message-reducer.js';
import Messages from './messages.jsx';

function MessagesContainer(props){
	
	const state = props.store.getState();
	
	const onChangeMessage = (value) => {
		props.store.dispatch(updateMessageAC(value));
	}

	const addMessageLocal = () => {		
		props.store.dispatch(addMessageAC());
	};
	
	return (		
		<Messages messagesPageState = {state.messagesPage} addMessageLocal = {addMessageLocal} onChangeMessage = {onChangeMessage}/>	
	);
}

export default MessagesContainer;