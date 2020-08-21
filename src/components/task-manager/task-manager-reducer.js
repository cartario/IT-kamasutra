import {extend} from "./utils.js";

const ActionType = {
  LOAD_TASKS: `LOAD_TASKS`,
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: `REMOVE_TASK`,  
  EDIT_TASK: `EDIT_TASK`,
  IS_DATA_READY: `IS_DATA_READY`,
  IS_ERROR_POST: `IS_ERROR_POST`,
  IS_ADDING_TASK: `IS_ADDING_TASK`,
  IS_DELETING_TASK: `IS_DELETING_TASK`,
};

const adapter = (data) => {
  if(!data){
    return [{
      id: 4,
      title: `Что-то пошло не так! Возможно сервер недоступен`
    }]
  } else {    
    
    return data;
  }  
};

const initialState = {
	data:[
		{id:1, title: "Устроиться на работу",},
		// {id:2, title: "Найти женщину своей мечты",},
		// {id:3, title: "Сьездить в Швейцарию",},
	],
	length: 1,
	success: true,
  error: "",
  isDataReady: false,
  isErrorPost: false,
  isAdding: false,
  isDeleting: false,
};

export const Operation = {
  loadTasks: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAddingTask(true));
    return api.get(`/list`)
    .then((response) => {      
      dispatch(ActionCreator.loadTasks(adapter(response.data.data)));
      dispatch(ActionCreator.setAddingTask(false));
    })
    .catch((err)=>{
      
      throw err;        
    });
  },

  postTask: (title) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAddingTask(true));
    return api.post(`/list`,{title: title})
      .then((res) => { 
        dispatch(ActionCreator.addTask(res.data.id, title));        
        dispatch(ActionCreator.setErrorPost(false));
        dispatch(ActionCreator.setAddingTask(false));
      })
      .catch((err)=> {
        dispatch(ActionCreator.setErrorPost(true));
        dispatch(ActionCreator.setAddingTask(false));
        throw err;
      })
  },

  deleteTask: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setDeletingTask(true));
    return api.delete(`/list/${id}`)
      .then((res) => {
        dispatch(ActionCreator.removeTask(id));
        dispatch(ActionCreator.setDeletingTask(false));
        dispatch(ActionCreator.setErrorPost(false));
      })
      .catch((err)=>{
        dispatch(ActionCreator.setDeletingTask(false));  
        dispatch(ActionCreator.setErrorPost(true));
        throw err;
      })
  },

  editTask: (id, title) => (dispatch, getState, api) => {  
    dispatch(ActionCreator.setAddingTask(true));  
    return api.post(`/list/${id}`, {title: title})
      .then((response) => {        
        dispatch(ActionCreator.editTask(id, title));
        dispatch(ActionCreator.setAddingTask(false));
        dispatch(ActionCreator.setErrorPost(false));
      })
      .catch((err)=>{        
        dispatch(ActionCreator.setAddingTask(false));  
        dispatch(ActionCreator.setErrorPost(true));
        throw err;
      })
  },
};

export const ActionCreator = {
  loadTasks: (tasks) => ({
    type: ActionType.LOAD_TASKS,
    payload: tasks,
  }),

  addTask: (id, title) => {
    return ({
      type: ActionType.ADD_TASK,
      payload: {
        id: id,
        title: title},
    })
  },

  removeTask: (id) => ({
    type: ActionType.REMOVE_TASK,
    payload: id,
  }),

  editTask: (id, title) => {    
    return ({
      type: ActionType.EDIT_TASK,
      payload: {
        id: id,
        title: title},
    })
  },

  isDataReady: (value) => ({
    type: ActionType.IS_DATA_READY,
    payload: value,
  }),

  setErrorPost: (value) => ({
    type: ActionType.IS_ERROR_POST,
    payload: value,
  }),

  setAddingTask: (value) => ({
    type: ActionType.IS_ADDING_TASK,
    payload: value,
  }),

  setDeletingTask: (value) => ({
    type: ActionType.IS_DELETING_TASK,
    payload: value,
  }),

};

export const reducer = (state = initialState, action) => {  
  switch (action.type) {    
    case ActionType.ADD_TASK:
      return extend(state, {data: [...state.data, action.payload]});
      
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
      const newData = [].concat(state.data.slice(0, index), action.payload, state.data.slice(index + 1));
        return extend(state, {data: newData});  
        
    case ActionType.IS_ERROR_POST:      
      return extend(state, {isErrorPost: action.payload});

    case ActionType.IS_ADDING_TASK:      
      return extend(state, {isAdding: action.payload});

    case ActionType.IS_DELETING_TASK:      
      return extend(state, {isDeleting: action.payload});
            
    default :
      return state;  
  }
};
