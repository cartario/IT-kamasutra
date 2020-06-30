import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./store.js";
import App from './components/app/App.jsx';

export const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {store.getState()}
      addPost={store.addPost.bind(store)} 
      updateNewPost={store.updateNewPost.bind(store)}
      addMessage={store.addMessage.bind(store)} 
      updateMessage={store.updateMessage.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

store.subscribe(renderEntireTree);
renderEntireTree();

serviceWorker.unregister();
