import { connect } from 'react-redux';
import Users from './users.jsx';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../reducers/users-reducer.js';

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
    setUsersAC: (users) => {dispatch(setUsersAC(users))},

    setCurrentPageAC: (pageId) => {dispatch(setCurrentPageAC(pageId))},

    setTotalUsersCountAC: (totalUsers) => {dispatch(setTotalUsersCountAC(totalUsers))}
  }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
