import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
  
    axios
        .get(`https://reqres.in/api/users?page=${this.props.usersPageState.currentPage}&per_page=${this.props.usersPageState.pageSize}`)
        .then(response => {        
          this.props.setUsersAC(response.data.data);
          
          this.props.setTotalUsersCountAC(response.data.total);
        }
      )
  }

  onPageChanged(target){
    this.props.setCurrentPageAC(target)
      axios
      .get(`https://reqres.in/api/users?page=${target}&per_page=${this.props.usersPageState.pageSize}`)
      .then(response => {        
        this.props.setUsersAC(response.data.data);
      }
    )
  }

  
  render(){

    const {usersPageState, addFollow, addUnfollow, setCurrentPageAC} = this.props;
    const {users} = usersPageState;
    const totalFollowers = users.filter((user)=> user.followed === true).length;

    const totalUsersCount = this.props.usersPageState.totalUsersCount;
    const pageSize = this.props.usersPageState.pageSize;
    const currentPage = this.props.usersPageState.currentPage;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
 

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
   

    return (
      <div className={s.pagination}>
      <h2 className = {s.title}>Users</h2>
      <div>
        <p>Страница:</p>
        {pages.map((page, i) => {
          return (
          <span onClick={(e) => this.onPageChanged(Number(e.target.textContent))} 
          key={i} className = {`${s.pagination_item} ${currentPage === page ? s.pagination_item__active : ""}`}>{page}</span>
          )
        })}
        
      </div>

  <p>У тебя осталось: {totalFollowers} {totalFollowers < 2 ? 'подписчик': 'подписчика'}</p>



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
    );
  }
};

export default Users;