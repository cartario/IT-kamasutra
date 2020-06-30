import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./state.js";
import App from './components/app/App.jsx';

export const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

state.subscribe(renderEntireTree);
renderEntireTree();

serviceWorker.unregister();
