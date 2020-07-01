import {createStore, combineReducers} from 'redux';
import {messageReducer} from './reducers/message-reducer.js';
import {profileReducer} from './reducers/profile-reducer.js';
import {sidebarReducer} from './reducers/sidebar-reducer.js';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
});


export const store = createStore(reducers);

window.store = store;
window.q =  store.getState().sidebar.friends;