const Constants = {
  ADD_POST: 'ADD_POST',
  UPDATE_POST: 'UPDATE_POST', 
};

export const addPostAC = () => {
  return {type: Constants.ADD_POST}
};

export const updatePostAC = (newText) => {
  return {type: Constants.UPDATE_POST, newText: newText}
};

export const profileReducer = (state, action) => {
  
  switch(action.type) {
    case Constants.ADD_POST:
        const user = {
          src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',
          message: state.newPostMessage,
          likes: 5,
        }
        state.users.push(user);
        state.newPostMessage = ``;        
        return state;
      case Constants.UPDATE_POST:
        state.newPostMessage = action.newText;        
        return state;
      default :
        return state;
  }
};