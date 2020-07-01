import React from 'react';
import s from './messages.module.css';
import DialogItem from './dialogItem/dialogItem.jsx';
import ChatItem from './chatItem/chatItem.jsx';
import {addMessageAC, updateMessageAC} from '../../store.js';

function Messages(props){
	const {messagesPageState, dispatch} = props;

	const inputRef = React.createRef();	

	const changeHandler = (e) => {
		dispatch(updateMessageAC(e.target.value));
	}

	const addMessageLocal = () => {		
		dispatch(addMessageAC());
	};

	return (		
		<div className={s.container}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.wrapper}>		
				<div className={s.item} >
				<h2 className={s.titleUsers}>Users</h2>
					<ul className={s.list}>
						{messagesPageState.dataUsers.map((user)=> <DialogItem src={user.src} name={user.name} id={user.id} key={user.name}/>)}						
					</ul>				
				</div>
				<div >
					<h2 className={s.titleChat}>Chat</h2>
					<ul className={s.listChat}>
						{messagesPageState.dataMessages.map((item, i)=> <ChatItem key={item.message + i} message={item.message}/>)}												
					</ul>

					<div className={s.newMessage}>
						<textarea onChange= {changeHandler} className={s.input_newMessage} placeholder='text message' ref={inputRef} value={messagesPageState.newMessageText}></textarea>
						<button onClick={addMessageLocal} className={s.btn}>NEW MESSAGE</button>
					</div>

				</div>
			</div>
		</div>	
	);
}

export default Messages;