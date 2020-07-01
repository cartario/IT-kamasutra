import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {clickFriendAC} from '../../reducers/sidebar-reducer.js';



const Sidebar = (props) => {
  const {friends, dispatch} = props; 

  const handlerClick = (e) => {
    const name = e.target.innerHTML
    if(e.target.tagName=='A'){      
      dispatch(clickFriendAC(name));
    }    
  }

  return (
    <section className={s.sidebar}>
      <h2 className={s.title}>Friends</h2>
      <ul className={s.list}>
        {friends.map((friend)=> <li onClick={handlerClick} key={friend.name}>
        <img className={s.avatar} src={`https://area-77.com/cliparts/sites/default/files/yellow-square-cliparts-143399-8182782.png`}/>
        <NavLink className={s.link} to='#'>{friend.name}</NavLink>
        </li>)}
      </ul>	
  </section>
  );
}

export default Sidebar;