const Constants = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_USERS: 'SET_USERS',
  CURRENT_PAGE: `CURRENT_PAGE`,
  SET_TOTAL_USERS: `SET_TOTAL_USERS`,
  IS_FETCHING: `IS_FETCHING`,
};

const initialState = {
  users: [
    {id: 1, status: 'HeyYo!', 
    photoUrl: 'https://avatars.mds.yandex.net/get-pdb/70729/160d145f-6eb0-498b-8716-22d731081e4a/s1200', followed: true, 
    userName: 'Sasha', 
    location: {country: 'Russia', cityName: 'Moscow'}}, 
  
  {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/368827/167cfc00-d9d5-4501-bb08-884488e51e27/s375', status: 'HeyYo! Iam Boss', followed: false, userName: 'Masha', location: {country: 'Ukraine', cityName: 'Kiev'}}, 
  
  {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/2978932/a6d66cac-6739-44a1-9a77-260c5a3c5bd1/s1200', status: 'HeyYo! Iam BossToo',followed: false, userName: 'Dasha', location: {country: 'Poland', cityName: 'Warszawa'}}, 
  {id: 4, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/2978932/a6d66cac-6739-44a1-9a77-260c5a3c5bd1/s1200', status: 'HeyYo! Iam BossToo',followed: true, userName: 'Tasha', location: {country: 'Poland', cityName: 'Warszawa'}}, 
  
  ],
  totalUsersCount: 0,
  pageSize: 3,
  currentPage: 1,
  isFetching: false,
}

export const followAC = (userId) => {  
  return {type: Constants.FOLLOW, payload: userId};
};

export const unfollowAC = (userId) => {  
  return {type: Constants.UNFOLLOW, payload: userId};
}

export const setUsersAC = (users) => {
  return {type: Constants.SET_USERS, payload: users};
};

export const setCurrentPageAC = (pageId) => {
  return {type: Constants.CURRENT_PAGE, payload: pageId};
};

export const setTotalUsersCountAC = (totalUsers) => {
  return {type: Constants.SET_TOTAL_USERS, payload: totalUsers};
};

export const setIsFetchingAC = (value) => {
  return {type: Constants.IS_FETCHING, payload: value};
};

const adapter = (data) => {  
  return data.map((user)=>({
    id: user.id + 10,
    status: user.email,
    photoUrl: user.avatar,
    userName: user.first_name,
    location: {country: user.last_name, cityName: 'City',}, 
    followed: false,
  }))  
};

 export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case Constants.FOLLOW:  {    
      const stateCopy = {...state, users: state.users.map((user)=>{
        if(user.id === action.payload) {
          return {...user, followed: false}
        }
        return user;
      })};
      return stateCopy;
    }

    case Constants.UNFOLLOW: {
      const stateCopy = {...state, users: state.users.map((user)=>{
        if(user.id === action.payload) {
          return {...user, followed: true}
        }
        return user;
      })}
      return stateCopy;
    }

    case Constants.SET_USERS:      
        return {...state, users: adapter(action.payload)};

    case Constants.CURRENT_PAGE:  
      return {...state, currentPage: action.payload};

    case Constants.SET_TOTAL_USERS:  
      return {...state, totalUsersCount: action.payload};

    case Constants.IS_FETCHING:  
      return {...state, isFetching: action.payload};

    default :
      return state;
  };  
};

