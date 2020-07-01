export const clickFriendAC = (name) => {
  
  return {type: 'CLICK', checked: name};
}

const initialState = {
  friends: [
    {name: `Andrew`, checked: true},
    {name: `Sveta`, checked: true},
    {name: `Vital`, checked: true}, 
  ],  
};

export const sidebarReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CLICK':
      let friend = state.friends.filter((friend) => friend.name === action.checked);
      friend[0].checked = action.checked;

      return state;
    default :
      return state;
  }  
  
};