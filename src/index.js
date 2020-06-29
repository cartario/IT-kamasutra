import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, addMessage, updateMessage, updateNewPost, subscribe}  from "./state.js";
import App from './components/app/App.jsx';

export const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost={addPost} addMessage={addMessage} updateMessage={updateMessage} updateNewPost={updateNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

subscribe(renderEntireTree);
renderEntireTree();

serviceWorker.unregister();
