import React from 'react';
import s from './messages.module.css';
import DialogItem from './dialogItem/dialogItem.jsx';
import ChatItem from './chatItem/chatItem.jsx';

const dataUsers= [
	{name: `Vasil`,	id: 1}, 
	{name: `Masha`,	id: 2}, 
	{name: `Dasha`,	id: 3}, 
	{name: `Sasha`,	id: 4}
];

const dataMessages = [
	{id: 1, message: `hey`},
	{id: 2, message: `yo`},
	{id: 3, message: `how are u`},
	{id: 4, message: `my name is`},
];

function Messages(){
	return (		
		<div className={s.container}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.wrapper}>		
				<div className='dialogs'>
					<ul className='dialogItems'>
						{dataUsers.map((user)=> <DialogItem name={user.name} id={user.id} key={user.name}/>)}						
					</ul>				
				</div>
				<div className='chat'>Chat
					<ul className='chatItems'>
						{dataMessages.map((item)=> <ChatItem key={item.message} message={item.message}/>)}												
					</ul>
				</div>
			</div>
		</div>	
	);
}

export default Messages;