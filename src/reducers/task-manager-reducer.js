import {extend} from "../utils.js";
import TaskList from "../components/task-manager/task-list.jsx";

const ActionType = {
  LOAD_TASKS: `LOAD_TASKS`,
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: `REMOVE_TASK`,  
  EDIT_TASK: `EDIT_TASK`,
  IS_DATA_READY: `IS_DATA_READY`,
};

const adapter = (data) => {
  if(data.length === 0){
    return [{
      id: 4,
      title: `Загрузить данные с сервера`
    }]
  } else {    
    return data;
  }  
};

const initialState = {
	data:[
		{id:1, title: "Устроиться на работу",},
		{id:2, title: "Найти женщину своей мечты",},
		{id:3, title: "Сьездить в Швейцарию",},
	],
	length: 1,
	success: true,
  error: "",
  isDataReady: false,
};

export const Operation = {
  loadTasks: () => (dispatch, getState, api) => {
    return api.get(`/list`)
    .then((response) => 
      dispatch(ActionCreator.loadTasks(adapter(response.data.data)))  
    )
    .catch((err)=>{
      throw err;        
    });
  },

  postTask: (title) => (dispatch, getState, api) => {
    return api.post(`/list`,{title: title})
      .then((res) => {
        return res;
      })
      .catch((err)=> {
        throw err;
      })
  },

  deleteTask: (id) => (dispatch, getState, api) => {
    return api.delete(`/list/${id}`)
      .then((res) => {
        return res;
      })
      .catch((err)=>{
        throw err;
      })
  },

  editTask: (id, title) => (dispatch, getState, api) => {
    
    return api.post(`/list/${id}`, {title: title})
      .then((response) => {  
        
      })
      .catch((err)=>{
        throw err;
      })
  },
};

export const ActionCreator = {
  loadTasks: (tasks) => ({
    type: ActionType.LOAD_TASKS,
    payload: tasks,
  }),

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

  editTask: (id, text) => {
    
    return ({
      type: ActionType.EDIT_TASK,
      payload: {
        id: id,
        text: text},
    })
  },

  isDataReady: (value) => ({
    type: ActionType.IS_DATA_READY,
    payload: value,
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

    case ActionType.LOAD_TASKS:
      return extend(state, {data: [...state.data, ...action.payload]});

    case ActionType.EDIT_TASK:
      
      const index = state.data.findIndex((task)=> task.id === action.payload.id);

      if (index === -1) {
        return false;
      }

      const newData = [].concat(state.data.slice(0, index), {id: action.payload.id, title: action.payload.text}, state.data.slice(index + 1));
      
      return extend(state, {data: newData});   
            
    default :
      return state;  
  }
};
