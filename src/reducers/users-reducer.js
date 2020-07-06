const Constants = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_USERS: 'SET_USERS',
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
  
  ]
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
        return {...state, users: [...state.users, ...action.payload]};
    default :
      return state;
  };  
};

