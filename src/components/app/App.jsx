import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import './App.scss';
import Header from '../header/header.jsx';
import Nav from '../nav/nav.jsx';
import Profile from '../profile/profile.jsx';
import MessagesContainer from '../messages/messages-container.jsx';
import Music from '../music/music.jsx';
import News from '../news/news.jsx';
import UsersContainer from '../users/users-container.jsx';
import Settings from '../settings/settings.jsx';
import TaskManager from '../task-manager/components/task-manager.jsx';
import '../../sass/app.scss';


function App(props) {
	
  return (
		<HashRouter>
			<div className="app-wrapper">
				<Header />
				<Nav sidebar={props.store.getState().sidebar} dispatch = {props.store.dispatch}/>
				<div className="app-content-wrapper">
					<Route path='/profile' render={()=> <Profile store = {props.store}/>}/>
					<Route path='/messages' render={() => <MessagesContainer />}/>
					<Route path='/users' component={UsersContainer}/>
					<Route path='/music' component={Music}/>
					<Route path='/news' component={News}/>
					<Route path='/settings' component={Settings}/>
					<Route path='/taskmanager' component={TaskManager}/>
				</div>
			
			</div>
		</HashRouter>
  );
}

export default App;
