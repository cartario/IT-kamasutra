import React from 'react';
import Post from './post/post.jsx';
import NewPost from './new-post/new-post.jsx';
import s from './posts.module.css';

const users = [
	{
	src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',
	message: 'hey0', likes: 10},
	{
	src: 'https://image.pushauction.com/0/0/969ad60e-3302-471a-ab56-33db1d608fdd/224b8e7f-d3da-4555-a432-5f1cca7f7ac7.jpg',
	message: 'hey1', likes: 11}, 
	{
		src: 'https://i.pinimg.com/originals/62/62/16/6262165c2ab45566f5f3cf244fa94853.jpg',
	message: 'hey2', likes: 12}, 
	{
		src: 'https://i.pinimg.com/736x/fd/a1/6d/fda16d6e64cec1a1f6a78726cc7865ff.jpg',
	message: 'hey3', likes: 13}, 
	{
		src: 'https://avatars.mds.yandex.net/get-pdb/2034718/5456abaf-a394-4d69-8dc2-4dc824267f19/s1200?webp=false',
	message: 'hey4', likes: 14}, 
	{
		src: 'https://avatars.mds.yandex.net/get-pdb/1782023/fc67f638-3e8f-4a7a-a04d-22bcd97e7f52/s1200?webp=false',
	message: 'hey5', likes: 15}, 
	{
		src: 'https://i02.fotocdn.net/s108/aacb1d92b4e78239/user_xl/2394143015.jpg',
	message: 'hey6', likes: 16}, 
	{
		src: 'https://e-cdns-images.dzcdn.net/images/cover/7bc8cd87122a638c642e09152cc58c6b/1000x1000-000000-80-0-0.jpg',
	message: 'hey7', likes: 17}
]

function Posts(){
	
	return (
	<div className = {s.container}>
		<h2 className ={s.title}>My posts</h2>
		<NewPost />
		
		{users.map((user,i)=> 
			<Post user={user} key={i}/>
		)}			
						
	</div>
	)
}

export default Posts;