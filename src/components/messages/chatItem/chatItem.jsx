import React from 'react';
import s from './chatItem.module.css';

const ChatItem = (props) => {
	return (
		<li className={s.item}>{props.message}</li>
	);
};

export default ChatItem;