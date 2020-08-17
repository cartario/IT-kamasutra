import {extend} from "../utils.js";

const ActionType = {
  ADD_TASK: 'ADD_TASK',
  
};

const initialState = {
	data:[
		{id:101, title: "text101",},
		{id:102, title: "text102",},
		{id:103, title: "text103",},
	],
	length: 1,
	success: true,
	error: "",
};

export const ActionCreator = {
  addTask: (text) => ({
      type: ActionType.ADD_TASK,
      payload: text,
    }),
};

export const reducer = (state = initialState, action) => {  
  switch (action.type) {    
    case ActionType.ADD_TASK:
      return extend(state, {id: 0, text: action.payload});       
      
    default :
      return state;  
  }
};
