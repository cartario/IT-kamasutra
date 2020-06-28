import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';

export const renderEntireTree = (state, addPost, addMessage, updateMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost={addPost} addMessage={addMessage} updateMessage={updateMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 