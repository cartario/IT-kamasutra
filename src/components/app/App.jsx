import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from '../header/header.jsx';
import Nav from '../nav/nav.jsx';
import Profile from '../profile/profile.jsx';
import MessagesContainer from '../messages/messages-container.jsx';
import Music from '../music/music.jsx';
import News from '../news/news.jsx';
import Settings from '../settings/settings.jsx';

function App(props) {
	

  return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav sidebar={props.store.getState().sidebar} dispatch = {props.store.dispatch}/>
				<div className="app-content-wrapper">
					<Route path='/profile' render={()=> <Profile store = {props.store}/>}/>
					<Route path='/messages' render={() => <MessagesContainer store = {props.store}/>}/>
					<Route path='/music' component={Music}/>
					<Route path='/news' component={News}/>
					<Route path='/settings' component={Settings}/>
				</div>
			
			</div>
		</BrowserRouter>
  );
}

export default App;
