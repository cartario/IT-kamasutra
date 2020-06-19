import React from 'react';
import './App.css';
import Header from '../header/header.jsx';
import Nav from '../nav/nav.jsx';
import Profile from '../profile/profile.jsx';

function App() {
  return (
    <div className="app-wrapper">
		<Header />
		<Nav />
		<Profile />
    </div>
  );
}

export default App;
