import React from 'react';
import {connect} from 'react-redux';
import TaskList from './task-list.jsx';
import {Operation} from '../../reducers/task-manager-reducer.js';

const TaskManager = (props) => {
	const {tasks, loadTasks, isErrorPost, isAdding, isDeleting} = props;	
	
	return (	
		<TaskList 
		tasks = {tasks}		
		loadTasks = {loadTasks}	
		isErrorPost = {isErrorPost}
		isAdding = {isAdding}
		isDeleting = {isDeleting}
		/>		
	);
};

const mapStateToProps = (state) => ({	
	isErrorPost: state.taskManagerPage.isErrorPost,
	tasks: state.taskManagerPage.data,
	isAdding: state.taskManagerPage.isAdding,
	isDeleting: state.taskManagerPage.isDeleting,
});

const mapDispatchToProps = (dispatch) => ({
	loadTasks: () => {
		dispatch(Operation.loadTasks());
	},
});

export {TaskManager};
export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
