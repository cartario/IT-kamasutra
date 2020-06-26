import React from 'react';

const ChatItem = (props) => {
	return (
		<li className='chatItem'>{props.message}</li>
	);
};

export default ChatItem;