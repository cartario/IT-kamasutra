export const clickFriendAC = (name) => {
  
  return {type: 'CLICK', checked: name};
}

const initialState = {
  friends: [
    {name: `Andrew`, checked: true, src: `https://www.ejin.ru/wp-content/uploads/2018/11/avatarki_dlya_devushek_4_19105932.jpg`},
    {name: `Sveta`, checked: true, src: `https://pbs.twimg.com/profile_images/378800000619398984/7bd4096c5e612dea658f2686d1bee6df.jpeg`},
    {name: `Vital`, checked: true, src: `https://demotivation.ru/wp-content/uploads/2020/05/1463056020_205639_1463060534_noticia_normal_recorte1-1.jpg`}, 
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