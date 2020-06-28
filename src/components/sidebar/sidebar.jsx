import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {
  const {friends} = props;
  return (
    <section className={s.sidebar}>
      <h2 className={s.title}>Friends</h2>
      <ul className={s.list}>
        {friends.map((friend)=> <li key={friend}>
        <img className={s.avatar} src={`https://area-77.com/cliparts/sites/default/files/yellow-square-cliparts-143399-8182782.png`}/>
        <NavLink className={s.link} to='#'>{friend}</NavLink>
        </li>)}
      </ul>	
  </section>
  );
}

export default Sidebar;