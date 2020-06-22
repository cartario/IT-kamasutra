import React from 'react';
import './App.css';
import Header from '../header/header.jsx';
import Nav from '../nav/nav.jsx';
import Profile from '../profile/profile.jsx';
import Messages from '../messages/messages.jsx';

function App() {
  return (
    <div className="app-wrapper">
		<Header />
		<Nav />
		<div className="app-content-wrapper">
			
			<Messages />		
		</div>
		
    </div>
  );
}

export default App;
