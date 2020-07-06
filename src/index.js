import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import store from "./store.js";
import {store} from "./redux-store.js";
import App from './components/app/App.jsx';
import StoreContext from './context.js';
import {Provider} from 'react-redux';

export const renderEntireTree = () => {
  
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value = {store}>	
        <Provider store = {store}>	
          <App store = {store}
          dispatch={store.dispatch.bind(store)} />
        </Provider>
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 


renderEntireTree();
store.subscribe(()=>{

  renderEntireTree();
});

serviceWorker.unregister();
