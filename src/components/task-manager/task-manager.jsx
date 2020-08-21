import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import TaskList from './task-list.jsx';
import {Operation} from './task-manager-reducer.js';

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

TaskManager.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
	).isRequired, 
	loadTasks: PropTypes.func.isRequired,
	isErrorPost: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isDeleting: PropTypes.bool.isRequired,
};

export {TaskManager};
export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
