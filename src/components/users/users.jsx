import React from 'react';
import s from './users.module.css';

const Users = (props) => {
  const {usersPageState, addFollow, addUnfollow, setUsersAC} =  props;
  const {users} = usersPageState;
  const totalFollowers = users.filter((user)=> user.followed ===true).length;

  return (
    <div>
      <h2 className = {s.title}>Users</h2>
  <span>У тебя осталось: {totalFollowers} {totalFollowers < 2 ? 'подписчик': 'подписчика'}</span>
      <ul className = {s.list}>
    {users.map((user) => 

      
      <li className = {s.item} key={user.userName}>

        <img className = {s.photo} src={user.photoUrl} />
        <p> Name:   
          <span className = {s.blueTheme}>{user.userName}</span>
        </p>
        <p>Status:   
          <span className = {s.blueTheme}>{user.status}</span>
        </p>
        <p >Country:   
          <span className = {s.blueTheme}>{user.location.country}</span>
        </p>
        <p >City:   
          <span className = {s.blueTheme}>{user.location.cityName}</span>
        </p>
        <div>
          {user.followed 
            ? <button className = {`${s.btn } ${s.follow}`} onClick = {() => addFollow(user.id)}>Unfollow</button>
            : <button className = {`${s.btn } ${s.unfollow}`} onClick = {() => addUnfollow(user.id)}>Follow</button>}   
        </div>
      </li>
           
      )}
      </ul>
      
      
    </div>
  )
};

export default Users;