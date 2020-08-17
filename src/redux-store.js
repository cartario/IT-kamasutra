import {createStore, combineReducers} from 'redux';
import {messageReducer} from './reducers/message-reducer.js';
import {profileReducer} from './reducers/profile-reducer.js';
import {sidebarReducer} from './reducers/sidebar-reducer.js';
import { usersReducer } from './reducers/users-reducer.js';
import {reducer as taskManagerReducer} from './reducers/task-manager-reducer.js';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  taskManagerPage: taskManagerReducer,
});


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

window.store = store;