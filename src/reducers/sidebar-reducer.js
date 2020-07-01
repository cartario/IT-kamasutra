export const clickFriendAC = (name) => {
  
  return {type: 'CLICK', checked: name};
}

export const sidebarReducer = (state, action) => {

  switch (action.type) {
    case 'CLICK':
      let friend = state.friends.filter((friend) => friend.name === action.checked);
      friend[0].checked = action.checked;

      return state;
    default :
      return state;
  }  
  
};