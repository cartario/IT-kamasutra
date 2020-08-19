import {createStore, combineReducers} from 'redux';
import {messageReducer} from './reducers/message-reducer.js';
import {profileReducer} from './reducers/profile-reducer.js';
import {sidebarReducer} from './reducers/sidebar-reducer.js';
import { usersReducer } from './reducers/users-reducer.js';
import {reducer as taskManagerReducer} from './reducers/task-manager-reducer.js';

import {compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import {createApi} from '../src/components/task-manager/api.js';

import {Operation} from '../src/reducers/task-manager-reducer.js';

const api = createApi();

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  taskManagerPage: taskManagerReducer,
});

export const store = createStore(
	reducers, compose(
			applyMiddleware(thunkMiddleware.withExtraArgument(api)),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
	)
);

store.dispatch(Operation.loadTasks());

// export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ 
//   ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

window.store = store;