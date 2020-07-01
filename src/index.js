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
      dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

store.subscribe(renderEntireTree);
renderEntireTree();

serviceWorker.unregister();
