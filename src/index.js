import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux-store.js";
import App from './components/app/App.jsx';
import {Provider} from 'react-redux';
  
  ReactDOM.render(
    <React.StrictMode>      
        <Provider store = {store}>	
          <App store = {store}
          dispatch={store.dispatch.bind(store)} />
        </Provider>      
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.unregister();
