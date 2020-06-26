import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from '../header/header.jsx';
import Nav from '../nav/nav.jsx';
import Profile from '../profile/profile.jsx';
import Messages from '../messages/messages.jsx';
import Music from '../music/music.jsx';
import News from '../news/news.jsx';
import Settings from '../settings/settings.jsx';

function App() {
  return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav />
				<div className="app-content-wrapper">
					<Route path='/profile' component={Profile}/>
					<Route path='/messages' component={Messages}/>
					<Route path='/music' component={Music}/>
					<Route path='/news' component={News}/>
					<Route path='/settings' component={Settings}/>
				</div>
			
			</div>
		</BrowserRouter>
  );
}

export default App;
