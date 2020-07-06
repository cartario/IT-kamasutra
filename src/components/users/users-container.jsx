import React from 'react';
import { connect } from 'react-redux';
import Users from './users.jsx';
import {followAC, unfollowAC, setUsersAC} from '../../reducers/users-reducer.js';

const mapStateToProps = (state) => {
  return {
    usersPageState: state.usersPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFollow: (userId) => {dispatch(followAC(userId))
    },
    addUnfollow: (userId) => {dispatch(unfollowAC(userId))
    },
    setUsersAC: (users) => {dispatch(setUsersAC(users))}
  }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
