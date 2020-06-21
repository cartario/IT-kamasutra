import React from 'react';
import s from './post.module.css';

const Post = (props) => {
	const {user} = props;
	const {message, src} = user;
	return (
		<article className = {s.post}>
			<img className={s.postAvatar} src = {src} alt = {message}/>
					
			<p className = {s.message}>{message}</p>
		</article>
	);
}

export default Post;