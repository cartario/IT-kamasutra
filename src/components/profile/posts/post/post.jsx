import React from 'react';
import s from './post.module.css';

const Post = (props) => {
	const {user} = props;
	const {message, src, likes} = user;
	return (
		<article className = {s.post}>
			<img className={s.postAvatar} src = {src} alt = {message}/>
					
			<p className = {s.message}>{message}</p>
			<p>Likes: {likes}</p>
		</article>
	);
}

export default Post;