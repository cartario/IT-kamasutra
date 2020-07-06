const Constants = {
  ADD_POST: 'ADD_POST',
  UPDATE_POST: 'UPDATE_POST',
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
};

export const addMessageAC = () => {
	return {type: Constants.ADD_MESSAGE};
};

export const updateMessageAC = (newText) => {
  return {type: Constants.UPDATE_MESSAGE, newText: newText}
};

const initialState = {
  dataMessages : [
    {id: 1, message: `hey`},
    {id: 2, message: `yo`},
    {id: 3, message: `how are u`},
    {id: 4, message: `my name is`},
  ],
    dataUsers: [
      {name: `Vasil`,	id: 1, src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',}, 
      {name: `Masha`,	id: 2, src: 'https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false',}, 
      {name: `Dasha`,	id: 3, src: 'https://i.pinimg.com/originals/62/62/16/6262165c2ab45566f5f3cf244fa94853.jpg',}, 
      {name: `Sasha`,	id: 4, src: 'https://i02.fotocdn.net/s108/aacb1d92b4e78239/user_xl/2394143015.jpg',}
    ],

    newMessageText: '',
};

export const messageReducer = (state = initialState, action) => {
  
  switch (action.type) {    
    case Constants.ADD_MESSAGE:
      const dataMes = {
        id: 0,
        message: state.newMessageText,
      };   
      let stateCopy = {...state};
      stateCopy.dataMessages = [...state.dataMessages];

      stateCopy.dataMessages.push(dataMes);
      stateCopy.newMessageText = '';      
      return stateCopy;
    case Constants.UPDATE_MESSAGE:
      // let copyState = {...state};
      
      // copyState.newMessageText = action.newText;  
      
      return Object.assign({}, state, {newMessageText: action.newText});
    default :
      return state;  
  }
}