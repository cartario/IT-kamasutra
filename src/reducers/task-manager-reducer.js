import {extend} from "../utils.js";

const ActionType = {
  GET_TASKS: `GET_TASKS`,
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: `REMOVE_TASK`,
  
};

const initialState = {
	data:[
		{id:1, title: "text101",},
		{id:2, title: "text102",},
		{id:3, title: "text103",},
	],
	length: 1,
	success: true,
	error: "",
};

export const ActionCreator = {
  addTask: (id, text) => {

    return ({
      type: ActionType.ADD_TASK,
      payload: {
        id: id,
        text: text},
    })
  },

  removeTask: (id) => ({
    type: ActionType.REMOVE_TASK,
    payload: id,
  }),
};

export const reducer = (state = initialState, action) => {  
  switch (action.type) {    
    case ActionType.ADD_TASK:      
      const newTask = {id: action.payload.id, title: action.payload.text};

      return extend(state, {data: [...state.data, newTask]});
      
    case ActionType.REMOVE_TASK:      
      const tasks = state.data.filter((task) => task.id !== action.payload);
      return extend(state, {data: tasks});   
      
    default :
      return state;  
  }
};
