import React from 'react';
import {connect} from 'react-redux';
import TaskList from './task-list.jsx';

const TaskManager = (props) => {
	const {tasks, isDataReady} = props;
	
	return (
		<TaskList tasks = {tasks} isDataReady = {isDataReady}/>
	);
};

const mapStateToProps = (state) => ({	
	isDataReady: state.taskManagerPage.isDataReady,
	tasks: state.taskManagerPage.data,
})

export {TaskManager};
export default connect(mapStateToProps)(TaskManager);
