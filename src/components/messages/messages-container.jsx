import React from 'react';
import {addMessageAC, updateMessageAC} from '../../reducers/message-reducer.js';
import Messages from './messages.jsx';
import {connect} from 'react-redux';



const mapStateToProps = (state) => {	
	
	return {
		messagesPageState: state.messagesPage,
	}
};

const mapDispatchToProps = (dispatch) => {	
	
	return {
		addMessageLocal: () => {dispatch(addMessageAC())},
		onChangeMessage: (value) => {dispatch(updateMessageAC(value))},
	}
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;