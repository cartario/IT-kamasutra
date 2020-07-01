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

export const messageReducer = (state, action) => {
  switch (action.type) {    
    case Constants.ADD_MESSAGE:
      const dataMes = {
        id: 0,
        message: state.newMessageText,
      };      
      state.dataMessages.push(dataMes);
      state.newMessageText = '';      
      return state;
    case Constants.UPDATE_MESSAGE:
      state.newMessageText = action.newText;     
      return state;
    default :
      return state;  
  }
}